import "./redTile.scss"
import {useDrag} from "react-dnd"

export function RedTile () {

	 const [{ isDragging }, dragRef] = useDrag({
	        type: "tile",
	        // item: index,
	        collect: (monitor) => ({
	            isDragging: monitor.isDragging()
	        })
	    })

	return(
		<div className="redTile" ref={dragRef}>
		</div>
		)
}