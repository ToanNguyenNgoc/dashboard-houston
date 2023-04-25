import { AppContext, AppContextType } from "@/context/AppProvider";
import { PageTitle } from "@/_metronic/layout/core";
import { ChangeEvent, useContext, useRef, useState } from "react";
import './account-style.scss'
import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useQuery } from "react-query";
import { api } from "@/api";
import { useForm } from "react-hook-form";
import { AddressSelect, CustomSnack, FullAddressType, LoadButton, PlaceIcon } from "@/components";
import { usePost, usePostMedia } from "@/hooks";
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import MapGL, { NavigationControl, MapRef, Marker } from 'react-map-gl'

const schema = Yup.object({
  name: Yup.string().required('Branch name is required !'),
  address: Yup.string().required('Branch address is required !')
})

interface Coord { lng: any, lat: any }

function AccountBranch() {
  const { handlePostMedia } = usePostMedia()
  const { handle, result, onCloseNoti } = usePost()
  const { branch: branchContext, setBranch: setBranchContext } = useContext(AppContext) as AppContextType
  const [fullAddress, setFullAddress] = useState<FullAddressType>({
    province: null, district: null, ward: null
  })
  const mapRef = useRef<MapRef>(null)
  const { setValue, getValues, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      address: '',
      description: ''
    }
  })
  const [coord, setCoord] = useState<Coord>({
    lng: 106.6923778,
    lat: 10.7967141
  })
  const { data, refetch, isFetching } = useQuery({
    queryKey: [branchContext?.id],
    queryFn: () => api.branchById(branchContext.id),
    enabled: branchContext ? true : false,
    refetchOnWindowFocus: false,
    onSuccess(data) {
      setBranchContext(data?.data)
      setValue('name', data?.data?.name)
      setValue('address', data?.data?.address)
      setValue('description', data?.data?.description)
      if (data?.data?.latitude && data?.data?.longitude) {
        setCoord({ lat: data?.data?.latitude, lng: data?.data?.longitude })
      }
      setFullAddress({
        province: data?.data?.province?.code,
        district: data?.data?.district?.code,
        ward: data?.data?.ward?.code
      })
    },
  })
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    handlePostMedia({
      e: e,
      callBack: async (data) => {
        await api.putBranch(branchContext.id, { media_id: data[0]?.mediaId })
        refetch()
      },
    })
  }

  const submit = async (data: any) => {
    if (fullAddress.district && fullAddress.province && fullAddress.ward) {
      handle({
        handleFn: () => api.putBranch(branchContext.id, {
          ...data,
          ...coord,
          province_code: fullAddress.province,
          district_code: fullAddress.district,
          ward_code: fullAddress.ward
        }),
        callback: () => refetch(),
        messageSuccess: 'Update branch success'
      })
    }
  }
  const onGetCoord = async () => {
    if (fullAddress.province && fullAddress.district && fullAddress.ward) {
      const resProvince = await api.provinces()
      const provinceName = resProvince?.data?.find((i: any) => i.code === fullAddress.province)?.name
      const resDistrict = await api.districts(fullAddress.province)
      const districtName = resDistrict?.data?.find((i: any) => i.code === fullAddress.district)?.name
      const resWard = await api.wards(fullAddress.district)
      const wardName = resWard?.data?.find((i: any) => i.code === fullAddress.ward)?.name
      const full = `${getValues('address')},${wardName},${districtName},${provinceName}`
      const mapRes = await api.mapPlaces({
        search: full, search_type: 'address'
      })
      console.log(mapRes?.data[0]?.center)
      mapRef?.current?.flyTo({
        center: mapRes?.data[0]?.center.reverse(),
      });
      setCoord({
        lng: mapRes?.data[0]?.center[0],
        lat: mapRes?.data[0]?.center[1]
      })
    }
  }

  return (
    <>
      <PageTitle>{branchContext?.name}</PageTitle>
      <CustomSnack
        open={result.open}
        onClose={onCloseNoti}
        message={result.message}
        severity={result.messageColor}
      />
      <div className="card">
        <div className="branch_container">
          <div className='card mb-5 mb-xl-10'>
            <div
              className='card-header border-0 cursor-pointer'
              role='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_account_profile_details'
              aria-expanded='true'
              aria-controls='kt_account_profile_details'
            >
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Branch Detail</h3>
              </div>
            </div>

            <div id='kt_account_profile_details' className='collapse show'>
              <form
                onSubmit={handleSubmit(submit)}
                noValidate className='form'>
                <div className='card-body border-top p-9'>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>Branch logo</label>
                    <div className='col-lg-8'>
                      <div
                        className='image-input image-input-outline'
                        data-kt-image-input='true'
                      >
                        <div
                          className='image-input-wrapper w-125px h-125px'
                          style={{ backgroundImage: `url(${data?.data?.image?.original_url})` }}
                        >

                        </div>
                        <IconButton size="large" color="primary" aria-label="upload picture" component="label">
                          <input
                            onChange={onChangeFile}
                            hidden accept="image/*" type="file" />
                          <PhotoCamera />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Branch name</label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Branch name'
                        {...register('name')}
                      />
                      {errors.name && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{errors.name.message}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <AddressSelect
                    fullAddress={fullAddress}
                    setFullAddress={setFullAddress}
                  />
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Address</label>
                    <div className='col-lg-8 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Address'
                        {...register('address')}
                      />
                      {errors.address && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{errors.address.message}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span>Description</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='tel'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Description'
                        {...register('description')}
                      />
                    </div>
                  </div>
                  <div className="branch_form_map">
                    {
                      !isFetching &&
                      <MapGL
                        style={{ width: "100%", height: "calc(100% - 82px)" }}
                        initialViewState={{
                          latitude: coord.lat,
                          longitude: coord.lng,
                          zoom: 16,
                        }}
                        ref={mapRef}
                        attributionControl={true}
                        mapboxAccessToken={import.meta.env.VITE_REACT_APP_MAPBOX_TOKEN}
                        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                        onClick={(e) => setCoord({
                          lng: e.lngLat.lng,
                          lat: e.lngLat.lat
                        })}
                      >
                        <NavigationControl
                          position="bottom-right"
                          showZoom={true}
                          showCompass={true}
                        />
                        <Marker
                          latitude={coord.lat}
                          longitude={coord.lng}
                        >
                          <PlaceIcon fontSize="large" color="error" />
                        </Marker>
                      </MapGL>
                    }
                    <div className="branch_form_map_ctrl">
                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label fw-bold fs-6'>
                          <span>Coordinates</span>
                        </label>

                        <div className='col-lg-8 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Latitude'
                            value={coord.lat}
                            onChange={(e) => setCoord({ ...coord, lat: e.target.value })}
                          />
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Longitude'
                            value={coord.lng}
                            onChange={(e) => setCoord({ ...coord, lng: e.target.value })}
                          />
                          <LoadButton
                            title="Get coordinates"
                            onClick={onGetCoord}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer d-flex justify-content-end py-6 px-9'>
                  <LoadButton
                    style={{ marginRight: '12px' }}
                    title='Save'
                    color="success"
                    size="large"
                    type="submit"
                    load={result.load}
                  />
                  <LoadButton
                    title='Restore'
                    color="inherit"
                    onClick={refetch}
                    size="large"
                    type="button"
                    load={isFetching}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountBranch;