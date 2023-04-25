import { PageTitle } from '@/_metronic/layout/core';
import { BranchSelect, CheckCircleIcon, CustomSnack, CustomSwitch, LoadButton, RoleSelect } from '@/components'
import { useForm } from 'react-hook-form'
import './account-form.scss'
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { api } from '@/api';
import { pickBy, identity } from 'lodash'
import { usePost } from '@/hooks';
import { useRolesStore } from '@/store/zustand';
import { AppContext, AppContextType } from '@/context/AppProvider';


function AccountForm() {
  const params = useParams()
  const { branch } = useContext(AppContext) as AppContextType
  const [isSPA] = useRolesStore((state: any) => [state.isSPA])
  const id: any = params.id
  const [display, setDisplay] = useState({ fullname: '', full_address: '', status: true, sex: true })
  const [roles, setRoles] = useState<number[]>([])
  const [branchId, setBranchId] = useState<number>(branch?.id)
  const { register, handleSubmit, setValue } = useForm()

  const { handle, result, onCloseNoti } = usePost()
  const { data: account, refetch } = useQuery({
    queryKey: ['FORM_ACCOUNT', id],
    queryFn: () => api.accountById(id),
    enabled: id ? true : false,
    refetchOnWindowFocus: false,
    onSuccess(data) {
      const account = data.data
      setDisplay({
        fullname: account?.fullname,
        full_address: account?.full_address,
        status: account?.status,
        sex: account?.sex,
      }),
        setRoles(account?.roles?.map((item: any) => item.id)),
        setBranchId(account?.branch?.id),
        setValue("fullname", account?.fullname),
        setValue("telephone", account?.telephone),
        setValue("email", account?.email),
        setValue("password", account?.password),
        setValue("description", account?.description),
        setValue("full_address", account?.full_address),
        setValue("ccid", account.ccid)
    },
  })
  let mode = "POST"
  if (id && account?.data) { mode = "PUT" }
  const onSubmit = async (data: any) => {
    if (roles.length > 0) {
      if (mode === "POST") {
        await handle({
          handleFn: () => api.postAccount({ ...data, sex: display.sex, roles: roles, branch_id: branchId }),
          messageSuccess: 'Create account success !'
        })
      }
      if (mode === "PUT") {
        const body = {
          ...data,
          telephone: data.telephone !== account?.data?.telephone ? data.telephone : null,
          roles: roles,
          branch_id: branchId
        }
        await handle({
          handleFn: () => api.putAccount(
            id, { ...pickBy(body, identity), sex: display.sex, status: display.status }
          ),
          messageSuccess: "Update account success !"
        })
      }
    }
  }
  return (
    <>
      <PageTitle>Create new account</PageTitle>
      <CustomSnack
        open={result.open}
        onClose={onCloseNoti}
        message={result.message}
        severity={result.messageColor}
      />
      <div className="card card_cnt">
        <div className="account_head">
          <div className="account_head-avatar">
            <div className="avatar_cnt">
              <img src={account?.data?.media?.original_url ?? ''} alt="" />
              {
                display.status &&
                <div className="avatar_cnt-act">
                  <CheckCircleIcon color="success" />
                </div>
              }
            </div>
          </div>
          <div className="account_head-info">
            <p className="acc_fullname">{display.fullname}</p>
            <p className="acc_address">{display.full_address}</p>
          </div>
        </div>
        <div className="account_form">
          <span className="title">Information</span>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form_body">
              <div className="form_row">
                <div className="form_column">
                  <label className="form-label required">Fullname</label>
                  <input
                    type="text"
                    {...register("fullname", { required: true })}
                    onChange={(e) => setDisplay({ ...display, fullname: e.target.value })}
                    className="form-control form-control-solid"
                  />
                </div>
                <div className="form_column">
                  <label className="form-label required">Telephone</label>
                  <input
                    type="text"
                    {...register('telephone', { required: true })}
                    className="form-control form-control-solid"
                  />
                </div>
              </div>
              <div className="form_row">
                <div className="form_column">
                  <label className="form-label required">CCID</label>
                  <input
                    type="text"
                    {...register('ccid', { required: true })}
                    className="form-control form-control-solid"
                  />
                </div>
              </div>
              <div className="form_row">
                <div className="form_column form_column_status">
                  <label className="form-label required">Email</label>
                  <input
                    {...register('email', { required: true })}
                    type="text"
                    disabled={id}
                    className="form-control form-control-solid"
                  />
                </div>
                <div className="form_column form_column_control">
                  <div className="item">
                    <label className="form-label required">Status</label>
                    <CustomSwitch
                      checked={display.status}
                      onChange={(e) => setDisplay({ ...display, status: e.target.checked })}
                    />
                  </div>
                  <div className="item">
                    <label className="form-label required">Sex</label>
                    <CustomSwitch
                      checked={display.sex}
                      onChange={(e) => setDisplay({ ...display, sex: e.target.checked })}
                    />
                  </div>
                </div>
              </div>
              {
                !account &&
                <div className="form_row">
                  <div className="form_column">
                    <label className="form-label required">Password</label>
                    <input
                      {...register('password', { required: true })}
                      type="text"
                      className="form-control form-control-solid"
                    />
                  </div>
                  <div className="form_column">
                    <label className="form-label required">Confirm password</label>
                    <input
                      type="text"
                      className="form-control form-control-solid"
                    />
                  </div>
                </div>
              }
              <div className="form_row">
                <div className="form_column_1">
                  <label className="form-label required">Description</label>
                  <input
                    {...register('description')}
                    type="text"
                    className="form-control form-control-solid"
                  />
                </div>
              </div>
              <div className="form_row">
                <div className="form_column_1">
                  <label className="form-label required">Full address</label>
                  <input
                    type="text"
                    className="form-control form-control-solid"
                    {...register('full_address', { required: true })}
                    onChange={(e) => setDisplay({ ...display, full_address: e.target.value })}
                  />
                </div>
              </div>
              <div className="form_row">
                <div className="form_column">
                  <label className="form-label required">Roles</label>
                  <RoleSelect
                    value={roles}
                    setValue={setRoles}
                  />
                </div>
                <div className="form_column form_column_branch">
                  <label className="form-label required">Branch</label>
                  <BranchSelect
                    branchId={branchId}
                    setBranchId={setBranchId}
                  />
                  {!isSPA && <div className="form_column_branch_dis"></div>}
                </div>
              </div>
            </div>
            <div className="form_bottom">
              <div className="form_bottom_btn">
                <LoadButton
                  size="large"
                  title='Save'
                  color="success"
                  type="submit"
                  load={result.load}
                />
              </div>
              <div className="form_bottom_btn">
                <LoadButton
                  size="large"
                  title='Restore'
                  color="inherit"
                  variant="outlined"
                  type="submit"
                  onClick={refetch}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountForm;