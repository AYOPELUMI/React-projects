export	function TimerCounterProject(Title, Project, Index){
		// const timerObject = new Object()
		const timerObj = {
			// all my properties here
			title: Title,
			project: Project,
			index: Index,
			intervalId: 0,
			timeActive: false,
			minutes: 0,
			seconds: 0,
			hours: 0,
			time:"0:0:0",
			cardEdit : false,
			titleEdit : false,
			projectEdit : false
		}
		return timerObj
	}