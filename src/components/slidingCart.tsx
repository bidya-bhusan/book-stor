import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { toggleCart } from '../store/cartSliice';
import { BooksCon } from '../interface/interface';

export function SlidingCart() {
    const dispatch: AppDispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);
    const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

    const handleCloseCart = () => {
        dispatch(toggleCart());
    };

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <button onClick={handleCloseCart} className="absolute top-4 right-4">Close</button>
            <h2 className="text-xl font-bold p-4">Your Cart</h2>
            <ul className="p-4">
                {items.map((item: BooksCon, index: number) => (
                    <li key={index} className="mb-2">
                        {item.title} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
