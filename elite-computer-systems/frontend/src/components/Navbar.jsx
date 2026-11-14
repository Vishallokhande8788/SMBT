
import { Link, NavLink } from 'react-router-dom';
import { Laptop, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="bg-slate-950 text-white sticky top-0 z-50 shadow-lg">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                        <Laptop size={28} />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">
                            ELITE
                        </h1>
                        <p className="text-xs text-orange-400 tracking-widest">
                            COMPUTER SYSTEMS
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === '/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-orange-400 font-semibold'
                                    : 'text-gray-300 hover:text-orange-400 transition'
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Contact Button */}
                <a
                    href="tel:+919158617272"
                    className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold transition"
                >
                    <Phone size={18} />
                    Call Now
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden px-6 pb-5 space-y-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === '/'}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block ${isActive ? 'text-orange-400' : 'text-gray-300'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <a
                        href="tel:+919158617272"
                        className="block bg-orange-500 text-center p-3 rounded-lg font-semibold"
                    >
                        Call Now
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;
