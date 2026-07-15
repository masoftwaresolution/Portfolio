import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { SiTiktok } from "react-icons/si";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-16 py-12 grid md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">MA Software Solution</h2>
          <p className="text-gray-300 leading-7">Building modern websites with creativity, performance, and <br />responsive design.</p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/share/1abLakc9RF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><FacebookIcon /></a>
            <a href="https://www.linkedin.com/in/muhammad-amir-035a0841b?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-blue-800 transition"><LinkedInIcon /></a>
            <div>
              <a href="https://www.tiktok.com/@amir.webdeveloper?_r=1&_t=ZS-983nZdHNsd6" className="hover:text-blue-800 transition text-white"><i class="fi fi-brands-tiktok-square"></i></a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-4 pt-10 md:pb-0 md:pt-0 lg:pt-0 lg:pb-0">Quick Links</h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-400 transition"> Home </Link>
            </li> 
            <li>
              <Link to="/About" className="hover:text-blue-400 transition"> About </Link>
            </li> 
            <li>
              <Link to="/Service" className="hover:text-blue-400 transition"> Services </Link>
            </li> 
            <li>
              <Link to="/Portfolio" className="hover:text-blue-400 transition"> Portfolio </Link>
            </li> 
            <li>
              <Link to="/Contact" className="hover:text-blue-400 transition"> Contact Us </Link>
            </li>
          </ul> 
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-4 pt-10 md:pt-0 lg:pt-0">Services</h2>
          <ul className="space-y-3 text-gray-300">
            <li>Business Website</li>
            <li>E-Commerce Website</li>
            <li>Portfolio Website</li>
            <li>Landing Page</li>
            <li>Responsive Design</li>
            <li>Website Redesign</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-4 pt-10 lg:pt-0">Contact Us</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <LocationOnIcon className="text-blue-700" />
              <p>One Unit Chowk, Bahawalpur, Pakistan</p>
            </div>
            <div className="flex items-start gap-3">
              <EmailIcon className="text-blue-700" />
              <p>masoftwaresolution7@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <CallIcon className="text-blue-700" />
              <p>+92 341 3035086</p>
            </div>
            <div className="flex items-start gap-3">
              <AccessTimeIcon className="text-blue-700" />
              <p>Mon - Sat : 9AM - 8PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-gray-400 text-sm">
        © 2026 MA Software Solution. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;