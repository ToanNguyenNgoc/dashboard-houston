import { PageTitle } from "@/_metronic/layout/core"
import { FoodCateQr, api } from "@/api"
import { CustomSwitch, DeleteIcon, EditIcon, LoadButton } from "@/components"
import { AppContext, AppContextType } from "@/context/AppProvider"
import { IconButton } from "@mui/material"
import moment from "moment"
import { ChangeEvent, useContext, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { FoodCateForm } from "./food-cate.form"
import { FoodCate } from "@/interface"
import { usePost } from "@/hooks"

function FoodCatePage() {
  const { branch } = useContext(AppContext) as AppContextType
  const query: FoodCateQr = {
    branch_id: branch?.id
  }
  const { data } = useQuery({
    queryKey: ['FOOD_CATE', query],
    queryFn: () => api.foodCates(query)
  })
  const foodCates = data?.data ?? []
  return (
    <>
      <PageTitle>Food category</PageTitle>
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
                  <th className='ps-4 min-w-200px rounded-start'>Category name</th>
                  <th className='min-w-80px'>Status</th>
                  <th className='min-w-200px'>Description</th>
                  <th className='min-w-150px'>Created at</th>
                  <th className='min-w-150px'>Updated at</th>
                  <th className='min-w-100px'></th>
                </tr>
              </thead>
              <tbody>
                {
                  foodCates.map(cate => (
                    <CateItem key={cate.id} cate={cate} />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default FoodCatePage
const CreateCate = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <LoadButton
        title="Create new category"
        variant="contained"
        onClick={() => setOpen(true)}
      />
      <FoodCateForm
        open={open} setOpen={setOpen}
      />
    </>
  )
}
const CateItem = ({ cate }: { cate: FoodCate }) => {
  const [open, setOpen] = useState(false)
  const { handle } = usePost()
  const [status, setStatus] = useState(cate.status)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handle({
      handleFn: () => api.putFoodCate(cate.id, { status: e.target.checked }),
    })
    setStatus(e.target.checked)
  }

  return (
    <>
      <FoodCateForm
        open={open} setOpen={setOpen} id={cate.id}
      />
      <tr key={cate.id}>
        <td>
          <div className='d-flex align-items-center'>
            <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
              {cate.name}
            </span>
          </div>
        </td>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            <CustomSwitch onChange={onChange} checked={status} />
          </span>
        </td>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            {cate.description}
          </span>
        </td>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            {moment(cate.updated_at).format('DD/MM/YYYY HH:mm')}
          </span>
        </td>
        <td>
          <span className='text-muted fw-semobold text-muted d-block fs-7'>
            {moment(cate.updated_at).format('DD/MM/YYYY HH:mm')}
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
            // disabled={isLoading}
            size="small"
            style={{ backgroundColor: 'var(--kt-gray-200)', marginLeft: '8px' }}
          // onClick={() => mutate()}
          >
            <DeleteIcon color="error" />
            {/* {isLoading ? <SyncIcon color="error" /> : <DeleteIcon color="error" />} */}
          </IconButton>
        </td>
      </tr>
    </>
  )
}