import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthProvider from './context/AuthProvider';
import DeliveryDetails from './pages/DeliveryDetails/DeliveryDetails';
import Banner from './pages/Homes/Banner/Banner';
import GoodWill from './pages/Homes/GoodWill/GoodWill';
import Home from './pages/Homes/Home/Home';
import LogIn from './pages/LogIn/LogIn/LogIn';
import Register from './pages/LogIn/LogIn/Register';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Breakfast from './pages/Shared/Categories/Category/Breakfast';
import Dinner from './pages/Shared/Categories/Category/Dinner';
import Lunch from './pages/Shared/Categories/Category/Lunch';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import HeaderCategory from './pages/Shared/Header/HeaderCategory';


const App = () => {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>

            <Route exact path="/">
                <Home></Home>
            </Route>

            <Route path="/login">
                <LogIn></LogIn>
            </Route>

            <Route path="/signup">
              <Register></Register>
            </Route>

            <Route path="/dinner">
              <Banner></Banner>
              <HeaderCategory></HeaderCategory>
              <Dinner></Dinner> 
            </Route>
            
            <Route path="/lunch">
              <Banner></Banner>
              <HeaderCategory></HeaderCategory>
              <Lunch></Lunch>
            </Route>

            <Route path="/breakfast">
              <Banner></Banner>
              <HeaderCategory></HeaderCategory>
              <Breakfast></Breakfast> 
            </Route>

            <PrivateRoute path="/delivery">
              <DeliveryDetails></DeliveryDetails>
            </PrivateRoute>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
