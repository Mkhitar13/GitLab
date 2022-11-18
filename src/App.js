import "./App.css";
import { useState, useRef, useEffect } from 'react';

function App() {

  const imageRef = useRef();

  const [img, setImg] = useState([]);
  const [range, setRange] = useState(imageRef);

  const downloadImgFunction = (e) => {
    if (e.target.files.length !== 0) {
      setImg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }

  const rotateRight = (e) => {
    imageRef.current.style.transform += `rotate(-90deg)`;
  }

  const rotateLeft = (e) => {
    imageRef.current.style.transform += `rotate(90deg)`;
  }

  const changeRangeValue = () => {
    setRange(range.current.style.transform += `rotate(1deg)`)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        const rotation = window.scrollY / 10 % Math.PI;
        imageRef.current.style.transform = `rotate(${rotation}deg)`;
      });
    });
  }, [changeRangeValue]);

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

                    <div><button id='leftButton' onClick={rotateLeft} > Turn Left </button></div>
                    <div id="imgContainer"><img ref={imageRef} src={elem} alt="img" /></div>
                    <div><button id='rightButton' onClick={rotateRight} > Turn right </button></div>
                  </div>
                  <div id="git ">
                    <input onChange={changeRangeValue} type="range" id="vol" name="vol" min="0" max="360" />
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
