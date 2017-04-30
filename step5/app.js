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
                <Icon onClick={()=>{
										document.body.dispatchEvent(new Event('register:push'));
									}}>notifications</Icon>
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