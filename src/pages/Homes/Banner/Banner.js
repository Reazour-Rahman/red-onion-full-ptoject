import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="">
                <br /><br /><br /><br /><br /><br />
            <p className="fs-2 d-flex justify-content-center">Dude, let’s give some food</p>
            <div className="d-flex justify-content-center align-items-center"> 
                    <br /> <br />
                <div style={{width:"440px", color:"black"}}>
                    <div class="SearchBox ">
                        <input style={{color:"black", marginLeft:"30px"}} type="text" class="SearchBox-input" placeholder="Search food items"/>
                    
                        <button class="SearchBox-button">
                            <p class="SearchBox-icon  material-icons">search</p>
                        </button>
                        
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Banner;