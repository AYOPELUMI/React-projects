import {useState, useEffect} from "react"
import {MdOutlineArrowDropDown} from "react-icons/md"
import {Input} from "./Input"
import "./SelectInput.scss"


let inputObjectArray = [
	{
		type : "Date",
		label : "Date of Birth",
		arrayofList : [
			"Select",
			"Male",
			"Female",
			"Others"
		]
	}
]


export function SelectInput (props) {
	const {

	} = props


	const [isDropDownActive, setIsDropDownActive] = useState(false )  
	const [selectedValue, setSelectedValue] = useState()

	const handleSelect =(e) => {
		setIsDropDownActive(!isDropDownActive)
		setSelectedValue(e.target.textContent)
		console.log(e.target.textContent);

	}
	let listArray = []
	let arrayofList = inputObjectArray[0].arrayofList
	for (var i = 0; i < arrayofList.length; i++) {
		const list_El = (
			<li key={i} index={arrayofList[i]} onClick={handleSelect}>
				{arrayofList[i]}
			</li>
			)
		listArray.push(list_El)
	}

	function handleClick (e) {
		setIsDropDownActive(e)
	}

	const bodyclick = (event) => {
		for (var i = 0; i < listArray.length; i++) {
			console.log(event.target.value)
			 // if (isDropDownActive == true) {
			 // 	setIsDropDownActive(false)
			 // }
		}	
	}


	useEffect(() => {
		const handleClick = (e) => {
		  	console.log('window is clicked')
		  	bodyclick(e)
		}
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])

	return(
		<label htmlFor="" className="selectLabel">
		<div className="selectDiv" style={{
			border: isDropDownActive ? "2px solid red":undefined
		}} >
			{isDropDownActive ? 
				<div className="DropDown_Container">
					<ul style={{
						position : isDropDownActive ? "absolute" : "relative", 
						gap : isDropDownActive ? "5px" : undefined
						}}>
						{listArray}
					</ul>
				</div>
				 :null} <Input className="div" type="text" propValue={selectedValue} handleclick={handleClick} placeHolder={<MdOutlineArrowDropDown className={isDropDownActive ?  "iconInactive": ""} />} />
				
		</div>
		</label>
	)
}