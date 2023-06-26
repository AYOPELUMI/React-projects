import {useState,useEffect} from "react"
import "./TimeCounter.scss"
import {TimerCardDisplay} from "./TimerCardDisplay"
import {TimerCounterProject} from "./TimerCounterObject"



export function TimeCounter() {
   	
	const [timerProjects, settimerProjects] = useState([])
	const [timeActive, setTimerActive] = useState(true)
	const [newTimerObject, setAddNewTimerObject] = useState(false)
	const [newTitle, setNewTitle] = useState("")
	const [newProject, setNewProject] = useState("")
	const [timerIndex, setTimerIndex] = useState(0)
		

	function addNewTimerObject(args) {
		setAddNewTimerObject(args)
	}
	function addTimerProjects(args) {
		settimerProjects(args)
	}
	const handleNewTimer = () =>{
		setAddNewTimerObject(true)
	}
	function updateTimeActive (args) {
		setTimerActive(args)
	}
	const handleRemoveTimer = (e) => {
		let index = event.target.getAttribute("index")
		let timerProjectsClone = Array.from(timerProjects)
		console.log({index})
		console.log(timerProjectsClone[index])
		timerProjectsClone.splice(index,1)

		settimerProjects(timerProjectsClone)
	}

	const handleNewTitle = (e) =>{
		let value = e.target.value
		setNewTitle(value)
	}

	const handleNewProject = (e) => {
		let value = e.target.value
		setNewProject(value)
	}


	const handleNewTimerObject = (e) =>{
		e.preventDefault();
		let timerProjectsClone = Array.from(timerProjects)
		let verifiedValue = true

		for (var i = 0; i < timerProjectsClone.length; i++) {
			if (timerProjectsClone[i].intervalId!= 0 && timerProjectsClone[i].timeActive == true) {
				clearInterval(timerProjectsClone[i].intervalId);
			    timerProjectsClone[i].intervalId = 0
			    timerProjectsClone[i].timeActive = false	
			}
		}

		for (var j = 0; j < timerProjectsClone.length; j++) { 
			verifiedValue = false
			console.log({j})
			if (timerProjectsClone[j].title == newTitle && timerProjectsClone[j].project == newProject) {
				verifiedValue = false;
				break;
			}
			else {
			 	verifiedValue = true
			 }
			 console.log({verifiedValue}) 
		}
		console.log({verifiedValue})
		if (verifiedValue == true) {
			let newValue = TimerCounterProject(newTitle, newProject,timerIndex)
			timerProjectsClone.push(newValue)
			settimerProjects(timerProjectsClone)
			setTimerIndex(timerIndex+1)

		}
		else {
			let newValue = TimerCounterProject((newTitle+" -copy"), newProject, timerIndex)
			timerProjectsClone.push(newValue)
			addTimerProjects(timerProjectsClone)
			setTimerIndex(timerIndex+1)
		}
		setNewTitle("")
		setNewProject("")
		addNewTimerObject(false)
	}

	const handleCancelNewTimer = (e) => {
			addNewTimerObject(false)
			setNewTitle("")
			setNewProject("")
	}

	let displayArray =[]
	for (var i = 0; i < timerProjects.length; i++) {
		const project = timerProjects[i]
		console.log({project})
		let el
			 el = (
				<TimerCardDisplay 
					index={i}
					key={project.index}
					TimerIndex={project.index} 
					project={project} 
					newTitle = {newTitle}
					newProject={newProject}
					addNewTimerObject={addNewTimerObject}
					timerProjects={timerProjects}
					addTimerProjects={addTimerProjects}
					updateTimeActive={updateTimeActive}
					timeActive={timeActive}
				/>
				)	
				 
			displayArray.push(el)
	}
	return(
		<div className="timeCounterMainContainer" style ={{
			alignItems : timerIndex ? undefined : "center"
		}}>
			<div className="timeCounterContainer">
				<h2>Timers</h2>
				{ newTimerObject ? 
					<form className="newTimerForm" onSubmit={handleNewTimerObject}>
						<label htmlFor="" className="formInput">
							<h3>Title</h3>
							<input type="text" value={newTitle} onChange={handleNewTitle} required/>
						</label>
						<label htmlFor="" className="formInput">
							<h3>Project</h3>
							<input type="text" value={newProject} onChange={handleNewProject} required/>
						</label>
						<div className="formBtnContainer">
							<button type="submit" >Create</button>
							<button type="button" className="cancelBtn" onClick={handleCancelNewTimer}>Cancal</button>
						</div>
					</form> 
					: (
					 	<div className="addNewTimerBtnContainer">
							<button className="addNewTimerBtn" onClick={handleNewTimer}>+</button>
					 	</div>
					)
				}
				{displayArray}

			</div>
		</div>
	)
}

