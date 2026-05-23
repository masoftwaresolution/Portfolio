import { Link } from "react-router-dom";
function Blog() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-[url('/images/web.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center">
                <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Our Blog</h1>
                    <p className="max-w-2xl md:text-lg lg:text-lg text-left md:text-center lg:text-center">Explore the latest insights, trends, and tips in web development, business growth, and digital technology.</p>
                </div>
            </div>
            <div className="mx-auto py-8 lg:py-20 bg-slate-950">
                <div className="text-center mb-6 lg:mb-16">
                    <p className="text-blue-600 font-semibold">Latest Articles</p>
                    <h2 className="text-white text-4xl font-bold mt-2">Read Our Recent Blogs</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-24">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/contact.jpg" alt="blog" className="w-full h-60 object-cover hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> Web Development</p>
                            <h3 className="text-2xl font-bold mb-4">Why Every Business Needs a Professional Website</h3>
                            <p className="text-gray-600 mb-6"> A professional website helps businesses build trust, attract customers, and establish a strong online presence.</p>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Read More</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/contact.jpg" alt="blog" className="w-full h-60 object-cover hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> E-Commerce</p>
                            <h3 className="text-2xl font-bold mb-4">Benefits of E-Commerce Websites</h3>
                            <p className="text-gray-600 mb-6">E-commerce websites help businesses sell products online and reach customers from anywhere in the world.</p>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Read More</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/contact.jpg" alt="blog" className="w-full h-60 object-cover hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> UI / UX Design</p>
                            <h3 className="text-2xl font-bold mb-4">Modern Web Design Trends in 2026</h3>
                            <p className="text-gray-600 mb-6"> Discover the latest web design trends that improve user experience and create visually appealing websites.</p>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" bg-slate-950 pb-6 px-6 py-10">
                <p className="text-center text-cyan-400">Let's get started</p>
                <h1 className="text-white text-center lg:text-3xl md:text-3xl text-2xl font-bold lg:py-3 py-2.5">Are you ready for a better, more productive business?</h1>
                <h4 className="text-gray-300 text-center pb-4 max-w-2xl mx-auto">Stop worrying about technology problems. Focus on your business. Let us provide the support you deserve.</h4>
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-700 rounded-2xl text-center h-12 w-32 flex items-center justify-center text-white mx-auto transition duration-300">Contact Us</Link>
            </div>

        </div>
    );
}

export default Blog;