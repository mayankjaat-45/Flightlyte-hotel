import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { footerLinks } from "./footerLinks";
import logo from "../../../../public/images/flying_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logo}
              className="w-42 md:w-52 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              FlyingLyte helps you book flights, hotels, and holiday packages at
              the best prices with a fast and secure experience.
            </p>

            {/* Contact */}
            <div className="mt-4 space-y-2 text-sm">
              {/* Email */}
              <a
                href="mailto:info@flyinglyte.com"
                className="flex items-center gap-2 hover:text-(--gold-soft) active:text-(--gold-soft) transition"
              >
                <Mail size={16} /> info@flyinglyte.com
              </a>

              {/* Phone Call */}
              <a
                href="tel:+919667455591"
                className="flex items-center gap-2 hover:text-(--gold-main) active:text-(--gold-main) transition"
              >
                <Phone size={16} /> +91 9667455591
              </a>

              {/* WhatsApp Chat */}
              <a
                href="https://wa.me/919667455591"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-(--gold-main) active:text-(--gold-main) transition"
              >
                <Phone size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold capitalize mb-4">
                {section}
              </h3>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white active:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} FlyingLyte. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/Flying-Lyte/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white active:text-white transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/flying_lyte/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white active:text-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white active:text-white transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="text-center text-xs -bottom-1">
            <p>
              Designed & Developed By
              <Link to="https://www.infrivasolutions.com" className="pl-1">
                Infriva Solutions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
