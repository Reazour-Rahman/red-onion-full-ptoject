import React from 'react';
import logo from '../../../images/display/logo.png'

const Footer = () => {
    return (
        <footer style={{color:"rgb(231, 231, 231)"}} className="bg-dark p-5">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <img style={{width:"165px", height:"45px"}} src={logo} alt="" /> 
                    </div>
                        
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-sm-8">
                                <p>About online food</p>
                                <p>Read our blog</p>
                                <p>Sign up to deliver</p>
                                <p>Add your restaurant</p>
                            </div>
                            <div className="col-sm-4">
                                <p>Get help</p>
                                <p>Read FAQs</p>
                                <p>View all cities</p>
                                <p>Restaurant all near me</p>
                                <p></p>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div className="row mt-5">
                    <p className="text-secondary col-md-6"> CopyrightⒸ 2021 Online Food</p>
                    <div className=" col-md-6 d-flex flex-sm-row flex-column justify-content-md-around justify-content-between ">
                        <p>Privacy Policy.</p>
                        <p>Terms of Use</p>
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;