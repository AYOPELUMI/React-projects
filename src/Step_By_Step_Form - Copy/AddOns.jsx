import "./AddOns.scss"
import {ButtonComponent} from "./utilities/Button_Component"
import {useState} from "react"

 let Add_Ons_Array = []
 const AddOnsOptionValue = [1,2,2]
 let AddOnsPlan = ["Online Services","Larger Storage","Customizable Profile"]
 const AddOnsOptionWord = [<span><h4>Online Services</h4><p>Access to Multiplayer games</p></span>,<span><h4>Larger Storage</h4><p>Extra 1TB of cloud save</p></span>,<span><h4>Customizable Profile</h4><p>Custom theme on your profile</p></span>]

export function AddOns(props){

	const {
		update,
		HandleFormValidity,
		HandleGoBackEvent,
		HandleAddonsSelection,
		AddOnsPlan_Array,
		AddOnsBooleanValue
	} = props

	const [CheckedValue, setCheckedValue] = useState(AddOnsBooleanValue)
	const [IsValid, setIsValid] = useState(true)
	const [AddsOnValue, setAddsOnValue] = useState(AddOnsPlan_Array)

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
			HandleFormValidity(true)
			HandleAddonsSelection([Add_Ons_Array,CheckedValue,AddOnsPlan])
		}
	}
		let AddOnSOption=[]
		for (var i = 0; i < AddOnsPlan_Array.length; i++) {
			const Option_El = (
				<label index={i} >
					<input type="checkbox" idName={AddOnsPlan[i]} value={AddOnsOptionValue[i]} checked={CheckedValue[i]} onChange={Handle_Add_Ons_Click}  index={i}/>
					{AddOnsOptionWord[i]}
				</label>
			)
			AddOnSOption.push(Option_El)
		}
	return (
		<div className="Add_Ons_Container">
			<div className="Add_Ons_Heading">
				<h3>Picks add-ons</h3>
				<p>Add-ons helps enhance your gaming experience</p>
			{/*	{JSON.stringify(CheckedValue)}*/}
			</div>
				{IsValid ? null 
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