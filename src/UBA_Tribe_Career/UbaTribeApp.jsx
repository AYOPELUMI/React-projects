import {useState} from "react"
import {Header} from "./utilities/Header"
import {Footer} from "./utilities/Footer"
import {HomePage} from "./HomePage"
import {DetailedForm} from "./DetailedForm"
import "./UbaTribeApp.scss"
import loginImg from "./Login-bg.jpeg"

 export function UbaTribeApp(){
 	return(
 		<div className= "indexPage">
 			<Header></Header>
 		{/*	<HomePage
 			programme={"Graduate Management Accelerated Programme (GMAP) 2023"}
 			heading={"You are about to apply for the job :"}
 			introHeading={"Let's get started"}
			formInstructions={"Fill in your details"}>
 			</HomePage>*/}
 			<DetailedForm></DetailedForm>
 			<Footer></Footer>
 		</div>
 		)
 } 