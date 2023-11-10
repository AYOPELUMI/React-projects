import "./Button_Component.scss"
import "./Button_Component_mobile.scss"

export function ButtonComponent(props){
	const {
		HandleEvent,
		DisplayWord,
		update,
		HandleGoBackEvent,
		bgColor
	} = props
	console.log({bgColor})
	return (
		<div className="ButtonContainer" style={{
			justifyContent : HandleGoBackEvent ? "space-between" : "end",
			marginTop : update == 1 ? "30px" : undefined
		}}>
	 		{HandleGoBackEvent ?(
		 		<p className="GOBackButton" onClick={HandleGoBackEvent}>Go Back</p>
	 			) : null}
	 		<button type="button" style={{ background : bgColor ? "#483ef4"  : "#03295a"}} className="Next_Button" onClick={HandleEvent}>{DisplayWord}</button> 
	 	</div>
	)
}