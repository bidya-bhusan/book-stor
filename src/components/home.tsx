import HeroSection from "./herosection";

export function Home() {

    return (
        <div>
            {/* <!-- Search Bar --> */}
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto flex justify-center">
                    <input type="text" placeholder="Search for books..." className="p-2 w-1/2 border border-gray-300 rounded-l"/>
                        <button className="bg-gray-800 text-white px-4 rounded-r">Search</button>
                </div>
            </div>

            {/* <!-- Hero Section --> */}
            <HeroSection/>

            {/* <!-- Featured Books --> */}
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Book Item --> */}
                        <div className="text-center">
                            <img src="book1.jpg" alt="Book Cover" className="mx-auto mb-4"/>
                                <h3 className="text-xl font-semibold">Book Title</h3>
                                <p className="text-gray-600">Author Name</p>
                                <p className="text-gray-800 font-bold">$19.99</p>
                        </div>
                        {/* <!-- Repeat for other books --> */}
                    </div>
                </div>
            </section>

            {/* <!-- Browse by Category --> */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                        {/* <!-- Category Item --> */}
                        <div>
                            <img src="fiction.jpg" alt="Fiction" className="mx-auto mb-4"/>
                                <h3 className="text-xl font-semibold">Fiction</h3>
                        </div>
                        {/* <!-- Repeat for other categories --> */}
                    </div>
                </div>
            </section>

            {/* <!-- Best Sellers --> */}
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Book Item --> */}
                        <div className="text-center">
                            <img src="book2.jpg" alt="Book Cover" className="mx-auto mb-4"/>
                                <h3 className="text-xl font-semibold">Book Title</h3>
                                <p className="text-gray-600">Author Name</p>
                                <p className="text-gray-800 font-bold">$24.99</p>
                        </div>
                        {/* <!-- Repeat for other books --> */}
                    </div>
                </div>
            </section>

            {/* <!-- New Arrivals --> */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Book Item --> */}
                        <div className="text-center">
                            <img src="book3.jpg" alt="Book Cover" className="mx-auto mb-4"/>
                                <h3 className="text-xl font-semibold">Book Title</h3>
                                <p className="text-gray-600">Author Name</p>
                                <p className="text-gray-800 font-bold">$29.99</p>
                        </div>
                        {/* <!-- Repeat for other books --> */}
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p>Bookster is your one-stop online bookstore offering a wide selection of books across various genres.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Categories</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <form className="flex flex-col space-y-2">
                            <input type="email" placeholder="Enter your email" className="p-2 rounded text-gray-800"/>
                                <button className="bg-gray-700 text-white py-2 rounded">Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    )
}