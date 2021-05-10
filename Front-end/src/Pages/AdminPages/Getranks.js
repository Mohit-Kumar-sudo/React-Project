import React from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants";

export default class Getranks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Rankings: [],
        };
      }

    componentDidMount() {
        axios
          .post(
            BASE_URL + "/admin/getrankingbycategory",
          )
          .then((response) => {
            console.log(response);
            if (response.data.status) {
              this.setState({
                Rankings: response.data.ranks,
              });
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
            <div className="sb-nav-fixed">
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Admin Dashboard</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
                 {/* Navbar Search */}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
                {/* Navbar */}
                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">Settings</a>
                            <a className="dropdown-item" href="#">Activity Log</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="login.html">Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/Dashboard" }); }}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </a>
                                <div className="sb-sidenav-menu-heading">Interface</div>
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Layouts
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                        <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Pages
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Main Pages
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/HomePage" }); }}>Home</a>
                                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/AboutPage" }); }}>About</a>
                                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/LibraryPage" }); }}>Library</a>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Login Page 
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/LoginPage" }); }}>Login</a>
                                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/SignupPage" }); }}>Signup</a>
                                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/Page" }); }}>Page</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/Getranks" }); }}>
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Rankings 
                                </a>
                                <a className="nav-link" onClick={() => {this.props.history.push({ pathname: "/Tables" }); }} >
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Tables
                                </a>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Admin Dashboard
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid" style={{marginTop:20}}>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active"><h1 style={{color:"Black"}}>Rankings</h1></li>
                            </ol>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Category
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Cinema</a>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Music</a>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Sports</a>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Books</a>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Games</a>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Food</a>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Travel</a>
                                </div>
                            </div>

                         <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Ranking Category</th>
                                                    <th>Update Time</th>
                                                    <th>Create Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.Rankings.map((item, i) => {
                                                    return(
                                                        <tr>
                                                            <td>{item.catagory}</td>
                                                            <td>
                                                            {new Date(item.updated_at).getDate() +
                                                            "/" +
                                                            (new Date(item.updated_at).getMonth() + 1) +
                                                            "/" +
                                                            new Date(item.updated_at).getFullYear()}
                                                            </td>
                                                            <td>
                                                            {new Date(item.created_at).getDate() +
                                                            "/" +
                                                            (new Date(item.created_at).getMonth() + 1) +
                                                            "/" +
                                                            new Date(item.created_at).getFullYear()}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                
                                            </tbody>
                                        </table>  
                                    </div>
                                </div>   

                        </div>   
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2020</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        )
    }
}