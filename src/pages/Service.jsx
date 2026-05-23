import { Link } from "react-router-dom";
function Services() {
    return (
        <div>
            <div className="bg-[url('/images/web.jpg')] bg-cover bg-center h-[70vh]">
                <div className="bg-black/70 h-full flex flex-col justify-center items-center text-white text-center px-6">
                    <p className="text-blue-400 font-semibold mb-4"> MA Software Solution </p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6"> Our Services </h1>
                    <p className="text-left md:text-left lg:text-center max-w-4xl text-lg text-gray-300">Explore our professional web development services including business websites, portfolio designs, e-commerce solutions, and custom web applications built with creativity, performance, and modern technology.</p>
                </div>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center px-6 md:px-12 lg:px-24 py-8 lg:py-16 bg-slate-950">
                <div className="lg:w-1/2 w-full">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white pb-2 lg:pb-4 lg:font-extrabold md:font-bold font-bold">Custom Website Development</h1>
                    <p className="pb-4 text-gray-300">MA Software Solution makes it easy to build professional websites for businesses, portfolios, and online stores with modern designs and powerful features that help showcase your brand and grow your online presence.</p>
                    <h1 className="text-2xl font-bold pb-1 text-white">Our Services</h1>
                    <ul className="list-inside list-disc">
                        <li className="text-gray-300">Business Website</li>
                        <li className="text-gray-300">E-Commerce Websites</li>
                        <li className="text-gray-300">Portfolio Websites</li>
                        <li className="text-gray-300">Landing Pages Website</li>
                        <li className="text-gray-300">Responsive Website Design</li>
                        <li className="text-gray-300">Website Redesign</li>
                    </ul>
                    <Link to="/contact" className="mt-4 text-c h-12 w-32 rounded-2xl bg-blue-900 hover:bg-blue-700 flex items-center justify-center text-white ">Contact Us</Link>
                </div>
                <div>
                    <img src="/images/display.png" alt="display pic" className="mx-auto mt-8 md:mt-6 lg:mt-0" />
                </div>
            </div>
            <div className="bg-slate-950 pt-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-3 text-white">Websites We Develop</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-12 lg:mx-24 py-10 gap-6 lg:gap-10">
                    <div className="h-auto w-full lg:w-90 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <img src="/images/ecommerce.png" alt="ecommerce" className="rounded-full mx-auto mt-4" />
                        <h1 className="text-white text-2xl font-semibold text-center py-4">Business Website</h1>
                        <p className="mx-6 pb-4 text-gray-300">A business website should deliver a smooth and user-friendly experience across all devices while clearly representing the brand and engaging visitors effectively.</p>
                    </div>
                    <div className="h-auto w-full lg:w-90 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <img src="/images/ecommerce.png" alt="ecommerce" className="rounded-full mx-auto mt-4" />
                        <h1 className="text-white text-2xl font-semibold text-center py-4">Business Website</h1>
                        <p className="mx-6 pb-4 text-gray-300">A business website should deliver a smooth and user-friendly experience across all devices while clearly representing the brand and engaging visitors effectively.</p>
                    </div>
                    <div className="h-auto w-full lg:w-90 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <img src="/images/ecommerce.png" alt="ecommerce" className="rounded-full mx-auto mt-4" />
                        <h1 className="text-white text-2xl font-semibold text-center py-4">Business Website</h1>
                        <p className="mx-6 pb-4 text-gray-300">A business website should deliver a smooth and user-friendly experience across all devices while clearly representing the brand and engaging visitors effectively.</p>
                    </div>
                    <div className="h-auto w-full lg:w-90 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <img src="/images/ecommerce.png" alt="ecommerce" className="rounded-full mx-auto mt-4" />
                        <h1 className="text-white text-2xl font-semibold text-center py-4">Business Website</h1>
                        <p className="mx-6 pb-4 text-gray-300">A business website should deliver a smooth and user-friendly experience across all devices while clearly representing the brand and engaging visitors effectively.</p>
                    </div>
                    <div className="h-auto w-full lg:w-90 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <img src="/images/ecommerce.png" alt="ecommerce" className="rounded-full mx-auto mt-4" />
                        <h1 className="text-white text-2xl font-semibold text-center py-4">Business Website</h1>
                        <p className="mx-6 pb-4 text-gray-300">A business website should deliver a smooth and user-friendly experience across all devices while clearly representing the brand and engaging visitors effectively.</p>
                    </div>
                    <div className="h-auto w-full lg:w-90 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <img src="/images/ecommerce.png" alt="ecommerce" className="rounded-full mx-auto mt-4" />
                        <h1 className="text-white text-2xl font-semibold text-center py-4">Business Website</h1>
                        <p className="mx-6 pb-4 text-gray-300">A business website should deliver a smooth and user-friendly experience across all devices while clearly representing the brand and engaging visitors effectively.</p>
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
    )
}

export default Services