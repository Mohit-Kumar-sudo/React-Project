import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Categories from "./Pages/Categories";
import Customization from "./Pages/Customization";
import Confirmation from "./Pages/Confirmation";
import ForgetPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PostPreview from "./Pages/PostPreview";
import PostPreviewGif from "./Pages/PostPreviewGif";
import RankCreation from "./Pages/RankCreation";
import PaymentOptions from "./Pages/PaymentOptions";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LandingPage from './Pages/LandingPage';
import Library from './Pages/Library'; 
import Plans from "./Pages/Plans";
import SignupPart from "./Pages/SignupPart";
import Profile from './Pages/Profile';
import Checkout from './Pages/Checkout';

import Dashboard from "./Pages/AdminPages/Dashboard";
import Tables from "./Pages/AdminPages/Tables";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} /> 
          <Route exact path="/About" component={About} />  
          <Route exact path="/Confirmation" component={Confirmation} /> 
          <Route exact path="/ForgetPassword" component={ForgetPassword} /> 
          <Route exact path="/ResetPassword" component={ResetPassword} /> 
          <Route exact path="/RankCreation" component={RankCreation} /> 
          <Route exact path="/Plans" component={Plans} /> 
          <Route exact path="/Categories" component={Categories} /> 
          <Route exact path="/Login" component={Login} /> 
          <Route exact path="/PostPreview" component={PostPreview} /> 
          <Route exact path="/PostPreviewGif" component={PostPreviewGif} /> 
          <Route exact path="/Library" component={Library} /> 
          <Route exact path="/Customization"component={Customization} /> 
          <Route exact path="/LandingPage" component={LandingPage} /> 
          <Route exact path="/Signup" component={Signup} />                    
          <Route exact path="/PaymentOptions" component={PaymentOptions} />  
          <Route exact path="/Checkout"component={Checkout} />  
          <Route exact path="/Profile" component={Profile} /> 
          <Route exact path="/SignupPart" component={SignupPart} />  

          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Tables" component={Tables} />

          <Route component={Error} /> 
        </Switch>

      </BrowserRouter>
    
  </div>    
  );
} 

export default App;

