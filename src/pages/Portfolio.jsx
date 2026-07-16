import { Link } from "react-router-dom";
import { useState } from "react";
import { Star, ExternalLink, ArrowRight, MessageCircle, } from "lucide-react";
import { Code2, Database, PenTool, Globe, Server, ShieldCheck, FolderGit2, Trophy, Users, Briefcase, Smile, } from "lucide-react";
import { FaGithub } from "react-icons/fa";
function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Prime Properties",
            category: "Web Development",
            image: "/images/project1.png",
            description:
                "Modern real estate website built with React and Tailwind CSS.",
            technologies: "React • Tailwind CSS",
            demo: "https://prime-properties-dusky.vercel.app/",
            github: "https://github.com/masoftwaresolution/Prime-Properties",
        },

        {
            id: 2,
            title: "Global Educators",
            category: "Web Development",
            image: "/images/project3.png",
            description:
                "Educational platform with responsive and modern UI.",
            technologies: "HTML • CSS • JavaScript",
            demo: "https://globaleducatorspro.com/",
            github: "https://github.com/masoftwaresolution/Global-Educators-Pro",
        },

        {
            id: 3,
            title: "Restaurant Website",
            category: "Web Development",
            image: "/images/project2.png",
            description:
                "Modern restaurant landing page with elegant interface.",
            technologies: "React • Tailwind CSS",
            demo: "https://resturent-website-nu.vercel.app/",
            github: "https://github.com/masoftwaresolution/Resturent-Website",
        },

        {
            id: 4,
            title: "Portfolio Website",
            category: "Web Development",
            image: "/images/project4.png",
            description:
                "Modern personal portfolio with responsive design.",
            technologies: "HTML • Tailwind CSS",
            demo: "https://amirwazir-dot.github.io/My-Portfolio/",
            github: "https://github.com/masoftwaresolution/Portfolio-",
        },

        {
            id: 5,
            title: "Real Estate Website",
            category: "UI/UX Design",
            image: "/images/project5.png",
            description:
                "Modern real estate website with responsive design.",
            technologies: "Figma",
            demo: "https://www.figma.com/design/CYgtEX91DbpJGt7YqLF5re/Real-Estate-Website-VS?node-id=0-1&t=vmZXqtYosHuuE20R-1",
        },

        {
            id: 6,
            title: "Shopping Bag Website",
            category: "UI/UX Design",
            image: "/images/project6.png",
            description:
                "Modern e-commerce shopping bag UI design.",
            technologies: "Figma",
            demo: "https://www.figma.com/design/IUkO3j9Ymo89z5wppvq7py/Shopping-Bag-Website?node-id=2001-8329&t=6mmJASfRqLJTX0sV-1",
        },

        {
            id: 7,
            title: "Landing Page Design",
            category: "UI/UX Design",
            image: "/images/project7.png",
            description:
                "Modern landing page with responsive design.",
            technologies: "Figma",
            demo: "https://www.figma.com/design/hldaJ9w6FUEqkGuhgdacwr/Landing-Page-Design?node-id=0-1&t=lDIot4BAsixS73HX-1",
        },
    ];
    const categories = [
        "All",
        "Web Development",
        "UI/UX Design",
    ];
    const [category, setCategory] = useState("All");
    const filteredProjects =
        category === "All"
            ? projects
            : projects.filter(
                (project) => project.category === category
            );
    const technologies = [
        {
            icon: <Code2 size={40} />,
            title: "React JS",
        },
        {
            icon: <Globe size={40} />,
            title: "HTML5",
        },
        {
            icon: <Server size={40} />,
            title: "Node JS",
        },
        {
            icon: <Database size={40} />,
            title: "MongoDB",
        },
        {
            icon: <FolderGit2 size={40} />,
            title: "GitHub",
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Tailwind CSS",
        },
    ];
    const stats = [
        {
            icon: <Briefcase size={38} />,
            number: "50+",
            title: "Projects Completed",
        },
        {
            icon: <Users size={38} />,
            number: "30+",
            title: "Happy Clients",
        },
        {
            icon: <Trophy size={38} />,
            number: "5+",
            title: "Years Experience",
        },
        {
            icon: <Smile size={38} />,
            number: "100%",
            title: "Client Satisfaction",
        },
    ];
    return (
        <div>
            <div className="bg-[url('/images/web1.jpg')] bg-cover bg-center h-[80vh] md:h-[70vh] lg:h-[70vh]">
                <div className="bg-black/95 h-full text-white px-6 md:px-12 lg:px-24">
                    <h1 className="text-5xl md:text-6xl font-bold lg:mb-6 md:mb-4 mb-2 pt-32 md:pt-36 lg:pt-36 text-left md:text-center lg:text-center text-cyan-400"> Our Portfolio </h1>
                    <h1 className="text-3xl md:text-4xl font-bold lg:mb-6 md:mb-4 mb-2 text-left md:text-center lg:text-center">Turning Ideas into Successful Digital Projects</h1>
                    <p className="text-left lg:text-lg md:text-lg text-gray-300 md:text-center lg:text-center">Explore our portfolio of modern websites and digital solutions. Every project reflects our commitment to quality, creativity, and delivering results that help businesses grow online.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-12 bg-slate-900">
                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${category === item
                            ? "bg-blue-900 hover:bg-blue-700 hover:scale-105 text-white"
                            : "bg-white hover:bg-cyan-400 hover:scale-105 text-slate-950"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 bg-slate-900 px-6 md:px-12 lg:px-24">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-slate-950 rounded-2xl overflow-hidden border border-blue-900 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)]"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-52"
                        />

                        <div className="p-6">
                            <p className="text-cyan-400 text-sm">{project.category}</p>

                            <h2 className="text-2xl font-bold text-white mt-2">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 mt-4">
                                {project.description}
                            </p>

                            <p className="text-cyan-400 text-sm mt-4">
                                {project.technologies}
                            </p>

                            <div className="flex gap-3 mt-6">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-blue-900 hover:bg-blue-700 px-5 py-2 rounded-lg text-white"
                                >
                                    <ExternalLink size={18} />
                                    Demo
                                </a>

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-white hover:bg-cyan-400 px-5 py-2 rounded-lg text-black transition-all duration-300"
                                    >
                                        <FaGithub size={18} />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
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
    );
}

export default Portfolio;