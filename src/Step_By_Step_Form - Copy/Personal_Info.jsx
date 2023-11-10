import {useState, useEffect} from "react"
// import country from "./utilities/Get_Country_Images.js"
import {IoIosArrowDown} from "react-icons/io"
import {ButtonComponent} from "./utilities/Button_Component"
import './Personal_Info.scss'

export function Personal_Info(props){


	const {
		HandleFormValidity,
		update,
		HandlePhoneNumber,
		PersonalInfo,
		PersonalInfo_Object
	} = props	

	const [nameValue, setNameValue] = useState(PersonalInfo_Object.name);
	const [nameValidity, setNameValidity] = useState(true)

	const [emailValue, setEmailValue] = useState(PersonalInfo_Object.email);
	const [emailValidity, setEmailValidity] = useState(true)

	const [countrysearchvalue, setCountrySearchValue] = useState(PersonalInfo_Object.countryCode)
	const [IsCountryCodeValid, setIsCountryCodeValid] = useState(true)

	const [phoneNumberValue, setPhoneNumberValue] = useState(PersonalInfo_Object.phoneNumber)
	const [phoneNumberValidity, setPhoneNumberValidity] = useState(true)

	const [FilteredCountry, setFilteredCountry] = useState([])
	const [CountryList, setCountryList] = useState(false)

	const [DisplayedCountry, setDisplayedCountry] = useState([]);
	const [isDropValid, setIsDropValid] = useState(false)
	const [isFormValid, setIsFormValid] = useState("")
	const [validateClick, setValidateClick] = useState(0)

	
		const handleName = (event) => {
		let value = event.target.value;
		setNameValidity(true)
		if (!(value.match(/\d+/)) && value.length < 35) {
			setNameValue(value.toUpperCase());
		}
	}

	const handleEmail = (event) => {
		let value = event.target.value;
		setEmailValue(value);
		for (var i = 0; i < emailValue.length; i++) {
			if ("@" == emailValue[i]){
				setEmailValidity(true)
				break;
			}
			else {
				setEmailValidity(false)
			}
		}
	}

	function handleEmailValidity (){
			console.log({emailValue})
		if (!(isNaN(emailValue))){
			setEmailValidity(false)
		}
	}

	function HandleNameValidity () {
		if (nameValue.length == 0){
			setNameValidity(false)
		} 
	}

	const handlePhoneNumber = (event) =>{
		let value = event.target.value; 
		if (value.length <= 10) {
			setPhoneNumberValidity(true)
			setPhoneNumberValue(value);
			
			if (!(Number(countrysearchvalue))) {
				setIsCountryCodeValid(false);
			}
			else{
				setIsCountryCodeValid(true)
			}
		}
	}

	const handleSubmitForm = () => {
		setIsFormValid(!isFormValid)
		handleEmailValidity();
		console.log({emailValidity})
		if (phoneNumberValue.length == 0 ) {
			setPhoneNumberValidity(false)
			setIsCountryCodeValid(false)
		}
		HandleNameValidity();
		setValidateClick(1)
		console.log({nameValidity})
	}



	const handleSelectCountry = (event) => {
		event.preventDefault()
		let index = event.target.getAttribute("index")
		let clone = []
		let countryId = DisplayedCountry[index].idd
		let countrySuffix = countryId.suffixes
		let newValue = Number(countryId.root)+ countrySuffix
		
		clone.push(DisplayedCountry[index])
		setFilteredCountry(clone)
		setCountryList(false)
		setIsDropValid(false)
		setCountrySearchValue(newValue)
	}

	const handleCountrySearch = (event) =>{
		let clone = [];
		let clone1 =[];
		let value = event.target.value
		setIsCountryCodeValid(true)
		setCountryList(true)
		setFilteredCountry([])
			
		if (value.length <= 3) {
			for (var i = 0; i < country.length; i++) {
				let countryId = country[i].idd
				if (Object.keys(countryId).length >=1) {
					const nan = Number(countryId.root)
					if (value.length == 1) {
						if (nan ==value) {
							clone.push(country[i])
							clone1.push(country[i])
						}
					}
						let countrySuffix = countryId.suffixes
					if (value.length > 1) {
						if (countrySuffix.length >= 1) {
							
							for (var J = 0; J < countrySuffix.length; J++) {
								let newValue = nan + countryId.suffixes[J]
								
								if (value == Number(newValue)) {
									clone.push(country[i])
									clone1.push(country[i])
									break;

								}
							if (nan == value[0]) {
								for (var k = 0; k < countrySuffix.length; k++) {
									let newValue = nan + countryId.suffixes[k]
									if (value[1] == newValue[1]) {
										if (value[k+1] == newValue[k+1]) {
											clone1.push(country[i])
											break;

										}

									}
								}
								
							}
							}
						}
					}
				}
				else{
					i++
				}
				
			}

		
				setFilteredCountry(clone)
				setDisplayedCountry(clone1)
		
				setCountrySearchValue(value)
		}
	}

	function CheckFilteredCountyLength(){
		
		if (FilteredCountry.length == 1) {
			setCountryList(false)
		}
	}
	useEffect(() => {
		CheckFilteredCountyLength();	
		// window.addEventListener('click', handleClick)
		// return () => {
		// 	window.removeEventListener('click', handleClick)
		// }
	}, [FilteredCountry])

	useEffect(() => {
		console.log("All form is validated")
		console.log({isFormValid})
		let phoneNumber= countrysearchvalue +phoneNumberValue
		if (validateClick==1) {
			console.log("click is :"+validateClick)
			console.log({isFormValid})
			console.log({emailValidity})
			console.log({nameValidity})
			console.log({phoneNumberValidity})
			if (emailValidity== true && nameValidity == true&& phoneNumberValidity == true&& IsCountryCodeValid== true) {
				console.log("everything is true")
				HandleFormValidity(true)
				PersonalInfo([nameValue,emailValue,countrysearchvalue,phoneNumberValue])
			}
			setValidateClick(0)
		}
		if (emailValidity == true) {
			console.log({emailValidity})
		}
		if (isFormValid== false) {
			console.log({isFormValid})
			console.log({emailValidity})
			console.log({nameValidity})
			console.log({phoneNumberValidity})

		}
	}, [isFormValid])

// if (isFormValid) {
// 	console.log({isFormValid})
// 	HandleFormValidity(true)
// }

	const Country_Image = []
	
	for (var i = 0; i < FilteredCountry.length; i++) {
		const Country_El = (
			<div className="img_Container" index={i} key={i}>
				<img src={FilteredCountry[i].flags.png} alt="" index={i} key={i} />
			</div>
			)

		Country_Image.push(Country_El)
	}
	 let DisplayedCountryArray = []
	for (var i = 0; i < DisplayedCountry.length; i++) {
		const DisplayCountry_El = (
			<li index={i} key={i}>
				<img src={DisplayedCountry[i].flags.png} alt="" index={i} key={i} onClick={handleSelectCountry}/>
			</li>
			)
		DisplayedCountryArray.push(DisplayCountry_El)
	}


	const handleDropdown = () =>{
		setIsDropValid(!isDropValid);
	}

	return(
		<div className='Personal_Info_Container'>
			<div className='Personal_Info_Heading_Container'>
				<h2>Personal info</h2>
				<p>Please provide your name, email address and phone number</p>
			</div>
			<form action="">
				<label htmlFor="">
					<p>Name</p>
					<input type="text" className="form_input" placeholder="e.g Stephen King" value={nameValue} onChange={handleName} style={{
						borderColor : nameValidity === false ? "red" : undefined
					}} />
					{nameValidity ? null : (
							<p style={{
								color : "red",
								fontSize :'14px'
							}}>
								fill this please
							</p>
						)}
				</label>
				<label htmlFor="">
					<p>Email Address</p>
					<input type="email" className="form_input" placeholder="e.g stephenKing@lorem.com" value={emailValue} onChange={handleEmail} style={{
						borderColor : emailValidity === false ? "red" : undefined 
					}} />
					{emailValidity ? null : (
							<p style={{
								color : "red",
								fontSize :'14px'
						}}>fill this please</p>
						)}
				</label>
				<label htmlFor="">
					<p>Phone Number</p>
					<div className="input_img_Container" style={{
						overflow: isDropValid === true ? "unset" : 'hidden'
					}}>
						{CountryList ? (
							<div className="DropDown_Container" style={{
								alignItems: isDropValid ? "end" : "center"
							}}>
								<ul  style={{
									position : isDropValid ? "absolute" : "relative", 
									gap : isDropValid ? "18px" : undefined,
									alignItems: isDropValid ? "center" : "end" 
								}}>
									{DisplayedCountryArray}
								</ul>
								<IoIosArrowDown  onClick={handleDropdown} style={{
									alignSelf: "center",
									width:"25%",
									position : isDropValid === true ? "absolute" : "relative",
									left : isDropValid === true ? "85%" : undefined
								}} />
							</div>
								): (
									<div className="input_img" >
										{Country_Image}
									</div>
								)}
						<div>+</div>
						<input type="number" className="Search_Country_Code form_input" placeholder="111"  value={countrysearchvalue} onChange={handleCountrySearch} style={{
							borderColor: IsCountryCodeValid === false ? 'red' : undefined
						}}/>
						{IsCountryCodeValid ? null : (
							<p style={{
								color : "red",
								position :'absolute',
								top: "85%",
								left :'26%',
								fontSize :'14px'
							}}>fill this please</p>
						) }
						<input type="number" maxLength="10" className="form_input countryPhoneNumber" placeholder="e.g +1 234 567 890" value={phoneNumberValue} onChange={handlePhoneNumber} style={{
							borderColor: phoneNumberValidity === false ? 'red' : undefined
						}} />
						{phoneNumberValidity ? null : (
							<p style={{
								color : "red",
								position :'absolute',
								top: "85%",
								left :'47%',
								fontSize :'14px'
							}}>fill this please</p>
						)}
					</div>					
				</label>
				<ButtonComponent 
					HandleEvent={handleSubmitForm}
					DisplayWord = "Next Step"
					update = {update}
				></ButtonComponent>
				</form>
		</div>
	)
}