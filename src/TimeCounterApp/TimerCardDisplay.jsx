import {TimerCounterForm} from "./TimerCounterForm"
import {useRef, useState, useEffect} from "react"

export function TimerCardDisplay(props) {
	const {
		project,
		index,
		onRemove,
		TimerIndex,
		onToggleTimer,
		addNewTimerObject,
		timerProjects,
		addTimerProjects,
		updateTimeActive,
		timeActive
	} = props
	const [timerCounterIndex, setTimerCounterIindex] = useState(null)
	const refContainer = useRef(null)
	const [timer, setTimer] = useState(project.time)
	const [timerProject, setTimerProject] = useState(project)
	const [timerActive, setTimerActive] = useState(project.timeActive)
	const [timerProjectName, setTimerProjectName] = useState("")
	const [timerProjectTitle, setTimerProjectTitle] = useState("")
	const [cardEdit, setCardEdit] = useState(false)

 	const renderForm = () => {
		return (
			<TimerCounterForm
				index={index}
				addNewTimerObject={addNewTimerObject}
				timerProjects={timerProjects}
				addTimerProjects={addTimerProjects}
				addTimerProject={addTimerProject}
				timerProject = {timerProject}
				cardEdit= {cardEdit}
				updateCardEdit = {updateCardEdit}
			>
			</TimerCounterForm>
		)
	}

	function updateCardEdit (args) {
		setCardEdit(args)
	}

	const handleEditTimer =(e) => {
		e.preventDefault()
		console.log("wassup")
		let timerProjectClone = timerProject

			if (timeActive == true) {
				clearInterval(refContainer.current)
				timerProject.timerActive = false
				setTimerActive(false)
			}
		  timerProjectClone.cardEdit = !timerProjectClone.cardEdit
		  timerProjectClone.titleEdit = true
		  timerProjectClone.projectEdit = true
		  console.log({timerProjectClone})
		  setCardEdit(!cardEdit)
		  setTimerProject(timerProjectClone)
	}
	console.log({timerProject})
	function checkTitleAndProject (argument) {
		if (timerProjectName != project.project && timerProjectTitle != project.title) {
			setTimerProject(project)
			setTimerProjectTitle(project.title)
			setTimerProjectName(project.project)
			setTimer(project.time)
			setTimerActive(project.timeActive)

		}
	}
	function addTimerProject (args) {
		setTimerProject(args)
	}

	checkTitleAndProject();

			// if (timerProject.timeActive == false) {
			// 	refContainer.current = setInterval(() => {
			// 		let minutes = timerProject.minutes;
			// 		 let hours = timerProject.hours
			// 		 let seconds = timerProject.seconds
			// 		seconds +=1
			// 		if(seconds > 59) {
			// 			minutes =minutes + 1;
			// 			seconds = 0
			// 		}
			// 		if (minutes > 59) {
			// 			hours = hours + 1;
			// 			minutes = 0
			// 		}
			// 		// console.log(activeTimerObject.timeActive)
			// 		let time = hours  + ":" + minutes +":"+ seconds;
			// 		timerProject.timeActive = true
			// 		timerProject.time = time
			// 		setTimer(time)
			// 		timerProject.minutes = minutes
			// 		timerProject.seconds = seconds
			// 		timerProject.hours = hours
			// 		setTimerActive(true)
			// 		setTimerProject(timerProject)
			// 		// console.log({activeTimerObject})
			// 	}, 1000)
			// }

		const handleToggleTimer = (e) => {
			let activeTimerObject = timerProject
			let minutes= 0
			let seconds = 0
			let hours = 0
			if (activeTimerObject.timeActive == false) {
				refContainer.current = setInterval(() => {
					 minutes = activeTimerObject.minutes;
					 hours = activeTimerObject.hours
					 seconds = activeTimerObject.seconds
					seconds +=1
					if(seconds > 59) {
						minutes =minutes + 1;
						seconds = 0
					}
					if (minutes > 59) {
						hours = hours + 1;
						minutes = 0
					}
					// console.log(activeTimerObject.timeActive)
					let time = hours  + ":" + minutes +":"+ seconds;
					activeTimerObject.timeActive = true
					activeTimerObject.time = time
					setTimer(time)
					activeTimerObject.minutes = minutes
					activeTimerObject.seconds = seconds
					activeTimerObject.hours = hours
					setTimerActive(true)
					setTimerProject(activeTimerObject)
					// console.log({activeTimerObject})
				}, 1000)
			}
			else {
				clearInterval(refContainer.current)
				activeTimerObject.timeActive = false
				setTimerProject(activeTimerObject)
				setTimerActive(false)
			}
	}

	const removeTimer = () => {
		let timerProjectsClone = Array.from(timerProjects)
		if (timeActive == true) {
			clearInterval(refContainer.current)
			setTimerActive(false)
		}
		timerProjectsClone.splice(index,1)
		addTimerProjects(timerProjectsClone)
	}
	return(
		<div key={index} index={TimerIndex} >
			{ cardEdit  ? renderForm()
				:

				<div  index={TimerIndex} key={TimerIndex} className="displayTimerContainer">

					<div className="titleProjectContainer">
						<h2>{project.title}</h2>
						<h3>{project.project}</h3>
					</div>
					<div className="timerDisplay">{timer}</div>
					<div className="timerProjectBtnContainer">
						<button type="button" onClick={handleEditTimer} index={TimerIndex}>Edit</button>
						<button type="button"  onClick={removeTimer} index={TimerIndex}>Remove</button>
					</div>
					<button type="button" className={timerActive ? "timerContollerBtnActive" : "timerContollerBtnDefault"} index={TimerIndex}  onClick={handleToggleTimer}>{timerActive ? "Stop" : "Start"}</button>
				</div>
			}
		</div>
	)
}