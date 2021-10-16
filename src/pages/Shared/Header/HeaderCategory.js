import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'




const HeaderCategory = () => {
    return (
        <div className="d-flex justify-content-center mt-5 mb-4">
            

        <nav aria-label="Page navigation example">
            <ul class="pagination">

                <li class="page-item">
                <label class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </label>
                </li>

                <label class="page-link" ><Link style={{ textDecoration: 'none', color:"#fc173d" }} to="/breakfast">Breakfast</Link></label>
                <li class="page-item active" aria-current="page"><a style={{backgroundColor:"rgba(206, 208, 223, 0.39)"}} class="page-link border-1" href="/"><Link style={{ textDecoration: 'none', color:"#fc173d" }}  to="/lunch">Lunch</Link></a></li>
                <label class="page-link" ><Link style={{ textDecoration: 'none', color:"#fc173d" }} to="/dinner">Dinner</Link></label>

                <li class="page-item">                   
                <label class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </label>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default HeaderCategory;