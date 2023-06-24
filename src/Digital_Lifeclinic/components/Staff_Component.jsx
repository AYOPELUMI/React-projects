import "../css/Staff_Component.css"
import staff from "./staff.js" 

	
	console.log(staff)

export function Staff_Component(){

	const staffArray = []

	for (var i = 0; i < staff.length-1; i++) {
	
		const Staff_El =(
			<div className="StaffContainer" key={i} index={i} >
				<img src={staff[i].image} alt="" key={i} />
				<div className="staff_Info" key={i} index={i}>
					<h2>{staff[i].name}</h2>
					<h3>{staff[i].Post}</h3>
					<p>{staff[i].Quote}</p>
				</div>
				<div className="staff_Icon" key={i}>
				</div>
			</div>
		)
		staffArray.push(Staff_El);
	}

	return(
			<div className="snallScreenStaffMainContainer">
				<div className="StaffMainContainer">
				{staffArray}
			</div>
		</div>
	)
}