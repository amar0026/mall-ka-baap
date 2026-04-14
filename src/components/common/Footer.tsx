import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo99.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Brand + Subscribe ── */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="Mall Ka Baap logo" className="h-12 object-contain" />
            </Link>

            <div className="space-y-2">
              <p className="font-semibold text-base">Subscribe</p>
              <p className="text-sm text-gray-400">Get 10% off your first order</p>
            </div>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-600 px-3 py-2 flex-1 text-sm placeholder-gray-500 rounded-l-lg focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-3 py-2 rounded-r-lg flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                <Facebook className="w-4 h-4" key="facebook" />,
                <Twitter className="w-4 h-4" key="twitter" />,
                <Instagram className="w-4 h-4" key="instagram" />,
                <Linkedin className="w-4 h-4" key="linkedin" />,
              ]}
            </div>
          </div>

          {/* ── Col 2: Support ── */}
          <div className="space-y-5">
            <h3 className="font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-500">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  EB 20, Shop No 2 &amp; 3, Near Baguiati AC Market, VIP Road,
                  Deshbandhunagar, Kolkata-700059, West Bengal
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:agarwal.ankit0193@gmail.com" className="hover:text-orange-400 transition-colors break-all">
                  agarwal.ankit0193@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="tel:07942700870" className="hover:text-orange-400 transition-colors">
                  07942700870
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Account ── */}
          <div className="space-y-5">
            <h3 className="font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-500">
              Account
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: "My Account", to: "/profile" },
                { label: "Login / Register", to: "/login" },
                { label: "Cart", to: "/cart" },
                { label: "Wishlist", to: "/wishlist" },
                { label: "Shop", to: "/shop" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="hover:text-orange-400 hover:pl-1 transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Quick Links ── */}
          <div className="space-y-5">
            <h3 className="font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-500">
              Quick Link
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Shop", to: "/shop" },
                { label: "Categories", to: "/categories" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="hover:text-orange-400 hover:pl-1 transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mall Ka Baap. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;