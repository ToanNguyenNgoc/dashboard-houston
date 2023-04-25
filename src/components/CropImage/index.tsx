import { api } from "@/api";
import { FileInput } from "./FileInput";
import { ImageCropper } from "./ImageCropper";
import { getCroppedImg } from "@/utils";
import { Dispatch, useState } from "react";
import { usePost } from "@/hooks";

interface CropImageType {
  setOpen?: Dispatch<React.SetStateAction<boolean>>
  onChange?: (e: any) => void,
  original_url?: string
}

export function CropImage({ setOpen, onChange, original_url }: CropImageType) {
  const [image, setImage] = useState(original_url || '');
  console.log(image)
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg: any) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Generating Cropped Image When Done Button Clicked
  const { handle, result } = usePost()
  const onCropDone = async (imgCroppedArea: any) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context?.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );
      const dataURL = canvasEle.toDataURL("image/jpeg");
      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
    const { file, url }: any = await getCroppedImg(
      image,
      imgCroppedArea
    );
    let formData = new FormData();
    formData.append("file", file);
    handle({
      handleFn: () => api.uploadImage(formData),
      callback: (data: any) => {
        if (setOpen) setOpen(false)
        if (onChange) onChange(data)
      }
    })
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    // setCurrentPage("choose-img");
    // setImage("");
    if(setOpen) setOpen(false)
  };
  return (
    <div className="crop_img_container">
      <ImageCropper
        image={image}
        onCropDone={onCropDone}
        onCropCancel={onCropCancel}
        onImageSelected={onImageSelected}
        load={result.load}
      />
      {/* {(currentPage === "choose-img") ? (
        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
      )
        :
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
          load={result.load}
        />
        // currentPage === "crop-img" ? (
        //   <ImageCropper
        //     image={image}
        //     onCropDone={onCropDone}
        //     onCropCancel={onCropCancel}
        //   />
        // ) : (
        //   <div className="crop_img_after">
        //     <div className="img_after">
        //       <img src={imgAfterCrop} className="cropped-img" />
        //     </div>
        //     <div className="img_bottom">
        //       <button
        //         onClick={() => {
        //           setCurrentPage("crop-img");
        //         }}
        //         className="btn"
        //       >
        //         Crop
        //       </button>

        //       <button
        //         onClick={() => {
        //           setCurrentPage("choose-img");
        //           setImage("");
        //         }}
        //         className="btn"
        //       >
        //         New Image
        //       </button>
        //     </div>
        //   </div>
        // )
      } */}
    </div>
  );
}