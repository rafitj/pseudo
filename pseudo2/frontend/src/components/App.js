import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';
import Header from './layout/Header';
import Footer from './layout/Footer';

import HomeDisplay from './layout/HomeDisplay';
import Form from './rooms/Form';
import Rooms from './rooms/Rooms';

import Alerts from './layout/Alerts';
import Register from './accounts/Register';
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';
import {loadUser} from '../actions/auth';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path='/' component = {HomeDisplay} />
          <div className = "container">
            <Alerts />
            <Switch>
              <Route exact path='/' component = {Rooms} />
              <Route exact path='/create-room' component = {Form} />
              <Route exact path='/register' component = {Register} />
              <Route exact path='/login' component = {Login} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <AlertProvider template = {AlertTemplate} {...alertOptions}>
    <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('app'));
