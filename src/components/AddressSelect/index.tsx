import { api } from "@/api";
import { useQuery } from "react-query";
import './address-select.scss'
import { LoadButton } from "../LoadButton";
import { useRef, useState } from "react";
import { useFilterKeyword } from "@/hooks";

export interface FullAddressType {
  province?: number | string | null,
  district?: number | string | null,
  ward?: number | string | null,
}

interface AddressSelectProps {
  fullAddress?: FullAddressType,
  setFullAddress?: React.Dispatch<React.SetStateAction<FullAddressType>>
}

export function AddressSelect(props: AddressSelectProps) {
  const { fullAddress, setFullAddress } = props
  const [key, setKeyword] = useState('')
  const refProvince = useRef<HTMLDivElement>(null)
  const refDistrict = useRef<HTMLDivElement>(null)
  const refWard = useRef<HTMLDivElement>(null)
  const { data: provinces } = useQuery({
    queryKey: ['PROVINCES'],
    queryFn: () => api.provinces(),
    refetchOnWindowFocus: false
  })
  const { data: districts } = useQuery({
    queryKey: ['DISTRICT', fullAddress?.province],
    queryFn: () => api.districts(fullAddress?.province ?? 0),
    enabled: fullAddress?.province ? true : false,
    refetchOnWindowFocus: false
  })
  const { data: wards } = useQuery({
    queryKey: ['WARD', fullAddress?.district],
    queryFn: () => api.wards(fullAddress?.district ?? 0),
    enabled: fullAddress?.district ? true : false,
    refetchOnWindowFocus: false
  })
  const listSearch = useFilterKeyword(key, provinces?.data)
  const onChangeProvince = (code: any) => {
    if (setFullAddress) {
      setFullAddress({
        province: code,
        district: fullAddress?.province !== code ? null : fullAddress?.district,
        ward: fullAddress?.province !== code ? null : fullAddress?.ward
      })
    }
    refProvince.current?.classList.remove('province_select_act')
  }
  const onChangeDistrict = (code: any) => {
    if (setFullAddress) {
      setFullAddress({
        ...fullAddress,
        district: code,
        ward: fullAddress?.district !== code ? null : fullAddress?.ward
      })
    }
    refDistrict.current?.classList.remove('district_select_act')
  }
  const onChangeWard = (code: any) => {
    if (setFullAddress) {
      setFullAddress({ ...fullAddress, ward: code })
    }
    refWard.current?.classList.remove('ward_select_act')
  }
  window.addEventListener('click', () => {
    refProvince.current?.classList.remove('province_select_act')
    refDistrict.current?.classList.remove('district_select_act')
    refWard.current?.classList.remove('ward_select_act')
  })
  return (
    <>
      <div className='row mb-6'>
        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Province</label>

        <div
          onClick={(e) => {
            e.stopPropagation(),
              refProvince.current?.classList.toggle('province_select_act')
            refDistrict.current?.classList.remove('district_select_act')
          }}
          className='col-lg-8 fv-row province_cnt'
        >
          <input
            disabled
            type='text'
            className='form-control form-control-lg form-control-solid'
            placeholder='Province'
            value={listSearch?.find(i => i.code === fullAddress?.province)?.name ?? '<--Choose province-->'}
          />
          <div
            onClick={(e) => e.stopPropagation()}
            ref={refProvince} className="province_select"
          >
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              placeholder='Search...'
              onChange={(e) => setKeyword(e.target.value)}
            />
            <div className="province_list">
              <ul className="list">
                {
                  listSearch?.map((item: any, index: number) => (
                    <li key={index} className="list_item">
                      <LoadButton
                        onClick={() => onChangeProvince(item.code)}
                        title={item.name}
                        variant="text"
                        color="inherit"
                        style={fullAddress?.province === item.code ? {backgroundColor:'var(--kt-gray-200)'}:{}}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-6'>
        <label className='col-lg-4 col-form-label fw-bold fs-6'>
          <span className='required'>District</span>
        </label>

        <div
          onClick={(e) => {
            e.stopPropagation(),
              refDistrict.current?.classList.toggle('district_select_act')
            refWard.current?.classList.remove('ward_select_act')
          }}
          className='col-lg-8 fv-row province_cnt'
        >
          <input
            disabled
            type='tel'
            className='form-control form-control-lg form-control-solid'
            placeholder='District'
            value={districts?.data?.find((i: any) => i.code === fullAddress?.district)?.name ?? '<--Choose district-->'}
          />
          <div
            onClick={(e) => e.stopPropagation()}
            ref={refDistrict} className="province_select"
          >
            <div style={{ height: '100%' }} className="province_list">
              <ul className="list">
                {
                  districts?.data?.map((item: any, index: number) => (
                    <li key={index} className="list_item">
                      <LoadButton
                        onClick={() => onChangeDistrict(item.code)}
                        title={item.name}
                        variant="text"
                        color="inherit"
                        style={fullAddress?.district === item.code ? {backgroundColor:'var(--kt-gray-200)'}:{}}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-6'>
        <label className='col-lg-4 col-form-label fw-bold fs-6'>
          <span className='required'>Ward</span>
        </label>

        <div
          onClick={(e) => {
            e.stopPropagation(),
              refWard.current?.classList.toggle('ward_select_act')
          }}
          className='col-lg-8 fv-row province_cnt'
        >
          <input
            disabled
            type='text'
            className='form-control form-control-lg form-control-solid'
            placeholder='Ward'
            value={wards?.data?.find((i: any) => i.code === fullAddress?.ward)?.name ?? '<--Choose ward-->'}
          />
          <div
            onClick={(e) => e.stopPropagation()}
            ref={refWard} className="province_select"
          >
            <div style={{ height: '100%' }} className="province_list">
              <ul className="list">
                {
                  wards?.data?.map((item: any, index: number) => (
                    <li key={index} className="list_item">
                      <LoadButton
                        onClick={() => onChangeWard(item.code)}
                        title={item.name}
                        variant="text"
                        color="inherit"
                        style={fullAddress?.ward === item.code ? {backgroundColor:'var(--kt-gray-200)'}:{}}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}