import React from "react";
import "../assets/css/Login.css";
import "../assets/css/All.css";
import history from "./history";
import axios from "axios";
import GoogleLogin from "react-google-login/dist/google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { BASE_URL } from "../Constants";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.listname)
    this.state = {
      ranking:props.location.ranking,
      category:props.location.category,
      listname: props.location.listname,
      error: "",
    };
  }

  responseGoogle = (response) => {
    console.log(response);
    let social_id = response.googleId;
    if (!social_id) {
      console.log("Something went wrong");
    } else {
      axios
        .post(BASE_URL + "/users/sociallogin", {
          social_id,
        })
        .then((response) => {
          if (!response.data.status) {
            console.log("Login failed");
          } else {
            console.log(response.data.accessToken);
            localStorage.setItem("usertoken", response.data.accessToken);
            this.props.history.push(`/Library`);
          }
        })
        .catch((err) => {
          if (err.response.status === 404)
            this.setState({
              error: "Error, we do not recognize the email or password!",
            });
          else console.log(err);
        });
    }
  };

  responseFacebook = (response) => {
    console.log(response);
    let social_id = response.id;
    if (!social_id) {
      console.log("Social Id not Found");
    } else {
      axios
        .post(BASE_URL + "/users/sociallogin", {
          social_id,
        })
        .then((response) => {
          if (!response.data.status) {
            console.log("Login failed");
          } else {
            localStorage.setItem("usertoken", response.data.accessToken);
            this.props.history.push(`/Library`);
          }
        })
        .catch((err) => {
          if (err.response.status === 404)
            this.setState({
              error: "Error, we do not recognize the email or password!",
            });
          else console.log(err);
        });
    }
  };

  handlehome = () => {
    history.push("/");
    window.location.reload();
  };

  handleForgetPassword = () => {
    history.push("/ForgetPassword");
    window.location.reload();
  };

  handleSignup = () => {
    history.push("/SignUp");
    window.location.reload();
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        error:"Please fill all the Fields",
      })
    } else if (!this.state.ranking) {
      axios
        .post(BASE_URL + "/users/login", {
          email,
          password,
        })
        .then((response) => {
          if (!response.data.status) {
            console.log("Login failed");
          } else {
            console.log(response);
            localStorage.setItem("usertoken", response.data.accessToken); //this stores token
            let token = localStorage.getItem("usertoken");
            console.log(token);
            this.props.history.push(`/Library`);
          }
        })
        .catch((err) => {
          if (err.response.status === 404)
            this.setState({
              error: "Error, we do not recognize the email or password!",
            });
          else console.log(err);
        });
    } else {
      axios
      .post(BASE_URL + "/users/login",{
        email,
        password,
      })
      .then((response) => {
        if (!response.data.status) {
          console.log("Login failed");
        } else {
          console.log(response);
          localStorage.setItem("usertoken", response.data.accessToken); //this stores token
          let token = localStorage.getItem("usertoken");
          console.log(token);
          this.props.history.push({
            pathname:"/Customization",
            ranking:this.state.ranking,
            category:this.state.category,
            name:this.state.listname,
                        
          });
          
        }
      })
      .catch((err) => {
        if (err.response.status === 404)
          this.setState({
            error: "Error, we do not recognize the email or password!",
          });
        else console.log(err);
        });
      }
  };

  componentDidMount ()  {
		axios
		.get(BASE_URL + "/admin/gettexts",{page:"login"})
		.then((response) => {
		  console.log(response);
		  if (response.status == 200) {
			console.log("success")
			this.setState({
				text1:response.data.texts.text1,
				text2:response.data.texts.text2,
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

  render() {
    return (
      <div className="login-page">
        <div className="row">
          <div className="options d-flex d-md-none justify-content-center align-items-center col">
            <a className="option-link text-center">Login</a>
          </div>
        </div>

        <div className="row">
          <div className="options-2 d-flex d-md-none justify-content-start align-items-center col">
            <a>
              <img src="Images/login/arrow-icon.png" />
            </a>
          </div>
        </div>

        <div className="row hero">
          <div className="col-md-6 d-none d-md-flex justify-content-start flex-column col-left">
            <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
              <div className="container">
                <a
                  className="navbar-brand d-flex justify-content-center"
                  onClick={this.handlehome}
                >
                  <img
                    src="Images/about/logo.png"
                    className="img-fluid img-logo"
                  />
                </a>
              </div>
            </nav>
            <h3 className="text-white mt-3">{this.state.text1?this.state.text1:"Create, share, rank, compare"}</h3>
            <p className="text-white">
              {this.state.text2?this.state.text2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </p>
            <img src="Images/login/1.svg" className="img-fluid img-one" />
          </div>

          <div className="col-md-6 col-right row-login">
            <div className="row mt-4">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <h4 className="d-none d-md-block">Login</h4>
                <h6 className="mt-2">Welcome Back</h6>
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
                      Login with Google
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
                      disabled={renderProps.disabled}
                    >
                      <img
                        src="Images/login/facebook.png"
                        className="mr-2 img-oauth"
                      />
                      Login with Facebook
                    </a>
                  )}
                />

                <p className="mt-4 text-center">or</p>
                <input
                  type="text"
                  className="input-login"
                  placeholder="Email"
                  onChange={this.handleEmail}
                />
                <input
                  type="password"
                  className="input-login input-pwd-one"
                  placeholder="Password"
                  onChange={this.handlePassword}
                />
              </div>
            </div>
            <div className="row mt-4 justify-content-center d-none d-md-flex">
              <div className="col-md-8 col-lg-6 d-flex justify-content-end">
                <a
                  onClick={this.handleForgetPassword}
                  className="link-login text-right"
                >
                  Forgot Password
                </a>
              </div>
            </div>
            <div className="row mt-5 justify-content-center d-flex d-md-none">
              <div className="col-7 d-flex justify-content-center">
                <a
                  onClick={this.handleForgetPassword}
                  className="link-login text-right"
                >
                  Forgot Password
                </a>
              </div>
            </div>
            <div className="row d-none d-md-flex justify-content-center">
              <div className="col-md-8 col-lg-6 d-flex justify-content-end">
                <img src="Images/login/line.svg" className="line-two mt-2" />
              </div>
            </div>
            <div className="row d-flex d-md-none justify-content-center">
              <div className="col-7 d-flex justify-content-center">
                <img
                  src="Images/login/line_red.svg"
                  className="line-two mt-2"
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
                {/*  <img src="/Images/password/icon_open.svg" /> */}
              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-center">
                <p className="invalid-text">{this.state.error}</p>
              </div>
            </div>

            <div className="row">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-login" onClick={this.handleSubmit}>
                  Login
                </button>
                <a
                  onClick={this.handleSignup}
                  className="link-login text-right"
                >
                  Don't have any account yet?
                </a>
              </div>
            </div>
            <div className="row d-none d-md-flex justify-content-center">
              <div className="col-9 d-flex justify-content-center">
                <img src="Images/login/line.svg" className="line-forgot mt-2" />
              </div>
            </div>
            <div className="row d-flex d-md-none justify-content-center">
              <div className="col-9 d-flex justify-content-center">
                <img
                  src="Images/login/line_red.svg"
                  className="line-forgot mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
