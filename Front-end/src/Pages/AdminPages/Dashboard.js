
import React from 'react'; 
import "../../assets/css/styles.css";
import axios from "axios";
import { BASE_URL } from "../../Constants";

export default class Dashboard extends React.Component {
   constructor(){
       super();
       this.state = {
        plan_id:"",
        name:"",
        item_limit:"",
        rank_limit:"",
       }
   }
    handlePlanid = (event) => {
        this.setState ({
            plan_id:event.target.value
        })
    }
    handlename = (event) => {
        this.setState ({
            name:event.target.value
        })
    }
    handleItemlimit = (event) => {
        this.setState ({
            item_limit:event.target.value
        })
    }
    handleRanklimit = (event) => {
        this.setState({
            rank_limit:event.target.value
        })
    }  
    handleSubmit = () => {
        const { plan_id, name,item_limit,rank_limit} = this.state;
        axios
            .post(BASE_URL+"/admin/addplan", {
                plan_id,
                name,
                item_limit,
                rank_limit,
            })
            .then((response) => {
                if(response.status == 200){
                    console.log("Sucessfully Added")
                }else {
                    console.log("Data not Fetch")
                }
            })
            .catch((err) => {
                if(err.response.status == 409){
                    console.log("Something went wrong");
                } else {
                    console.log(err);
                }
            })
    };


    render(){
        return(
        <div class="sb-nav-fixed">
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a class="navbar-brand" href="index.html">Admin Dashboard</a>
                <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
                 {/* Navbar Search */}
                <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
                {/* Navbar */}
                <ul class="navbar-nav ml-auto ml-md-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a class="dropdown-item" href="#">Settings</a>
                            <a class="dropdown-item" href="#">Activity Log</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="login.html">Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <div class="nav">
                                <div class="sb-sidenav-menu-heading">Core</div>
                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/Dashboard" }); }}>
                                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </a>
                                <div class="sb-sidenav-menu-heading">Interface</div>
                                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                    Layouts
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                        <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                    </nav>
                                </div>
                                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                    Pages
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Main Pages
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                        <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                            <nav class="sb-sidenav-menu-nested nav">
                                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/HomePage" }); }}>Home</a>
                                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/AboutPage" }); }}>About</a>
                                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/LibraryPage" }); }}>Library</a>
                                            </nav>
                                        </div>
                                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Login Page 
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                        <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                            <nav class="sb-sidenav-menu-nested nav">
                                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/LoginPage" }); }}>Login</a>
                                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/SignupPage" }); }}>Signup</a>
                                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/Page" }); }}>Page</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                <div class="sb-sidenav-menu-heading">Addons</div>
                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/Getranks" }); }}>
                                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                    Rankings 
                                </a>
                                <a class="nav-link" onClick={() => {this.props.history.push({ pathname: "/Tables" }); }} >
                                    <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                    Tables
                                </a>
                            </div>
                        </div>
                        <div class="sb-sidenav-footer">
                            <div class="small">Logged in as:</div>
                            Admin Dashboard
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid">
                            <h1 class="mt-4">Dashboard</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <div class="row">
                                <div class="col-xl-3 col-md-6">
                                    <div class="card bg-primary text-white mb-4">
                                        <div class="card-body">Primary Card</div>
                                        <div class="card-footer d-flex align-items-center justify-content-between">
                                            <a class="small text-white stretched-link" href="#">View Details</a>
                                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-6">
                                    <div class="card bg-warning text-white mb-4">
                                        <div class="card-body">Warning Card</div>
                                        <div class="card-footer d-flex align-items-center justify-content-between">
                                            <a class="small text-white stretched-link" href="#">View Details</a>
                                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-6">
                                    <div class="card bg-success text-white mb-4">
                                        <div class="card-body">Success Card</div>
                                        <div class="card-footer d-flex align-items-center justify-content-between">
                                            <a class="small text-white stretched-link" href="#">View Details</a>
                                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-6">
                                    <div class="card bg-danger text-white mb-4">
                                        <div class="card-body">Danger Card</div>
                                        <div class="card-footer d-flex align-items-center justify-content-between">
                                            <a class="small text-white stretched-link" href="#">View Details</a>
                                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table mr-1"></i>
                                    DataTable Users
                                </div>
                            </div>
                            <div id="layoutAuthentication">
                                <div id="layoutAuthentication_content">
                                    <main>
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-5">
                                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Add New Plan</h3></div>
                                                        <div class="card-body">
                                                            <form>
                                                                <div class="form-group">
                                                                    <label class="small mb-1" for="inputEmailAddress">Plan ID</label>
                                                                    <input class="form-control py-4" id="inputEmailAddress" onChange={this.handlePlanid} type="number" placeholder="Enter Plan Id" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="small mb-1" for="inputEmailAddress">Name Of Plan</label>
                                                                    <input class="form-control py-4" id="inputEmailAddress" onChange={this.handlename} type="text" placeholder="Enter Name of Plan" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="small mb-1" for="inputEmailAddress">Item Limit of Plan</label>
                                                                    <input class="form-control py-4" id="inputEmailAddress" onChange={this.handleItemlimit} type="number" placeholder="Enter Item Limit" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="small mb-1" for="inputEmailAddress">Rank Limit of Plan</label>
                                                                    <input class="form-control py-4" id="inputEmailAddress" onChange={this.handleRanklimit} type="number" placeholder="Enter Rank Limit" />
                                                                </div>
                                                                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                                    <a class="btn btn-primary" onClick={this.handleSubmit} href="index.html">Submit</a>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="card-footer text-center">
                                                            <div class="small"><a href="register.html"></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer class="py-4 bg-light mt-auto">
                        <div class="container-fluid">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Copyright &copy; Your Website 2020</div>
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