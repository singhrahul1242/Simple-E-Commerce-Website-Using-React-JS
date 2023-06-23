import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    
    <article>
            <div className="cart_box">
                <div>
                    <p>Product</p>
                </div>
                <div>
                    <p>Price</p>
                </div>
                <div>
                    <p>Quantity</p>
                </div>
                <div>
                    <p>Delete</p>
                </div>
            </div>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.images} alt=""/>
                        <p>{item.title}</p>
                    </div>
                    <div>
                    <span>{item.price}</span>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <button onClick={()=>handleRemove(item.id)} className='btn'><i className='fa-solid fa-trash'></i></button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
    </article>


  )
}

export default Cart