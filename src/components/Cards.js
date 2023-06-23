import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {id,title, category, description, price, images} = item;
  return (
    <>
      <div className='col-md-3 mb-4' key={id}>
        <div className='card'> 
          <img src={images} className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>Category : {category}</p>
            <p className='card-text des'>{description}</p>
            <p className='card-text'>Price : {price}</p>
            <button className='btn btn-dark btn-sm' onClick={()=>handleClick(item)}>Add To cart</button>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Cards