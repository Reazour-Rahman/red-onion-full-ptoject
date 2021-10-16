import React, { useState } from 'react';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import './form.css'
import { useHistory, useLocation } from 'react-router';

const Register = () => {
    const {handleGoogleLogIn , handleTwitterLogIn, handleGitHubLogIn,handleFaceBookLogIn, handleCreateAccount, user} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email, password);

    const handleEmailChange = e =>{
        const ab = e.target.value
        setEmail(ab)
    };
    
    const handlePasswordChange = e =>{
        const ab = e.target.value
        setPassword(ab)
    };

    /* Redirect Auth */
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.form || '/'
    const googleSignIn = () => {

    handleGoogleLogIn()
    .then((result) => {
        history.push(redirect_uri)
    })

    };





    return (
        <div className="sign">
            <div className="d-flex justify-content-center d-block p-5">
            <div className="w-75 width">
            <div className="row">

                <form onSubmit={()=>handleCreateAccount(email, password)} className="col">

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" class="form-control rounded-0" id="exampleInputPassword1"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Re-enter Password</label>
                        <input type="password" class="form-control rounded-0" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input rounded-0" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">I agree with terms</label>
                    </div>
                    <Button sx={{backgroundColor:"#ff0037"}} className="rounded-0" type="submit" variant="contained">Register</Button>
                </form>

                <div className="d-flex flex-column gap-3 mt-4">
                    <Button onClick={googleSignIn} color="success" sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">Google Sign in</Button>
                    <Button onClick={handleFaceBookLogIn} sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">Facebook Sign in</Button>
                    <Button onClick={handleTwitterLogIn} sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">Twitter Sign in</Button>
                    <Button onClick={handleGitHubLogIn} sx={{backgroundColor:"#ff0037"}} className="rounded-0" variant="contained">GitHub Sign in</Button>
                </div>
            
            </div>
            </div>
        </div>
        </div>
    );
};

export default Register;