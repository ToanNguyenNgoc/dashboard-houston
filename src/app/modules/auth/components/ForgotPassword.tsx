import React, { useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { CustomSnack, LoadButton } from '@/components'
import './login-from.scss'
import { useForm } from 'react-hook-form'
import { usePost } from '@/hooks'
import { ForgotPassReq } from '@/api/interface'
import { api } from '@/api'
import { validate } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'


export function ForgotPassword() {
  const [step, setStep] = useState(1)
  const schema = Yup.object({
    email: Yup.string().required('Email is required')
      .matches(validate.email, { message: 'Email is not format' }),
    code: step === 1 ? Yup.string() :
      Yup.string().required('Code is required')
        .min(6, 'verification code consists of 6 characters')
        .max(6, 'verification code consists of 6 characters'),
    new_password: step === 1 ? Yup.string() :
      Yup.string().required('New password is required')
        .min(6, 'Password is more than 6 characters'),
    confirm_password: step === 1 ? Yup.string() :
      Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref("new_password"), null], 'Confirm password is invalid'),
  })
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      code: '',
      new_password: '',
      confirm_password: ''
    }
  })
  const { handle: handlePostEmail, result: resultPostEmail } = usePost()
  const { handle: handlePostForgot, result: resultPostForgot, onCloseNoti } = usePost()

  const onSubmit = (data: ForgotPassReq) => {
    if (step === 1) {
      handlePostEmail({
        handleFn: () => api.forgot({ email: data.email }),
        callback: () => setStep(2)
      })
    }
    if (step === 2) {
      handlePostForgot({
        handleFn: () => api.forgot({
          email: data.email,
          code: data.code,
          new_password: data.new_password
        }),
        callback: () => setTimeout(() => navigate(-1), 3000),
        messageSuccess: 'Change password success'
      })
    }
  }

  return (
    <>
      <CustomSnack
        open={resultPostForgot.open}
        message={resultPostForgot.message}
        onClose={onCloseNoti}
        severity={resultPostForgot.messageColor}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework forgot_form'
        id='kt_login_password_reset_form'
      >
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'>Forgot Password ?</h1>
          <div className='text-gray-400 fw-bold fs-4'>Enter your email to reset your password.</div>
        </div>
        <div className='fv-row mb-10'>
          <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
          <input
            type='email'
            placeholder=''
            autoComplete='off'
            className='form-control form-control-lg form-control-solid'
            {...register('email')}
          />
          {errors.email && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{errors.email.message}</span>
              </div>
            </div>
          )}
        </div>
        <div className={step === 2 ? "forgot_form-code_open" : "forgot_form-code"}>
          <div className='fv-row mb-10'>
            <label className='form-label fw-bolder text-gray-900 fs-6'>OTP</label>
            <input
              placeholder=''
              autoComplete='off'
              className='form-control form-control-lg form-control-solid'
              {...register('code')}
            />
            {
              errors.code &&
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{errors.code.message}</span>
                </div>
              </div>
            }
          </div>
          <div className='fv-row mb-10'>
            <label className='form-label fw-bolder text-gray-900 fs-6'>New password</label>
            <input
              placeholder=''
              autoComplete='off'
              className='form-control form-control-lg form-control-solid'
              {...register('new_password')}
            />
            {
              errors.new_password &&
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{errors.new_password.message}</span>
                </div>
              </div>
            }
          </div>
          <div className='fv-row mb-10'>
            <label className='form-label fw-bolder text-gray-900 fs-6'>Confirm password</label>
            <input
              placeholder=''
              autoComplete='off'
              className='form-control form-control-lg form-control-solid'
              {...register('confirm_password')}
            />
            {
              errors.confirm_password &&
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{errors.confirm_password.message}</span>
                </div>
              </div>
            }
          </div>
        </div>
        <div className='pb-lg-0 forgot_form-bot'>
          <LoadButton
            load={resultPostEmail.load || resultPostForgot.load}
            title='Submit'
            size='large'
            type='submit'
          />
          <LoadButton
            title='Cancel'
            size='large'
            type='button'
            variant='text'
            color='inherit'
            onClick={step === 1 ? () => navigate(-1) : () => setStep(1)}
          />
        </div>
      </form>
    </>
  )
}

