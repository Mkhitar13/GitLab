import { useState } from "react";

const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>M13 PROJECT</h1>
      
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;