import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logo3.png';
import { useAuth } from '../context/useAuth';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = async () => {
    try {
      await logout();
      setIsMobileMenuOpen(false);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-emerald-600 font-semibold transition-all duration-300 '
      : 'text-emerald-400 hover:text-emerald-600 transition-all duration-300';

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center  px-6 py-4 fixed top-0 right-0 left-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? 'bg-white text-black' : 'bg-transparent text-black'
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <div>
          <img src={logo} alt="logo" className="w-10 md:w-20" />
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/plan" className={navLinkClass}>
          Plans
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-emerald-600 hover:bg-emerald-500 py-2 px-4 rounded-2xl text-white"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="bg-emerald-600 hover:bg-emerald-500 py-2 px-4 rounded-2xl text-white"
          >
            Login Now
          </NavLink>
        )}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className={`text-3xl ${
            isScrolled ? 'text-black' : 'text-black'
          }`}
          aria-label="Toggle mobile menu"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-white text-blue-900 p-6 z-50 md:hidden overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="logo" className="w-10" />
            <button
              onClick={toggleMobileMenu}
              className="text-blue-900 text-3xl"
              aria-label="Close mobile menu"
            >
              <HiX />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg">
            <NavLink to="/" className={navLinkClass} onClick={toggleMobileMenu}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/plan"
              className={navLinkClass}
              onClick={toggleMobileMenu}
            >
              Plans
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={toggleMobileMenu}
            >
              Contact
            </NavLink>

            {user ? (
              <button
                onClick={handleLogout}
                className="bg-emerald-600 hover:bg-emerald-500 py-2 px-4 rounded-md text-white"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleMobileMenu}
                className="bg-emerald-600 hover:bg-emerald-500 py-3 px-8 rounded-full text-white"
              >
                Login Now
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
