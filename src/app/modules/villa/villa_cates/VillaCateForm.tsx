import { Dialog, IconButton } from "@mui/material";
import { Dispatch, useContext, useState } from "react";
import './villa-cate.scss'
import { AddAPhotoIcon, BranchSelect, CropImage, LoadButton } from "@/components";
import { useRolesStore } from "@/store/zustand";
import { AppContext, AppContextType } from "@/context/AppProvider";
import { useForm } from "react-hook-form";
import { api } from "@/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface VillaCateFormProps {
  open: boolean,
  setOpen: Dispatch<React.SetStateAction<boolean>>
  id?: number,
}

interface Image {
  media_id: number | null,
  original_url: string | null
}

function VillaCateForm(props: VillaCateFormProps) {
  const queryClient = useQueryClient()
  const [isSPA] = useRolesStore((state: any) => [state.isSPA])
  const { open, setOpen, id } = props
  const { branch: branchCtx } = useContext(AppContext) as AppContextType
  const [branchId, setBranchId] = useState(branchCtx.id)
  const [image, setImage] = useState<Image>({ media_id: null, original_url: null })
  const { handleSubmit, register, reset, setValue } = useForm({
    defaultValues: {
      villa_cate_name: '',
      description: ''
    }
  })
  let method = 'post'
  if (id) method = 'put'
  const { data: category } = useQuery({
    queryKey: ['CATEGORY', id],
    queryFn: () => api.villaCateById(id ?? 0),
    enabled: (id && open) ? true : false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setValue('villa_cate_name', data?.data?.villa_cate_name)
      setValue('description', data?.data?.description)
      setImage({
        media_id: data?.data?.villa_cate_image?.media_id,
        original_url: data?.data?.villa_cate_image?.original_url,
      })
    }
  })
  const { mutate, isLoading } = useMutation({
    mutationKey: '',
    mutationFn: (data: any) => method === 'post' ? api.postVillaCate(data) : api.putVillaCate(id ?? 0, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['VILLA_CATE', branchCtx.id] })
      setOpen(false)
      reset()
    }
  })
  const onSubmit = async (data: any) => {
    mutate({ ...data, branch_id: branchId, media_id: image.media_id })
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="villa_cate_form">
        <div className="form_cnt-header">
          {method === 'post' ? 'Create new category' : 'Update Category'}
        </div>
        <div className="form_cnt-body">
          <div className="body_img_cnt">
            <img src={image?.original_url || ''} alt="" />
            <div className="change_img">
              <CategoryImage setImage={setImage} image={image} />
            </div>
          </div>
          <div className="body_desc_cnt">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {
                  isSPA &&
                  <div className="form_column">
                    <label className="form-label required">Branch</label>
                    <BranchSelect />
                  </div>
                }
                <div className="form_column">
                  <label className="form-label required">Category name</label>
                  <input
                    type="text"
                    className="form-control form-control-solid"
                    {...register('villa_cate_name', { required: true })}
                  />
                </div>
                <div className="form_column">
                  <label className="form-label required">Description</label>
                  <input
                    type="text"
                    className="form-control form-control-solid"
                    {...register('description', { required: true })}
                  />
                </div>
              </div>
              <div className="form_bottom">
                <LoadButton
                  title="Cancel"
                  color="error"
                  variant="text"
                  onClick={() => setOpen(false)}
                />
                <LoadButton
                  title="Save"
                  type="submit"
                  load={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default VillaCateForm;

interface CategoryImageType {
  setImage: Dispatch<React.SetStateAction<Image>>
  image: Image
}

const CategoryImage = (props: CategoryImageType) => {
  const { setImage, image } = props
  const [open, setOpen] = useState(false)
  const onChange = (e: any) => {
    setImage({
      media_id: e?.data?.id,
      original_url: e?.data?.original_url
    })
  }
  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        style={{ backgroundColor: 'var(--kt-white)' }}
      >
        <AddAPhotoIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="villa_cate_crop_img">
          <CropImage
            setOpen={setOpen}
            onChange={onChange}
            original_url={image.original_url ?? ''}
          />
        </div>
      </Dialog>
    </>
  )
}