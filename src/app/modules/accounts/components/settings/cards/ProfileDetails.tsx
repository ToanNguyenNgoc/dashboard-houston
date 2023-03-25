import React, { ChangeEvent } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { CustomSnack, CustomSwitch, LoadButton } from '@/components'
import { Profile } from '@/interface'
import { usePost } from '@/hooks'
import { api } from '@/api'
import { identity, pickBy } from 'lodash'
import { useProfileStore } from '@/store/zustand'
import { StoreProfile } from '@/store/zustand/models'
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import '../../../account-style.scss'

interface Props {
  profile: Profile
}

const profileDetailsSchema = Yup.object().shape({
  fullname: Yup.string().required('Full name is required'),
  telephone: Yup.string().required('Telephone is required'),
})

const ProfileDetails = (props: Props) => {
  const { profile } = props
  const [onUpdateProfile] = useProfileStore((state: StoreProfile) => [state.onUpdateProfile])
  const { handle, result, onCloseNoti } = usePost()
  const formik = useFormik({
    initialValues: {
      email: profile.email,
      fullname: profile.fullname,
      telephone: profile.telephone,
      description: profile.description,
      full_address: profile.full_address,
      sex: profile.sex

    },
    validationSchema: profileDetailsSchema,
    onSubmit: async (values) => {
      const body = {
        ...values,
        telephone: profile.telephone !== formik.getFieldProps('telephone').value ? values.telephone : null
      }
      await handle({
        handleFn: () => api.putProfile(
          { ...pickBy(body, identity), sex: values.sex }
        ),
        messageSuccess: 'Update profile success',
        messageColor: 'success',
        callback: () => onUpdateProfile({ ...pickBy(body, identity), sex: values.sex })
      })
    },
  })
  const onChangSex = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('sex', e.target.checked)
  }
  return (
    <>
      <CustomSnack
        open={result.open}
        onClose={onCloseNoti}
        message={result.message}
        severity={result.messageColor}
      />
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
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>
        </div>

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={formik.handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
                <div className='col-lg-8'>
                  <div
                    className='image-input image-input-outline'
                    data-kt-image-input='true'
                    style={{ backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})` }}
                  >
                    <div
                      className='image-input-wrapper w-125px h-125px'
                      style={{ backgroundImage: `url(${profile.media?.original_url})` }}
                    ></div>
                     <IconButton size="large" color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                  </div>
                </div>
              </div>

              {/* <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('lName')}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lName}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div> */}
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Email</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    disabled
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Email'
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.email}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Full name'
                    {...formik.getFieldProps('fullname')}
                  />
                  {formik.touched.fullname && formik.errors.fullname && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.fullname}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Contact Phone</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='tel'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Phone number'
                    {...formik.getFieldProps('telephone')}
                  />
                  {formik.touched.telephone && formik.errors.telephone && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.telephone}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Description</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='tel'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Description'
                    {...formik.getFieldProps('description')}
                  />
                  {formik.touched.description && formik.errors.description && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.description}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Full address</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='tel'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Full address'
                    {...formik.getFieldProps('full_address')}
                  />
                  {formik.touched.full_address && formik.errors.full_address && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.full_address}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Sex</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <CustomSwitch
                    checked={formik.getFieldProps('sex').value}
                    onChange={onChangSex}
                  />
                  {formik.touched.sex && formik.errors.sex && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.sex}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='card-footer d-flex justify-content-end py-6 px-9'>
              <LoadButton
                title='Save changes'
                color="success"
                size="large"
                type="submit"
                load={result.load}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { ProfileDetails }
