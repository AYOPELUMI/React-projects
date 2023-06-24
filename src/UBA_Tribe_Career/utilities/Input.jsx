import {useState} from "react"
import {useRef} from 'react';
import "./Input.scss"

export function Input (props) {
	const{
		type,
		className,
		placeHolder,
		checkedValueFunction,
		required,
		handleclick,
		label,
		propValue
	} = props

	const [inputValue, setValue] = useState()
	const [checkedValue, setCheckedValue] = useState(false)
	const [focusBoolean, setFocusBoolean] = useState(false)
	const [divClickBoolean, setDivClickBoolean] = useState(false)
	const inputRef = useRef(null);
	let style = {}

	const handleChange = (e) => {
		if (type == "checkbox") {
			console.log("it is true");
			let value=e.target.checked 
			console.log({value});
			setCheckedValue(value)
			checkedValueFunction(value)
		}
		else{
			let value = e.target.value
			setValue(value)
		}
	}

	const handleOnFocus = (e) =>{
		setFocusBoolean(true)
		setDivClickBoolean(true)
		handleclick(!focusBoolean)
	
	}
	const handleDivClick =(e) => {
		setDivClickBoolean(true)
		handleclick(!divClickBoolean)
		console.log("i passed thru here")
		inputRef.current.focus()		
	}

	const handleBlur = (e) => {
		if (!inputValue) {

			setFocusBoolean(false)
		}
		setDivClickBoolean(false)
	}
		if (!className) {
			style={

				fontSize: focusBoolean ? "14px" : null,
				color: divClickBoolean ?  "rgb(224 14 2)" : null,
				top:  focusBoolean ? "-17px" : "9px",
				zIndex : focusBoolean ? "2" : "1",
				left : "12px",
				cursor: "text",
				padding: "5px"
			}
		}

	return(
		(
			<label className="label">
			{label}
				<input type={type} required={required ? true :false } name={className} ref={inputRef} checked={checkedValue} onBlur={handleBlur}  onFocus={handleOnFocus} className={className} onChange={handleChange} value={propValue ? propValue : inputValue}  />
				<div className={className ? "div"+className : ""} style={style} onClick={handleDivClick}>{placeHolder}</div>
			</label>
		)
	)
}