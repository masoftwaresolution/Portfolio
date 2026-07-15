import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import { Code2, Palette, ShoppingCart, Smartphone, Globe, ShieldCheck, Search, ArrowRight, ClipboardList, PenTool, Laptop, Bug, Rocket, Headphones, } from "lucide-react";
import { Monitor, Database, Server, GitBranch, Headset, Clock3, Trophy, Users, MessageCircle, } from "lucide-react";
function Services() {
    const technologies = [
        {
            icon: <Monitor size={40} />,
            title: "HTML5",
            description: "Modern semantic website structure.",
        },
        {
            icon: <Palette size={40} />,
            title: "CSS3",
            description: "Beautiful responsive styling.",
        },
        {
            icon: <Code2 size={40} />,
            title: "JavaScript",
            description: "Interactive and dynamic websites.",
        },
        {
            icon: <Code2 size={40} />,
            title: "React JS",
            description: "Fast and scalable frontend development.",
        },
        {
            icon: <Palette size={40} />,
            title: "Tailwind CSS",
            description: "Utility-first CSS framework.",
        },
        {
            icon: <Server size={40} />,
            title: "Node.js",
            description: "Backend development and APIs.",
        },
        {
            icon: <Database size={40} />,
            title: "MongoDB",
            description: "Flexible NoSQL database.",
        },
        {
            icon: <GitBranch size={40} />,
            title: "Git & GitHub",
            description: "Version control and collaboration.",
        },
        {
            icon: <PenTool size={40} />,
            title: "Figma",
            description: "Professional UI/UX design.",
        },
    ];
    const whyChooseUs = [
        {
            icon: <Trophy size={40} />,
            title: "Quality Work",
            description:
                "We deliver clean, professional and high-performance websites.",
        },
        {
            icon: <Clock3 size={40} />,
            title: "Fast Delivery",
            description:
                "Projects are completed on time without compromising quality.",
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Secure Development",
            description:
                "We follow modern security standards for every project.",
        },
        {
            icon: <Users size={40} />,
            title: "Expert Team",
            description:
                "Our experienced developers build reliable digital solutions.",
        },
        {
            icon: <Headset size={40} />,
            title: "24/7 Support",
            description:
                "We're always available to help after project delivery.",
        },
        {
            icon: <Code2 size={40} />,
            title: "Latest Technologies",
            description:
                "We use modern tools to build fast and scalable applications.",
        },
    ];
    const services = [
        {
            icon: <Code2 size={40} />,
            title: "Web Development",
            description:
                "Modern, fast and responsive websites built with the latest technologies.",
        },
        {
            icon: <Palette size={40} />,
            title: "UI/UX Design",
            description:
                "Creative and user-friendly designs that improve user experience.",
        },
        {
            icon: <ShoppingCart size={40} />,
            title: "E-Commerce Development",
            description:
                "Build secure and responsive e-commerce websites.",
        },
        {
            icon: <Smartphone size={40} />,
            title: "Responsive Design",
            description:
                "Websites that look perfect on desktop, tablet and mobile devices.",
        },
        {
            icon: <Globe size={40} />,
            title: "SEO Optimization",
            description:
                "Improve your website ranking and reach more customers online.",
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Website Maintenance",
            description:
                "Regular updates, security monitoring and performance optimization.",
        },
    ];

    const process = [
        {
            icon: <ClipboardList size={32} />,
            title: "Requirement Analysis",
            description: "We understand your business goals and project requirements.",
        },
        {
            icon: <PenTool size={32} />,
            title: "UI/UX Design",
            description: "Wireframes and modern user interface design are prepared.",
        },
        {
            icon: <Laptop size={32} />,
            title: "Development",
            description: "Clean, scalable and responsive code is developed.",
        },
        {
            icon: <Bug size={32} />,
            title: "Testing",
            description: "Every feature is tested to ensure high quality.",
        },
        {
            icon: <Rocket size={32} />,
            title: "Deployment",
            description: "The website is launched on a secure production server.",
        },
        {
            icon: <Headphones size={32} />,
            title: "Support",
            description: "Continuous support and maintenance after launch.",
        },
    ];
    return (
        <div>
            <div className="bg-[url('/images/web1.jpg')] bg-cover bg-center h-[80vh] md:h-[70vh] lg:h-[70vh]">
                <div className="bg-black/95 h-full text-white px-6 md:px-12 lg:px-24">
                    <h1 className="text-5xl md:text-6xl font-bold lg:mb-6 md:mb-4 mb-2 pt-32 md:pt-36 lg:pt-36 text-left md:text-center lg:text-center text-cyan-400"> Our Services </h1>
                    <h1 className="text-3xl md:text-4xl font-bold lg:mb-6 md:mb-4 mb-2 text-left md:text-center lg:text-center">Smart Digital Solutions for Modern Businesses</h1>
                    <p className="text-left lg:text-lg md:text-lg text-gray-300 md:text-center lg:text-center">We provide professional web development and UI/UX design solutions to help businesses build a strong online presence, attract more customers, and achieve long-term growth.</p>
                </div>
            </div>
            <section className="px-6 md:px-12 lg:px-24 py-20 bg-slate-900">

                <div className="text-center mb-14">
                    <p className="text-cyan-400 uppercase tracking-widest">
                        What We Offer
                    </p>

                    <h2 className="text-4xl md:text-5xl text-white font-bold mt-3">
                        Our Professional Services
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mt-5">
                        We help businesses build powerful digital products with modern web
                        development and creative UI/UX design solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-950 border border-blue-900 hover:border-cyan-400  rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)] group"
                        >
                            <div className="text-cyan-400 mb-6 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 leading-7">
                                {item.description}
                            </p>

                            <button className="mt-8 flex items-center gap-2 text-cyan-400 hover:text-white transition">
                                Learn More
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>

            </section>

            {/* Development Process */}

            <section className="bg-slate-950 py-20">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    <div className="text-center mb-16">

                        <p className="uppercase tracking-widest text-cyan-400">
                            Our Process
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-white">
                            How We Work
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                            Our proven development process ensures every project is delivered
                            with quality, performance and customer satisfaction.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {process.map((step, index) => (

                            <div
                                key={index}
                                className="relative bg-slate-900 rounded-2xl p-8 border border-blue-900 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]"
                            >

                                <div className="absolute -top-5 left-8 bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-black">
                                    {index + 1}
                                </div>

                                <div className="mt-8 text-cyan-400 mb-5">
                                    {step.icon}
                                </div>

                                <h3 className="text-2xl font-semibold mb-3 text-white">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 leading-7">
                                    {step.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            <section className="py-20 bg-slate-900">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    <div className="text-center mb-14">

                        <p className="text-cyan-400 uppercase tracking-widest">
                            Technologies
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-white">
                            Technologies We Use
                        </h2>

                        <p className="text-gray-400 max-w-3xl mx-auto mt-5">
                            We use modern technologies to build secure, scalable and high-performance websites and web applications.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {technologies.map((tech, index) => (

                            <div
                                key={index}
                                className="bg-slate-950 rounded-2xl p-8 text-center border border-blue-900 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]"
                            >

                                <div className="text-cyan-400 flex justify-center mb-5">
                                    {tech.icon}
                                </div>

                                <h3 className="text-2xl font-semibold mb-3 text-white">
                                    {tech.title}
                                </h3>

                                <p className="text-gray-400">
                                    {tech.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            <section className="py-20 bg-slate-950">

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    <div className="text-center mb-14">

                        <p className="uppercase tracking-widest text-cyan-400">
                            Why Choose Us
                        </p>

                        <h2 className="text-4xl font-bold mt-3 text-white">
                            Why Businesses Trust MA Software Solution
                        </h2>

                        <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
                            We are committed to delivering innovative, secure and high-quality digital solutions that help businesses grow online.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {whyChooseUs.map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-900 rounded-2xl p-8 border border-blue-900 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]"
                            >

                                <div className="text-cyan-400 mb-5">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-semibold mb-4 text-white">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-7">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            <div className="bg-slate-900">
                <FAQ />
            </div>
            <div className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 px-6 py-8 lg:px-10 lg:py-10">
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
                        <Link to="/Contact" className="bg-blue-700 hover:bg-blue-800 hover:scale-105 duration-300 text-white font-semibold px-8 py-4 rounded-xl whitespace-nowrap" > Start Your Project </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services