import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './form.css'

import './LogIn.css'

const LogIn = () => {
    const {handleGoogleLogIn, handleTwitterLogIn, handleGitHubLogIn, handleFaceBookLogIn} = useAuth();
    return (
        <div className="d-flex justify-content-center sign p-5">
            <div className="w-75 width">
            <div className="row">

                <form className="col">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control rounded-0" id="exampleInputPassword1"/>
                    </div>
                    <Button sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">Login</Button>
                </form>

                <div className="d-flex flex-column gap-3 mt-4">
                    <Button onClick={handleGoogleLogIn} color="success" sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">Google Sign in</Button>
                    <Button onClick={handleFaceBookLogIn} sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">Facebook Sign in</Button>
                    <Button onClick={handleTwitterLogIn} sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">Twitter Sign in</Button>
                    <Button onClick={handleGitHubLogIn} sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">GitHub Sign in</Button>
                </div>
            
            </div>
            </div>
        </div>
    );
};

export default LogIn;