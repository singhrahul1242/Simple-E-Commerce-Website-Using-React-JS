import React from 'react';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                E-commerce
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fa-solid fa-shopping-bag"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar