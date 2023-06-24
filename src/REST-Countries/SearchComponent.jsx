import {useState} from "react"
import {IoIosArrowDown} from "react-icons/io"

export function SearchComponent (props) {
	const {
		updateSearchedCountries,
		newCountries,
		updateIsSelectedCountry,
		updateSearchedValue,
		mainSearchedValue,
		open,
		updateOpen
	} = props
	const Country_Region = ['Africa','Americas','Asia','Europe','Oceania']
	const ListArray = [];
	const[searchedValue, setSearchedValue] = useState("")

	const handleOpen = () => {
		updateOpen(!open);
	};

	 const handleMenuItem = (event) => {
		let index = event.target.value;
		console.log(index)
		const clone = new Array()
				
				for (var i = 0; i < newCountries.length; i++) {
					if ( 0 == newCountries[i].region.search(index)) {
						clone.push(newCountries[i]);
					}
				}
				updateSearchedCountries(clone);
		updateOpen(false);
  	};

  	const handleSearch = (event) => {
				let value = event.target.value;
				setSearchedValue(value);
				console.log({value})
				updateSearchedValue(value)
				const clone = new Array()
				for (var i = 0; i < newCountries.length; i++) {
					newCountries[i].name.common.search(value);
  					let countryName = newCountries[i].name.common.toLocaleUpperCase()

					if ( 0 == countryName.search(value.toLocaleUpperCase())) {
						clone.push(newCountries[i]);
					}
				}
				console.log({clone})
				updateSearchedCountries(clone);
				updateIsSelectedCountry(false);
	};

	for (var i = 0; i < 5; i++) {
		const ListItem_El=(
			<li className="menu-item" key={i} index={i}>
				<button onClick={handleMenuItem} key={i} index={i} value={Country_Region[i]}>{Country_Region[i]}</button>
			</li>
		)
		ListArray.push(ListItem_El);
	}

	return(
		<div className="REST_Searchbar">
			<input type="search" className="REST_Search" placeholder="search by name" onChange={handleSearch} value={mainSearchedValue}/>
			<div className="dropdown">
				<button onClick={handleOpen} className="REST_dropdown">Filter By Region <IoIosArrowDown /></button>
					{open ? (
						<ul className="REST_menu">
							{ListArray}
						</ul>
					) : null}
			</div>
		</div>
	)
}