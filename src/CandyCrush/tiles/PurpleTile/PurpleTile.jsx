import "./purpleTile.scss"
import {useDrag} from "react-dnd"

export function PurpleTile () {

	 const [{ isDragging }, dragRef] = useDrag({
	        type: "tile",
	        collect: (monitor) => ({
	            isDragging: monitor.isDragging()
	        })
	    })

	return(
		<div className="purpleTile" ref={dragRef}>
		</div>
		)
}