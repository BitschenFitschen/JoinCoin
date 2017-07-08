import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import Education from './components/education/Education';
import AdvancedUserTools from './components/advancedUserTools/AdvancedUserTools';
import Dashboard from './components/dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match pattern="/education" component={Education} />
				<Match pattern="/advancedUserTools" component={AdvancedUserTools} />
				<Match pattern="/dashboard" component={Dashboard} />
			</div>
		</BrowserRouter>
		)
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
