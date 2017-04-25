import { h, Component } from 'preact';
import {route} from 'preact-router';
import Card from 'preact-material-components/Card';
import './UserTile.css';
const msgs=[
	'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
	' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
	'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
];
export default class UserTile extends Component {
	render() {
		return (
			<div className='tile-user'>
				<Card>
					<Card.Primary>
						<img
						className='pic-user'
						height="64"
						width="64"
						src={this.props.user.picture.large} />
						<Card.Title className='username'>{this.props.user.name.first} {this.props.user.name.last}</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						{
							msgs[Math.floor(Math.random() * 4)]
						}
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action ripple={true} onClick={e=>{
								route('/profile/' + this.props.user.email);
							}}>View Profile</Card.Action>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}