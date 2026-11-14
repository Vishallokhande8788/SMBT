
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  Laptop,
} from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMenuOpen(false);

  

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#101b35] text-white">
            <Laptop size={25} />
          </div>

          <div>
            <p className="text-lg font-bold leading-tight tracking-tight text-[#101b35]">
              ELITE
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Computer Systems
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+919158617272"
          className="hidden items-center gap-2 rounded-full bg-[#101b35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
        >
          <Phone size={16} />
          Call us
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="rounded-lg border border-slate-200 p-2 text-[#101b35] md:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-slate-100 py-4 text-sm font-semibold ${
                    isActive ? 'text-blue-600' : 'text-slate-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <a
            href="tel:+919158617272"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#101b35] px-5 py-4 font-semibold text-white"
          >
            <Phone size={17} />
            Call Elite Computers
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
