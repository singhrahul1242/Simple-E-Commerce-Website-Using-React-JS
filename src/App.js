import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import './styles/home.css';

const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 1000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	<div>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Home handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	</div>
  )
}

export default App