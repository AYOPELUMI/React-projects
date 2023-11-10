import "./Summary.scss"
import "./Summary_Mobile.scss"
import {TiTick} from "react-icons/ti"
const FormSummaryArray = ['YOUR INFO','SELECT PLANS','ADD-ONS','SUMMARY']

export function Summary(props){
	const {
		update
	} = props

	let listArray = []
	for (var i = 0; i < FormSummaryArray.length; i++) {
	let style = {}
	if (update == i){
		style = {
			backgroundColor : "hsl(206, 94%, 87%)",
			color : "hsl(243, 100%, 62%)"
		}
	}
	const ListItem = (
		<li key ={i} index={i}>
			<div className="Label_Circle"  index={i} style = {style}>
				{i+1}
			</div>
			<div className="labelInfo">
				<h5 index={i}>STEP {i+1}</h5>
				<p index={i}>
					{FormSummaryArray[i]}
				</p>
			</div>
		
		</li>
		)
	listArray.push(ListItem)
	}
		
	return(
		<div className="Summary_Container">
			<ul>
			{listArray}
			</ul>
		</div>
	)
}