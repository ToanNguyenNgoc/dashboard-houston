import { api } from "@/api";
import { ChangeEvent, useState } from "react";

type PostType = {
  e: ChangeEvent<HTMLInputElement>,
  callBack?: (data: any) => void
}

export function usePostMedia() {
  const [medias, setMedias] = useState([])
  const handlePostMedia = async ({ e, callBack }: PostType) => {
    if (e.target.files) {
      try {
        const mediaList: any[] = []
        for (var i = 0; i < e.target.files?.length; i++) {
          const fileItem = e.target.files[i]
          let formData = new FormData()
          let resMedia = {
            original_url: '',
            mediaId: i
          }
          formData.append('file', fileItem)
          const res = await api.uploadImage(formData)
          if (res) {
            resMedia = {
              original_url: res.data.original_url,
              mediaId: res.data.id
            }
          }
          mediaList.push(resMedia)
        }
        if (callBack) {
          callBack(mediaList)
        }
      } catch (error) {

      }
    }
  }
  return {
    medias,
    handlePostMedia
  }
}