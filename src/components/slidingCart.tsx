import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { toggleCart, removeItem } from "../store/cartSliice";
import { BooksCon } from '../interface/interface';
import { useNavigate } from 'react-router-dom';

export function SlidingCart() {
    const dispatch: AppDispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);
    const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
    const history = useNavigate();

    const handleCloseCart = () => {
        dispatch(toggleCart());
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

  

    const handleCheckout = () => {
        history('/checkout');
    };

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <button onClick={handleCloseCart} className="absolute top-4 right-4">Close</button>
            <h2 className="text-xl font-bold p-4">Your Cart</h2>
            <ul className="p-4">
                {items.map((item: BooksCon, index: number) => (
                    <li key={index} className="mb-4 flex justify-between items-center">
                        <div>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </div>
                        <div className="flex items-center">
        
                            <button 
                                onClick={() => handleRemoveItem(item.id)} 
                                className="bg-red-500 text-white p-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="p-4">
                <button 
                    onClick={handleCheckout} 
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
