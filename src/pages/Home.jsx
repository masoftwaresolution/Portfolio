import { Link } from "react-router-dom"
function Home() {
    return (
        <div>
            <div className="bg-[url('/images/web.jpg')] bg-cover bg-center h-screen w-full">
                <div className="bg-black/70 h-full w-full lg:flex lg:justify-center lg:items-center">
                    <div className="lg:w-1/2 sm:w-full pt-20 px-6 md:px-12 lg:px-24">
                        <h1 className="text-4xl font-bold text-white pb-2">Grow Your Business with a Professional Website</h1>
                        <p className="text-white pb-4"> Custom web development solutions built to strengthen your online presence and increase customer engagement. </p>
                        <Link to="/portfolio" className="bg-blue-900 hover:bg-blue-700 rounded-2xl h-12 w-32 flex items-center justify-center text-white">View Projects </Link>
                    </div>
                    <div>
                        <img src="/images/webpages.png" alt="webpages" className="mt-10 md:mt-0 md:max-w-3xl lg-mt-0"/>
                    </div>
                </div>

            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center sm:pt-6 md:pt-6 py-4 px-6 md:px-12 lg:px-24 bg-slate-950">
                <div className="my-6 lg:w-1/2">
                    <h1 className="text-5xl text-white font-semibold pb-2">About Our Company</h1>
                    <h4 className="text-2xl text-cyan-400 pb-3">Your partner for Digital Innovation</h4>
                    <p className="pb-4 text-gray-300">At MA Software Solution, we specialize in creating modern, responsive, and high-performance websites for businesses of all sizes. Our goal is to help brands establish a strong online presence through innovative design and reliable development solutions.</p>
                    <p className="pb-4 text-gray-300">We combine creativity, technology, and strategy to deliver websites that are visually appealing, user-friendly, and optimized for performance. From business websites to custom web applications, we focus on providing solutions that drive growth and improve customer engagement.</p>
                    <p className="pb-4 text-gray-300">Our team is committed to delivering quality work, clean code, and exceptional user experiences. We believe every business deserves a professional digital presence that reflects its vision and builds trust with customers.</p>
                    <p className=" text-gray-300">At MA Software Solution, customer satisfaction is our priority. We work closely with clients to understand their goals and turn their ideas into powerful digital experiences that help their business succeed online.</p>
                </div>
                 <div>
                    <img src="/images/second.jpg" alt="laptop pic" className="rounded-xl w-full lg:max-w-md" />
                </div>
            </div>
            <div className="bg-slate-950">
                <p className="pt-6 text-center text-cyan-400">Testimonials</p>
                <h1 className="lg:text-4xl text-2xl md:text-4xl text-center font-bold pb-3 text-white">What our customers say</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-12 lg:mx-24 py-2 gap-6">
                    <div className="bg-slate-900 border border-blue-900 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 md:h-auto w-full lg:max-w-sm">
                        <p className="lg:py-8 py-2.5 px-4 md:py-3 text-white">“MA Software Solution created a professional and modern website for our business. Their team was responsive, skilled, and delivered exactly what we needed.”</p>
                        <h1 className="lg:px-4 lg:pb-4 pb-2 px-4 text-white">Michael Anderson</h1>
                    </div>
                    <div className="lg:max-w-sm w-full bg-slate-900 border border-blue-900 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <p className="lg:py-8 py-2.5 px-4 text-white">“The website design exceeded our expectations. Everything was clean, fast, and mobile-friendly. Highly recommended for web development services.”</p>
                        <h1 className="lg:px-4 lg:pb-4 pb-2 px-4 text-white">Sarah Williams</h1>
                    </div>
                    <div className="lg:max-w-sm w-full bg-slate-900 border border-blue-900 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                        <p className="lg:py-8 py-2.5 px-4 text-white">“Working with MA Software Solution was a great experience. They understood our vision perfectly and built a website that improved our online presence.”</p>
                        <h1 className="lg:px-4 lg:pb-4 pb-2 px-4 text-white">David Thompson</h1>
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

export default Home