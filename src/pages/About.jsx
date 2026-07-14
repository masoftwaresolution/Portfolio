import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, MessageCircle, Search, FileText, PenTool, Code2, Rocket, Lightbulb, ShieldCheck, Eye, Handshake, } from "lucide-react";
function About() {
    return (
        <div>
            <div>
                <div className="bg-[url('/images/web.jpg')] bg-cover bg-center h-[70vh]">
                    <div className="bg-black/70 h-full lg:flex lg:flex-col lg:justify-center lg:items-center md:flex md:flex-col md:justify-center md:items-center text-white text-center px-6">
                        <h1 className="text-5xl md:text-6xl font-bold lg:mb-6 md:mb-4 mb-2"> About Us </h1>
                        <h1 className="text-3xl md:text-4xl font-bold lg:mb-6 md:mb-4 mb-2">Building Digital Solutions That Drive Business Growth</h1>
                        <p className="max-w-3xl text-left md:text-center lg:text-lg md:text-lg text-gray-300 lg:text-center">Your Trusted Partner for Modern Web Development & UI/UX Design</p>
                    </div>
                </div>
                <section className="bg-slate-900 py-24 px-6 md:px-12 lg:px-24 border-t border-slate-800">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                                About Us
                            </p>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
                                Building Digital Solutions That Drive Business Growth
                            </h2>

                            <h3 className="text-cyan-400 text-xl mt-4">
                                Your Trusted Partner for Web Development & UI/UX Design
                            </h3>

                            <p className="text-gray-400 leading-8 mt-6">
                                At MA Software Solution, we are passionate about transforming ideas into
                                innovative digital experiences. We create responsive, high-performance
                                websites and modern UI/UX designs that help businesses establish a
                                strong online presence.
                            </p>

                            <p className="text-gray-400 leading-8 mt-5">
                                Our goal is to deliver reliable, scalable, and user-focused solutions
                                that not only look professional but also drive business growth and
                                customer engagement.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-cyan-400" />
                                    <span className="text-white">Custom Web Development</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-cyan-400" />
                                    <span className="text-white">Responsive UI/UX Design</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-cyan-400" />
                                    <span className="text-white">Fast Project Delivery</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-cyan-400" />
                                    <span className="text-white">Dedicated Client Support</span>
                                </div>

                            </div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 mt-10 bg-blue-900 hover:bg-cyan-500 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold"
                            >
                                Start Your Project
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        {/* Right Side */}

                        <div className="relative">

                            <img
                                src="/images/about.jpg"
                                alt="About"
                                className="rounded-3xl w-full border border-cyan-400/30 shadow-[0_20px_60px_rgba(34,211,238,.15)]"
                            />

                            {/* Floating Card */}

                            <div className="absolute -bottom-8 -left-8 bg-slate-950 border border-cyan-400 rounded-2xl px-6 py-5 shadow-xl">

                                <h2 className="text-4xl font-bold text-cyan-400">
                                    100%
                                </h2>

                                <p className="text-white font-semibold mt-1">
                                    Client Commitment
                                </p>

                            </div>

                        </div>

                    </div>
                </section>
                <div className="bg-slate-950 pb-8 lg:pb-16 py-20 border-t border-slate-800">
                    <p className="text-center text-cyan-400 uppercase tracking-[4px]">
                        Why MA Software Solution
                    </p>

                    <h2 className="text-4xl font-bold text-center text-white mt-3">
                        What Makes Us Different
                    </h2>

                    <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
                        We combine creativity, modern technologies, and a client-first approach to
                        deliver digital solutions that help businesses grow.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-12 lg:mx-24 mt-6 lg:my-10 gap-6">
                        <div className="bg-slate-900 rounded-2xl h-auto border border-blue-900 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]">
                            <h3 className="text-center text-white text-2xl font-bold pt-8">What We Do</h3>
                            <img src="/images/whatwedo.svg" alt="code" className="mx-auto mt-8" />
                            <p className="py-8 px-8 text-gray-300">Technology can be complicated, but we've seen it all before and can help you with any IT issue.</p>
                        </div>
                        <div className="bg-slate-900 rounded-2xl h-auto border border-blue-900 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]">
                            <h3 className="text-center text-white text-2xl font-bold pt-8">How We Help?</h3>
                            <img src="/images/howwehelp.svg" alt="how we help" className="mx-auto mt-8" />
                            <p className="py-8 px-8 text-gray-300">Our vertical solutions expertise allows your business to streamline workflow, and increase productivity.</p>
                        </div>
                        <div className="bg-slate-900 rounded-2xl h-auto border border-blue-900 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]">
                            <h3 className="text-center text-white text-2xl font-bold pt-8">Why Choose Us</h3>
                            <img src="/images/whychooseus.svg" alt="whychooseus" className="mx-auto mt-8" />
                            <p className="py-8 px-8 text-gray-300">We have a proven process to help you move your business forward and we're with you every step of the way.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center px-6 md:px-12 lg:px-24 lg:py-20 bg-slate-900 gap-16 border-t border-slate-800">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white pb-4 font-bold">Our Vision</h1>
                        <p className="pb-4 text-gray-300 text-justify">Our vision is to become a trusted software company recognized for delivering innovative, reliable, and high-quality digital solutions. We aim to help businesses of all sizes establish a strong online presence and achieve sustainable growth through technology.</p>
                        <p className="pb-4 text-gray-300 text-justify">We aspire to stay ahead of industry trends by continuously adopting modern technologies, creative design approaches, and efficient development practices. Our goal is to create digital experiences that are both visually appealing and highly functional.</p>
                        <p className="text-gray-300 text-justify">At MA Software Solution, we envision building long-term partnerships with our clients by providing exceptional service, transparent communication, and continuous support. We strive to be a company that businesses can confidently rely on for their digital transformation journey.</p>
                    </div>
                    <div>
                        <img src="/images/office.jpg" alt="display pic" className="mt-10 md:mt-12 lg:mt-0 max-w-xl rounded-xl w-full mx-auto" />
                    </div>
                </div>
                <div className="lg:flex flex-row-reverse lg:justify-between lg:items-center px-6 md:px-12 lg:px-24 lg:py-20 bg-slate-950 gap-16 border-t border-slate-800">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white pb-4 font-bold">Our Mission</h1>
                        <p className="pb-4 text-gray-300 text-justify">Our mission is to empower businesses with innovative web development and UI/UX design solutions that strengthen their digital presence. We are committed to creating modern, responsive, and user-friendly websites that help our clients achieve their business goals.</p>
                        <p className="pb-4 text-gray-300 text-justify">We believe that every business deserves reliable and high-quality digital solutions. By combining creativity, the latest technologies, and industry best practices, we deliver websites that are secure, scalable, and designed to provide exceptional user experiences.</p>
                        <p className="text-gray-300 text-justify">At MA Software Solution, our focus is on building long-term relationships through transparency, professionalism, and dedicated support. We strive to exceed client expectations by delivering projects on time while maintaining the highest standards of quality and performance.</p>
                    </div>
                    <div>
                        <img src="/images/mission.jpg" alt="display pic" className="mt-10 md:mt-12 lg:mt-0 max-w-xl rounded-xl w-full mx-auto" />
                    </div>
                </div>
                <section className="bg-slate-900 py-24 px-6 md:px-12 lg:px-24 border-t border-slate-800">

                    <p className="uppercase tracking-[5px] text-cyan-400 text-center font-semibold">
                        Our Process
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mt-4">
                        How We Turn Ideas Into Reality
                    </h2>

                    <p className="text-gray-400 text-center max-w-3xl mx-auto mt-5">
                        We follow a structured process to ensure every project is delivered with
                        quality, transparency, and attention to detail.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-20">

                        {/* Step 1 */}
                        <div className="relative bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                01
                            </div>

                            <Search className="w-12 h-12 text-cyan-400 mx-auto mt-6" />

                            <h3 className="text-2xl font-bold text-white mt-5">
                                Discovery
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                We understand your business goals, requirements, and project vision.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                02
                            </div>

                            <FileText className="w-12 h-12 text-cyan-400 mx-auto mt-6" />

                            <h3 className="text-2xl font-bold text-white mt-5">
                                Planning
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                We create a clear strategy, timeline, and development roadmap.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                03
                            </div>

                            <PenTool className="w-12 h-12 text-cyan-400 mx-auto mt-6" />

                            <h3 className="text-2xl font-bold text-white mt-5">
                                Design
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                We design intuitive, modern, and user-friendly interfaces.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                04
                            </div>

                            <Code2 className="w-12 h-12 text-cyan-400 mx-auto mt-6" />

                            <h3 className="text-2xl font-bold text-white mt-5">
                                Development
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                We build secure, responsive, and high-performance web solutions.
                            </p>
                        </div>

                        {/* Step 5 */}
                        <div className="relative bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                05
                            </div>

                            <Rocket className="w-12 h-12 text-cyan-400 mx-auto mt-6" />

                            <h3 className="text-2xl font-bold text-white mt-5">
                                Launch
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                After testing, we launch your project and provide ongoing support.
                            </p>
                        </div>

                    </div>

                </section>
                <section className="bg-slate-950 py-24 px-6 md:px-12 lg:px-24 border-t border-slate-800">

                    <p className="uppercase tracking-[5px] text-cyan-400 text-center font-semibold">
                        Our Core Values
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mt-4">
                        The Principles That Guide Our Work
                    </h2>

                    <p className="text-gray-400 text-center max-w-3xl mx-auto mt-5">
                        At MA Software Solution, our values define how we work, collaborate, and
                        deliver exceptional digital solutions for every client.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                        {/* Innovation */}
                        <div className="bg-slate-900 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">

                            <div className="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center mx-auto">
                                <Lightbulb className="w-10 h-10 text-cyan-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-6">
                                Innovation
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                We embrace creativity and modern technologies to build innovative digital solutions.
                            </p>

                        </div>

                        {/* Quality */}
                        <div className="bg-slate-900 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">

                            <div className="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center mx-auto">
                                <ShieldCheck className="w-10 h-10 text-cyan-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-6">
                                Quality
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                Every project is built with precision, performance, and attention to every detail.
                            </p>

                        </div>

                        {/* Transparency */}
                        <div className="bg-slate-900 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">

                            <div className="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center mx-auto">
                                <Eye className="w-10 h-10 text-cyan-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-6">
                                Transparency
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                We believe in honest communication and keeping our clients informed at every stage.
                            </p>

                        </div>

                        {/* Client Success */}
                        <div className="bg-slate-900 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,.15)]">

                            <div className="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center mx-auto">
                                <Handshake className="w-10 h-10 text-cyan-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-6">
                                Client Success
                            </h3>

                            <p className="text-gray-400 mt-4 leading-7">
                                Your success is our priority, and we strive to build long-term partnerships.
                            </p>

                        </div>

                    </div>

                </section>
                <div className="bg-slate-900 py-20 border-t border-slate-800">
                    <div className="w-auto h-auto bg-slate-950 mx-24 flex justify-between items-center py-6 px-4 rounded-2xl">
                        <div className="flex justify-center items-center gap-6">
                            <div className="h-10 w-10 bg-slate-900 text-white flex justify-center items-center rounded-full"><MessageCircle size={20} /></div>
                            <div>
                                <h1 className="text-white text-3xl font-bold">Let's Build Your Next Digital Success Story</h1>
                                <p className="text-white text-sm max-w-xl">Ready to bring your ideas to life? Contact our team today and let's create a modern digital solution for your business.</p>
                            </div>
                        </div>
                        <div>
                            <Link to="/Contact" className="bg-blue-900 hover:bg-blue-700 rounded-2xl px-8 py-4 flex items-center justify-center text-white font-semibold">Start Your Project </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About