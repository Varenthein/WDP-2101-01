import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer.js';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';

// import Pages
import PaymentOptions from './components/views/Payment-Options/PaymentOptions';
import ShippingAndDelivery from './components/views/ShippingAndDelivery/ShippingAndDelviery';
import Returns from './components/views/Returns/Returns';
import Shipping from './components/views/Shipping/Shipping';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/payment-options'} component={PaymentOptions} />
          <Route
            exact
            path={'/shipping-and-delivery'}
            component={ShippingAndDelivery}
          />
          <Route exact path={'/returns'} component={Returns} />
          <Route exact path={'/shipping'} component={Shipping} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
