import "./blueTile.scss"
import {useRef} from "react"
import {useDrag, useDrop} from "react-dnd"


export function Tile (props) {

		const{
			ClassName,
			moveTile,
			index
		} = props

	    const [{ isDragging }, dragRef] = useDrag({
	        type: "tile",
	        item: index,
	        collect: (monitor) => ({
	            isDragging: monitor.isDragging()
	        })
	    })

	    const [spec, dropRef] = useDrop({
	        accept: 'tile',
	        hover: (item, monitor) => {
	            const dragIndex = item.index
	            const hoverIndex = index
	            const hoverBoundingRect = ref.current?.getBoundingClientRect()
	            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
	            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

console.log({dragIndex})
console.log({hoverIndex})
	            // if dragging down, continue only when hover is smaller than middle Y
	            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
	            // if dragging up, continue only when hover is bigger than middle Y
	            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

	            moveTile(dragIndex, hoverIndex)
	            item.index = hoverIndex
	        },
	    })

	     const ref = useRef(null)
    	const dragDropRef = dragRef(dropRef(ref))

	return(
		<div className={ClassName} ref={dragDropRef}>
		</div>
		)
}