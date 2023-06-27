import {useState, useEffect} from "react"
import data from "./data.json"
// import { ReactComponent as MemoryIcon } from "./assets/images/icon-memory.svg"
import memoryIcon from "./assets/images/icon-memory.svg"
import reactionIcon from "./assets/images/icon-reaction.svg"
import verbalIcon from "./assets/images/icon-verbal.svg"
import visualIcon from "./assets/images/icon-visual.svg"


export function SummaryContainer(argument) {
	let summaryOption =[]
	let iconArray = [reactionIcon,memoryIcon,verbalIcon,visualIcon]
	let backgroundColorArray = ["hsl(0deg 100% 67% / 10%)","hsl(39deg 100% 56% / 10%)","hsl(166deg 100% 37% / 10%)","hsl(234deg 85% 45% / 10%)"]
	let colorArray = ["hsl(0deg 100% 67% / 70%)","hsl(39deg 100% 56% / 70%)","hsl(166deg 100% 37% / 70%)","hsl(234deg 85% 45% / 70%)"]
	for (var i = 0; i < data.length; i++) {
		let Data = data[i]
		let el =(
			<div className="summaryOptionContainer" key={i}  style={{
					background : backgroundColorArray[i]
				}}>
				<div key={i}>
					<img src={iconArray[i]} />

					{/*<svg dangerouslySetInnerHTML={{ __html: Data.icon}}> </svg>*/}
					{/*<img src={Data.icon} />*/}
					<h5 style={{
						color: colorArray[i]
					}}>{Data.category}</h5>
				</div>
				<div>
					<h5>
						{Data.score}
					</h5>
					<p>
						  /100
					</p>
				</div>
			</div>
			)
		summaryOption.push(el)
	}
	return(
		<div className="summaryDivContainer">
			{summaryOption}
		</div>
	)
}