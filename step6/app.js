import {h, render, Component} from 'preact';
import {Router} from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Toolbar from 'preact-material-components/Toolbar';
import Icon from 'preact-material-components/Icon';
import 'preact-material-components/style.css'
import './app.css';

class App extends Component{
	getProfileComponent(){

	}
	getHome(){
		return System.import('./components/Home/Home.jsx').then(module => module.default);
	}
	getProfileComponent(){
		return System.import('./components/UserDetails/UserDetails.jsx').then(module => module.default);
	}
	getNotifications(){
		const messaging = firebase.messaging();
		messaging.requestPermission()
		.then(function(currentToken) {
			console.log('Notification permission granted.');
			messaging.getToken()
			.then(function(currentToken) {
				if (currentToken) {
					console.log(currentToken);
				} else {
					// Show permission request.
					console.log('No Instance ID token available. Request permission to generate one.');
				}
			})
			.catch(function(err) {
				console.log('An error occurred while retrieving token. ', err);
			});
		})
		.catch(function(err) {
			console.log('Unable to get permission to notify.', err);
		});


		//check for refresh
		messaging.onTokenRefresh(function() {
			messaging.getToken()
			.then(function(refreshedToken) {
				console.log('Token refreshed.', refreshedToken);
			})
			.catch(function(err) {
				console.log('Unable to retrieve refreshed token ', err);
			});
		});
	}
	render(){
		return (
			<div>
				<Toolbar className="toolbar">
					<Toolbar.Row>
						<Toolbar.Section align-start={true}>
							<Toolbar.Icon >menu</Toolbar.Icon>
							<Toolbar.Title>
								People around me
							</Toolbar.Title>
						</Toolbar.Section>
						<Toolbar.Section align-end={true}>
                <Icon onClick={this.getNotifications.bind(this)}>notifications</Icon>
              </Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
				<Router>
					<AsyncRoute path="/" component={this.getHome} />
					<AsyncRoute path="/profile/:userid" component={this.getProfileComponent} />
				</Router>
			</div>
		);
	}
}

render(<App/>, document.querySelector('.app'));