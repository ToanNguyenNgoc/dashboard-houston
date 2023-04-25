import React, { ChangeEvent, useRef } from "react";
import { LoadButton } from "../LoadButton";
import {FileUploadIcon} from '../Icon'

export const FileInput = ({ onImageSelected }: any) => {
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

  return (
    <div className="open_file_cnt">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      <LoadButton
        icon={<FileUploadIcon/>}
        title="Open file"
        onClick={onChooseImg}
        size="medium"
        variant="outlined"
        color="inherit"
      />
    </div>
  );
}
