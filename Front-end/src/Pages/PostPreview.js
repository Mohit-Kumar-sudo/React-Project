import React from 'react';
import "../assets/css/PostPreview.css";
import "../assets/css/All.css";
import PostRanks from '../assets/Components/GetRanks/PostRanks';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton, 
} from "react-share";

export default class PostPreview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ranking: props.location.ranking,
    };
  }

  handleSorting = (id1, id2) => {
    let temp = [...this.state.ranking.ranking];
    temp[id2] = this.state.ranking.ranking[id1];
    temp[id1] = this.state.ranking.ranking[id2];
    this.setState({
      ranking: {
        ranking: temp
      },
    });
  };
  
    render(){
        return(
            <div className="postPreview-page">
                <div className="options d-none justify-content-center align-items-center">
                    <a className="option-lk" href="#">Preview</a>
                </div>

                <div className="options-two d-none justify-content-start align-items-start">
                  <a href="#" className="d-flex align-items-center a-plans" onClick={() => this.props.history.goBack()}>
                    <img src="Images/login/arrow-icon.png" alt="..."/>
                  </a>
                </div>

                <section className="section-lg inner-bg d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                          <div className="col d-flex justify-content-end">
                            <a href="#" className="btn-close" onClick={() => this.props.history.goBack()}></a>
                          </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <h2 className="d-none d-md-block">Preview</h2>
                                <p className="desc-p mt-3 d-none d-md-block sp-green">This is a preview of your post on [social media channel] and shows how your ranking will be shown. To post this ranking click on ‘Post’ under the preview.</p>
                            </div>
                        </div>

                        
                        <div className="row">
                          <div className="col d-flex flex-column-reverse align-items-center justify-content-center">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                              <li className="nav-item" role="presentation">
                                <a className="nav-link color-white active tab-btn mx-2" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">View As List</a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a className="nav-link color-white tab-btn mx-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">View As GIF</a>
                              </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent" style={{width:"80%"}}>
                              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row d-flex justify-content-center">
                                  <div className="col-10 col-movie" style={{background:this.state.ranking.backgroundcolor}} >
                                      <div className="row">
                                          <div className="col">
                                            <img src="Images/signup/favvle-logo.svg" alt=""/> 
                                          </div>
                                      </div> 
                                      
                                      <div className="row row-fav">

                                          <div className="col-12">
                                              <h4 style={{ color:this.state.ranking.backgroundcolor==="#FCFCFC"?"black":"white" }} >{this.state.ranking.name}</h4>
                                          </div>
                                          
                                          <div className="col-12">
                                              <div className="row d-flex justify-content-center" >       
                                              <PostRanks
                                                Ranking={this.state.ranking.ranking}
                                                textcolor={this.state.ranking.textcolor}
                                                ranktoggle={this.state.ranking.ranktoggle}
                                                nametoggle={this.state.ranking.nametoggle}
                                                columns={this.state.ranking.columns}
                                                backgroundColor={this.state.ranking.backgroundcolor}
                                                handleSorting={this.handleSorting}
                                              />

                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="row d-flex row-gif justify-content-center">
                                  <div className="col">
                                    <div className="row">
                                        <div className="col">
                                          <img src="Images/signup/favvle-logo.svg" alt=""/>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-12">
                                            <h4 style={{ color:this.state.ranking.backgroundcolor==="#FCFCFC"?"black":"white" }}>{this.state.ranking.name}</h4>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center">
                                          <img src="Images/postpreview/gif_poster.svg" alt="" />
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 row d-flex justify-content-center">
                            <div className="col-lg-5 col-md-7 d-flex justify-content-around logo-group">
                                <a >
                                <FacebookShareButton
                                    url="https://www.reddit.com"
                                    quote="testing"
                                  >
                                    <img src="Images/postpreview/logo/facebook.svg" className="img-fluid" alt="..." />
                                    </FacebookShareButton>
                                </a>
                                <a >
                                  <TwitterShareButton url={"https://www.reddit.com"}  title="test" via="microwave">
                                    <img src="Images/postpreview/logo/twitter.svg" className="img-fluid" alt="..." />
                                    </TwitterShareButton>
                                </a>
                                <a >
                                <InstapaperShareButton
                                  url="https://www.reddit.com"
                                  title="share link is==="
                                  description="i found this link here"
                                >
                                    <img src="Images/postpreview/logo/insta.svg" className="img-fluid" alt="..." />
                                    </InstapaperShareButton>
                                </a>
                                <a >
                                <WhatsappShareButton
                                  url="https://www.reddit.com"
                                  title="share link is ="
                                >
                                    <img src="Images/postpreview/logo/whats app.svg" className="img-fluid" alt="..." />
                                    </WhatsappShareButton>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
               

                <section className="inner-bg d-block d-lg-none">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <h3 className="txt-green">Post</h3>
                        <p className="txt-green">This is a preview of your social media post.</p>
                    </div>

                    <div className="row">
                      <div className="col d-flex flex-column-reverse justify-content-center align-items-center">
                        <ul class="nav nav-for-sm nav-pills mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <a className="nav-link color-white active tab-btn mx-2" id="pills-home-tab" data-toggle="pill" href="#pills-home2" role="tab" aria-controls="pills-home2" aria-selected="true">View As List</a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link color-white tab-btn mx-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile2" role="tab" aria-controls="pills-profile2" aria-selected="false">View As GIF</a>
                          </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row row-movie" style={{background:this.state.ranking.backgroundcolor}}>
                                  <img src="Images/home/logo.png" className="img-logo"/>
                                  <h4 style={{ color:this.state.ranking.backgroundcolor==="#FCFCFC"?"black":"white" }}>{this.state.ranking.name}</h4>
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="row d-flex justify-content-center">
                                             
                                          <PostRanks
                                                Ranking={this.state.ranking.ranking}
                                                textcolor={this.state.ranking.textcolor}
                                                ranktoggle={this.state.ranking.ranktoggle}
                                                nametoggle={this.state.ranking.nametoggle}
                                                columns={this.state.ranking.columns}
                                                backgroundColor={this.state.ranking.backgroundcolor}
                                                handleSorting={this.handleSorting}
                                              />

                                          </div>
                                      </div>
                                  </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row row-movie-gif">
                                  <img src="Images/home/logo.png" className="img-logo"/>
                                  <h4 style={{ color:this.state.ranking.backgroundcolor==="#FCFCFC"?"black":"white" }}>{this.state.ranking.name}</h4>
                                  <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                      <img src="Images/postpreview/gif_poster.svg" className="mt-2" alt="" />
                                    </div>
                                  </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>

                <footer className="d-block d-md-none">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center d-block d-md-none">
                            <div className="col-10 logo-group d-flex justify-content-around">
                                <a>
                                <FacebookShareButton
                                    url="https://www.reddit.com"
                                    quote="testing"
                                  >
                                    <img src="Images/footer/facebook.svg" className="img-fluid" alt="..." />
                                    </FacebookShareButton>
                                </a>
                                <a>
                                <TwitterShareButton url={"https://www.reddit.com"}  title="test" via="microwave">
                                    <img src="Images/footer/twitter.svg" className="img-fluid" alt="..." />
                                    </TwitterShareButton>
                                </a>
                                <a>
                                <InstapaperShareButton
                                  url="https://www.reddit.com"
                                  title="share link is==="
                                  description="i found this link here"
                                >
                                    <img src="Images/footer/instagram.svg" className="img-fluid" alt="..." />
                                    </InstapaperShareButton>
                                </a>
                                <a>
                                <WhatsappShareButton
                                  url="https://www.reddit.com"
                                  title="share link is ="
                                >
                                    <img src="Images/footer/whatsapp.svg" className="img-fluid" alt="..." />
                                    </WhatsappShareButton>
                                </a>
                            </div>
                        </div>

                    </div>
                </footer>
            </div>
        )
    }
}