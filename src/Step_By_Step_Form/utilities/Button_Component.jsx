import "./Button_Component.scss"

export function ButtonComponent(props){
	const {
		HandleEvent,
		DisplayWord,
		update,
		HandleGoBackEvent,
		bgColor
	} = props
	return (
		<div className="ButtonContainer"style={{
			justifyContent :HandleGoBackEvent ? "space_between" : "end"
		}}>
	 		{HandleGoBackEvent ?(
		 		<p className="GOBackButton" onClick={HandleGoBackEvent}>Go Back</p>
	 			) : null}
	 		<button type="button" style={{ background : bgColor ? "#483ef4"  : undefined}} className="Next_Button" onClick={HandleEvent}>{DisplayWord}</button> 
	 	</div>
	)
}