export function BorderComponent(props) {
	const {
		country,
		newCountries,
		updateSearchedCountries,
		updateIsSelectedCountry
	} = props
	const bdrArray = []
	

	const handleSelectBorderCountry = (event) =>{
		let index = event.target.getAttribute('index')
		const clone =[]
		index = Number(index)
		const new_El = newCountries[index]
		console.log({new_El})
		clone.push(new_El)
		updateSearchedCountries(clone)
		updateIsSelectedCountry(true)
	}

	if (country.borders != undefined) {
		if (country.borders.length >= 1) {

			for (var i = 0; i < country.borders.length; i++) {

				let searchedValue = country.borders[i].toLocaleUpperCase()
				console.log({searchedValue})
				for (var j = 0; j < newCountries.length; j++) {
		  			if (0 ==newCountries[j].cca3.search(searchedValue)) {
						const bdr_El = <button key={j} value={newCountries[j]} onClick={handleSelectBorderCountry} index={j} >{newCountries[j].name.common.toLocaleUpperCase()}</button>
						bdrArray.push(bdr_El)
						console.log({bdr_El})
						break;
		  			}
		  			let countryName = newCountries[j].cioc ? newCountries[j].cioc : newCountries[j].cca3
					if ( 0 == countryName.search(searchedValue)) {
						const bdr_El = <div>{countryName}</div>

						bdrArray.push(bdr_El)
						console.log({bdr_El})
						break;
					}
				}
			}
		}
	}
	else
	{
		console.error("no borders")
		bdrArray.push("No border Country")
	}
	return (
		<div>{bdrArray}</div>
	)
}