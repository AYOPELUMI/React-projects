import  "../css/BMI_Component.css"



export function BMICalculator(){
	return (
		<div className="Calc_BMi">
			<aside className="BMI_Calc">
			<form action="">
				<label htmlFor="height" className="form_Label"> Height
					<input type="text" name="height" className="BMI_CalcInput" placeholder="cm"/>
				</label>
				<label htmlFor="weight" className="form_Label"> Weight
					<input type="text"  name="weight" className="BMI_CalcInput" placeholder="kg"/>
				</label>
				<div className="form_ButtonContainer">
				<button className="form_Button" type="button">Calculate</button>
				<button className="form_Button" type="button">Reset</button>
				</div>
			</form>
			</aside>
			<aside className="BMI_Result">
			</aside>
		</div>
	)
}