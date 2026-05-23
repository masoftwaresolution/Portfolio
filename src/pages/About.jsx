import { Link } from "react-router-dom";
function About() {
    return (
        <div>
            <div>
                <div className="bg-[url('/images/web.jpg')] bg-cover bg-center h-[70vh]">
                    <div className="bg-black/70 h-full lg:flex lg:flex-col lg:justify-center lg:items-center md:flex md:flex-col md:justify-center md:items-center text-white text-center px-6">
                        <p className="text-blue-400 font-semibold lg:mb-4 mb-2 md:mb-3 pt-40 md:pt-0 lg:pt-0"> MA Software Solution </p>
                        <h1 className="text-5xl md:text-6xl font-bold lg:mb-6 md:mb-4 mb-2"> About Us </h1>
                        <p className="max-w-3xl text-left md:text-center lg:text-lg md:text-lg text-gray-300 lg:text-center">MA Software Solution delivers innovative web development services, helping businesses grow through modern technology and creative digital solutions.</p>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center lg:py-20 md:py-10 py-5 px-6 md:px-12 lg:px-24 bg-slate-950">
                    <div >
                        <h1 className="lg:text-4xl md:text-3xl text-2xl text-white pb-4 font-bold">MA Software House</h1>
                        <p className="pb-4 lg:max-w-xl w-full text-gray-300">MA Software Solution is a growing software company that provides modern web development and digital solutions for businesses. We transform creative ideas into professional and user-friendly websites that not only attract visitors but also help businesses build trust and generate more clients online.</p>
                        <p className="lg:max-w-xl text-gray-300">We are committed to delivering high-quality web and software development services with innovation, creativity, and professionalism. Our skilled and dedicated approach allows us to create responsive, reliable, and performance-driven digital solutions that help our clients achieve long-term success in the digital world.</p>
                        <p className="lg:max-w-xl pt-4 text-gray-300">We are committed to delivering high-quality web and software development services with innovation, creativity, and professionalism. Our skilled and dedicated approach allows us to create responsive, reliable, and performance-driven digital solutions that help our clients achieve long-term success in the digital world.</p>
                    </div>
                    <div>
                        <img src="/images/display.png" alt="display pic" className="lg:max-w-3xl md:max-w-2xl w-auto h-auto object-cover lg:mt-0 md:mt-10 mt-6 mx-auto" />
                    </div>
                </div>
                <div className="bg-slate-950 pb-8 lg:pb-16">
                    <p className="text-center text-cyan-400 pt-6">Testimonials</p>
                    <h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold lg:pb-3 text-white">What our customers say</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-12 lg:mx-24 mt-6 lg:my-10 gap-6">
                        <div className="bg-slate-900 border border-blue-900 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 h-auto w-full lg:w-88">
                            <h3 className="text-center text-white text-2xl font-bold pt-8">What We Do</h3>
                            <img src="/images/whatwedo.svg" alt="code" className="mx-auto mt-8" />
                            <p className="py-8 px-8 text-gray-300">Technology can be complicated, but we've seen it all before and can help you with any IT issue.</p>
                        </div>
                        <div className="h-auto w-full lg:w-88 bg-slate-900 border border-blue-900 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                            <h3 className="text-center text-white text-2xl font-bold pt-8">How We Help?</h3>
                            <img src="/images/howwehelp.svg" alt="how we help" className="mx-auto mt-8" />
                            <p className="py-8 px-8 text-gray-300">Our vertical solutions expertise allows your business to streamline workflow, and increase productivity.</p>
                        </div>
                        <div className="h-auto w-full lg:w-88 bg-slate-900 border border-blue-900 rounded-2xl hover:border-cyan-400 hover:-translate-y-2">
                            <h3 className="text-center text-white text-2xl font-bold pt-8">Why Choose Us</h3>
                            <img src="/images/whychooseus.svg" alt="whychooseus" className="mx-auto mt-8" />
                            <p className="py-8 px-8 text-gray-300">We have a proven process to help you move your business forward and we're with you every step of the way.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center px-6 md:px-12 lg:px-24 lg:pb-16 bg-slate-950">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white pb-4 font-bold">Our Vision</h1>
                        <p className="pb-4 text-gray-300">Our vision is to become a leading software development company that delivers innovative, reliable, and high-quality digital solutions for businesses of all sizes. We aim to empower brands with modern technology that helps them grow and succeed in the digital world.</p>
                        <p className="pb-4 text-gray-300">We strive to continuously improve and adapt to new technologies, ensuring that our clients always receive the most advanced and effective web solutions. Our focus is on creating long-term value through creativity, performance, and user-centered design.</p>
                        <p className="text-gray-300">At MA Software Solution, we envision a future where every business, regardless of size, has access to powerful digital tools that help them compete globally and achieve sustainable success online.</p>
                    </div>
                    <div>
                        <img src="/images/display.png" alt="display pic" className="mt-10 md:mt-12 lg:mt-0 mx-auto" />
                    </div>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center px-6 md:px-12 lg:px-32 py-8 lg:py-16 bg-slate-950">
                    <div className="hidden lg:flex">
                        <img src="/images/display.png" alt="display pic" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white pb-4 font-bold">Our Mission</h1>
                        <p className="pb-4 text-gray-300">Our vision is to become a leading software development company that delivers innovative, reliable, and high-quality digital solutions for businesses of all sizes. We aim to empower brands with modern technology that helps them grow and succeed in the digital world.</p>
                        <p className="pb-4 text-gray-300">We strive to continuously improve and adapt to new technologies, ensuring that our clients always receive the most advanced and effective web solutions. Our focus is on creating long-term value through creativity, performance, and user-centered design.</p>
                        <p className="text-gray-300">At MA Software Solution, we envision a future where every business, regardless of size, has access to powerful digital tools that help them compete globally and achieve sustainable success online.</p>
                    </div>
                </div>
                <div className=" bg-slate-950 pb-6 px-6 py-10">
                    <p className="text-center text-cyan-400">Let's get started</p>
                    <h1 className="text-white text-center lg:text-3xl md:text-3xl text-2xl font-bold lg:py-3 py-2.5">Are you ready for a better, more productive business?</h1>
                    <h4 className="text-gray-300 text-center pb-4 max-w-2xl mx-auto">Stop worrying about technology problems. Focus on your business. Let us provide the support you deserve.</h4>
                    <Link to="/contact" className="bg-blue-900 hover:bg-blue-700 rounded-2xl text-center h-12 w-32 flex items-center justify-center text-white mx-auto transition duration-300">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default About