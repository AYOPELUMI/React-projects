import {Tile} from "./tiles/BlueTile/BlueTile"
import {GreenTile} from "./tiles/GreenTile/GreenTile"
import {RedTile} from "./tiles/RedTile/RedTile"
import {YellowTile} from "./tiles/YellowTile/YellowTile"
import {PurpleTile} from "./tiles/PurpleTile/PurpleTile"
import {GameFloor} from "./gameFloor/GameFloor"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {useDrag} from "react-dnd"

export function CandyCrush () {

	return(
		<DndProvider backend={HTML5Backend}>
			<div style ={{
				width:'100%',
				display: 'flex',
				height : '100%'
			}}>
				<GameFloor />
			</div>
		</DndProvider>
	)
}