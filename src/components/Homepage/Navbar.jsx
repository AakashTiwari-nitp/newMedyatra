"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Correct import for App Router
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  Home,
  Phone,
  MessageCircle,
  DollarSign,
  BarChart3,
  LogOut,
  ChevronDown,
  ChevronUp,
  FileText,
  Palette,
  Bell
} from 'lucide-react';
import { TbDental, TbMedicalCross } from 'react-icons/tb';
import { GiHairStrands } from 'react-icons/gi';

const treatmentSubMenu = [
  { name: 'Blog', path: '/treatment/blog', icon: <FileText size={20} /> },
  { name: 'Dental', path: '/treatment/dental', icon: <TbDental size={20} /> },
  { name: 'IVF', path: '/treatment/ivf', icon: <TbMedicalCross size={20} /> },
  { name: 'Hair', path: '/treatment/hair', icon: <GiHairStrands size={20} /> },
  { name: 'Cosmetics', path: '/treatment/cosmetics', icon: <Palette size={20} /> }
];

const mainNavItems = [
  { name: 'Home', path: '/' },
  { name: 'Free Consultation', path: '/free-consultation' },
  { name: 'Compare Cost', path: '/compare-cost' },
  { name: 'Plan Journey', path: '/plan-journey' },
  { name: 'Treatment', path: '/treatment', submenu: treatmentSubMenu },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Doctor? Here!', path: '/doctor-dashboard' }
];

const menuItems = [
  { text: 'Home', icon: <Home size={20} />, path: '/' },
  { text: 'Treatments', icon: <TbMedicalCross size={20} />, submenu: treatmentSubMenu },
  { text: 'Free Consultation', icon: <MessageCircle size={20} />, path: '/free-consultation' },
  { text: 'AI Chat', icon: <MessageCircle size={20} />, path: '/chat' },
  { text: 'Compare Cost', icon: <DollarSign size={20} />, path: '/compare-cost' },
  { text: 'Contact Us', icon: <Phone size={20} />, path: '/contact' },
  { text: 'Dashboard', icon: <BarChart3 size={20} />, path: '/login' },
  { text: 'Logout', icon: <LogOut size={20} />, path: '/logout' },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Use usePathname for client-side path
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const treatmentPaths = ['/treatment', '/treatment/blog', '/treatment/dental', '/treatment/ivf', '/treatment/hair', '/treatment/cosmetics'];

  const isActive = (path) => {
    if (path === '/treatment') {
      return treatmentPaths.some(p => pathname.startsWith(p));
    }
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#52C7BE] backdrop-blur-md">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              <button
                onClick={toggleDrawer}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                <Menu size={24} />
              </button>
              
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src="/logo.webp"
                      alt="MedYatra Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <h1 className="text-xl font-bold text-white">MedYatra</h1>
              </Link>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-md text-white hover:bg-white/10 relative">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </button>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-bold hover:bg-gray-900 transition-colors shadow-lg"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              {/* Left: Logo */}
              <Link href="/" className="flex items-center space-x-3 no-underline">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src="/logo.webp"
                      alt="MedYatra Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white leading-tight">MedYatra</h1>
                  <p className="text-xs text-white/90 -mt-1">Making Medical Travel Effortless</p>
                </div>
              </Link>

              {/* Center: Navigation */}
              <div className="flex items-center space-x-8">
                {mainNavItems.map((item) => (
                  item.submenu ? (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <button className={`flex items-center text-white text-sm transition-colors ${
                        isActive(item.path) ? 'font-black underline underline-offset-4' : 'font-medium'
                      }`}>
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      
                      {isHovering && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-opacity duration-300">
                          {item.submenu.map(subItem => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                            >
                              {subItem.icon}
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`text-white text-sm hover:text-white/80 transition-colors ${
                        isActive(item.path) ? 'font-black underline underline-offset-4' : 'font-medium'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>

              {/* Right: Login & Sign Up */}
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-4 py-2 bg-white text-gray-800 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/newSignup"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleDrawer} />
          <div className="fixed left-0 top-0 h-full w-80 bg-[#1D4645] text-white overflow-y-auto rounded-r-lg">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src="/logo.webp"
                      alt="MedYatra Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <h1 className="text-xl font-bold">MedYatra</h1>
              </div>
              <button onClick={toggleDrawer} className="p-2 hover:bg-white/10 rounded-md">
                <X size={20} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  item.submenu ? (
                    <div key={item.text}>
                      <button
                        onClick={toggleSubMenu}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.text}</span>
                        </div>
                        {subMenuOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${subMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="ml-6 mt-2 space-y-1">
                          {item.submenu.map(subItem => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              onClick={() => setDrawerOpen(false)}
                              className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-sm"
                            >
                              {subItem.icon}
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.text}
                      href={item.path}
                      onClick={() => setDrawerOpen(false)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </Link>
                  )
                ))}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="absolute bottom-0 w-full p-4 text-center">
              <p className="text-sm text-white/70">
                {new Date().getFullYear()} MedYatra
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;