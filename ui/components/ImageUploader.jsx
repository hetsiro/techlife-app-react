import { Button, Grid2 } from "@mui/material";
import imageCompression from 'browser-image-compression';



const ImageUploader = ({ avatar, setAvatar }) => {

  const handleImageChange = async (event) => {
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
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error al comprimir la imagen:", error);
      }
    }
  };
  

  return (
    <>
        {/* {image && <img src={image} alt="Imagen seleccionada" width="300" />} */}
        <Grid2
          container
          justifyContent='center'
          alignItems='center'
          width='60%'
        >
          <Button 
            component='label'
            htmlFor="upload-file"
            variant="text" 
            fullWidth
          >Upload avatar</Button>
          {avatar && <img src={avatar} alt="Avatar" width={300} />}
          <input 
            id="upload-file"
            type="file" 
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </Grid2>
    </>
  );
};

export default ImageUploader;
