import React from 'react';
import "../assets/css/PostPreview2.css";
import "../assets/css/All.css";

export default class PostPreviewGif extends React.Component{
    render(){
        return(
            <div className="postPreviewGIF-page">               
                <div className="options d-flex d-md-none justify-content-between align-items-center col-8 col-md-6 my-4">
                    <a href="#" className="d-flex align-items-center a-plans">
                        <img src="Images/login/arrow-icon.png" className="ml-5" alt="..." />
                    </a>
                    <a className="option-lk" href="#">Preview</a>
                </div>

                <section className="section-lg inner-bg d-none d-lg-block">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <h2 className="d-none d-md-block mt-4 sp-green">Preview</h2>
                                <p className="mt-3 d-none d-md-block max-p sp-green">This is a preview of your post on [social media channel] and shows how your ranking will be shown as a GIF. To post this ranking click on ‘Post’ under the preview.</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-10 col-movie">
                                <div className="row">
                                    <div className="col-12">
                                        <h4>My Favourite Movies</h4>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-11 d-flex justify-content-center">
                                        <img src="Images/customization/1.1.png" alt="..." />
                                    </div>
                                </div>
                                <div className="row row-info">
                                    <div className="col col-info">
                                        <h2 className="info-num">1</h2>
                                        <h2 className="info-title">Tenet</h2>
                                        <h2 className="info-year">2020</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <a href="#" className="btn-post">Post</a>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="inner-bg d-block d-lg-none">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <h3 className="txt-green d-block d-md-none text-center text-white">Post</h3>
                        <h3 className="text-white d-none d-md-block text-center text-white">Post</h3>
                        <p className="txt-green d-block d-md-none text-center text-white">This is a preview of your social media post.</p>
                        <p className="text-white d-none d-md-block text-center text-white">This is a preview of your social media post.</p>
                    </div>

                    <div className="row row-movie">
                        <img src="Images/home/logo.png" className="img-logo" alt="..." />
                        <h4>My Favourite Movies</h4>
                        <div className="row d-flex justify-content-center">
                            <div className="mt-4 col-11 d-flex justify-content-center">
                                <img src="Images/customization/1.1.png" className="movie-cover" alt="..." />
                            </div>
                        </div>
                        <div className="row row-info">
                            <div className="col col-info">
                                <h2 className="info-num">1</h2>
                                <h2 className="info-title">Tenet</h2>
                                <h2 className="info-year">2020</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <a href="#" className="btn-post">Post</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}