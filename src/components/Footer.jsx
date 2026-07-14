import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-16 py-12 grid md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">MA Software Solution</h2>
          <p className="text-gray-300 leading-7">Building modern websites with creativity, performance, and <br />responsive design.</p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/share/1abLakc9RF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FacebookIcon /></a>
            <a href="#" className="hover:text-blue-400 transition"><LinkedInIcon /></a>
            <a href="mailto:masoftwaresolution7@gmail.com" className="hover:text-blue-500 transition"><EmailIcon /></a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="/" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="/About" className="hover:text-blue-400 transition">About</a>
            </li>
            <li>
              <a href="/Service" className="hover:text-blue-400 transition">Services</a>
            </li>
            <li>
              <a href="/Portfolio" className="hover:text-blue-400 transition">Portfolio</a>
            </li> 
            <li>
              <a href="/Contact" className="hover:text-blue-400 transition">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Services</h2>
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
          <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <LocationOnIcon className="text-cyan-400" />
              <p>One Unit Chowk, Bahawalpur, Pakistan</p>
            </div>
            <div className="flex items-start gap-3">
              <EmailIcon className="text-cyan-400" />
              <p>masoftwaresolution7@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <CallIcon className="text-cyan-400" />
              <p>+92 341 3035086</p>
            </div>
            <div className="flex items-start gap-3">
              <AccessTimeIcon className="text-cyan-400" />
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