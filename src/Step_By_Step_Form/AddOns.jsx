import "./AddOns.scss"
import "./AddOns_mobile.scss"
import {ButtonComponent} from "./utilities/Button_Component"
import {useState, useEffect} from "react"

 let Add_Ons_Array = []
 const AddOnsOptionMonthlyValue = [1,2,2]
 const AddOnsOptionYearlyValue = [10,20,20]

 let AddOnsPlan = ["Online Services","Larger Storage","Customizable Profile"]
 const AddOnsOptionWord = [<span><h4>Online Services</h4><p>Access to Multiplayer games</p></span>,<span><h4>Larger Storage</h4><p>Extra 1TB of cloud save</p></span>,<span><h4>Customizable Profile</h4><p>Custom theme on your profile</p></span>]

export function AddOns(props){

	const {
		update,
		HandleFormValidity,
		HandleGoBackEvent,
		HandleAddonsSelection,
		AddOnsPlan_Array,
		AddOnsBooleanValue,
		PlanObject
	} = props

	const [CheckedValue, setCheckedValue] = useState(AddOnsBooleanValue)
	const [IsValid, setIsValid] = useState(true)
	const [AddsOnValue, setAddsOnValue] = useState(AddOnsPlan_Array)
	const [isMonthly, setIsMonthly] = useState(PlanObject.isMonthly)

	Add_Ons_Array = AddOnsPlan_Array

	
	const Handle_Add_Ons_Click = (event) =>{
		let CheckedValue_Clone = Array.from(CheckedValue)
		let value = event.target.value
		let checked = event.target.checked
		let index = event.target.getAttribute("index")		

		index = Number(index)
		setIsValid(true)
		if ( checked == true) {
			Add_Ons_Array[index]= value
		}
		else{
			Add_Ons_Array[index] =null
		}
		CheckedValue_Clone[index] = checked
		setCheckedValue(CheckedValue_Clone)
		setAddsOnValue(Add_Ons_Array)
	}
console.log({isMonthly})
	// useEffect(() =>{
	// 	console.log("i sm in the effect phase")
	// 	let CheckedValue_Clone = Array.from(CheckedValue)
	// 	if (isMonthly == false) {
	// 		for (var i = 0; i < Add_Ons_Array.length; i++) {
	// 			if ( CheckedValue_Clone[i] == true && Add_Ons_Array[i] != null) {
	// 				Add_Ons_Array[i]=Add_Ons_Array[i] 
	// 			}
	// 		}
			
	// 	}
	// else{
	// 			for (var i = 0; i < Add_Ons_Array.length; i++) {
	// 			if ( CheckedValue_Clone[i] == true && Add_Ons_Array[i] != null) {
	// 				Add_Ons_Array[i]= Add_Ons_Array[i]*10
	// 			}
	// 		}
	// 		setCheckedValue(CheckedValue_Clone)
	// 		setAddsOnValue(Add_Ons_Array)	
	
	// }
// },[isMonthly])
	console.log({CheckedValue})
	const HandleSubmitAddOns = () => {
		let count=0;
		for (var i = 0; i < Add_Ons_Array.length; i++) {
			if (Add_Ons_Array[i] == null) {
				setIsValid(false)
				count+=1;
			}
			else{
				setIsValid(true)
			}
		}

		if(count <3){
			setIsValid(true)
			if (isMonthly == false) {
					for (var i = 0; i < Add_Ons_Array.length; i++) {
						if ( CheckedValue[i] == true && Add_Ons_Array[i] != null && Add_Ons_Array[i] < 10) {
							Add_Ons_Array[i]=Add_Ons_Array[i] 
						}
						else{
							Add_Ons_Array[i]=Add_Ons_Array[i]/10	
						}
					}
					
				}
			else{
						for (var i = 0; i < Add_Ons_Array.length; i++) {
							console.log({CheckedValue})
						if ( CheckedValue[i] == true && Add_Ons_Array[i] < 10) {
							Add_Ons_Array[i]= Add_Ons_Array[i]*10
						}
						console.log("int the else statement")
					}
					
			}
			console.log({Add_Ons_Array})
			HandleAddonsSelection([Add_Ons_Array,CheckedValue,AddOnsPlan])
		}
	}
		let AddOnSOption=[]
		for (var i = 0; i < AddOnsPlan_Array.length; i++) {
			const Option_El = (
				<label className="input__container" key={i} index={i} style={{
					background : CheckedValue[i] ? "rgb(240 246 255 / 61%)" : "hsl(0, 0%, 100%)",
					border: CheckedValue[i] ? "2px solid hsl(231, 11%, 63%)" : undefined
				}} >
					<input type="checkbox" className="input" idName={AddOnsPlan[i]} value={AddOnsOptionMonthlyValue[i]} checked={CheckedValue[i]} onChange={Handle_Add_Ons_Click}  index={i}/>
					{AddOnsOptionWord[i]}
					<p className="valueDisplay">
						${PlanObject.isMonthly ?  AddOnsOptionYearlyValue[i]+"/yr" : AddOnsOptionMonthlyValue[i]+"/mon"}
					</p>
				</label>
			)
			AddOnSOption.push(Option_El)
		}
	return (
		<div className="Add_Ons_Container">
			<div className="Add_Ons_Heading">
				<h3>Picks add-ons</h3>
				<p>Add-ons helps enhance your gaming experience</p>
			</div>
				{IsValid ? null 
	 		: (
	 			<p style={{
	 				color:"red",
	 				fontSize:"20px",
	 				position:"absolute",
	 				top:"19%",
	 				fontWeight:"bolder"
	 			}}>Please select Your Option</p>
	 		)}
			<form action="">
				{AddOnSOption}
			</form>
			 	<ButtonComponent
					DisplayWord = "Next Step"
					HandleEvent = {HandleSubmitAddOns}
					update = {update}
					HandleGoBackEvent={HandleGoBackEvent}
			 	></ButtonComponent>
		</div>
		)	
}