import "./card_hover.css"


const capitalizeFirstCharacter = (string) => {
	return string[0].toUpperCase() + string.slice(1,)
}

function Card({content, hoveredContent }) {
	return (
		<div className="card_children_container">
				<div className="card_children">
					<div className="first_card card">
						{ content }
					</div>
					<div className="second_card card">
						{ hoveredContent}
					</div>
				</div>
			</div>
	)
}

export function Card_hover() {

	const cardArray = []

	for (var i = 0; i < 8; i++) {
		const card_El=(
			<Card key={i} content={

				<div style={{ fontSize: 20}} >
					Card {i+1}
				</div>
			}
			hoveredContent={
				<div>
					some hidden message that is only visible on hover
				</div>

			}
			/>
			
		)
		cardArray.push(card_El);
	}

	return(
		<div className="card_hover_Container">
			{cardArray}
		</div>
	)
}