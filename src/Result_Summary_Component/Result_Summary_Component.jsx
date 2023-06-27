import {SummaryContainer} from "./SummaryContainer"
import "./Result_Summary_Component.scss"
export function ResultSummaryComponent () {
	return(
		<div className="resultSummaryMainContainer">
			<div className="resultSummaryContainer">
				<aside className="displayContainer">
					<h2>Your Result</h2>
					<div className="resultCircleContainer">
						<h2>43</h2>
						<p>of 100</p>
					</div>
					<h3>Great</h3>
					<p>You have scored higher than 65% of people who have taken these tests</p>
				</aside>
				<aside className="summaryContainer">
					<h2>Summary</h2>
					<SummaryContainer />
					<button>continue</button>
				</aside>
			</div>
		</div>
	) 
}