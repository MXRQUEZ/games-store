import React, { ChangeEvent, FC, memo, useRef } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import imageCompression from "browser-image-compression";
import classes from "@/components/ui/forms/profile/profile.module.scss";
import { defaultErrorMessage } from "@/constants/constants";
import Button from "@/components/ui/button/button";
import images from "@/constants/images";

interface IProfilePictureProps {
  profilePic: string;
  setProfilePic: React.Dispatch<React.SetStateAction<string>>;
  errors: FieldErrors;
  register: UseFormRegisterReturn;
}

const ProfilePicture: FC<IProfilePictureProps> = ({ profilePic, setProfilePic, errors, register }) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    const maxFileSizeKB = 500;
    const maxFileSizeFull = maxFileSizeKB * 1000;
    if (file.size > maxFileSizeFull) {
      const errorMessage = `Sorry, your image is too big! Max image size is ${maxFileSizeKB}kB`;
      alert(errorMessage);
      console.error(errorMessage);
      return;
    }

    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 200,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    const fileUrl = await imageCompression.getDataUrlFromFile(compressedFile);
    setProfilePic(fileUrl);
  };

  const onClickChangePicture = () => {
    inputRef.current.click();
  };

  const errorMessage: JSX.Element = errors[register.name] && (
    <span role="alert">{errors[register.name]?.message || defaultErrorMessage}</span>
  );

  return (
    <div className={classes.profile__image}>
      <img className={classes.image} src={profilePic} alt={images.defaultProfilePic.description} />
      <input
        id={register.name}
        type="file"
        accept="image/*"
        className={classes.image__input}
        {...register}
        onChange={handleFiles}
        ref={inputRef}
      />
      <div className={classes.error}>{errors[register.name] && errorMessage}</div>
      <Button text="Change picture" type="button" onClick={onClickChangePicture} />
    </div>
  );
};

export default memo(ProfilePicture);
