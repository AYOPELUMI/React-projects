import {BorderComponent} from "./BorderComponent"

export function CountryInfoTemplate (props) {
	const {
	country,
	newCountries,
	updateSearchedCountries,
	updateIsSelectedCountry,
	} = props

	let countryNativeName = []
	let nativeName = country.name.nativeName
	for (const key in nativeName) {
		if (nativeName.hasOwnProperty(key)) {
			
			countryNativeName.push(nativeName[key].common)
		}
		break;
	}


	return(
		<div className="REST_Country_Info">
			<h3>{country.name.common}</h3>
			<p>Native Name : {countryNativeName}</p>
			<p>Population : {country.population}</p>
			<p>Region : {country.region}</p>
			<p>Sub Region : {country.subregion}</p>
			<p>Capital : {country.capital}</p>
			<h2>Borders</h2>
			<BorderComponent 
			country={country}
			newCountries={newCountries}
			updateSearchedCountries={updateSearchedCountries}
			updateIsSelectedCountry={updateIsSelectedCountry}></BorderComponent>

		</div>
	)
}