// import React, { useEffect, useState } from 'react';
// import Category from './Category';

// const Categories = () => {
//     const [foods, setFoods] = useState([])
//     useEffect(()=>{
//         fetch('./data.json')
//         .then( res => res.json())
//         .then( data => setFoods(data))
//     },[])
    
//     return (
//         <div className="container">
//             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
//                 {
//                     foods.map( food => <Category key={food.id} food={food}></Category>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Categories;
