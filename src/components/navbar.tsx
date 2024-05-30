import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/cartSliice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SlidingCart } from '../components/slidingCart';
import { RootState } from '../store/store';

export function Navbar() {
    const dispatch = useDispatch();
    const itemCount = useSelector((state: RootState) => state.cart.items.length);

    const handleCartIconClick = () => {
        dispatch(toggleCart());
    };

    return (
        <div>
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <a href="/">Bookstore</a>
                        
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/category" className="hover:underline">Categories</a></li>
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                            <li onClick={handleCartIconClick} className="relative cursor-pointer">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {itemCount > 0 && (
                                    <span className="absolute right-0 inline-flex items-center justify-center px-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                        {itemCount}
                                    </span>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <SlidingCart />
        </div>
    );
}
