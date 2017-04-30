import { h, Component } from 'preact';
import Icon from 'preact-material-components/Icon';

import './UserDetails.css';
export default class UserTile extends Component {
	constructor(){
		super();
		this.state = {
			userDetails: null,
		}
	}
	componentDidMount(){
		window.userDetails &&
			window.userDetails.results.forEach(user=>{
				if (user.email === this.props.matches.userid) {
					this.setState({
						userDetails: user
					});
				}
			});
	}
	render() {
		console.log(this.state.userDetails);
		if (this.state.userDetails) {
			return (
				<div className='page-user'>
					<div className="pic">
						<img src={this.state.userDetails.picture.large} alt=""/>
					</div>
					<div className="details-user">
						<div className="mdc-typography--display1">{this.state.userDetails.name.first} {this.state.userDetails.name.last}</div>
						<div className="mdc-typography--subheading1"><Icon>phone</Icon>{this.state.userDetails.cell}</div>
					</div>

				</div>
			);
		}
		return (
			<div className='page-user'>
			</div>
		);
	}
}