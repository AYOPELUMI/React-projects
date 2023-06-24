import  "./Header.scss"
import logo from "./UBA-Logo.svg"
export function Header () {

	return(
		<div className="ubaHeader">

				<h2 className="websiteName">UBA Career</h2>
				<img className="logo" src={logo} alt="uba_logo" />
		</div>
	)
}