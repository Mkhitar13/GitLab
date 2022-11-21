import "./App.css";
import { useState, useRef } from 'react';

function App() {

  const imageRef = useRef();

  const [img, setImg] = useState([]);
  const [rotate, setRotate] = useState(0);

  const downloadImgFunction = (e) => {
    if (e.target.files.length !== 0) {
      let imgURL = URL.createObjectURL(e.target.files[0]);
      setImg(imgfile => [...imgfile, imgURL])
    }
  }

  const rotateLeft = (e) => {
    e.target.nextSibling.style.transform += `rotate(-90deg)`;
    e.target.nextSibling.style.transition = `1s`;

  }

  const rotateRight = (e) => {
    e.target.previousSibling.style.transform += `rotate(90deg)`;
    e.target.previousSibling.style.transition = `1s`;
  }

  return (
    <div className="App">
      <div>
        <div id="titleAndSelectImg">
          <h2>Upload Something </h2>
          <div id="inputFile">
            Add Images
            <input type="file" onChange={downloadImgFunction} />
          </div>
        </div>
        <div id="main">
          <div id="eachContainerOfImg">

            {img.map((elem) => {
              return (
                <div id="itemContainer" key={elem}>

                  <div id="itemContainerWithoutRangeInput">

                    <button id='leftButton' onClick={rotateLeft} > Turn Left </button>
                    <div id="imgContainer" >
                      <img ref={imageRef} src={elem} alt="img" style={{ transform: `rotate(${rotate}deg)` }} />
                    </div>
                    <button id='rightButton' onClick={rotateRight}> Turn right </button>

                  </div>
                  <div id="rangeInput">
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={rotate}
                      onInput={(e) => setRotate(e.target.value)}
                    />
                  </div>
                </div>)
            })}
          </div>
        </div>
      </div>
    </div >
  );
}
export default App;