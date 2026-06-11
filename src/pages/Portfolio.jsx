import {Link}  from "react-router-dom";
function Portfolio() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-[url('/images/web.jpg')] bg-cover bg-center h-[70vh]">
                <div className="bg-black/70 h-full flex flex-col justify-center items-center text-white text-center px-6">
                    <p className="text-blue-400 font-semibold mb-4">MA Software Solution </p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
                    <p className="lg:max-w-3xl text-left md:text-center lg:text-center text-lg text-gray-300">Explore our latest web development projects including business, portfolio, and e-commerce websites designed with creativity and modern technology.</p>
                </div>
            </div>
            <div className="py-6 md:py-8 lg:py-20 bg-slate-950">
                <div className="text-center mb-6 lg:mb-16">
                    <p className="text-blue-600 font-semibold">Recent Projects</p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-3 lg:mb-6 text-white">Creative Digital Solutions </h1>
                    <p className="max-w-3xl px-6 mx-auto text-gray-300 text-left md:text-center lg:text-center text-lg">We create responsive, modern, and user-friendly websites tailored to business needs. Our portfolio showcases high-quality projects built with performance and creativity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 md:mx-12 lg:mx-24">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/project2.png" alt="project" className="w-full h-64 hover:scale-110 transition duration-500"/>
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> Academic Website</p>
                            <h2 className="text-2xl font-bold mb-4">Personal Portfolio Platform Website</h2>
                            <p className="text-gray-600 mb-6">Modern and responsive portfolio website showcasing projects, skills, and creative work with a clean and professional design.</p>
                            <a href="https://amirwazir-dot.github.io/My-Portfolio/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="blank">View Project</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/project1.png" alt="project" className="w-full h-64 hover:scale-110 transition duration-500"/>
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> Academic Website</p>
                            <h2 className="text-2xl font-bold mb-4"> Online Quran & Learning Platform </h2>
                            <p className="text-gray-600 mb-6">Modern academic website for online Quran and educational classes with a clean design and smooth learning experience.</p>
                            <a href="https://masoftwaresolution.github.io/Global-Educators-Pro/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="blank">View Project</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/project3.png" alt="project" className="w-full h-64 hover:scale-110 transition duration-500"/>
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> Academic Website</p>
                            <h2 className="text-2xl font-bold mb-4"> Online Quran & Learning Platform </h2>
                            <p className="text-gray-600 mb-6">Modern academic website for online Quran and educational classes with a clean design and smooth learning experience.</p>
                            <a href="https://resturent-website-hvax.vercel.app/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="blank">View Project</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/project1.png" alt="project" className="w-full h-64 hover:scale-110 transition duration-500"/>
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> Academic Website</p>
                            <h2 className="text-2xl font-bold mb-4"> Online Quran & Learning Platform </h2>
                            <p className="text-gray-600 mb-6">Modern academic website for online Quran and educational classes with a clean design and smooth learning experience.</p>
                            <a href="https://masoftwaresolution.github.io/Global-Educators-Pro/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="blank">View Project</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/project1.png" alt="project" className="w-full h-64 hover:scale-110 transition duration-500"/>
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> Academic Website</p>
                            <h2 className="text-2xl font-bold mb-4"> Online Quran & Learning Platform </h2>
                            <p className="text-gray-600 mb-6">Modern academic website for online Quran and educational classes with a clean design and smooth learning experience.</p>
                            <a href="https://masoftwaresolution.github.io/Global-Educators-Pro/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="blank">View Project</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
                        <div className="overflow-hidden">
                            <img src="/images/project1.png" alt="project" className="w-full h-64 hover:scale-110 transition duration-500"/>
                        </div>
                        <div className="p-6">
                            <p className="text-blue-600 font-semibold mb-2"> Academic Website</p>
                            <h2 className="text-2xl font-bold mb-4"> Online Quran & Learning Platform </h2>
                            <p className="text-gray-600 mb-6">Modern academic website for online Quran and educational classes with a clean design and smooth learning experience.</p>
                            <a href="https://masoftwaresolution.github.io/Global-Educators-Pro/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="blank">View Project</a>
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

export default Portfolio;