import {useEffect, useState} from "react"

export default function ChangeBackground () {
	const [bkgdColor, setBkgdColor] = useState("skyblue")
	const [fontColor, setFontColor] = useState('black')
	useEffect(() => {
		setTimeout(() => {
		  setBkgdColor('gray');
		  setFontColor('white')
		},7000)
	},[])
	return(
		<div style={{
			width:'100%',
			height: '100%',
			display : 'flex',
			alignItems : 'center',
			justifyContent : 'center'
			}}>
			<div style={{
				background : bkgdColor,
				color : fontColor, 
				display: 'block',
  				width: '350px',
 				height: '400px',
 				textAlign :'center',
 				transition : 'background 0.4s ease'
				}}>
				Main Container
			</div>
		</div>

	)
}