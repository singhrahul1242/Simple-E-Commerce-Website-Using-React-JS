import React, { useState } from 'react';
import list from '../data';
// import '../styles/home.css';
import Cards from './Cards';

const Home = ({handleClick}) => {

  const [data, setData] = useState(list);
  const filterResult =(categoryItem) =>{
    const result = list.filter((carData) =>{
      return carData.category === categoryItem;
    });
    setData(result); 
  }

  return (

    <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>
          <div id="category" className='col-md-3'>
            <button className='btn btn-dark w-100 mb-2' onClick="none">Category</button>
            <button className='btn btn-warning w-100 mb-2' onClick={()=>setData(list)}>All</button>
            <button className='btn btn-warning w-100 mb-2' onClick={()=> filterResult('smartphones')}>Smartphones</button>
            <button className='btn btn-warning w-100 mb-2' onClick={()=> filterResult('laptops')}>Laptops</button>
            <button className='btn btn-warning w-100 mb-2' onClick={()=> filterResult('fragrances')}>Fragrances</button>
            <button className='btn btn-warning w-100 mb-2' onClick={()=> filterResult('skincare')}>Skincare</button>
            <button className='btn btn-warning w-100 mb-2' onClick={()=> filterResult('groceries')}>Groceries</button>
            <button className='btn btn-warning w-100 mb-2' onClick={()=> filterResult('home-decoration')}>Home-decoration</button>
          </div>
          <div className='col-md-9'>
            <div className='row'>
            {
                data.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick} />
                ))
            }
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Home