import {useState} from "react"
import {Form} from "./utilities/Form"
import loginImg from "./Login-bg.jpeg"
import{Input} from "./utilities/Input"
import {AiOutlineArrowLeft} from "react-icons/ai"
import "./HomePage.scss"
let inputObjectArray = [
	{
		type : "text",
		placeHolder : "First Name",
		required : true
	},
	{
		type : "text",
		placeHolder : "Middle Name",
		required : true
	},
	{
		type : "text",
		placeHolder : "Last Name",
		required : true
	},
	{
		type : "text",
		placeHolder : "Phone",
		required : true
	},
	{
		type:"email",
		placeHolder : "email Address",
		required : true
	}
]

function Aside(props) {

	const [checkedValue, setCheckedValue] = useState(false)
	const {
		img,
		heading,
		programme,
		introHeading,
		formInstructions,
		form
	}=props

		const [disabledButton, setDiasbledButton] = useState(false)
		function checkedValueFunction (args) {
			setDiasbledButton(args)
			console.log({args});
		}

		const handleClickEvent = (e) => {

		}

	return(
		 <aside className="aside">
		 	{(form ? 
		 		(
		 		<div className="formContainer">
		 			<h2>{introHeading}</h2>
		 			<h3>{formInstructions}</h3>
		 			<Form  inputObjectArray={inputObjectArray}>
		 			</Form>
		 			<label htmlFor="checkboxInput" className="checkboxLabel" onClick={handleClickEvent}>
		 				<Input type="checkbox" className={"checkboxInput"} checkedValueFunction={checkedValueFunction} ></Input>
		 				<span>I accept the <a href="#"> terms and conditions</a></span>
		 			</label>
		 			<button disabled={disabledButton} className={disabledButton ? "btn" : "btn-disabled"} type="submit">CONTINUE </button>
		 			<div className="hrLineDiv"></div>
		 			<span className="returnSpan">
		 			 	<a href="#"><AiOutlineArrowLeft />Return to job vacancies</a>
		 			</span>
		 		</div>
		 		) 
				: (<div className="infoDiv" style={{
					backgroundImage : "url("+loginImg+")"
					}}>
					 <h2>{heading}</h2>
					 <p>{programme}</p>
					 <span>
					 	<a href="#"><AiOutlineArrowLeft />Return</a>
					 </span>
				 </div>)
		 		)

		 	}
		 </aside>
	)
}
export function HomePage (props) {
	const {
		heading,
		programme,
		introHeading,
		formInstructions,
		form
	}= props
	return(
		<div className="homePage">
		<Aside
		heading={heading}
		programme={programme}
		>
		</Aside>
		<Aside
		form={"true"}
		introHeading={introHeading}
		formInstructions={formInstructions}></Aside>
		</div>
	)
}