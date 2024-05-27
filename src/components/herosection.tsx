import { Link } from "react-router-dom";
import HeroImage from "../assets/image.png";


function HeroSection() {
    
    return (
        <div>
            <section className="bg-gray-800  bg-cover bg-center text-white py-20 shadow" style={{backgroundImage:`url(${HeroImage})`}}>
                <div className="container mx-auto text-center ">
                    <h2 className="text-4xl font-bold mb-4" >Discover Your Next Great Read</h2>
                    <p className="text-xl mb-8">Explore our collection of thousands of books across all genres.</p>
                    <button className="shadow">
                        <Link to={"/all-product"} className="bg-white text-gray-800 py-2 px-4 rounded">Shop Now</Link>
                    </button>
                </div>
            </section>
        </div>
    )
}


export default HeroSection;