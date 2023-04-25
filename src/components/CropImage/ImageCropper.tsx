import { ChangeEvent, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import './crop-image.scss'
import { LoadButton } from "../LoadButton";
import { FileUploadIcon } from "../Icon";

const specList = [
  { name: '1 : 1', value: 1 / 1 },
  { name: '5 : 4', value: 5 / 4 },
  { name: '4 : 3', value: 4 / 3 },
  { name: '3 : 2', value: 3 / 2 },
  { name: '5 : 3', value: 5 / 3 },
  { name: '16 : 9', value: 16 / 9 },
  { name: '2 : 1', value: 2 / 1 },
]

export const ImageCropper = ({ image, onCropDone, onCropCancel, load, onImageSelected }: any) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current?.click();
  };

  const onCropComplete = (croppedAreaPercentage: any, croppedAreaPixels: any) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (value: number) => {
    setAspectRatio(value);
  };

  return (
    <div className="cropper">
      <Cropper
        image={image}
        aspect={aspectRatio}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        style={{
          containerStyle: {
            width: "100%",
            height: "80%",
            backgroundColor: "#fff",
          },
        }}
      />

      <div className="action-btns">
        <ul className="spec_list">
          {
            specList.map(item => (
              <li key={item.name} className="spec_list_item">
                <LoadButton
                  title={item.name}
                  size="medium"
                  color={aspectRatio === item.value ? "success" : "inherit"}
                  variant={aspectRatio === item.value ? "contained" : "text"}
                  onClick={() => onAspectRatioChange(item.value)}
                />
              </li>
            ))
          }
        </ul>
        <div className="action-btns-bot">
          <div className="bot_item">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleOnChange}
              style={{ display: "none" }}
            />

            <LoadButton
              icon={<FileUploadIcon />}
              title="Open file"
              onClick={onChooseImg}
              size="large"
              variant="outlined"
              color="inherit"
            />
          </div>
          <div className="bot_item">
            <LoadButton
              size="large"
              title="Cancel"
              color="error"
              variant="text"
              onClick={onCropCancel}
            />
            <LoadButton
              size="large"
              title="Crop & Save"
              color="success"
              load={load}
              onClick={() => {
                onCropDone(croppedArea);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
