import { Dialog } from "@mui/material"
import { Dispatch } from "react"
import "./food_cates.scss"
import { LoadingButton } from "@mui/lab"
import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { FoodCateQr, FoodCateReq, api } from "@/api"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

interface FoodCateFormProps {
  open: boolean,
  setOpen: Dispatch<React.SetStateAction<boolean>>
  id?: number,
  query?: FoodCateQr
}
const schema = Yup.object({
  name: Yup.string().required('Food category name is required')
})

export const FoodCateForm = ({ open, setOpen, id, query }: FoodCateFormProps) => {
  const queryClient = useQueryClient()
  const { handleSubmit, register, reset, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      description: '',
      // status: true
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
  const { mutate, isLoading } = useMutation({
    mutationKey: '',
    mutationFn: (body: FoodCateReq) => id ? api.putFoodCate(id ?? 0, body) : api.postFoodCate(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['FOOD_CATE', query] })
      setOpen(false)
      reset()
    }
  })
  const onSubmit = (value: any) => mutate(value)
  return (
    <Dialog open={open} onClose={() => setOpen(false)} >
      <div className="food-cate-form">
        <div className="title">
          {id ? 'Create new category' : 'Update category'}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
            <LoadingButton type="button" variant='contained'>
              Restore
            </LoadingButton>
            <LoadingButton
              loading={isLoading}
              type="submit"
              variant='contained'
              style={{ backgroundColor: 'var(--bs-green)' }}
            >
              Save
            </LoadingButton>
          </div>
        </form>
      </div>
    </Dialog>
  )
}