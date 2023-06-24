import {useState} from "react";
import { useRef } from 'react';
import "../css/BodyGallery.css";


import img1 from "../assets/img/text1.gif"
import img2 from "../assets/img/text2.gif"
import img3 from "../assets/img/text3.gif"
import img4 from "../assets/img/text4.gif"
import img5 from "../assets/img/text5.gif"
import img6 from "../assets/img/text6.gif"
import img7 from "../assets/img/text7.gif"
import img8 from "../assets/img/text8.gif"
import img9 from "../assets/img/text9.gif"
import img10 from "../assets/img/text10.gif"
import img11 from "../assets/img/text11.gif"
import img12 from "../assets/img/text12.gif"    


export function BodyGallery(){
	const imgArray =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
  	const [index, setIndex] = useState(0)
  	const limit = imgArray.length-1;
  	const[transformStyle, setTransformStyle] = useState(null)


  	const addIndex = function (){
      const nextIndex = index +1;
      console.log([nextIndex,limit,index])
      if (nextIndex < limit-1)
       {
        setIndex(index+1);
      }
      else{
        setIndex(0)
        }
    }

	const images = []
	const settransform = () => {
		setTransformStyle(index*10)
	}

	for (var i = 0; i < imgArray.length-2; i++) {
	    const img = imgArray[i];
	 	
    	const imageEl = (
    	<div className="imgContainer" key={i} index={i}>
    		<img src={img} className="img" key={index} index={i}/>
    	</div>
    	)
    	images.push(imageEl);
  	} 
  const imgCountdown = []
  
	for (var i = 0; i < imgArray.length-2; i++) {
		let style = {}
		if (index == i) {
			 style.animation = "progress_bar 10s ease";
		}	  	
	  	const countdownEl = (
	  		<div className="imgCountdownDiv" key={i}>
	  			<div className='galleryCountdown' onAnimationStart={settransform} onAnimationEnd={addIndex} index={i} key={i} style={style}></div>
	  		</div>
	  	)

	  	imgCountdown.push(countdownEl);
	}

	return(		
    	<div className='bodyGallery'>
			<div className='galleryContainer' style={{
				translate : "-" + transformStyle +"%"
				}}>
			    {images}     
			</div>
			    <div className='galleryCounter'>
			    	<p className='counter'>{index+1}/{limit-1}</p>
			    </div>
			    <div className='galleryCountdownMainContainer' key={index}>
			    	{imgCountdown.slice(index,index+3)}
			    </div>
    	</div>
 	)
}