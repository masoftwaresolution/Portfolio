import { Link } from "react-router-dom";
import { useState } from "react";
import { Star, ExternalLink, ArrowRight,MessageCircle,  } from "lucide-react";
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
            technologies: "React • Tailwind CSS",
            demo: "https://globaleducatorspro.com/",
            github: "https://github.com/masoftwaresolution/Global-Educators-Pro",
        },

        {
            id: 3,
            title: "Restaurant Website",
            category: "UI/UX Design",
            image: "/images/project2.png",
            description:
                "Modern restaurant landing page with elegant interface.",
            technologies: "React • Tailwind CSS",
            demo: "https://resturent-website-nu.vercel.app/",
            github: "https://github.com/masoftwaresolution/Resturent-Website",
        },

        {
            id: 4,
            title: "E-Commerce Store",
            category: "E-Commerce",
            image: "/images/project4.png",
            description:
                "Responsive online shopping website.",
            technologies: "React • Node.js",
            demo: "#",
            github: "#",
        },

        {
            id: 5,
            title: "SEO Landing Page",
            category: "SEO",
            image: "/images/project4.png",
            description:
                "Optimized landing page with fast performance.",
            technologies: "HTML • CSS • JS",
            demo: "#",
            github: "#",
        },

        {
            id: 6,
            title: "Portfolio Website",
            category: "Web Development",
            image: "/images/project4.png",
            description:
                "Creative personal portfolio website.",
            technologies: "React • Tailwind CSS",
            demo: "https://amirwazir-dot.github.io/My-Portfolio/",
            github: "https://github.com/masoftwaresolution/Portfolio-",
        },
    ];
    const categories = [
        "All",
        "Web Development",
        "UI/UX Design",
        "E-Commerce",
        "SEO",
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
            <div className="bg-[url('/images/web.jpg')] bg-cover bg-center h-[70vh]">

                <div className="bg-black/75 h-full flex flex-col justify-center items-center text-center px-6">

                    <p className="text-cyan-400 font-semibold tracking-widest uppercase">
                        Portfolio
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
                        Our Creative Projects
                    </h1>

                    <p className="max-w-3xl mt-6 text-lg text-gray-300">
                        Explore our latest web development, UI/UX design,
                        SEO and e-commerce projects created for businesses
                        around the world.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-10 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition"
                    >

                        Start Your Project

                    </Link>

                </div>


            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-12 bg-slate-900">
                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${category === item
                            ? "bg-cyan-500 text-white"
                            : "bg-slate-900 border border-slate-800 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
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
                                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg text-white"
                                >
                                    <ExternalLink size={18} />
                                    Demo
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 border border-slate-700 hover:border-cyan-400 px-5 py-2 rounded-lg text-white"
                                >
                                    <FaGithub size={18} />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-slate-950 py-20">
                <div className="w-auto h-auto bg-slate-900 mx-24 flex justify-between items-center py-6 px-4 rounded-2xl">
                    <div className="flex justify-center items-center gap-6">
                        <div className="h-10 w-10 bg-slate-950 text-white flex justify-center items-center rounded-full"><MessageCircle size={20} /></div>
                        <div>
                            <h1 className="text-white text-3xl font-bold">Let's Build Your Next Digital Success Story</h1>
                            <p className="text-white">Let's Build Something Great Together. Get in touch with us.</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/Contact" className="bg-blue-900 hover:bg-blue-700 rounded-2xl px-8 py-4 flex items-center justify-center text-white font-semibold">Start Your Project </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;