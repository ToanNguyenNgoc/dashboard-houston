import { ChangeEvent } from 'react'
import { CustomSwitch, LoadButton, PermissionTable } from "@/components";
import { PageTitle } from "@/_metronic/layout/core";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import './role-form.scss'
import { useState } from "react";
import { useQuery } from "react-query";
import { api } from "@/api";
import { CustomSnack } from '@/components'
import { usePost } from '@/hooks';

function RoleForm() {
  const param = useParams()
  const id: any = param.id
  const { handle, result, onCloseNoti } = usePost()
  const { register, formState, handleSubmit, setValue } = useForm()
  const [permissions, setPermissions] = useState<number[]>([])
  const [status, setStatus] = useState(true)
  const { data: role, isFetching, refetch } = useQuery({
    queryKey: ['ROLE_ID', id],
    queryFn: () => api.roleById(id),
    enabled: id ? true : false,
    refetchOnWindowFocus: false,
    onSuccess(data) {
      setValue("title", data.data?.title)
      setValue("description", data.data?.description)
      setValue("status", data.data?.status)
      setStatus(data.data?.status)
      setPermissions(data.data?.permissions?.map((item: any) => item.id))
    },
  })
  const onChangeRoleStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.checked)
  }
  const onSubmit = async (data: any) => {
    const body = {
      ...data,
      permissions: permissions,
      status: status
    }
    if (role?.data) {
      await handle({
        handleFn:() => api.putRole(id, body),
        messageSuccess:`Update role ${role?.data?.title} success`
      })
    } else {
      await handle({
        handleFn:() => api.postRole(body),
        messageSuccess:"Create role success"
      })
    }
  }

  return (
    <>
      <PageTitle>{id ? `Thay đổi quyền ${role?.data?.title}` : 'Tạo quyền'}</PageTitle>
      <CustomSnack
        onClose={onCloseNoti}
        open={result.open}
        message={result.message}
        severity={result.messageColor}
      />
      <div className={`card `}>
        <div className="role-form-cnt">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form_head">
              <LoadButton
                title="Save"
                size="large"
                color="success"
                type="submit"
                load={result.load}
              />
              <LoadButton
                title="Restore"
                size="large"
                variant="outlined"
                color="inherit"
                type="button"
                onClick={refetch}
                style={{marginLeft:"8px"}}
                load={isFetching}
              />
            </div>
            <div className="form_body">
              <div className="form-row">
                <label className="form-label required">Name</label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  className="form-control form-control-solid"
                />
              </div>
              <div className="form-row">
                <label className="form-label required">Description</label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  className="form-control form-control-solid"
                />
              </div>
              <div className="form-row">
                <label className="form-label required">Status</label>
                <CustomSwitch checked={status} onChange={onChangeRoleStatus} />
              </div>
            </div>
          </form>
        </div>
        <div className='card-body py-3'>
          <PermissionTable
            permissions={permissions}
            setPermissions={setPermissions}
          />
        </div>
      </div>
    </>
  );
}
export default RoleForm