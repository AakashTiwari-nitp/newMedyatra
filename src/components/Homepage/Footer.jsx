"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaFacebook size={20} />,
    label: 'Facebook',
    href: 'https://www.facebook.com',
  },
  {
    icon: <FaTwitter size={20} />,
    label: 'Twitter',
    href: 'https://twitter.com',
  },
  {
    icon: <FaInstagram size={20} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/med.yatra/',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/medyatra-official/',
  },
];

const footerLinks = [
  {
    title: "For Patients",
    links: ["Find Doctors", "Book Appointment", "How It Works", "Emergency Care"],
  },
  {
    title: "For Doctors",
    links: ["Join MedYatra", "Doctor Portal", "Verification Process", "Medical Resources"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press & Media", "Partnerships"],
  },
  {
    title: "Resources",
    links: ["Health Blog", "FAQ", "Help Center", "Contact Support"],
  },
];

const AccordionSection = ({ section, isOpen, onToggle, index }) => {
  return (
    <div className="border-none">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between py-3 px-0 text-left focus:outline-none"
      >
        <h3 className="text-base font-bold text-white">{section.title}</h3>
        {isOpen ? (
          <ChevronUp size={20} className="text-white" />
        ) : (
          <ChevronDown size={20} className="text-white" />
        )}
      </button>
      {isOpen && (
        <div className="pb-2">
          <div className="space-y-2">
            {section.links.map((link, i) => (
              <p key={i} className="text-sm text-gray-300">
                {link === "About Us" ? (
                  <Link 
                    href="/about" 
                    className="text-white underline hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </Link>
                ) : (
                  link
                )}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <footer className="bg-black text-white pt-2">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="px-2 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Contact Section */}
            <div className="md:col-span-4">
              <Link href="https://medyatra.space" className="flex items-center no-underline">
                <div className="w-9 h-9 rounded-full overflow-hidden mr-2">
                  <img
                    src="/logo.webp"
                    alt="MedYatra Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold text-white">MedYatra</h2>
              </Link>
              
              <p className="text-sm text-gray-400 mt-3 mb-4">
                India's leading AI-powered healthcare platform connecting patients with verified doctors. Making quality healthcare accessible, affordable, and convenient for everyone.
              </p>

              {/* Contact Info */}
              <div className="mt-4 space-y-3">
                <div className="flex items-start">
                  <button className="flex items-center justify-center w-8 h-8 bg-white text-black rounded mr-3 hover:scale-110 transition-transform duration-300">
                    <Phone size={16} />
                  </button>
                  <div className="text-sm">
                    <p>+91 85350-79387 | +91 93680 75651</p>
                    <p className="text-gray-400">(24/7 Patient Support)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <button className="flex items-center justify-center w-8 h-8 bg-white text-black rounded mr-3 hover:scale-110 transition-transform duration-300">
                    <Mail size={16} />
                  </button>
                  <div className="text-sm">
                    <p>contact@medyatra.com</p>
                    <p className="text-gray-400">(General Inquiries)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links Sections */}
            {footerLinks.map((section, index) => (
              <div key={index} className="md:col-span-2">
                {isMobile ? (
                  <AccordionSection 
                    section={section} 
                    isOpen={openAccordions[index]}
                    onToggle={toggleAccordion}
                    index={index}
                  />
                ) : (
                  <div>
                    <h3 className="text-base font-bold mb-3">{section.title}</h3>
                    <div className="space-y-2">
                      {section.links.map((link, i) => (
                        <p key={i} className="text-sm text-gray-300">
                          {link === "About Us" ? (
                            <Link 
                              href="/about" 
                              className="text-white hover:underline transition-all duration-200"
                            >
                              {link}
                            </Link>
                          ) : (
                            link
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mb-2">
          <div className="px-4 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 space-y-4 md:space-y-0">
              <p className="text-sm text-gray-500">
                © 2025 MedYatra Technologies Pvt. Ltd. All rights reserved.
              </p>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">Follow us:</span>
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center text-white rounded hover:scale-125 hover:text-black hover:bg-white transition-all duration-300"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/terms" 
                    className="text-white underline hover:text-gray-300 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    href="/privacy" 
                    className="text-white underline hover:text-gray-300 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;