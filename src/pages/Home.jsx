import { Link } from "react-router-dom"
import FAQ from "../components/FAQ";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase, } from "react-icons/si";
import { MessageCircle, MessageSquare, ShieldCheck, Building2, ClipboardCheck, Headset, Star, Code2, Palette, Rocket, Handshake, } from "lucide-react";
function Home() {
    const stats = [
        {
            icon: <Handshake className="w-14 h-14 text-cyan-400" />,
            title: "100%",
            subtitle: "Client Commitment",
            description: "We focus on understanding your needs and delivering solutions that help your business grow.",
        },
        {
            icon: <Headset className="w-14 h-14 text-cyan-400" />,
            title: "24/7",
            subtitle: "Customer Support",
            description: "Our support team is always available to assist you whenever you need help.",
        },
        {
            icon: <Code2 className="w-14 h-14 text-cyan-400" />,
            title: "Modern",
            subtitle: "Technologies",
            description: "We use the latest tools and technologies to build fast, secure, and scalable solutions.",
        },
        {
            icon: <Rocket className="w-14 h-14 text-cyan-400" />,
            title: "Fast",
            subtitle: "Project Delivery",
            description: "We value your time and ensure timely delivery without compromising on quality.",
        },
    ];
    return (
        <div>
            <div className="bg-[url('/images/web.jpg')] bg-cover bg-center min-h-screen">
                <div className="bg-black/80 min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24">
                    <div className="flex-1 text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl pt-24 md:pt-32 lg:pt-10 font-bold leading-tight">
                            Transforming Ideas Into Powerful
                            <span className="text-blue-500"> Digital Solutions</span>
                        </h1>
                        <p className="mt-2 md:mt-4 lg:mt-6 pr-0 md:pr-32 lg:pr-0 text-justify"> We create modern websites, responsive web applications, and digital solutions that help businesses grow, attract more customers, and build a strong online presence. </p>
                        <div className="flex gap-6 mt-4 md:mt-4 lg:mt-8">
                            <Link to="/Service" className="bg-blue-900 hover:bg-blue-700 hover:scale-105 rounded-2xl px-5 py-3 md:px-7 md:py-3 lg:px-8 lg:py-4 lg:mt-6 flex items-center justify-center text-white">Our Services </Link>
                            <Link to="/portfolio" className="bg-white hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 rounded-2xl px-5 py-3 md:px-7 md:py-3 lg:px-8 lg:py-4 lg:mt-6 flex items-center justify-center text-blue-900 font-semibold">View Projects </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center mt-12 lg:pt-10 mb-8 md:mb-6 lg:mb-0">
                        <img src="/images/laptop.png" alt="Laptop" className="w-full max-w-2xl  max-h-[60vh]" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center sm:pt-6 md:pt-6 py-20 px-6 md:px-12 lg:px-24 bg-slate-900">
                <div className="my-6 lg:w-1/2">
                    <h1 className="pb-2 text-4xl lg:text-5xl font-bold text-white mt-2">About Our Company</h1>
                    <h4 className="text-2xl text-cyan-400 pb-3">Your partner for Digital Innovation</h4>
                    <p className="pb-4 text-gray-300 text-justify">At MA Software Solution, we are passionate about turning ideas into powerful digital experiences. We specialize in Web Development and UI/UX Design, helping businesses establish a strong online presence with modern, responsive, and user-friendly solutions. Our focus is on creating websites and interfaces that not only look visually appealing but also deliver exceptional performance, usability, and business value.</p>
                    <p className="pb-4 text-gray-300 text-justify">We believe every business deserves a unique digital identity. That's why we work closely with our clients to understand their goals and transform their vision into reality through innovative design and reliable development. Whether you need a corporate website, a business portfolio, or a custom web solution, MA Software Solution is committed to delivering high-quality results that help your brand grow, engage customers, and succeed in the digital world.</p>
                </div>
                <div>
                    <img src="/images/office.jpg" alt="laptop pic" className="rounded-xl w-full lg:max-w-md mt-12" />
                </div>
            </div>
            <div className="bg-slate-950 px-6 md:px-12 lg:px-24 py-20">
                <p className="uppercase text-cyan-500 text-center">our work</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-center text-white mt-2">Solution we build, <br /> Success we've Delivered</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    <div className="bg-slate-900 border border-blue-900 hover:border-cyan-400 h-auto rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]">
                        <img src="images/project1.png" alt="project1" className="rounded-t-2xl w-full" />
                        <h1 className="text-3xl text-white font-bold px-4 pt-2">Prime Properties</h1>
                        <p className="text-gray-400 px-4 mt-3">  modern real estate website built with React, Tailwind CSS and responsive UI. </p>
                        <div className="flex flex-wrap gap-2 px-4 mt-4">
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm"> React </span>
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm">  CSS </span>
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm"> Vite </span>
                        </div>
                        <div className="mb-4 px-4 mt-6 flex gap-4">
                            <a href="https://prime-properties-dusky.vercel.app/" target="blank" className="h-auto w-auto px-4 py-3 bg-blue-900 hover:bg-blue-700 rounded-2xl text-white font-semibold">View Project</a>
                            <a href="https://github.com/masoftwaresolution/Prime-Properties" target="blank" className="h-auto w-auto px-4 py-3 bg-white hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 rounded-2xl text-black font-semibold">Github</a>
                        </div>
                    </div>
                    <div className="bg-slate-900 border border-blue-900 hover:border-cyan-400 h-auto rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]">
                        <img src="images/project2.png" alt="project1" className="rounded-t-2xl w-full" />
                        <h1 className="text-3xl text-white font-bold px-4 pt-2">Foodie's Resturent</h1>
                        <p className="text-gray-400 px-4 mt-3">  modern real estate website built with React, Tailwind CSS and responsive UI. </p>
                        <div className="flex flex-wrap gap-2 px-4 mt-4">
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm"> React </span>
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm">  CSS </span>
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm"> Vite </span>
                        </div>
                        <div className="mb-4 px-4 mt-6 flex gap-4">
                            <a href="https://resturent-website-nu.vercel.app/" target="blank" className="h-auto w-auto px-4 py-3 bg-blue-900 hover:bg-blue-700 rounded-2xl text-white font-semibold">View Project</a>
                            <a href="https://github.com/masoftwaresolution/Resturent-Website" target="blank" className="h-auto w-auto px-4 py-3 bg-white hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 rounded-2xl text-black font-semibold">Github</a>
                        </div>
                    </div>
                    <div className="bg-slate-900 border border-blue-900 hover:border-cyan-400 h-auto rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]">
                        <img src="images/project3.png" alt="project3" className="rounded-t-2xl w-full" />
                        <h1 className="text-3xl text-white font-bold px-4 pt-2">Global Educators</h1>
                        <p className="text-gray-400 px-4 mt-3">  modern real estate website built with React, Tailwind CSS and responsive UI. </p>
                        <div className="flex flex-wrap gap-2 px-4 mt-4">
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm"> React </span>
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm">  CSS </span>
                            <span className="bg-blue-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm"> Vite </span>
                        </div>
                        <div className="mb-4 px-4 mt-6 flex gap-4">
                            <a href="https://globaleducatorspro.com/" target="blank" className="h-auto w-auto px-4 py-3 bg-blue-900 hover:bg-blue-700 rounded-2xl text-white font-semibold">View Project</a>
                            <a href="https://github.com/masoftwaresolution/Global-Educators-Pro" target="blank" className="h-auto w-auto px-4 py-3 bg-white hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 rounded-2xl text-black font-semibold">Github</a>
                        </div>
                    </div>
                </div>
                <Link to="/portfolio" className="bg-slate-800 hover:bg-slate-900 hover:text-white hover:scale-105 rounded-2xl py-4 w-36 mt-6 mx-auto flex items-center justify-center text-white font-semibold">View Projects </Link>
            </div>
            <div className="bg-slate-900 py-20 px-6 md:px-12 lg:px-24">
                <p className="text-cyan-400 uppercase text-center tracking-widest">
                    Technologies
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mt-2">
                    Our Tech Stack
                </h2>

                <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
                    We use modern technologies to build fast, secure, and scalable web applications.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <FaReact className="text-6xl text-cyan-400 animate-spin" />
                        <h3 className="text-white font-semibold mt-4">React</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <SiTailwindcss className="text-6xl text-cyan-400" />
                        <h3 className="text-white font-semibold mt-4">Tailwind CSS</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <SiJavascript className="text-6xl text-yellow-400" />
                        <h3 className="text-white font-semibold mt-4">JavaScript</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <FaNodeJs className="text-6xl text-green-500" />
                        <h3 className="text-white font-semibold mt-4">Node.js</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <SiFirebase className="text-6xl text-orange-500" />
                        <h3 className="text-white font-semibold mt-4">Firebase</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <FaGitAlt className="text-6xl text-orange-600" />
                        <h3 className="text-white font-semibold mt-4">Git</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <FaGithub className="text-6xl text-white" />
                        <h3 className="text-white font-semibold mt-4">GitHub</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <FaHtml5 className="text-6xl text-orange-500" />
                        <h3 className="text-white font-semibold mt-4">HTML5</h3>
                    </div>

                    <div className="bg-slate-950 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 flex flex-col items-center overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]">
                        <FaCss3Alt className="text-6xl text-blue-500" />
                        <h3 className="text-white font-semibold mt-4">CSS3</h3>
                    </div>

                </div>
            </div>
            <section className="bg-slate-950 py-20 px-6 md:px-12 lg:px-24">
                <p className="uppercase tracking-[5px] text-cyan-400 text-center font-semibold">
                    Our Commitment
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mt-4">
                    Built on Values, Focused on You
                </h2>

                <p className="text-gray-400 text-center max-w-3xl mx-auto mt-6">
                    As a new company, we are committed to delivering innovative digital
                    solutions with transparency, quality, and long-term client
                    relationships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 border border-blue-900 hover:border-cyan-400 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]"
                        >
                            <div className="flex justify-center">
                                <div className="w-24 h-24 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                                    {item.icon}
                                </div>
                            </div>

                            <h3 className="text-5xl font-bold text-cyan-400 mt-8">
                                {item.title}
                            </h3>

                            <h4 className="text-2xl font-semibold text-white mt-2">
                                {item.subtitle}
                            </h4>

                            <div className="w-14 h-1 bg-cyan-400 mx-auto rounded-full my-5"></div>

                            <p className="text-gray-400 leading-8">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-slate-900">
                <h1 className="text-4xl lg:text-5xl font-bold text-center text-white">Testimonials</h1>
                <h3 className="text-center pt-2 pb-4 text-gray-300">Hear what our client says</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                    <div className="h-auto w-auto border border-blue-900 hover:border-cyan-400 bg-slate-950 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)] px-4 py-6 rounded-2xl">
                        <p className="pt-3 text-justify text-gray-300">"Working with MA Software Solution was a great experience. They built a modern, responsive website that perfectly matched our business goals and delivered everything on schedule."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/A1.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">John Anderson</h1>
                                <h3 className="text-gray-300">CEO, TechNova Inc.</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto border border-blue-900 hover:border-cyan-400 bg-slate-950 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)] px-4 py-6 rounded-2xl">
                        <p className="text-justify pt-3 text-gray-300">"The developers understood our requirements from day one and created a fast, user-friendly website that exceeded our expectations in both design and performance."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/A3.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">David Wilson</h1>
                                <h3 className="text-gray-300">Business Owner</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto border border-blue-900 hover:border-cyan-400 bg-slate-950 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)] px-4 py-6 rounded-2xl">
                        <p className="pt-3 text-justify text-gray-300">"I truly appreciate their commitment to quality and customer satisfaction. They listened to every requirement and created a website that exceeded my expectations."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/A7.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">Emily Carter</h1>
                                <h3 className="text-gray-300">Project Manager</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto border border-blue-900 hover:border-cyan-400 bg-slate-950 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)] px-4 py-6 rounded-2xl">
                        <p className="text-justify pt-3 text-gray-300">"MA Software Solution provided outstanding service throughout the project. Their attention to detail, communication, and timely delivery made the entire process stress-free."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/A5.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">Daniel Anderson</h1>
                                <h3 className="text-gray-300">Architect</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-950">
                <FAQ />
            </div>
            <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 px-6 py-8 lg:px-10 lg:py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8"> 
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left"> 
                            <div className="h-14 w-14 bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                                <MessageCircle size={26} className="text-white" />
                            </div> 
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white"> Let's Build Your Next Digital Success Story </h2>
                                <p className="text-gray-300 mt-2"> Let's build something great together. Get in touch with us today. </p>
                            </div> 
                        </div> 
                        <Link to="/Contact" className="bg-blue-700 hover:bg-blue-800 duration-300 text-white hover:scale-105 font-semibold px-8 py-4 rounded-xl whitespace-nowrap" > Start Your Project </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home