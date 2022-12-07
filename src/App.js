import "./App.css";
import { useState, useRef } from 'react';

function App() {

  const imageRef = useRef();
  const [img, setImg] = useState([]);

  const downloadImgFunction = (e) => {
    if (e.target.files.length !== 0) {
      let imgURL = URL.createObjectURL(e.target.files[0]);
      setImg(imgfile => [...imgfile, imgURL])
    }
  }

  const rotateFull = (e) => {
    e.target.parentNode.previousSibling.children[1].style.transform = `rotate(${e.target.value}deg)`;
    e.target.parentNode.previousSibling.children[1].style.transition = `1s`;

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
                      <a href={elem} download>

                        <img ref={imageRef} src={elem} alt="img" />
                      </a>
                    </div>
                    <button id='rightButton' onClick={rotateRight}> Turn right </button>

                  </div>
                  <div id="rangeInput">

                    <input
                      type="range"
                      min="0"
                      max="360"
                      defaultValue={0}
                      onInput={rotateFull}
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