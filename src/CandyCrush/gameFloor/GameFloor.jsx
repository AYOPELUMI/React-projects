import "./gameFloor.scss"
import{useDrop} from "react-dnd"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState, useCallback, useEffect } from 'react'
import {Tile} from "../tiles/BlueTile/BlueTile"

	let displayTile = []
	let tileArray = ["green","blue","red","purple","yellow"]
 
	for (var i = 0; i <9; i++) {
		let randomIndex = Math.floor(Math.random() * 5)
		displayTile.push(tileArray[randomIndex])
	}

export function GameFloor(){
	const[gameBoard, setGameBoard] = useState([])
	let newDisplayTile = []

	const moveTile = useCallback(
        (dragIndex, hoverIndex) => {
        	console.log({ dragIndex, hoverIndex })
            const dragItem = gameBoard[dragIndex]
            const hoverItem = gameBoard[hoverIndex]
            // Swap places of dragItem and hoverItem in the pets array
            setGameBoard(gameBoard => {
                const updatedGameBoard = [...gameBoard]
                updatedGameBoard[dragIndex] = hoverItem
                updatedGameBoard[hoverIndex] = dragItem
                return updatedGameBoard
            })
        },
        [gameBoard],
    )


	// newDisplayTile = displayTile.map((item = tileArray[randomIndex], index) => ( 
	// 	<Tile index={index} ClassName={item} moveTile={moveTile}>"hello"+{item}</Tile>
	// ))
		
	// 	let gameboard = []
	// for (var i = 0; i < 64; i++) {
	// 	let row = []
	
	// 		let El = {
	// 			style : style,
	// 			index : value
	// 		}
	 
	// 	gameboard.push(El)
	// }
	// console.log({displayTile})
	// newDisplayTile = gameboard.map((item, index) => {
	// 	<div className="gameFloorTile" style={item.style} index={item.index}>
	// 	// {JSON.stringify(index)}
	// 		<Tile index={index} ClassName={displayTile[index]} moveTile={moveTile}></Tile>
	// 	</div>
	// })
	for (var i = 0; i < 9; i++) {
		let El = (
				<div className="gameFloorTile" key={i} index={i}>
					<Tile index={i} ClassName={displayTile[i]} moveTile={moveTile}> </Tile>
				</div>
			)
		newDisplayTile.push(El)
	}
	useEffect(() => {
		setGameBoard(newDisplayTile)
	},[])

	return (
		<div className="gameBoard">
		{gameBoard}
		</div>
	)
}