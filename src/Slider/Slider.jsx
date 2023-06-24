import {useState, useEffect} from 'react'
import "./Slider.css"
import img1 from "./assets/img/text1.gif"
import img2 from "./assets/img/text2.gif"
import img3 from "./assets/img/text3.gif"
import img4 from "./assets/img/text4.gif"
import img5 from "./assets/img/text5.gif"
import img6 from "./assets/img/text6.gif"
import img7 from "./assets/img/text7.gif"
import img8 from "./assets/img/text8.gif"
import img9 from "./assets/img/text9.gif"
import img10 from "./assets/img/text10.gif"
import img11 from "./assets/img/text11.gif"
import img12 from "./assets/img/text12.gif"

function Slider() {
  const imgArray =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
  const [index, setIndex] = useState(0)
const limit = imgArray.length-1;

  function nextImage() {
      const nextIndex= index+1; 
      if (nextIndex <= limit )
       {
        setIndex(index+1);
      }
   }

  function prevImage() {
    const nextIndex = index-1;
       if (nextIndex >= 0) {
        setIndex(index-1);
      }
      console.log({index})
    }
 
  const images = []
  for (var i = 0; i < imgArray.length; i++) {
    const img = imgArray[i];
    let display='none';
      if (index === i) {
      display = 'block'
    }
    const imageEl = <div key={i} style={{
      display: display
    }}>
      <img src={img} />
    </div>
    images.push(imageEl);
  }
  

  const getLeftBtnStyle = () => {
    const style = {}
    if (index === 0) {
      style.opacity = 0.2
    } else {
      style.opacity = 1
    }
    return style // { opactiy: 0.4 or 1}
  }

  const getRightBtnStyle = () => {
    const style = {}
    if (index === imgArray.length-1) {
      style.opacity = 0.2
    }
    else{
      style.opacity = 1
    }
    return style
  }

    const addIndex=  function (){
      const nextIndex = index +1;
      if (nextIndex <= limit )
       {
        setIndex(index+1);
      }
      else{
        setIndex(0)
        }
      }

    

  return (
    <div className='slider_body'>
      <button className='leftArrow' onClick={prevImage} style={getLeftBtnStyle()}>
      </button>
      <div className='sliderContainer'>
        {images}
        <div className='imageCounter'>
        <p className='counter'> {index+1}/{imgArray.length}</p>
        </div>
        <div className='imageCountdown' key={index}>
        <div className='countdown' onAnimationEnd={addIndex} key={index}>
        </div>     
        </div>
      </div>
      <button className='rightArrow' onClick={nextImage} style={getRightBtnStyle()}>
      </button>
    </div>
  )
}

export default Slider