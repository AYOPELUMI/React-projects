import {Input} from "./Input"

export function Form(props){

	const {
		cvcIsValid,
		changeName,
		name,
		CardNumberInput,
		cardNumberInputValid,
		expiryMonthValid,
		expiryYearValid,
		expiryYrValue,
		expiryMthvalue,
		changeExpiryYear,
		changeExpiryMonth,
		cvc,
		changeCvc,
		handleCvcBlur

	} = props;
console.log({cvcIsValid})
	return(
		<form className="validationForm">
			<label className="validationFormLabel">
				CARDHOLDER NAME<br/>
				<Input type="text"  placeholder="e.g AYODEJI PELUMI" className="atmFormInput" maxLength="25" value={name} onChange={changeName} />
			</label>
			<label className="cardNumberLabel validationFormLabel">
				CARD NUMBER <br/>
				<div className="CardNumberDiv">
					{CardNumberInput()}
				</div>
			</label>
			<div className="special">
				<label className="expirydate">
					EXP. DATE(MM/YY)<br/>
					<span className='span'>
				 		<Input type="text" isInvalid={expiryMonthValid === false} placeholder="MM" maxLength="2" className="expiryMonth atmFormInput" value={expiryMthvalue} onChange={changeExpiryMonth} />
				 	</span>
				 		<p>{expiryMonthValid ? null : "not more than 12"}</p>
				 	<span className='span'>
			 			<Input type="text" isInvalid={expiryYearValid === false} placeholder="YY" maxLength="2" className="expiryYear atmFormInput" value={expiryYrValue}  onChange={changeExpiryYear} />
				 	</span>
				 	<p style={{left:"50%"}}>{expiryYearValid ? null : "numeric only"}</p>
				</label>
			
				<label className="validationFormLabel">CVC<br/>
					<Input isInvalid={cvcIsValid === false} onBlur={handleCvcBlur} type="text" placeholder="e.g 123" className="cvcclassName atmFormInput" maxLength="3" value={cvc} onChange={changeCvc} />
					<p>{cvcIsValid ? null : "Numeric only" }</p>
				</label>
			</div>
			<button className="submit" type="button">Confirm</button>
		</form>
	)
}