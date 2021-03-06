import React from 'react'; // pkoch: to render the jsx.
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../store';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Modules from '../components/Modules';
import Module from '../components/Module';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Account from '../components/Account';
import RecoverPassword from '../components/RecoverPassword';
import ChangePassword from '../components/ChangePassword';
import NotFound from '../components/NotFound';


const ZoonApp = (props, _railsContext) => {
  let store = configureStore(props);
  let history = syncHistoryWithStore(browserHistory, store)

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/modules" component={Modules} />
          <Route path="/modules/:id" component={Module} />
          <Route path="/users/sign_in" component={SignIn} />
          <Route path="/users/sign_up" component={SignUp} />
          <Route path="/account" component={Account} />
          <Route path="/recover_password" component={RecoverPassword} />
          <Route path="/users/password/edit" component={ChangePassword} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>
  );
};

export default ZoonApp;
