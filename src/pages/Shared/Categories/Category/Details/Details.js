import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Details = () => {
    const {user} = useAuth()
    const [foods, setFoods] = useState([])
    const {FoodId} = useParams()
    console.log(FoodId);

    useEffect(()=>{
            fetch('https://api.jsonbin.io/b/616bc9a79548541c29c44628')
            .then( res => res.json())
            .then( data => setFoods(data))    
    },[]);
    
/* --------------------------------------------------------------------- */
    const [value, setValue] = useState(1);

    /* increase */

    const handleIncrease = () =>{  
        const newValue = value + 1;
        setValue(newValue);     
    }

    /* decrease */
    const handleDecrease = () =>{
        
        if (value > 1) {
            const newValue = value - 1;
            setValue(newValue);
        }else{
            return;
        }
    }


    return (
        <section className="container mt-5 mb-5">
            {
                foods.map(food => food.id == FoodId ? <div>
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col">
                            <h2>{food.title}</h2>
                            <br />
                            <small>{food.p}.{food.p}</small>
                            <br /> <br />
                            <div className="d-flex gap-3">
                                <h3>${food.price*value.toFixed(0, 2)}</h3>
                                <div>
                                    <nav style={{cursor:"pointer"}} aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item">
                                            <p onClick={handleDecrease} class="page-link" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </p>
                                            </li>
                                            <li class="page-item"><p class="page-link">{value}</p></li>
                                            <li class="page-item">
                                            <p onClick={handleIncrease} class="page-link" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </p>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div>
                            <Link to="/delivery"><Button className="rounded-pill" style={{height:"3em", width:"7em", backgroundColor:"#ff0037"}} variant="contained"><AddShoppingCartIcon className="mt-1"></AddShoppingCartIcon> Add</Button></Link>
                            <br /> <br />
                            <div id="carouselExampleControls" class="carousel slide w-50" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="1500">
                                    <div class="row">
                                        <div class="col">
                                        <div >
                                            <img src={food.img} class="card-img-top" alt="..."/>  
                                        </div>
                                        </div>
                                        <div class="col">
                                        <div >
                                            <img src={food.img} class="card-img-top" alt="..."/>  
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="1500">
                                    <div class="row">
                                        <div class="col">
                                        <div >
                                            <img src={food.img} class="card-img-top" alt="..."/>  
                                        </div>
                                        </div>
                                        <div class="col">
                                        <div >
                                            <img src={food.img} class="card-img-top" alt="..."/>  
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="1500">
                                    <div class="row">
                                        <div class="col">
                                        <div >
                                            <img src={food.img} class="card-img-top" alt="..."/>  
                                        </div>
                                        </div>
                                        <div class="col">
                                        <div >
                                            <img src={food.img} class="card-img-top" alt="..."/>  
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src={food.img} alt="" />
                        </div>
                    </div>
                </div>:<div></div>)
            }
            
        </section>
    );
};

export default Details;
/* 


    var sound = new Howl({
      src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
      volume: 1.0,
      onend: function () {
        alert('We finished with the setup!');
      }
    });
    sound.play()



*/