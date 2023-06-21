import { PageTitle } from "@/_metronic/layout/core";
import { FormPageContainer, UploadImage } from "@/components";
import { useParams } from "react-router-dom";
import './foods.scss'
import { useState } from "react";
import { Image } from "@/interface";
import { useQuery } from "react-query";
import { api } from "@/api";

function FoodForm() {
  const { id } = useParams()
  const [image, setImage] = useState<Image>({ media_id: null, original_url: null })
  const { } = useQuery({
    queryKey: ['FOOD', id],
    queryFn: () => api.food(id ?? ''),
    enabled: parseInt(id ?? '') ? true : false,
    onSuccess: (data) => {
      console.log(data)
      setImage({ ...image, original_url: data.data.media?.original_url ?? '' })
    },
  })
  return (
    <>
      <PageTitle>
        {id ? 'Update food' : 'Create new food'}
      </PageTitle>
      <FormPageContainer>
        <form action="" className="form-container">
          <div className="d-flex justify-content-center">
            <div className="image-place">
              {image?.original_url && <img className="image" src={image?.original_url ?? ""} alt="" />}
              <div className="image-input-btn d-flex justify-content-center align-items-center">
                <UploadImage image={image} setImage={setImage} />
              </div>
            </div>
          </div>
        </form>
      </FormPageContainer>
    </>
  );
}

export default FoodForm;