import { Dialog } from "@mui/material"
import { Dispatch } from "react"
import "./food_cates.scss"
import { LoadingButton } from "@mui/lab"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { api } from "@/api"

interface FoodCateFormProps {
  open: boolean,
  setOpen: Dispatch<React.SetStateAction<boolean>>
  id?: number,
}

export const FoodCateForm = ({ open, setOpen, id }: FoodCateFormProps) => {
  const { handleSubmit, register, reset, setValue } = useForm({
    defaultValues: {
      name: '',
      description: '',
      status: true
    }
  })
  const { } = useQuery({
    queryKey: ['FOOD_CATE', id],
    queryFn: () => api.foodCate(id ?? 0),
    enabled: (open && id) ? true : false,
    onSuccess: (data) => {
      setValue('name', data.data.name),
        setValue('description', data.data.description ?? '')
    }
  })
  return (
    <Dialog open={open} onClose={() => setOpen(false)} >
      <div className="food-cate-form">
        <div className="title">
          {id ? 'Create new category' : 'Update category'}
        </div>
        <form action="">
          <div className="form_column">
            <label className="form-label required">Category name</label>
            <input
              type="text"
              className="form-control form-control-solid"
              {...register('name', { required: true })}
            />
          </div>
          <div className="form_column">
            <label className="form-label required">Description</label>
            <textarea
              className="form-control form-control-solid"
              {...register('description', { required: true })}
            />
          </div>
          <div className="bottom">
            <LoadingButton variant='contained'>
              Restore
            </LoadingButton>
            <LoadingButton variant='contained' style={{ backgroundColor: 'var(--bs-green)' }}>
              Save
            </LoadingButton>
          </div>
        </form>
      </div>
    </Dialog>
  )
}