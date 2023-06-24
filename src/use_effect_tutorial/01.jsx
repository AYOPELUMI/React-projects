import { useEffect , useState, Component} from "react"

const fetchTopTenPosts = () => {
	return [
		'post 1', 
		'post 2',
		'post 3'
	]
}

export default class Tutorial01ClassBased extends Component{
	state = {
		titleDisplay: 'none'
	}

	componentDidMount() {
		console.log('compnent did mont')
		setTimeout(() => {
		  this.setState({
		  	titleDisplay: 'block'
		  })
		}, 5 * 1000)
	}

	componentWillMount() {
		console.log('will mount')
	}


	render() {
		console.log('rendered')
		return (
			<div>
			<h1 style={{
				display: this.state.titleDisplay
		
			}}>Hello world</h1>
			{/*<h3>Top posts</h3>
			<div>
			{postElements}
			</div>*/}

		</div>
			)
	}
}

export function Tutorial01() {
	const [posts, setPosts] =useState([])

	useEffect(() => {
		console.log('effect')
		const topPosts = fetchTopTenPosts()
		setPosts(topPosts)
	}, [])



	const [fontSize, setFontSize] = useState(20)

	// const postElements = []
	// let index= 0
	// for (const post of topPosts) {
	// 	postElements.push(
	// 		<h3 key={index}>{post}</h3>
	// 	)
	// 	index += 1
	// }

	// let a = 23 
	const [titleDisplay, setTitleDisplay] =useState('none')


	useEffect(() => {
		setTimeout(() => {
			console.log('set timeout is invoked')
	  		setTitleDisplay('block')
		},5 * 1000)
	}, [])
	
	return (
		<div>
			{/*<button onClick={() => setFontSize(fontSize + 1)}>click </button>*/}
			<h1 style={{
				display: titleDisplay
			}}>Hello world</h1>
			{/*<h3>Top posts</h3>
			<div>
			{postElements}
			</div>*/}

		</div>
	)

}

// Tutorial01() 