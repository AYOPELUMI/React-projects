import "./ProfileSummary.scss"
import {useState} from "react"
import{ButtonComponent} from"./utilities/Button_Component"



export function ProfileSummary(props){
	const {
		PlanObject,
		HandlePlanChange,
		AddOnsPlan_Array,
		HandleGoBackEvent,
		update,
		AddOnsPlan
	} = props

	let TotalAmount = 0

console.log({AddOnsPlan_Array})
console.log({AddOnsPlan})
	let DisplayPlanArray = []

	for (var i = 0; i <= AddOnsPlan.length -1; i++) {
		console.log({i})
		let Display_El
		if (i == AddOnsPlan.length) {
			break;
		}
		if (AddOnsPlan_Array[i] != null) {
			console.log("i am in the else statement")
			Display_El = (
			<div className=" Label">
				<h4>{AddOnsPlan[i]}</h4>
				<p>+${AddOnsPlan_Array[i]}/mon</p>
			</div>
			)
		TotalAmount+=Number(AddOnsPlan_Array[i])
		console.log(AddOnsPlan_Array[i])
		DisplayPlanArray.push(Display_El)
		}
		
		console.log({i})
		console.log(Number(AddOnsPlan_Array[i]))
		console.log({TotalAmount})
	}
		console.log({TotalAmount})
	return(
		<div className="ProfileContainer">
			<div className="ProfileHeading">
				<h3>Finishing Up</h3>
				<p>Double check everything looks OK before confirming</p>
			</div>
			<div className="SummaryContainer">
				<div className="PlanSummaryContainer">
					<div className="PlanDetails">
						<h4>{PlanObject.name} (Monthly)</h4>
						<a onClick={HandlePlanChange}>Change</a>
					</div>
					<p>${PlanObject.value}/mon</p>
				</div>
				{DisplayPlanArray}
			</div>
			<div>
				<p>Total per month</p>
				<h3>+${TotalAmount + Number(PlanObject.value)}/mo</h3>
			</div>

			<ButtonComponent
			DisplayWord = "Confirm"
			update = {update}
			bgColor="#483ef4"
			HandleGoBackEvent={HandleGoBackEvent}
	 	></ButtonComponent>
			</div>
	)
}