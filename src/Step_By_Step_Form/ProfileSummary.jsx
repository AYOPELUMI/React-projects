import "./ProfileSummary.scss"
import "./ProfileSummary_mobile.scss"
import {useState, useEffect} from "react"
import{ButtonComponent} from"./utilities/Button_Component"



export function ProfileSummary(props){
	const {
		PlanObject,
		HandlePlanChange,
		AddOnsPlan_Array,
		HandleGoBackEvent,
		update,
		AddOnsPlan,
		AddOnsBooleanValue,
		HandleFormValidity
	} = props

	let TotalAmount = 0
	const [totalAmount, setTotalAmount] = useState(0)
	const [isMonthly, setIsMonthly] = useState(PlanObject.isMonthly)

console.log({AddOnsPlan_Array})
console.log({AddOnsPlan})
console.log({PlanObject})
	let DisplayPlanArray = []
	useEffect(() =>{
		console.log('i am in effect')
		setIsMonthly(PlanObject.isMonthly)
		setTotalAmount(TotalAmount)
	},[])

	for (var i = 0; i < AddOnsPlan_Array.length; i++) {
		if (AddOnsPlan_Array > 0) {
			TotalAmount+=Number(AddOnsPlan_Array[i])
		}
	}

	for (var i = 0; i <= AddOnsBooleanValue.length -1; i++) {
		console.log({i})
		let Display_El
		if (i == AddOnsBooleanValue.length) {
			console.log({TotalAmount})
			setTotalAmount(TotalAmount)
			break;
		}
		if (AddOnsPlan_Array[i] > 0 ) {
			console.log("i am in the else statement")
			Display_El = (
			<div className=" Label" key={i}>
				<h4>{AddOnsPlan[i]}</h4>
				<p>+${AddOnsPlan_Array[i]}{isMonthly ? "/yr" : "/mo"}</p>
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
						<h4>{PlanObject.name} {isMonthly ? "(Yearly)":"(Monthly)"}</h4>
						<a onClick={HandlePlanChange}>Change</a>
					</div>
					<p>${PlanObject.value}{isMonthly ? "/yr" : "/mo"}</p>
				</div>
				{DisplayPlanArray}
				<div className="totalAmountDisplay">
					<p>Total per month</p>
					<h3>+${totalAmount + Number(PlanObject.value)}{isMonthly ? "/yr" : "/mo"}</h3>
				</div>
			</div>

			<ButtonComponent
			DisplayWord = "Confirm"
			HandleEvent ={HandleFormValidity}
			update = {update}
			bgColor="#483ef4"
			HandleGoBackEvent={HandleGoBackEvent}
	 	></ButtonComponent>
			</div>
	)
}