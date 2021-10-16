import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/system';
import { Button, Rating } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import './Lunch.css'
import GoodWill from '../../../Homes/GoodWill/GoodWill';

const Breakfast = () => {
    const [foods, setFoods] = useState([])
    
    useEffect(()=>{
        setTimeout(() => {
            fetch('./data.json')
            .then( res => res.json())
            .then( data => setFoods(data))
        }, 1000);
        
    },[])

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
          color: '#ff3d47',
        },
      });
    return (
        <div className="container">
            <div id="elementId" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                {
                foods.length === 0?(<div className="funTimes"> {/* overriding parent */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2" >
                            <div class="col d-flex justify-content-center">
                                <div style={{width:"366px"}}  class="card h-100 border-0">
                                    <div className="d-flex justify-content-center align-items-center"><Skeleton variant="circular" width={120} height={120} /></div>
                                    <div class="card-body">
                                        <p class="card-title fw-bolder d-flex justify-content-around align-items-center"><Skeleton variant="rectangular" width={300} height={118} /></p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <h5><Skeleton variant="text" width={150} /></h5>
                                            <h5><Skeleton variant="text" width={150} /></h5>  
                                        </div>
                                    </div>    
                                </div>
                            </div>  
                            <div class="col d-flex justify-content-center">
                                <div style={{width:"366px"}}  class="card h-100 border-0">
                                    <div className="d-flex justify-content-center align-items-center"><Skeleton variant="circular" width={120} height={120} /></div>
                                    <div class="card-body">
                                        <p class="card-title fw-bolder d-flex justify-content-around align-items-center"><Skeleton variant="rectangular" width={300} height={118} /></p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <h5><Skeleton variant="text" width={150} /></h5>
                                            <h5><Skeleton variant="text" width={150} /></h5>  
                                        </div>
                                    </div>    
                                </div>
                            </div>  
                            <div class="col d-flex justify-content-center">
                                <div style={{width:"366px"}}  class="card h-100 border-0">
                                    <div className="d-flex justify-content-center align-items-center"><Skeleton variant="circular" width={120} height={120} /></div>
                                    <div class="card-body">
                                        <p class="card-title fw-bolder d-flex justify-content-around align-items-center"><Skeleton variant="rectangular" width={300} height={118} /></p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <h5><Skeleton variant="text" width={150} /></h5>
                                            <h5><Skeleton variant="text" width={150} /></h5>  
                                        </div>
                                    </div>    
                                </div>
                            </div>        
                            <div class="col d-flex justify-content-center">
                                <div style={{width:"366px"}}  class="card h-100 border-0">
                                    <div className="d-flex justify-content-center align-items-center"><Skeleton variant="circular" width={120} height={120} /></div>
                                    <div class="card-body">
                                        <p class="card-title fw-bolder d-flex justify-content-around align-items-center"><Skeleton variant="rectangular" width={300} height={118} /></p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <h5><Skeleton variant="text" width={150} /></h5>
                                            <h5><Skeleton variant="text" width={150} /></h5>  
                                        </div>
                                    </div>    
                                </div>
                            </div>        
                            <div class="col d-flex justify-content-center">
                                <div style={{width:"366px"}}  class="card h-100 border-0">
                                    <div className="d-flex justify-content-center align-items-center"><Skeleton variant="circular" width={120} height={120} /></div>
                                    <div class="card-body">
                                        <p class="card-title fw-bolder d-flex justify-content-around align-items-center"><Skeleton variant="rectangular" width={300} height={118} /></p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <h5><Skeleton variant="text" width={150} /></h5>
                                            <h5><Skeleton variant="text" width={150} /></h5>  
                                        </div>
                                    </div>    
                                </div>
                            </div>        
                            <div class="col d-flex justify-content-center">
                                <div style={{width:"366px"}}  class="card h-100 border-0">
                                    <div className="d-flex justify-content-center align-items-center"><Skeleton variant="circular" width={120} height={120} /></div>
                                    <div class="card-body">
                                        <p class="card-title fw-bolder d-flex justify-content-around align-items-center"><Skeleton variant="rectangular" width={300} height={118} /></p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <h5><Skeleton variant="text" width={150} /></h5>
                                            <h5><Skeleton variant="text" width={150} /></h5>  
                                        </div>
                                    </div>    
                                </div>
                            </div>        
                    </div>
                </div>):foods.map( food => food.category==="Breakfast"? <div>
                    <div class="col d-flex justify-content-center">
                        <div style={{width:"366px"}}  class="card h-100 border-0 card-animation rounded-0">
                            <div className="d-flex justify-content-center align-items-center"><img style={{width:"230px", height:"230px"}} src={food.img} class="card-img-top mt-2" alt="..."/></div>
                            <div class="card-body">
                                <p class="card-title fw-bolder text-center">{food.title}</p>
                                <p class="card-text text-center fw-light">{food.slogan}</p>
                                <div className="d-flex justify-content-around align-items-center">
                                    <h5>${food.price}</h5>
                                    <Box sx={{'& > legend': { mt: 2 },}}>
                                    <StyledRating sx={{marginTop:"2px"}}
                                        name="customized-color"
                                        defaultValue={food.rating}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    </Box>
                                </div>
                            </div>    
                        </div>
                    </div> 
                                
                </div>: <div></div>)
                }
                
            </div>
            <div className="d-flex justify-content-center mt-5">
            <Button style={{backgroundColor:"#ff0037"}}  variant="contained">Check Out Your Breakfast</Button>
            </div>
            <GoodWill></GoodWill>
        </div>
    );
};

export default Breakfast;