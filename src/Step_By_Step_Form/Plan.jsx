import "./Plan.scss"
import "./Plan_mobile.scss"
import {useState, useEffect} from "react"
import {ButtonComponent} from "./utilities/Button_Component"
import advancedIcon from "./assets/images/icon-advanced.svg"
import proIcon from "./assets/images/icon-pro.svg"
import arcadeIcon from "./assets/images/icon-arcade.svg"

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
	const [isMonthly, setIsMonthly] = useState(PlanObject.isMonthly)

	
	const getSelectOptionValue = (event) =>{
		let value = event.target.value
		let OptionName = event.target.getAttribute("idName")
		console.log({OptionName})
		setIsPlanValid(true)
		setPlanName(OptionName)
		setPlanValue(Number(value))
	}
useEffect(() =>{
	if (PlanObject.isMonthly) {
		if (isMonthly == false) {
			setPlanValue(planValue/10)
		}
	}
	else{
		if (isMonthly) {
			setPlanValue(planValue*10)
		}
	}
},[isMonthly])

	const handleMonthlySelection = (event) => {
		let valueCheck  = event.target.checked
		console.log({event})
		console.log({valueCheck})
		console.log({isMonthly})
		setIsMonthly(valueCheck)
	}
	
	const HandleSubmitForm = () =>{
		if (Number(planValue)){
			HandlePlanValue([planName,planValue,isMonthly])
		}
		else {
			setIsPlanValid(false)
		}
	}

	 return (
	 	<div className="PlanMainContainer">
		 	<div className="StepByStepPlanHeader">
		 		<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billings</p>
		 	</div>
		 	{isPlanValid ? null 
		 		: (
		 			<p style={{
		 				color:"red",
		 				fontSize:"15px",
		 				position:"absolute",
		 				top:"12%",
		 				left:"60%",
		 				fontWeight:"bolder"
		 			}}>PLease select Your Option</p>
		 	)}
		 	<form action="">
		 		<label htmlFor="Plan" className="LabelContainer">
			 		<label key="9">
						<input type="radio" className="FormRadio" name="Plan" idName="Arcade" value={isMonthly ? "90" : "9"} checked={planValue == "9" || planValue=="90"} onChange={getSelectOptionValue}/>
						<span className="span">
				 			<img src={arcadeIcon} alt="img" />
				 			<div>
					 			<h3>Arcade</h3>
					 			<p>${isMonthly ? "90/yr" : "9/mon"}</p>
					 			{isMonthly ? <h4>2 months free</h4> : null}
				 			</div>
						</span>
			 		</label>
			 		<label  key="12">
						<input type="radio" className="FormRadio" name="Plan" idName="Advanced" value={isMonthly ? "120" : "12"} checked={planValue== "12" || planValue=="120"} onChange={getSelectOptionValue}/>
						<span className="span">
				 			<img src={advancedIcon} alt="img" />
				 			<div>
					 			<h3>Advanced</h3>
					 			<p>${isMonthly ? "120/yr" : "12/mon"}</p>
					 			{isMonthly ? <h4>2 months free</h4> : null}
				 			</div>
						</span>
			 		</label>
			 		<label key="15">
						<input type="radio" className="FormRadio" idName="Pro" value={isMonthly ? "150" : "15"} name="Plan" checked={planValue== "15" || planValue =="150" } onChange={getSelectOptionValue}/>
						<span className="span">
				 			<img src={proIcon} alt="img" />
				 			<div>
					 			<h3>Pro</h3>
					 			<p>${isMonthly ? "150/yr" : "15/mon"}</p>
					 			{isMonthly ? <h4>2 months free</h4> : null}
					 			
				 			</div>
						</span>
			 		</label>
		 		</label>
		 	</form>
		 	<label htmlFor="" className="switch">
		 		<p style={{
		 			color: isMonthly ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"
		 		}}>Monthly</p>
	 			<input type="checkbox" checked={isMonthly} onChange={handleMonthlySelection}/>
	 			<p style={{
	 				color: isMonthly ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"
	 			}}>Yearly</p>
		 	</label>
		 	<ButtonComponent
		 		HandleEvent={HandleSubmitForm}
				DisplayWord = "Next Step"
				update = {update}
				HandleGoBackEvent={HandleGoBackEvent}
	 		></ButtonComponent>
	 	</div>
	 )
}