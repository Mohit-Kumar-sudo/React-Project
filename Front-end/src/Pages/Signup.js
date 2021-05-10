import React from "react";
import history from "./history";
import axios from "axios";
import "../assets/css/Signup.css";
import "../assets/css/All.css";
import GoogleLogin from "react-google-login/dist/google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {BASE_URL} from "../Constants";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.name)
    this.state = {
      ranking:props.location.ranking,
      listname: props.location.listname,
      category:props.location.category,
      email: "",
      password: "",
      confirmPassword: "",
      plan_id:props.location.plan_id,
      name: props.location.name,
      item_limit: props.location.item_limit,
      rank_limit : props.location.rank_limit,
      error: "",
      list:"",
    };
  }

  responseGoogle = (response) => {
    let social_id = response.googleId;
    let name = response.Hs.sd;
    let email = response.Hs.nt;
    if (!social_id) {
      this.setState({
        error: "Something Went Wrong",
      });
    } else {
      axios
        .post(BASE_URL+"/users/googleRegister", {
          social_id,
          name,
          email,
        })
        .then((response) => {
          console.log(response);
          if (!response.data.status) {
            console.log("SignUP failed");
          } else if (response.data) {
            localStorage.setItem("usertoken", response.data.accessToken);
            this.props.history.push(`/SignupPart`);
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            this.setState({
              error: "Error, an account with this email already exists!",
            });
            console.log("Error, an account with this email already exists!");
          } else console.log(err);
        });
    }
  };

  responseFacebook = (response) => {
    let social_id = response.id;
    let name = response.name;
    if (!social_id) {
      let arr = [];
      arr.push("something Went Wrong");
      this.setState({
        errors: arr,
      });
    } else {
      axios
        .post(BASE_URL+"/users/fbRegister", {
          social_id,
          name,
        })
        .then((response) => {
          console.log(response);
          if (!response.data.status) {
            console.log("Sign Up failed");
          } else if (response.data) {
            localStorage.setItem("usertoken", response.data.accessToken);
            this.props.history.push(`/SignupPart`);
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            this.setState({
              error: "Error, an account with this email already exists!",
            });
            console.log("Error, an account with this email already exists!");
          } else console.log(err);
        });
    }
  };

  handlehome = () => {
    if(!this.state.ranking){
    history.push("/");
    window.location.reload();
    } else {
      this.props.history.push({
        pathname: "/Postpreview",
        ranking:this.state.ranking
      })
    }
  };

  handleLogin = () => {
    if(!this.state.ranking){
      history.push("/Login");
      window.location.reload();
    } else {
      this.props.history.push({
        pathname: "/Login",
        ranking:this.state.ranking,
        listname:this.state.listname,
        category:this.state.category
      })    
    }

  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    console.log();
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log();
  };

  handleConfirmpassword = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
    console.log();
  };

  handleSubmit = () => {
    const { email, password, confirmPassword } = this.state;
    if (!email || !password || !confirmPassword) {
      this.setState({ error: "Please fill all the Fields" });
    } else if (password !== confirmPassword) {
      console.log("Password did not match");
      this.setState({ error: "Password did not match" });
    } else {
      axios
        .post(BASE_URL + "/users/register", {
          email,
          password,
        })
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            console.log("Registered");
            this.setState({ registered: true });
            localStorage.setItem("usertoken", response.data.accessToken);
            if (!this.state.ranking) this.props.history.push(`/SignupPart`);
            else {
              axios
                  .post(
                    BASE_URL+"/users/addranking",
                      {
                        ranking:this.state.ranking.ranking,
                        category:this.state.ranking.category,
                        name:this.state.ranking.name,
                        backgroundcolor:this.state.ranking.backgroundcolor,
                        textcolor:this.state.ranking.textcolor,
                        nametoggle:this.state.ranking.nametoggle,
                        ranktoggle:this.state.ranking.ranktoggle,
                        columns:this.state.ranking.columns,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("usertoken")}`,
                        },
                      }
                    ).then((response) => {
                      console.log(response);
                      if (response.data.status) {
                        console.log("Sucessfully Rank Created");
                        this.props.history.push("/Library");
                      } else {
                        console.log("Rank is not Created");
                      }
                    })
                    .catch((err) => {
                      if (err.status === 409) {
                        console.log("something went wrong");
                      } else {
                        console.log(err);
                      }
                    });
                        }
                      }
                    })
        .catch((err) => {
          if (err.response.status === 409) {
            this.setState({
              error: "Error, an account with this email already exists!",
            });
            console.log("Error, an account with this email already exists!");
          } else console.log(err);
        });
    }
  };

  componentDidMount ()  {
		axios
		.get(BASE_URL + "/admin/gettexts",{page:"signup"})
		.then((response) => {
		  console.log(response);
		  if (response.status == 200) {
			console.log("SuccessFul")
			this.setState({
				list:response.data.texts.list,
        heading:response.data.texts.text1,
			})
		  } else {
			console.log("Data Not Fetch");
		  }
		})
		.catch((err) => {
		  if (err.status === 409) {
			console.log("something went wrong");
		  } else {
			console.log(err);
		  }
		});
	}

    render(){
      return(
        <div class="signup-page">
         {/*<div className="popup">
                <div className="popup-content">
                    <button  className="close-popup btn-close"></button>
                    <h4>Are you sure?</h4>
                    <h5>You’ve reached the maximum of 5 lists for Free. <br></br>
                    Upgrade your Plan to go beyond the limits!</h5>
                  <div className="d-flex button-g">
                    <button  className="btn-popup close-popup ">Sign Up</button>
                    <button className="btn-popup2 ml-1 close-popup ">Yes, Skip</button>
                  </div>
                </div>
            </div> */}
            <div className="row">
                <div className="options d-flex d-lg-none justify-content-start align-items-center col">
                    <a>
                        <img src="Images/login/arrow-icon.png"/>
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="options-2 d-flex d-lg-none justify-content-center align-items-center col">
                    <a className="option-link" >Sign Up</a>
                </div>
            </div>

            <div className="row hero">
                <div className="col-md-6 col-right row-login">
                    <div className="row mt-4">
                        <div className="col d-flex flex-column justify-content-center align-items-center">
                            <h4 className="d-none d-md-block">Signup</h4>
                            <h6 className="mt-2">Welcome</h6>
                            <GoogleLogin
                              clientId="482778551608-5d0bcgvm9gq9tdulrdo5k3sfe86g4k1d.apps.googleusercontent.com"
                              onSuccess={this.responseGoogle}
                              onFailure={this.responseGoogle}
                              cookiePolicy={"single_host_origin"}
                              render={(renderProps) => (
                                <a
                                  
                                  className="btn btn-white bg-white d-flex align-items-center btn-oauth google"
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                >
                                  <img
                                    src="Images/login/google.png"
                                    className="mr-2 img-oauth"
                                  />
                                  Sign up with Google
                                </a>
                              )}
                            />
                            <FacebookLogin
                              appId="1152511228540637"
                              autoLoad={false}
                              callback={this.responseFacebook}
                              render={(renderProps) => (
                                <a
                                  
                                  className="btn btn-white bg-white d-flex align-items-center btn-oauth facebook"
                                  onClick={renderProps.onClick}
                                >
                                  <img
                                    src="Images/login/facebook.png"
                                    className="mr-2 img-oauth"
                                  />
                                  Sign up with Facebook
                                </a>
                              )}
                            />
                            <p className="mt-4">or</p>
                            <input
                              type="text"
                              className="input-login"
                              placeholder="Email"
                              onChange={this.handleEmail}
                            />
                            <input
                              type="password"
                              className="input-login input-pwd-one "
                              placeholder="Password"
                              onChange={this.handlePassword}
                            />
                            <input
                              type="password"
                              className="input-login input-pwd-two "
                              placeholder="Confirm Password"
                              onChange={this.handleConfirmpassword}
                            />
                        </div>
                    </div>
                    <div className="row row-absol">
                        <div className="col-9 d-flex justify-content-center">
                        <a>
                    <img
                      src="/Images/password/icon_open.svg"
                      className="one see-password"
                      alt="..."
                    />
                  </a>
                  <a>
                    <img
                      src="/Images/password/icon_open.svg"
                      className="two see-password"
                      alt="..."
                    />
                  </a>
                  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex flex-md-column justify-content-around align-items-center">
                                <button className="btn-login" onClick={this.handleSubmit} >Sign up</button>
                                <button className="btn-import ml-2" onClick={this.handlehome} >Not Now</button>
                            </div>
                            <a className="link-login text-right" onClick={this.handleLogin}>     
                              Already have an account?
                            </a>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-9 d-flex justify-content-center">
                            <img src="Images/signup/line.svg" className="line-login" />
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center">
                      <div className="col d-flex justify-content-center">
                       <p className="mt-2 text-center invalid-text">{this.state.error}</p>
                      </div>
                    </div>
                </div>

                <div className="col-md-6 d-none d-md-flex flex-column col-left">
                    <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
                        <div className="container">
                        <a className="navbar-brand d-flex justify-content-center" >
                            <img src="Images/about/logo.png" onClick={this.handlehome} className="img-fluid img-logo" />
                        </a>
                        </div>
                    </nav>    
                    <h3 className="text-white mt-3">{this.state.heading?this.state.heading:"Create, share, rank, compare"}</h3>
                    <ul>
                      <li>
                        <img src="Images/signup/ellipse.svg" alt=""/>
                        {this.state.list?this.state.list.slice(0,1):"Create beautiful rankings, with up to 25 items in each ranking"}
                      </li>
                      <li>
                      <img src="Images/signup/ellipse.svg" alt=""/>
                        {this.state.list?this.state.list.slice(1,2):"Use simple Drag & Drop functionality to rank your lists"}
                      </li>
                      <li>
                      <img src="Images/signup/ellipse.svg" alt=""/>
                        {this.state.list?this.state.list.slice(2,3):"Easily and quickly share your rankings on social media"}
                      </li>
                      <li>
                      <img src="Images/signup/ellipse.svg" alt=""/>
                        {this.state.list?this.state.list.slice(3,4):"Create and share a unique GIF-version of your ranking"}
                      </li>
                      <li>
                      <img src="Images/signup/ellipse.svg" alt=""/>
                        {this.state.list?this.state.list.slice(4,5):"Personalize your ranking with Favvle’s design tools"}
                      </li>
                      <li>
                      <img src="Images/signup/ellipse.svg" alt=""/>
                        {this.state.list?this.state.list.slice(5,6):"Save up to 10 unique rankings to your personal library"}
                      </li>
                    </ul>
                    <img src="Images/login/2.png" className="img-fluid bg-signup img-one" />
                </div>
            </div>
        </div>
    )
}
}    
