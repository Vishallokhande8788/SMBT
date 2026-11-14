
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Laptop,
  Menu,
  X,
  Phone,
  ArrowUpRight
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const linkStyle = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? 'text-blue-600'
        : 'text-slate-600 hover:text-blue-600'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071426] text-blue-400 shadow-lg">
            <Laptop size={27} />
          </div>

          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-slate-900">
              ELITE
            </h2>
            <p className="text-[10px] font-bold tracking-[2px] text-slate-500">
              COMPUTER SYSTEMS
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CALL BUTTON */}
        <a
          href="tel:+919158617272"
          className="hidden items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 md:flex"
        >
          <Phone size={17} />
          Call Now
          <ArrowUpRight size={16} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">

          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <a
            href="tel:+919158617272"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>
      )}

    </header>
  );
}

export default Navbar;
