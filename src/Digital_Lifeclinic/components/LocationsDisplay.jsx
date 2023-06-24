import "../css/LocationsDisplay.css"
import img1 from "../assets/Location img/img1.jpg"
 import img2 from "../assets/Location img/img2.jpg"
 import img3 from "../assets/Location img/img3.jpg"

export function LocationDisplay () {
	return(
		<div className="smallScreenLocationDisplay">
			<button></button>
			<div className="LocationDisplayContainer">
				<div className="LocationContainer">
					<div className="Location-Image">
					<img src={img1} alt="" />
					</div>
					<div className="Location-Info">
						<h2>LOCATION 1</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex et odio asperiores itaque dolorum voluptates voluptate labore distinctio soluta aspernatur quaerat aut velit id esse neque, minima corrupti recusandae odit.</p>
					</div>
				</div>
				<div className="LocationContainer">
					<div className="Location-Image">
					<img src={img2} alt="" />
					</div>
					<div className="Location-Info">
					    <h2>LOCATION 2</h2>
					    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex et odio asperiores itaque dolorum voluptates voluptate labore distinctio soluta aspernatur quaerat aut velit id esse neque, minima corrupti recusandae odit.</p>
					</div>
				</div>
				<div className="LocationContainer">
					<div className="Location-Image">
					<img src={img3} alt="" />
					</div>
					<div className="Location-Info">
						<h2>LOCATION 3</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex et odio asperiores itaque dolorum voluptates voluptate labore distinctio soluta aspernatur quaerat aut velit id esse neque, minima corrupti recusandae odit.</p>
					</div>
				</div>
			</div>
		</div>
	)
}