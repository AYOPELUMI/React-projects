import "./Footer.scss"
	const footerLinks = [
		{
			name: "Terms of Use",
			link : "#",
			index: 0
		},
		{
			name :"Privacy Policy",
			link : "#",
			index: 1
		},
		{
			name: "website",
			link : "#",
			index : 2
		}
	]
	function FooterLinks (props) {
		const {
			footerLinks
		} = props
		console.log({footerLinks})
		let footer = []
			for (var i = 0; i < footerLinks.length; i++){
			let el = <span className="footerLinksSpan" index={i} key={i}>
						<a  className="footerLinks"  href= {footerLinks[i].link}>{footerLinks[i].name}</a>
						|
					</span>

			footer.push(el)
				}
		console.log({footer})
		return(
			<div>
			{footer}</div>
			)
	}

export function Footer () {
	
	return(
		<div className="Footer">
			<nav>Copyright 2023 All rights reserved.</nav>
			<FooterLinks footerLinks = {footerLinks} ></FooterLinks>
		</div>
	)
}