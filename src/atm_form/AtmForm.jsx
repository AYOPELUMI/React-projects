import React, {useState, useRef} from 'react'
import { Card } from "./src/Card"
import './AtmForm.css'
import {Form} from "./src/Form"
import {Input} from "./src/Input"

const inputPlaceHolder = ['0123','4567','8901','2345']
const indexedNumber=[];
const border=[];
const expBorder=[];


export default function AtmForm() {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [Index, setIndex] = useState('');
	const [expiryMthvalue, setExpiryMthValue] = useState('');
	const [expiryYrValue, set_Exp_Yr_Value] = useState('');
	const [cvc, setCvc] = useState('');
	const [cardNumberInputs, setCardNumberInputs] = useState([
		'',
		'',
		'',
		'',
		])
	const [cardNumberInputValid, setCardNumberInputValid] = useState([
		true,
		true,
		true,
		true,
		])
	const cardNumberRef0 = useRef(null)
	const cardNumberRef1 = useRef(null)
	const cardNumberRef2 = useRef(null)
	const cardNumberRef3 = useRef(null)
	let cardNumberRefArray = [cardNumberRef0,cardNumberRef1,cardNumberRef2,cardNumberRef3]
	const [cvcIsValid, setCvcIsValid] = useState(true)
	const [expiryYearValid, setExpiryYearValid] = useState(true)
	const [expiryMonthValid, setExpiryMonthValid] = useState(true)
	const [flipToBack, setFlipToBack] = useState(false)
	
	// var CardNumberArray =[]
	// const CardNumberInput = () => {

	// 	CardNumberArray.map((item, index) => {
	// 		<span className='containerCardNumber' key={index} >
	// 			<Input type="text" value={cardNumberInputs[index]} onChange={changeNumber} ref={(element) => {cardNumberRefs.current[index] = element}} index={index}  className='cardNumber atmFormInput' maxLength='4' inputMode="numeric" placeholder={inputPlaceHolder[index]} />
	// 			</span>

	// 	})
	// 	return CardNumberArray
	// }
	const CardNumberInput = () => {
		const CardNumberArray = []
		for (var i = 0; i < 4; i++) {
				 const inputProps = {
			 	 value: cardNumberInputs[i],
			 	 onChange:changeNumber
			 } 
			 
		const CardInputElement = (
			<span className='containerCardNumber' key={i} index={i} >
			<Input type="text" ref={cardNumberRefArray[i]} {...inputProps} index={i}  className='cardNumber atmFormInput' maxLength='4' inputMode="numeric" placeholder={inputPlaceHolder[i]} />
			</span>
			)
			CardNumberArray.push(CardInputElement);
			}
		return CardNumberArray
	}
	
	const changeName = (event) => {
		if (!(event.target.value.match(/\d+/))) {
			setName(event.target.value)
		}
	}

const changeNumber = (event) =>{
	let Index = Number(event.target.getAttribute('index'))
	const number = event.target.value
	const clone = Array.from(cardNumberInputs)
	const cloneisValid = Array.from(cardNumberInputValid)
	clone[Index] = number

	const valueNumber = Number(number)
	if (number.length > 0 && Number.isNaN(valueNumber)){
		cloneisValid[Index] = true
			setCardNumberInputValid(cloneisValid)
	}
	else{
		setCardNumberInputs(clone)
		cloneisValid[Index] = false
		setCardNumberInputValid(cloneisValid)
	}
	console.log(number.length)
	if (number.length == '4' && Index!=3){
		console.log("i am here")
		let cardArray = CardNumberInput()
		cardNumberRefArray[Index+1].current.focus()
		// cardArray[Index +1].ref
		console.log(cardNumberRefArray[Index+1].current)
		// cardNumberRefs.current[Index].current.focus()
	}
	else{

		console.log("i pass through here")
	}
}


const changeExpiryMonth = (event) =>{
	const value = event.target.value
	const valueNumber = Number(value)
	console.log(value.length)
	console.log(typeof(valueNumber))
	if (value.length > 0 && Number.isNaN(valueNumber) ){
		setExpiryMonthValid(false)			
	}
	else if (valueNumber > 12) {
			setExpiryMonthValid(false)
			console.log('if condition is run')
		}
	else{
		setExpiryMonthValid(true)
	}
			setExpiryMthValue(value);
	}

const changeExpiryYear = () => {
	const value = event.target.value
	const valueNumber = Number(value)
	if (value.length > 0 && Number.isNaN(valueNumber)){
			setExpiryYearValid(false)
	}
	else{
		setExpiryYearValid(true)
	}
		set_Exp_Yr_Value(value);	
}

const changeCvc = (event) =>{
	const value = event.target.value
	const valueNumber = Number(value)
	if (value.length > 0 && Number.isNaN(valueNumber)) {
		 setCvcIsValid(false)
	}
	else{
		setCvcIsValid(true)
		setFlipToBack(true)
	}
	setCvc(value)
}
const handleCvcBlur =() => {
	setFlipToBack(false)
}
	
	return (
		<div className='body'>
			<div className="mainContainer">
			<aside className="leftSide">
				<Card 
					cardNumberInputs={cardNumberInputs}
					expiryMthvalue={expiryMthvalue}
					expiryYrValue={expiryYrValue}
					name={name}
					cvc={cvc}
					flipToBack={flipToBack}
				/>	
			</aside>	

			<aside className="rightSide">
				<div className="container">
					<Form 
						cvcIsValid = {cvcIsValid}
						changeName = {changeName}
						name = {name}
						CardNumberInput = {CardNumberInput}
						cardNumberInputValid ={cardNumberInputValid}
						expiryMonthValid = {expiryMonthValid}
						expiryYearValid = {expiryYearValid}
						expiryYrValue = {expiryYrValue}
						expiryMthvalue = {expiryMthvalue}
						changeExpiryYear = {changeExpiryYear}
						changeExpiryMonth = {changeExpiryMonth}
						handleCvcBlur ={handleCvcBlur}
						cvc = {cvc}
						changeCvc= {changeCvc}
					/> 
				</div>
			</aside>
			</div>
		</div>
	)
}