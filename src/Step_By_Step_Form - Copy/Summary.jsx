import "./Summary.scss"
import {TiTick} from "react-icons/ti"
const FormSummaryArray = ['YOUR INFO','SELECT PLANS','ADD-ONS','SUMMARY']

export function Summary(props){
	const {
		update,
		verificationTickPersonalInfo,
		verificationTickPlan,
		verificationTickAddOns
	} = props

	let verificationArray = [verificationTickPersonalInfo,verificationTickPlan,verificationTickAddOns]
	let listArray = []
	console.log({verificationTickPersonalInfo})
for (var i = 0; i < FormSummaryArray.length; i++) {
	let style = {}
	if (update == i){
		style = {
			backgroundColor : "#bee2fa",
			color : "#092957"
		}
	}
	const ListItem = (
		<li key ={i} index={i}>
			<div className="Label_Circle"  index={i} style = {style}>
				{i+1}
			</div>
			<div style={{display:"flex",flexDirection:"column",width:'fit-content'}}>
				<h5 index={i} style={{color : "#bee2fa", letterSpacing : "1px"}}>STEP {i+1}</h5>
				<p index={i}>
					{FormSummaryArray[i]}
				</p>
			</div>
			{verificationArray[i] ? <TiTick className="verifyDiv"/>: null}
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