import {useEffect, useState} from "react"
import "./REST.css"
import Countries from "./Countries.js"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {CiDark} from "react-icons/ci"
import {ThemeContextWrapper} from "./ThemeContextWrapper"
import {ThemeContext, themes} from "./ThemeContext.js"
import {CountryTemplate} from "./CountryTemplate"
import {CountryInfoTemplate} from "./CountryInfoTemplate"
import {SearchComponent} from "./SearchComponent"

 const getData = async url => {
	const response = await fetch(url)
	const data = await response.json()
	return data
}


export function REST_Countries() {
	const [welcomePage, setWelcomePage]= useState(0)
	const [left, setLeft] = useState(-100)
	const [darkMode, setDarkMode] = useState(true)
	const [searchedValue, setSearchedValue] = useState("")
		const [open, setOpen] = useState(false);
	const CountryArray= [];
	let newArray =[];
	const [newCountries, setNewCountries] = useState([])
	let countries =[];

	console.log({newCountries})
	const [searchedCountries, setSearchedCountries] = useState([]);
	console.log(searchedCountries)
	const [isSelectedCountry, setIsSelectedCountry] = useState(false);


	// const bodyclick = (event) => {
	// 	for (var i = 0; i < ListArray.length; i++) {
	// 		console.log(ListArray[i].props.children.props.value)
	// 		if (event.target.value != ListArray[i].props.children.props.value && open == true) {
	// 			setOpen(false)
	// 		}
	// 	}	
	// }
	const handleSelectCountry = (event) =>{
		const index = event.target.getAttribute('index')
		const clone =[]
		console.log({index})
		const new_El = searchedCountries[index]

		clone.push(new_El)
		setSearchedCountries(clone)
		setIsSelectedCountry(true)
	}

	const handleGoBackEvent = () => {
		setIsSelectedCountry(false);
		console.log({searchedValue})
		console.log(searchedCountries.length,countries.length,newCountries.length)
		const clone = new Array()
			for (var i = 0; i < newCountries.length; i++) {
				newCountries[i].name.common.search(searchedValue);
				if ( 0 == newCountries[i].name.common.toLocaleUpperCase().search(searchedValue.toLocaleUpperCase())) {
					clone.push(newCountries[i]);
				}
			}
		setSearchedCountries(clone);
		console.log({searchedValue});
	}
	for (var i = 0; i < searchedCountries.length; i++) {
		const props= {
			onClick:handleSelectCountry
		} 
		const Country_El=(
			<CountryTemplate 
				name={searchedCountries[i].name.common}
				Population ={searchedCountries[i].population}
				Capital={searchedCountries[i].capital}
				Region = {searchedCountries[i].region}
				img = {searchedCountries[i].flags.png}
				onClick={handleSelectCountry}
				index={i}
				Key={i}
				isSelectedCountry={isSelectedCountry}
			></CountryTemplate>
			)
		CountryArray.push(Country_El)
	}

	function updateSearchedCountries (args) {
		setSearchedCountries(args)
	}
	function updateIsSelectedCountry (args) {
		setIsSelectedCountry(args)
	}
	function updateSearchedValue (args) {
		setSearchedValue(args)
	}
	function updateOpen(args) {
		setOpen(args)
	}

	async function fetchQuote() {
		const data = await getData('https://restcountries.com/v3.1/all');
			console.log(data)
				countries = data.sort(function(a,b){
					let x = a.name.common.toLowerCase();
					let y = b.name.common.toLowerCase();
					if (x < y) {return -1;}
					if (x > y) {return 1;}
					return 0;
				})
				console.log({countries})
				setNewCountries(countries)
			setSearchedCountries(countries)
		}

	useEffect(() => {
		setTimeout(() => {
			setWelcomePage(100)
			setLeft(0)
		},3000);
	console.log("first Effect")

	fetchQuote();
		
	},[])


	useEffect(() => {
		const handleClick = (e) => {
		  	console.log('window is clicked')
		  	// bodyclick(e)
		}
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])
	
	return(
		<ThemeContextWrapper>
			<div className="REST_Container" onClick={() => {
				if (open == true) {
					setOpen(false)
				}
			}}>
			
				<div className="WelcomePage" style={{
					top: "-"+welcomePage + "%",
				}}>
					WELCOME TO REST COUNTRIES
				</div>
				<div className="REST_BODY" style={{
					left : left +"%",
					position : "relative"
					}}>
					<header className="REST_Header">
						<div>Where in the world?</div>
						<div>
							<ThemeContext.Consumer>
							{({changeTheme}) =>(
								<i color="link"
									onClick={() => {
										setDarkMode(!darkMode)
										changeTheme(darkMode ? themes.light : themes.dark)
									}}
									>
									<CiDark style={{  
									}}> </CiDark>
								</i>
								)}
							</ThemeContext.Consumer> 
							{darkMode ? "Light Mide" :"Dark Mode"}
						</div>
					</header>
					{!isSelectedCountry ? (
						<SearchComponent
							updateSearchedCountries={updateSearchedCountries}
							newCountries={newCountries}
							updateIsSelectedCountry={updateIsSelectedCountry}
							updateSearchedValue={updateSearchedValue}
							mainSearchedValue={searchedValue}
							open={open}
							updateOpen={updateOpen}></SearchComponent>): null}
						<div className={ isSelectedCountry ? "REST_Countries_Container_Selected_Container" : "REST_Countries_Container"}>
							{isSelectedCountry ? (
								<button className="REST_Back_Button" onClick={handleGoBackEvent}>
									<AiOutlineArrowLeft />
								</button>
							): null}
							{searchedCountries.length == "0" ? "Oops, no country found" :CountryArray}
							{isSelectedCountry ? (
								<CountryInfoTemplate country={searchedCountries[0]}
									newCountries={newCountries}
									handleSelectCountry={handleSelectCountry}
									searchedCountries={searchedCountries}
									updateSearchedCountries={updateSearchedCountries}
									updateIsSelectedCountry={updateIsSelectedCountry}>
								</CountryInfoTemplate>
								)
							 : null}
						</div>
				</div> 	
			</div>
		</ThemeContextWrapper>
	)
}