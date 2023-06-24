import {useEffect, useState} from "react"
import {Header} from "./components/Header"
import {Intro_Section} from "./components/IntroductionSection"
import {BodyGallery} from "./components/BodyGallery"
import {LocationDisplay} from "./components/LocationsDisplay"
import {Staff_Component} from "./components/Staff_Component"
import {BMICalculator} from "./components/BMI_Component"
import {Footer} from "./components/Footer"
import 	"./css/index.css"


const menuitems = ['Home','Event','Staff','Profiles','Services'];
const themeClass = ["bi bi-moon-fill darkMode","bi bi-brightness-high lightMode"];

export function Website(){

	const [smlScrMenuCtnrHeight, setSmlScrMenuHeight] = useState(0)
	const [themeIndex, setThemeIndex] = useState(0);

	const menu = () =>{
		const menuArray =[];
		for (var i = 0; i < 5; i++) {
			const menuElement = (
			<div className="headerLinkContainer" key={i}>
				<a className="headerLink" index={i}>{menuitems[i]}</a>
			</div>
			)
			menuArray.push(menuElement);
		}
		return menuArray;
	}

	const theme =() =>{
		const menuArray=[];
		for (var i = 0; i < 2; i++) {
			let display='none';
			if (themeIndex === i) {
			   display = 'block'
			}
			const menuElement = (
				<i className={themeClass[i]} index={i} key={i} onClick={onThemeChange} style={{
					display : display
				}}></i>
			)
			menuArray.push(menuElement);
		}
		return menuArray;
	}

	const smallMenu = () =>{
		 const menuArray = [];
		for (var i = 0; i < 5; i++) {
			const menuElement= (
				<div className="smallScreenHeaderLinkContainer" key={i}>
				<a className="smallScreenHeaderLink" index={i} onClick={onMenuChange} key={i}>{menuitems[i]}</a>
			</div>
			)
			menuArray.push(menuElement);
		}
		return menuArray;
	}

	const onMenuChange = () => {
		if (smlScrMenuCtnrHeight == 0) {
		setSmlScrMenuHeight(260);
		}
		else{
			setSmlScrMenuHeight(0);
		}
	}

	const onThemeChange = (event) =>{
		console.log("themeChange")
		const theme = event.target.getAttribute('index')
		setThemeIndex(themeIndex)
		console.log(theme)

		if (theme == 0) {
			document.documentElement.setAttribute('data-theme', 'dark')
			setThemeIndex(1)
		}
		else{
			setThemeIndex(0)
			document.documentElement.setAttribute('data-theme', 'light')
		}
	}


	return(
		<div className="DigitalContainer">
			<Header
				menu={menu}
				theme={theme}
				smlScrMenuCtnrHeight={smlScrMenuCtnrHeight}
				smallMenu={smallMenu}
				onMenuChange={onMenuChange}
			></Header>
			<Intro_Section></Intro_Section>
			<BodyGallery></BodyGallery>
			<LocationDisplay></LocationDisplay>
			<Staff_Component></Staff_Component>
			<BMICalculator></BMICalculator>
			<Footer></Footer>
		</div>		
	)
} 