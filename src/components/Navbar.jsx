import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <nav>
          <h1>Shop</h1>
          <ul>
              <li className='category'><Link to="/"><img src="./img/category.png" alt="" /></Link></li>
              <li className='cart'><Link to="/cart"><img src="./img/cart.png" alt="" /></Link></li>
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;
