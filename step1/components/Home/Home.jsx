import { h, Component } from 'preact';
import UserTile from '../UserTile/UserTile.jsx';
import './Home.css';

export default class Home extends Component {
	constructor(){
		super();
		this.state = {
			userData: null
		};
	}
	componentDidMount(){
		fetch('https://randomuser.me/api/?results=10')
			.then(res=>{
				return res.json();
			})
			.then(data=>{
				this.setState({
					userData: data,
				});
			})
			.catch(e=>{
				// Add a snackbar error
			});
	}
	render() {
		return (
			<div className='page-home'>
				{
					this.state.userData && this.state.userData.results.map(user=>{
						return (<UserTile user={user} />);
					})
				}
			</div>
		);
	}
}