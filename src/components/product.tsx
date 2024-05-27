import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSliice";
import { BooksCon } from "../interface/interface";

interface BooksProps {
    book: BooksCon;
}

export function Books({ book }: BooksProps) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(book));
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <img src={book.cover_image} alt={book.title} className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-lg font-bold mb-2">{book.title}</h3>
            <p className="text-gray-700 mb-2">{book.author}</p>
            <p className="text-gray-500">{book.description}</p>
            <button
                onClick={handleAddToCart}
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2"
            >
                Add to Cart
            </button>
        </div>
    );
}
