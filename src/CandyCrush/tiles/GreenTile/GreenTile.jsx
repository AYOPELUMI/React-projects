import "./greenTile.scss"
import {useDrag} from "react-dnd"

export function GreenTile () {

		
	    const [{ isDragging }, dragRef] = useDrag({
	        type: "tile",
	        // item: index,
	        collect: (monitor) => ({
	            isDragging: monitor.isDragging()
	        })
	    })


	return(
		<div className="greenTile" ref={dragRef}>
		</div>
		)
}