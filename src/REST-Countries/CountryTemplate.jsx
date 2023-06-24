
export function CountryTemplate (props) { 
		const { 
			name, 
			Population, 
			Capital,
			Region,
			img,
			timezones,
			Language,
			coat_of_arm,
			borders,
			subRegion,
			currencies,
			onClick,
			index,
			Key,isSelectedCountry
		} = props; 
		return(
		<div className="REST_Countries_Div">
			{isSelectedCountry ? 
				<button className="selected_Country"  index={index} key={Key}>
					<img src={img} alt="" index={index}/> 
				</button> :
				
				<button className={isSelectedCountry ? "selected_Country": "Country_Container"} onClick={onClick} index={index} key={Key}>
					<img src={img} alt="" index={index}/> 
							<h3 className="Country_Name" style={{ textAlign :name.length>16 ? "center": undefined}} index={index}>{name}</h3> 
							<div index={index}>
								<h3 index={index}><strong>Population: </strong>{Population}</h3>
								<h3 index={index}><strong>Region: </strong>{Region}</h3>
								<h3 index={index}><strong>Capital: </strong>{Capital}</h3>
							</div>
				 </button> 
								}

		</div> 
		) 
	}