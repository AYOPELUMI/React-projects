import "../css/header.css"

export function Header(props){
	const{
		menu,
		theme,
		smlScrMenuCtnrHeight,
		smallMenu,
		onMenuChange
	} = props;
	return(
		<div>
			<header className="digitalHeader">
				<div className="navLogo">
					<a className="homeLogo">Lifeclinic</a>
				</div>
				<nav className="menu">
					{menu()}				
				</nav>
				<div className="themechange">
					{theme()}
				</div>
				<div className="extraMenu" onClick ={onMenuChange}>
		  					<div className="bar1"></div>
		  					<div className="bar2"></div>
		  					<div className="bar3"></div>
				</div>

				<button className="button headerButton">
						Contact Us
				</button>
			</header>
			<div className="smallerScreenMenuContainer" style={{
				height : smlScrMenuCtnrHeight
				}}>
				<nav className="smallerScreenMenu">
					{smallMenu()}	
					<button className="button smallScreenheaderButton">
						Contact Us
					</button>			
				</nav>
			</div>
		</div>
	)
}