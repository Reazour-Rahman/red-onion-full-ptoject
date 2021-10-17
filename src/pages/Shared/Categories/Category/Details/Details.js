import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router';

const Details = () => {
    const [foods, setFoods] = useState([])
    const {FoodId} = useParams()
    
    useEffect(()=>{
            fetch('./data.json')
            .then( res => res.json())
            .then( data => setFoods(data))    
    },[])
    foods.map(food => console.log(food))
    
    return (
        <section>
            <div>
                <div>
                    <div>
                        <h1>{}</h1>
                        <small></small>
                        <div>
                            <h3> </h3>
                            <div>
                                <nav style={{cursor:"pointer"}} aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                        <p class="page-link" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </p>
                                        </li>
                                        <li class="page-item"><p class="page-link">1</p></li>
                                        <li class="page-item"><p class="page-link">2</p></li>
                                        <li class="page-item"><p class="page-link">3</p></li>
                                        <li class="page-item">
                                        <p class="page-link" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </p>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div>
                        <Button className="rounded-pill" style={{height:"3em", width:"7em", backgroundColor:"#ff0037"}} variant="contained"><AddShoppingCartIcon className="mt-1"></AddShoppingCartIcon> Add</Button>
                        
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
/* 


<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>


*/