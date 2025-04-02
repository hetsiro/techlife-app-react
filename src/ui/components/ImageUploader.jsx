import { Button, Grid2 } from "@mui/material";
import imageCompression from 'browser-image-compression';
import CircularIndeterminate from "./CircularIndeterminate";
import { useState } from "react";

 export const ImageUploader = ({ avatar, setAvatar }) => {

  const [isLoading, setIsLoading] = useState(false)

  const handleImageChange = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
  
    if (file) {
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 0.2,
          maxWidthOrHeight: 800,
          useWebWorker: true
        });
  
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatar(reader.result);
          setIsLoading(false);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error al comprimir la imagen:", error);
      }
    }
  };
  

  return (
    <>
        <Grid2 container justifyContent='center' alignItems='center' width='60%'>
          <Button  component='label' htmlFor="upload-file" variant="text"  fullWidth >Upload avatar</Button>
          { (isLoading) ? <CircularIndeterminate /> : avatar !== null ? <img src={avatar} alt="Avatar" width={300} /> : null }
          <input  id="upload-file" type="file"  accept="image/*" onChange={handleImageChange} hidden/>
        </Grid2>
    </>
  );
};