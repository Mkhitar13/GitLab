import { useState } from 'react';

function App() {

  const [img, setImg] = useState([]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const downloadImgFunction = (e) => {
    if (e.target.files.length !== 0) {
      setImg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }

  const rotateRight = () => {
    
  }

  const rotateLeft = () => {

    setLeft(left - 90); 
  }
  
  return (
    <div className="App">
      <div background="blue" width="100" height="100vh"> 
        <center>
          
          <h2>Upload Something </h2>
          <input type="file" onChange={downloadImgFunction} />

          <h2>Img colection</h2>
          {img.map((elem) => {
            return <>
              <div key={elem}>
              <button onClick={rotateLeft} height="200"> Turn Left </button>

                <img src={elem} height="200" width="200" alt="med1" margin="40" />

                <button height="200"> Turn right </button>
              </div>
            </>
          })}
        </center>
      </div>
    </div>
  );
}
export default App;
