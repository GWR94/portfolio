import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import LandingPage from '../components/LandingPage';
import Portfolio from '../components/Portfolio';
import Pomodoro from '../components/Pomodoro';
import PlayTicTacToe from '../components/TicTacToe/TicTacToeSetup';
import Calculator from '../components/Calculator';
import WikipediaAPI from '../components/WikipediaAPI';
import IndecisionApp from '../components/Indecision/IndecisionApp';
import TwitchAPI from '../components/TwitchAPI';
import SimonSays from '../components/SimonSays';
import Blogify from '../components/Blogify';
import Emaily from '../components/Emaily';
import Expensify from '../components/Expensify';
import Skills from '../components/Skills';
export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={Skills} exact />
				<Route path="/portfolio" exact component={Portfolio} />
				<Route path="/portfolio/pomodoro" component={Pomodoro} />
				<Route path="/portfolio/tic-tac-toe" component={PlayTicTacToe} />	
				<Route path="/portfolio/calculator" component={Calculator} />	
				<Route path="/portfolio/wikipedia" component={WikipediaAPI} />	
				<Route path="/portfolio/indecision-app" component={IndecisionApp} />
				<Route path="/portfolio/twitch" component={TwitchAPI} />
				<Route path="/portfolio/simon-says" component={SimonSays} />
				<Route path="/portfolio/blogify" component={Blogify} />
				<Route path="/portfolio/expensify" component={Expensify} />
				<Route path="/portfolio/emaily" component={Emaily} />
				<Route path="/qualifications" component={Skills} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;