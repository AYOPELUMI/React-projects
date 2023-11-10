import {useState, useEffect} from "react"
import {Personal_Info} from "./Personal_Info"
import {Summary} from "./Summary"
import{Plan} from "./Plan"
import {AddOns} from "./AddOns"
import{ProfileSummary} from "./ProfileSummary"
import {ButtonComponent} from "./utilities/Button_Component"
import "./Step_By_Step_Form.scss"
import "./Step_By_Step_Form_Mobile.scss"
import leftSideBgSvg from "./assets/images/bg-sidebar-desktop.svg"
import thankYouIcon from "./assets/images/icon-thank-you.svg"

let PlanObject = {
	name : "",
	value : "",
	isMonthly : false
}
let PersonalInfo_Object = {
	name : "",
	email : "",
	phoneNumber: ""
}
let AddOnsPlan_Array =[null,null,null]
let AddOnsPlan = []
 let AddOnsBooleanValue = [false,false,false] 

export function Step_By_Step_Form(){
	
	const [FirstFormValidity, setFirstFormValidity] = useState( false)
	const [update, setUpdate] = useState(0)
	const [plan, setPlan] = useState("")
	console.log({})


	function HandlePlanValue(args){
		PlanObject.name =args[0]
		PlanObject.value = args[1]
		PlanObject.isMonthly = args[2]
		setUpdate(update+1);
		console.log("planObject")
		console.log({args})
	}
	
	function HandleAddonsSelection([args,argument,arg]){
		console.log({args})
		AddOnsPlan_Array= args
		AddOnsBooleanValue = argument
		AddOnsPlan = arg
		setUpdate(update+1);setUpdate(update+1);
		console.log("AddOnsPlan")
		console.log([args,argument,arg])
	}

	function HandleFormValidity (args) {
		console.log("i am here")
		setUpdate(update+1);
	}

	function HandleGoBackEvent () {
		setUpdate(update-1)
	}

	function HandlePlanChange(args){
		setUpdate(1)
	}

	function PersonalInfo (argument) {
		console.log({argument})
		PersonalInfo_Object.name = argument[0];
		PersonalInfo_Object.email = argument[1]
		PersonalInfo_Object.phoneNumber = argument[2]
		PersonalInfo_Object.validity = true
		setUpdate(update+1);
		}
	
		// useEffect(() => {
		// 	if (AddOnsPlan_Array[0]== "1" || AddOnsPlan_Array[0]=="10") {
		// 		AddOnsPlan[0] = "Online Services"
		// 	}
		// 	if (AddOnsPlan_Array[1]== "2" || AddOnsPlan_Array[1]=="20") {
		// 		AddOnsPlan[1] = "Larger Storage"
		// 	}
		// 	if (AddOnsPlan_Array[0]== "2" || AddOnsPlan_Array[0]=="20") {
		// 		AddOnsPlan[2] = "Customizable Profile"
		// 	}
		// },[update])

	const CompArray = [<Personal_Info
					HandleFormValidity = {HandleFormValidity}
					update = {update}
					PersonalInfo = {PersonalInfo}
					PersonalInfo_Object = {PersonalInfo_Object}
				/>,
				<Plan
				update = {update}
				HandleGoBackEvent={HandleGoBackEvent}
				HandlePlanValue={HandlePlanValue}
				PlanObject = {PlanObject}
				></Plan>,
				<AddOns
				update = {update}
				HandleGoBackEvent={HandleGoBackEvent}
				HandleAddonsSelection={HandleAddonsSelection}
				AddOnsPlan_Array={AddOnsPlan_Array}
				AddOnsBooleanValue={AddOnsBooleanValue}
				PlanObject={PlanObject}
				 ></AddOns>
				,
				<ProfileSummary
					PlanObject={PlanObject}
					HandlePlanChange={HandlePlanChange}
					AddOnsPlan_Array={AddOnsPlan_Array}
					HandleGoBackEvent={HandleGoBackEvent}
					AddOnsBooleanValue={AddOnsBooleanValue}
					update = {update}
					AddOnsPlan={AddOnsPlan}
					HandleFormValidity={HandleFormValidity}
				></ProfileSummary>
				]
	return(
		
		<div className="StepFormMainContainer">
			<div className="StepFormContainer">
				<aside className="Form_leftSide" style={{
					backgroundImage : "url("+leftSideBgSvg+")"
				}}>
					<Summary
						update = {update}
					></Summary>
				</aside>
				<aside className="Form_rightSide">
					{ update == 4 ? 
						<div className="thankYouContainer">
						<img src={thankYouIcon} alt="img" />
						<h2>Thank you!</h2>
						<p>Thanks for confirming your subscription! We hope you have fun using oir platform.If you eveer need support.Please feel free to email us @lorem@gaming.com</p>
						</div> : 
						CompArray[update]
					}
				</aside>
			</div>
		</div>
	)
}