import "./yellowTile.scss"
import {useDrag} from "react-dnd"

export function YellowTile () {

	 const [{ isDragging }, dragRef] = useDrag({
        type: "tile",
        // item: index,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
	return(
		<div className="yellowTile" ref={dragRef}>
		</div>
		)
}