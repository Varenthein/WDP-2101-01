import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './styles/bootstrap.scss';
import './styles/global.scss';
import CloseButton from '../src/components/common/Button/CloseButton';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer.js';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  state = {
    user: this.props.cookies.get('user') || '',
  };

  handleCookie = () => {
    const { cookies } = this.props;
    cookies.set('user', 'gowtham', { path: '/' }); // setting the cookie
    this.setState({ user: cookies.get('user') });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="cookieInfo">
          <h6>Ta strona wykorzystuje pliki cookies.</h6>
          {user && <p>{user}</p>}
          <CloseButton />
        </div>
        <Provider store={store}>
          <BrowserRouter>
            <MainLayout>
              <Switch>
                <Route exact path={'/'} component={Homepage} />
                <Route exact path={'/shop/:categoryId'} component={ProductList} />
                <Route exact path={'/product/:productId'} component={ProductPage} />
              </Switch>
            </MainLayout>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default withCookies(App);