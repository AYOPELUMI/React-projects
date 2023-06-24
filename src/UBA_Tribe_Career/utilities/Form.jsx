import {useState} from "react"
import {Input} from "./Input"
import "./Form.scss"



export function Form(props) {
	const {
		inputObjectArray
	} = props

	let formInput = []

	for (var i = 0; i < inputObjectArray.length; i++) {
		let el = <label htmlFor="" key={i} className="formLabel">
					<Input index={i} 
					type={inputObjectArray[i].type}
					placeHolder={inputObjectArray[i].placeHolder}
					required={inputObjectArray[i].required}
					>
					</Input>
				</label>

			formInput.push(el)
	}

	return(
		<form action="" className="form">
		{formInput}
		</form>
	)
}