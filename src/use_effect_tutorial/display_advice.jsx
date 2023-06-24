import {useEffect, useState} from "react"
import "./display_advice.css"

const getData = async url => {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

export default function AdviceDisplay(){
	const [advice, setAdvice] =useState(null)
	const [secondsLeft, setSecondsLeft] =useState(0)

	async function fetchQuote() {
			const data = await getData('https://api.adviceslip.com/advice')
			const slip = data.slip 
			const advice = {
				id: slip.id,
				advice: slip.advice
			}
			setAdvice(advice)
			setSecondsLeft(10)
		}


		useEffect(() => {
			fetchQuote()
		}, [])



	return(
		<div className="displayMainBody">
		<div className="adviceWrapper">
			{ advice ? (
				<div key={advice.id}>
					<p className="adviceId">{advice.id}</p>
			<h2 className="advice">{advice.advice}
			</h2>
				<div className="progress-bar" style={{ width: '100%',    marginTop: 40}}>
					<span onAnimationEnd={fetchQuote} style={{ display: 'inline-block', height:10, background: 'white', borderRadius: 4 }}></span>
				</div>
				</div>
			): null}
			
		</div>
		</div>
	)
}