import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';
import './css/toolkit-startup.css';
import './css/application-startup.css';

import App from './components/App';
import Education from './components/education/Education';
import AdvancedUserTools from './components/advancedUserTools/AdvancedUserTools';
import Dashboard from './components/dashboard/Dashboard';
import ProfitCalculator from './components/profitCalculator/ProfitCalculator';
import Coins from './components/coins/Coins';
import Register from './components/register/Register';
import Login from './components/login/Login';
import EditProfile from './components/editProfile/EditProfile';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import redditArticles from './components/redditScrape/redditArticles';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={App} />
        <Match pattern='/education' component={Education} />
        <Match pattern='/advancedUserTools' component={AdvancedUserTools} />
        <Match pattern='/dashboard' component={Dashboard} />
        <Match pattern='/profitCalculator' component={ProfitCalculator} />
        <Match pattern='/coins' component={Coins} />
        <Match pattern='/users/register' component={Register} />
        <Match pattern='/users/login' component={Login} />
        <Match pattern='/users/profile' component={EditProfile} />
        <Match pattern='/redditArticles' component={redditArticles} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
