import {useEffect,useState} from "react"

import "../css/IntroductionSection.css"
import introSectionBackground from "../assets/intro_section img/introSection Background.jpeg"

export function Intro_Section (){

	const[asideTop, setAsideTop] = useState(100)

	useEffect(() => {
		setTimeout(() => {
		  setAsideTop(0)
		  console.log("set Timout just run")
		}, 3000)
		}, [])

	return(
		<div className="introSectionContainer">
			<aside className="leftAside section" style={{
				top : '-' + asideTop + '%'
			}}>
			<h2 className="leftAsideHeading">Welcome To DIGITAL LIFECLINIC LTD <br/>Africa's leadeing Mobile Clinic</h2>
			<p className="leftAsideWord">
				The first organization in Africa to market and distribute all<br/> products of Lifeclinic International, USA-the World's largest manufacturer<be/> of commercial automated Blood Pressure Monitors and Health testing Stations
			</p>
			</aside>
			<aside className="rightAside section" style={{
				top : asideTop + '%'
			}}></aside>
		</div>
	)
}