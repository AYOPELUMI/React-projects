import {useState, useEffect} from "react"
import {Personal_Info} from "./Personal_Info"
import {Summary} from "./Summary"
import{Plan} from "./Plan"
import {AddOns} from "./AddOns"
import{ProfileSummary} from "./ProfileSummary"
import {ButtonComponent} from "./utilities/Button_Component"
import "./Step_By_Step_Form.scss"

let PlanObject = {
	name : "",
	value : ""
}
let PersonalInfo_Object = {
	name : "",
	email : "",
	countryCode: "",
	phoneNumber: ""
}
let AddOnsPlan_Array =[null,null,null]
let AddOnsPlan = []
 let AddOnsBooleanValue = [false,false,false] 

export function Step_By_Step_Form(){
	
	const [FirstFormValidity, setFirstFormValidity] = useState( false)
	const [update, setUpdate] = useState(0)
	const [verificationTickPersonalInfo, setVerificationTickPersonalInfo] = useState(false)
	const [verificationTickPlan, setVerificationTickPlan] = useState(false)
	const [verificationTickAddOns, setVerificationTickAddOns] = useState(false)
	const [plan, setPlan] = useState("")
	console.log({})


	function HandlePlanValue(args){
		PlanObject.name =args[0]
		PlanObject.value = args[1]
		setVerificationTickPlan(true)
	}
	function HandleAddonsSelection([args,argument,arg]){
		console.log({args})
		AddOnsPlan_Array= args
		AddOnsBooleanValue = argument
		AddOnsPlan = arg
		setVerificationTickAddOns(true)
		console.log({AddOnsPlan})
	}

	function HandleFormValidity (args) {
		setFirstFormValidity(args)
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
		PersonalInfo_Object.countryCode= argument[2]
		PersonalInfo_Object.phoneNumber = argument[3]
		setVerificationTickPersonalInfo(true)
	}
	
		useEffect(() =>{
			
			if (FirstFormValidity == true){
				setUpdate(update+1);
				setFirstFormValidity(false)
			}
			
		},[FirstFormValidity])
		useEffect(() => {
			if (AddOnsPlan_Array[0]== "1") {
				AddOnsPlan[0] = "Online Services"
			}
			if (AddOnsPlan_Array[1]== "2") {
				AddOnsPlan[1] = "Larger Storage"
			}
			if (AddOnsPlan_Array[0]== "2") {
				AddOnsPlan[2] = "Customizable Profile"
			}
		},[update])

	const CompArray = [<Personal_Info
					HandleFormValidity = {HandleFormValidity}
					update = {update}
					PersonalInfo = {PersonalInfo}
					PersonalInfo_Object = {PersonalInfo_Object}
				/>,
				<Plan
				update = {update}
				HandleFormValidity = {HandleFormValidity}
				HandleGoBackEvent={HandleGoBackEvent}
				HandlePlanValue={HandlePlanValue}
				PlanObject = {PlanObject}
				></Plan>,
				<AddOns
				update = {update}
				HandleFormValidity = {HandleFormValidity}
				HandleGoBackEvent={HandleGoBackEvent}
				HandleAddonsSelection={HandleAddonsSelection}
				AddOnsPlan_Array={AddOnsPlan_Array}
				AddOnsBooleanValue={AddOnsBooleanValue}
				 ></AddOns>,
				<ProfileSummary
					PlanObject={PlanObject}
					HandlePlanChange={HandlePlanChange}
					AddOnsPlan_Array={AddOnsPlan_Array}
					HandleGoBackEvent={HandleGoBackEvent}
					update = {update}
					AddOnsPlan={AddOnsPlan}
				></ProfileSummary>
				]
	return(
		
		<div className="StepFormMainContainer" style={{ flexDirection: 'column'}}>
			<div className="StepFormContainer">
				<aside className="Form_leftSide">
					<Summary
						update = {update}
						verificationTickPlan={verificationTickPlan}
						verificationTickAddOns={verificationTickAddOns}
						verificationTickPersonalInfo = {verificationTickPersonalInfo}
					></Summary>
				</aside>
				<aside className="Form_rightSide">
				{CompArray[update]}
				</aside>
			</div>
		</div>
	)
}