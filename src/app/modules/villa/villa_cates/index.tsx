import { PageTitle } from "@/_metronic/layout/core";
import { api } from "@/api";
import { CustomSwitch, DeleteIcon, EditIcon, LoadButton, SyncIcon } from "@/components";
import { AppContext, AppContextType } from "@/context/AppProvider";
import { useRolesStore } from "@/store/zustand";
import { Avatar, IconButton } from "@mui/material";
import dayjs from "dayjs";
import { ChangeEvent, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import VillaCateForm from "./VillaCateForm";
import { usePost } from "@/hooks";


function VillaCate() {
  const { branch } = useContext(AppContext) as AppContextType
  const [isSPA] = useRolesStore((state: any) => [state.isSPA])
  let branch_id: any
  if (!isSPA) branch_id = branch?.id
  const { data } = useQuery({
    queryKey: ['VILLA_CATE', branch.id],
    queryFn: () => api.villaCates({ branch_id: branch_id }),
    refetchOnWindowFocus: false
  })
  return (
    <>
      <PageTitle>Villa category</PageTitle>
      <div className={`card card-account card-villa-cate`}>
        <div className='card-header border-0 pt-5'>
          <div className='card-toolbar'>
            <CreateCate />
          </div>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='min-w-100px'>Icon</th>
                  <th className='ps-4 min-w-200px rounded-start'>Category name</th>
                  {isSPA && <th className='ps-4 min-w-200px rounded-start'>Branch name</th>}
                  <th className='min-w-80px'>Status</th>
                  <th className='min-w-200px'>Description</th>
                  <th className='min-w-150px'>Created at</th>
                  <th className='min-w-150px'>Updated at</th>
                  <th className='min-w-100px'></th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.data?.map((item: any, index: number) => (
                    <CateItem item={item} key={index} />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default VillaCate;

const CreateCate = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <LoadButton
        title="Create new category"
        variant="contained"
        onClick={() => setOpen(true)}
      />
      <VillaCateForm
        open={open} setOpen={setOpen}
      />
    </>
  )
}
const CateItem = ({ item }: any) => {
  const { branch } = useContext(AppContext) as AppContextType
  const queryClient = useQueryClient()
  const [isSPA] = useRolesStore((state: any) => [state.isSPA])
  const [open, setOpen] = useState(false)
  const { handle } = usePost()
  const [status, setStatus] = useState(item.status)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handle({
      handleFn: () => api.putVillaCate(item.id, { status: e.target.checked })
    })
    setStatus(e.target.checked)
  }
  const { isLoading, mutate } = useMutation({
    mutationKey: ['DELETE_CATE', item.id],
    mutationFn: () => api.deleteVillaCate(item.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['VILLA_CATE', branch.id] })
    }
  })
  return (
    <>
      <tr>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            <Avatar
              alt="" src={item.villa_cate_image?.original_url ?? ''}
            />
          </span>
        </td>
        <td>
          <div className='d-flex align-items-center'>
            <div className='d-flex justify-content-start flex-column'>
              <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                {item.villa_cate_name}
              </span>
            </div>
          </div>
        </td>
        {
          isSPA &&
          <td>
            <div className='d-flex align-items-center'>
              <div className='d-flex justify-content-start flex-column'>
                <span className='text-dark fw-bold  mb-1 fs-6'>
                  {item.branch?.name}
                </span>
              </div>
            </div>
          </td>
        }
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            <CustomSwitch onChange={onChange} checked={status} />
          </span>
        </td>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            {item.description}
          </span>
        </td>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            {dayjs(item.created_at).format('DD/MM/YYYY HH:mm')}
          </span>
        </td>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            {dayjs(item.updated_at).format('DD/MM/YYYY HH:mm')}
          </span>
        </td>
        <td>
          <IconButton
            size="small"
            style={{ backgroundColor: 'var(--kt-gray-200)' }}
            onClick={() => setOpen(true)}
          >
            <EditIcon color="success" />
          </IconButton>
          <IconButton
            disabled={isLoading}
            size="small"
            style={{ backgroundColor: 'var(--kt-gray-200)', marginLeft: '8px' }}
            onClick={() => mutate()}
          >
            {isLoading ? <SyncIcon color="error" /> : <DeleteIcon color="error" />}
          </IconButton>
        </td>
      </tr>
      <VillaCateForm
        open={open}
        setOpen={setOpen}
        id={item.id}
      />
    </>
  )
}