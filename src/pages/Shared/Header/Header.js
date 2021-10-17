import { Badge, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/display/logo2.png'
import './Header.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
    const {user, handleGoogleLogOut} = useAuth();
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img src={logo} style={{width:"161px", height:"45px"}} class="navbar-brand ms-lg-5 mt-3 mt-lg-0 mb-3 mb-lg-0" alt="" />
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        </ul>
                        <form class="d-flex flex-column flex-sm-column  flex-lg-row align-items-center me-5">
                        
                            {/* <i className="fas fa-cart-arrow-down fs-3 me-lg-5"> */}
                                <Badge badgeContent={4} color="warning">
                                    <AddShoppingCartIcon className="mt-1"></AddShoppingCartIcon>
                                </Badge>
                            {/* </i> */}

                            {
                                user?.email? <Link onClick={handleGoogleLogOut} style={{textDecoration:"none"}} to="/login"><Button className="me-lg-5 ms-lg-5 mt-4 mt-lg-0 rounded-pill" style={{backgroundColor:"white", color:"black"}} variant="contained">Log out</Button></Link>:<Link style={{textDecoration:"none"}} to="/login"><Button className="me-lg-5 mt-4 mt-lg-0 ms-lg-5 rounded-pill" style={{backgroundColor:"white", color:"black"}} variant="contained">Login</Button></Link>
                            }

                            <Link style={{textDecoration:"none"}} to="/signup"><Button className="mt-4 mt-lg-0 rounded-pill" style={{backgroundColor:"#F91944"}} variant="contained">Sign up</Button></Link>
                        
                        </form>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;
