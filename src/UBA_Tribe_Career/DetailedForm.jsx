 import {useState} from "react"
import {Form} from "./utilities/Form"
import {SelectInput} from "./utilities/SelectInput"
import "./DetailedForm.scss"

let inputObjectArray = [
	{
		type : "Date",
		label : "Date of Birth",
		required : "true"
	}
]


 export function DetailedForm (argument) {
 	return(
 		<div className="detailedContainer">
 				<label htmlFor="">
 					<Form inputObjectArray={inputObjectArray}></Form>
 					<SelectInput></SelectInput>
 					<SelectInput></SelectInput>
 				</label>

 		</div>
 	)
 }