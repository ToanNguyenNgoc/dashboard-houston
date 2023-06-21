import { Image } from "@/interface"
import { Dispatch, useState } from "react"
import "./upload.scss"
import { Dialog, IconButton } from "@mui/material"
import { AddAPhotoIcon } from "@/components/Icon"
import { CropImage } from "@/components/CropImage"

interface UploadImageProps {
  setImage: Dispatch<React.SetStateAction<Image>>
  image: Image
}

export const UploadImage = (props:UploadImageProps) => {
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
        <div className="dia-upload">
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