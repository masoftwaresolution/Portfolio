import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-between items-center bg-slate-900 h-16 pr-6 md:pr-12 lg:pr-24 md:pl-4 lg:pl-16 fixed top-0 w-full z-50">
            <img src="/images/logo.png" className="h-20 pr-20 w-auto object-contain" alt="logo"/>
            <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white font-bold hover:text-blue-400">Home</Link>
                <Link to="/About" className="text-white font-bold hover:text-blue-400">About</Link>
                <Link to="/Service" className="text-white font-bold hover:text-blue-400">Services</Link>
                <Link to="/Portfolio" className="text-white font-bold hover:text-blue-400">Portfolio</Link>
                <Link to="/Blog" className="text-white font-bold hover:text-blue-400">Blog</Link>
                <Link to="/Contact" className="text-white font-bold hover:text-blue-400">Contact Us</Link>
            </div>
            <div className="md:hidden text-white">
                <button onClick={() => setOpen(!open)}> {open ? <X size={30} /> : <Menu size={30} />}</button>
            </div>
            {open && (
                <div className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col items-center py-6 space-y-5 md:hidden">
                    <Link to="/" className="text-white font-bold hover:text-blue-400">Home</Link>
                    <Link to="/About" className="text-white font-bold hover:text-blue-400">About</Link>
                    <Link to="/Service" className="text-white font-bold hover:text-blue-400">Services</Link>
                    <Link to="/Portfolio" className="text-white font-bold hover:text-blue-400">Portfolio</Link>
                    <Link to="/Blog" className="text-white font-bold hover:text-blue-400">Blog</Link>
                    <Link to="/Contact" className="text-white font-bold hover:text-blue-400">Contact Us</Link>
                </div>
            )}
        </div>
    );
}
export default Header;