import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white py-10 px-6 md:px-0 md:mx-auto">
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Section */}
        <div>
          <p className="flex items-center gap-2 text-lg font-medium">
            💬 Chat With Sales
          </p>
          <p className="text-lg">📞 1 (888) 602-6756</p>
          <p className="text-lg">📧 sales@pressable.com</p>
        </div>
        
        {/* Solutions Section */}
        <div>
          <h3 className="text-green-400 font-semibold">Solutions</h3>
          <ul className="mt-2 space-y-1">
            <li>Managed WordPress Hosting</li>
            <li>Agencies</li>
            <li>Small & Medium-Sized Businesses</li>
            <li>Freelancers</li>
            <li>High-Traffic Websites</li>
            <li>WooCommerce</li>
          </ul>
        </div>
        
        {/* Company Section */}
        <div>
          <h3 className="text-green-400 font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Customer Stories</li>
            <li>Contact</li>
            <li>Legal</li>
            <li>Press Kit</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-green-400 font-semibold">Resources</h3>
          <ul className="mt-2 space-y-1">
            <li>Blog</li>
            <li>eBooks</li>
            <li>Knowledge Base</li>
            <li>Customer Reviews</li>
            <li>Affiliate Program</li>
            <li>Strategic Partners</li>
          </ul>
        </div>
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-8 text-xl">
        <FaFacebook />
        <FaLinkedin />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
      
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-10 text-sm border-t pt-6">
        <p>Powered by WordPress</p>
        <Link href="/" className="text-blue-400">Host With Pressable</Link>
      </div>
    </footer>
  );
};

export default Footer;