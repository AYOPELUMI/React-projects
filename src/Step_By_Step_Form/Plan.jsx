import "./Plan.scss"
import {BsJoystick} from "react-icons/bs"
import {BiJoystickAlt, BiJoystick} from "react-icons/bi"
import {useState} from "react"
import {ButtonComponent} from "./utilities/Button_Component"

export function Plan (props) {

	const {
		update,
		HandleFormValidity,
		HandleGoBackEvent,
		HandlePlanValue,
		PlanObject
	} = props

	const [planValue, setPlanValue] = useState(PlanObject.value)
	const [isPlanValid, setIsPlanValid] = useState(true)
	const [planName, setPlanName] = useState(PlanObject.name)

	
	const getSelectOptionValue = (event) =>{
		let value = event.target.value
		let OptionName = event.target.getAttribute("idName")
		console.log({OptionName})
		setIsPlanValid(true)
		setPlanName(OptionName)
		setPlanValue(Number(value))
	}
	
	const HandleSubmitForm = () =>{
		if (Number(planValue)){
			HandleFormValidity(true)
			HandlePlanValue([planName,planValue])
		}
		else {
			setIsPlanValid(false)
		}
	}

	 return (
	 	<div className="PlanMainContainer">
	 	<div className="DtepByStepHeader">
	 		<h2>Select your plan</h2>
			<p>You have the option of monthly or yearly billings</p>
	 	</div>
	 	{isPlanValid ? null 
	 		: (
	 			<p style={{
	 				color:"red",
	 				fontSize:"20px",
	 				position:"absolute",
	 				top:"19%",
	 				fontWeight:"bolder"
	 			}}>PLease select Your Option</p>
	 	)}
	 	<form action="">
	 		<label htmlFor="Plan" className="LabelContainer">
		 		<label key="9">
					<input type="radio" className="FormRadio" name="Plan" idName="Arcade" value="9" checked={planValue == "9" } onChange={getSelectOptionValue}/>
					<span className="span">
			 			<i style={{
			 					backgroundColor: 'orange'
			 				}}>
			 				<BsJoystick/>
			 			</i>
			 			<div>
				 			<h3>Arcade</h3>
				 			<p>$9/mon</p>
			 			</div>
					</span>
		 		</label>
		 		<label  key="12">
					<input type="radio" className="FormRadio" name="Plan" idName="Advanced" value="12" checked={planValue== "12" } onChange={getSelectOptionValue}/>
					<span className="span">
			 			<i style={{
			 					backgroundColor: 'lightpink'
			 				}}>
			 				<BiJoystickAlt />
			 			</i>
			 			<div>
				 			<h3>Advanced</h3>
				 			<p>$12/mon</p>
			 			</div>
					</span>
		 		</label>
		 		<label key="15">
					<input type="radio" className="FormRadio" idName="Pro" value="15" name="Plan" checked={planValue== "15" } onChange={getSelectOptionValue}/>
					<span className="span">
			 			<i style={{
			 					backgroundColor: 'skyblue'
			 				}}>
			 				<BiJoystick />
			 			</i>
			 			<div>
				 			<h3>Pro</h3>
				 			<p>$15/mon</p>
			 			</div>
					</span>
		 		</label>
	 		</label>
	 	</form>
	 	<div>

	 	</div>
	 	<ButtonComponent
	 		HandleEvent={HandleSubmitForm}
			DisplayWord = "Next Step"
			update = {update}
			HandleGoBackEvent={HandleGoBackEvent}
	 	></ButtonComponent>
	 	</div>
	 )
}