export function TimerCardDisplay() {
		let displayArray =[]
	for (var i = 0; i < timerProjects.length; i++) {
		const el = (
			<div key={i} index={i} className="displayTimerContainer">
				<div>
					<h2>{timerProjects[i].title}</h2>
					<h3>{timerProjects[i].project}</h3>
				</div>
				<div className="timerDisplay">{timerProjects[i].time}</div>
				<div className="timerProjectBtnContainer">
					<button type="button" onClick={handleEditTimer} index={i}>Edit</button>
					<button type="button" onClick={handleRemoveTimer} index={i}>Remove</button>
				</div>
				<button type="button" className={timerProjects[i].timeActive ?"timerContollerBtnActive" : "timerContollerBtnDefault"} index={i}  onClick={handleToggleTimer}>{timerProjects[i].timeActive ? "Stop" : "Start"}</button>
			</div>)
			displayArray.push(el)
	}
	return(
		{displayArray}
	)
}