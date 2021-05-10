import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./Pages/Home";
/* import About from "./Pages/About"; */

import Categories from "./Pages/Categories";
import Customization from "./Pages/Customization";
import Confirmation from "./Pages/Confirmation";
import ForgetPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SignupPart from "./Pages/SignupPart";
import PostPreview from "./Pages/PostPreview";
import PostPreviewGif from './Pages/PostPreviwGif';

/* import Profile from "./Pages/Profile";
// import Checkout from "./Pages/Checkout";

// import PaymentOptions from "./Pages/PaymentOptions";
// import Library from "./Pages/Library";
// import LibraryPart from './Pages/LibraryPart';
// import RankCreation from "./Pages/RankCreation";
// import Pricing from "./Pages/Pricing";
// import LandingPage from "./Pages/LandingPage"; */


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>


          <Route exact path="/Home" component={Home} /> 
          /* <Route exact path="/About" component={About} /> */

          <Route exact path="/Categories" component={Categories} /> // clear
          <Route exact path="/Confirmation" component={Confirmation} /> //clear
          <Route exact path="/ForgetPass" component={ForgetPassword} /> // clear
          <Route exact path="/ResetPassword" component={ResetPassword} /> // clear
          <Route exact path="/Customization"component={Customization} />

          <Route exact path="/Login" component={Login} /> // clear
          <Route exact path="/Signup" component={Signup} /> // clear
          <Route exact path="/SignupPart" component={SignupPart} /> // not fully done yet
          <Route exact path="/PostPreview" component={PostPreview} /> 
          <Route exact path="/PostPreviewGif" component={PostPreviewGif} /> 

          /* <Route exact path="/Checkout"component={Checkout} /> // not done yet */

          /* <Route exact path="/Profile" component={Profile} />
          <Route exact path="/PaymentOptions" component={PaymentOptions} />
          <Route exact path="/Library" component={Library} />
          <Route exact path="/LibraryPart" component={LibraryPart} />
          <Route exact path="/RankCreation" component={RankCreation} />
          <Route exact path="/Pricing" component={Pricing} />
          <Route exact path="/LandingPage" component={LandingPage} /> */
      
          <Route component={Error} /> 
        </Switch>

      </BrowserRouter>
    
  </div>   
  );
} 

export default App;

