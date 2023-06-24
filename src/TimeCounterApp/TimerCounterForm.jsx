import {useState,useEffect} from "react"
import {TimerCounterProject} from "./TimerCounterObject"

export function TimerCounterForm(props) {

	const [newTitle, setNewTitle] = useState("")
	const [newProject, setNewProject] = useState("")

	const {
		index,
		timerProject,
		addTimerProject,
		cardEdit,
		updateCardEdit
	} = props

  	const handleNewTitle = (e) => {
  		let timerProjectClone = timerProject
		timerProjectClone.titleEdit = false
		let value = e.target.value
		setNewTitle(value)
		timerProjectClone
		addTimerProject(timerProjectClone)
	}

	const handleNewProject = (e) => {
		let timerProjectClone = timerProject
		timerProjectClone.projectEdit = false
		let value = e.target.value
		setNewProject(value)
		addTimerProject(timerProjectClone)
	}

	const handleNewTimerObject = (e) =>{
		e.preventDefault();
		let timerProjectClone = timerProject

		let verifiedValue
			console.log({newTitle})
			console.log({newProject})
			timerProjectClone.title = newTitle ? newTitle : timerProjectClone.title 
			timerProjectClone.project = newProject ? newProject : timerProjectClone.project
			updateCardEdit(!cardEdit)
			timerProjectClone.titleEdit = false
			timerProjectClone.projectEdit = false
			addTimerProject(timerProjectClone) 
		setNewTitle("")
		setNewProject("")
		updateCardEdit(false)
	}

	const handleCancelNewTimer = (e) => {
		let timerProjectClone = timerProject

		if (timerProjectClone.cardEdit) {
			console.log("wassup")
			timerProjectClone.cardEdit = false
			setNewTitle("")
			setNewProject("")
			addTimerProject(timerProjectClone)
		}
		else {
			setNewTitle("")
			setNewProject("")
			
		}
		updateCardEdit(false)
	}


	return (
		<form className="newTimerForm">
			<label htmlFor="" className="formInput">
				<h3>Title</h3>
				<input type="text" index={index} value={timerProject.titleEdit ? timerProject.title : newTitle} onChange={handleNewTitle} required/>
			</label>
			<label htmlFor="" className="formInput">
				<h3>Project</h3>
				<input type="text" index={index} value={timerProject.projectEdit ? timerProject.project : newProject} onChange={handleNewProject} required/>
			</label>
			<div className="formBtnContainer">
				<button type="submit" onClick={handleNewTimerObject} index={index}>Create</button>
				<button type="button" index={index} className="cancelBtn" onClick={handleCancelNewTimer}>Cancal</button>
			</div>
		</form>
	)
}