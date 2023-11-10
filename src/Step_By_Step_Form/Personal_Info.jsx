import {useState, useEffect} from "react"
import {ButtonComponent} from "./utilities/Button_Component"
import './Personal_Info.scss'
import './Personal_Info_mobile.scss'


export function Personal_Info(props){

	const {
		update,
		PersonalInfo,
		PersonalInfo_Object
	} = props	

	const [nameValue, setNameValue] = useState(PersonalInfo_Object.name);
	const [nameValidity, setNameValidity] = useState(PersonalInfo_Object.validity)

	const [emailValue, setEmailValue] = useState(PersonalInfo_Object.email);
	const [emailValidity, setEmailValidity] = useState(PersonalInfo_Object.validity)
	const [emailErrorMessage, setEmailErrorMessage] = useState(null)

	const [phoneNumberValue, setPhoneNumberValue] = useState(PersonalInfo_Object.phoneNumber)
	const [phoneNumberValidity, setPhoneNumberValidity] = useState(PersonalInfo_Object.validity)
	
	const handleName = (event) => {
		let value = event.target.value;
		setNameValidity(true)
		if (!(value.match(/\d+/)) && value.length < 35) {
			setNameValue(value);
		}
	}

	const handleEmail = (event) => {
		let value = event.target.value;
		setEmailValue(value);
	setEmailValidity(true)		
		// if (emailValidity == false) {
		// 	for (var i = 0; i < emailValue.length; i++) {
		// 		if ("@" == emailValue[i] && emailValue.includes(".com")){
		// 			setEmailValidity(true)
		// 			setEmailErrorMessage(null)
		// 			break;
		// 		}
		// 	}
		// }
	}

	function handleEmailValidity (){
		console.log({emailValue})
		if (isNaN(emailValue)) {
			for (var i = 0; i < emailValue.length; i++) {
				if ("@" == emailValue[i]){
					setEmailValidity(true)
					setEmailErrorMessage(null)
					break;
				}
				else {
					setEmailValidity(false)
					setEmailErrorMessage(false)
				}
			}
		}
		else{
			setEmailValidity(false)
			setEmailErrorMessage(true)
		}
	}

	function HandleNameValidity () {
		if (nameValue.length == 0){
			setNameValidity(false)
		}
		else{
			setNameValidity(true)
		}
	}

	const handlePhoneNumber = (event) =>{
		let value = event.target.value; 
		if (value.length <= 10  && Number(value)) {
			setPhoneNumberValidity(true)
			setPhoneNumberValue(value);
		}
	}

	const handleSubmitForm = () => {
		handleEmailValidity();
		HandleNameValidity();
		console.log({emailValidity})
		console.log({nameValidity})
		console.log({phoneNumberValidity})
		if (phoneNumberValue.length == 0 ) {
			setPhoneNumberValidity(false)
			return
		}
		else{
			setPhoneNumberValidity(true)
		}
		if (emailValidity== true && nameValidity == true&& phoneNumberValidity == true) {
			console.log("everything is true")
			PersonalInfo([nameValue,emailValue,phoneNumberValue])
		}
		// setValidateClick(1)
		// console.log({nameValidity})
	}


	return(
		<div className='Personal_Info_Container'>
			<div className='Personal_Info_Heading_Container'>
				<h2>Personal info</h2>
				<p>Please provide your name, email address and phone number</p>
			</div>
			<form action="">
				<label htmlFor="">
					<p>
						Name
						{nameValidity || nameValidity == null ? null : (
							<p className="invalidText"> this field is required</p>
						)}
					</p>
					<input type="text" className="form_input" placeholder="e.g Stephen King" value={nameValue} onChange={handleName} style={{
						borderColor : nameValidity === false ? "red" : undefined
					}} />
				</label>
				<label htmlFor="">
					<p>
						Email Address 
						{emailValidity || emailValidity == null? null : (
							<p className="invalidText">{emailErrorMessage == null ? undefined : emailErrorMessage ? "this field is required" : "Enter a valid email" }</p>
						)}
					</p>
					<input type="email" className="form_input" placeholder="e.g stephenKing@lorem.com" value={emailValue} onChange={handleEmail} onBlur={handleEmailValidity} style={{
						borderColor : emailValidity === false ? "red" : undefined 
					}} />
				</label>
				<label htmlFor="">
					<p>
						Phone Number 	
						{phoneNumberValidity || phoneNumberValidity == null? null : (
							<p className="invalidText">this field is required</p>
						)}
					</p>
					<input type="num" maxLength="10" className="form_input countryPhoneNumber" placeholder="e.g +1 234 567 890" value={phoneNumberValue} onChange={handlePhoneNumber} style={{
							borderColor: phoneNumberValidity || phoneNumberValidity == null ? undefined : "red"
						}}
					 />				
				</label>
				</form>
				<ButtonComponent 
					HandleEvent={handleSubmitForm}
					DisplayWord = "Next Step"
					update = {update}
				></ButtonComponent>
		</div>
	)
}