
import { Link } from 'react-router-dom';
import {
  Laptop,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Clock
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    'Laptop Repair',
    'MacBook Repair',
    'Chip-Level Repair',
    'Data Recovery',
    'RAM & SSD Upgrade'
  ];

  return (
    <footer className="bg-[#071426] text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* BUSINESS DETAILS */}
        <div>
          <Link to="/" className="mb-6 inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Laptop size={27} />
            </div>

            <div>
              <h2 className="text-lg font-extrabold">ELITE</h2>
              <p className="text-[10px] font-bold tracking-[2px] text-slate-400">
                COMPUTER SYSTEMS
              </p>
            </div>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-slate-400">
            Laptop and computer repair services, hardware upgrades
            and technical support for your devices.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://wa.me/919158617272"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="rounded-xl bg-white/10 p-3 text-green-400 transition hover:bg-green-500 hover:text-white"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="tel:+919158617272"
              aria-label="Call Elite Computer Systems"
              className="rounded-xl bg-white/10 p-3 text-blue-400 transition hover:bg-blue-600 hover:text-white"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Quick Links</h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
                >
                  <ArrowUpRight size={15} />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Our Services</h3>

          <ul className="space-y-4">
            {services.map((service) => (
              <li
                key={service}
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Contact Information</h3>

          <div className="space-y-5">

            <a
              href="tel:+919158617272"
              className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
            >
              <Phone size={19} className="shrink-0 text-blue-400" />
              +91 91586 17272
            </a>

            <a
              href="mailto:nilesh@elitecomputer.in"
              className="flex items-start gap-3 break-all text-sm text-slate-400 transition hover:text-white"
            >
              <Mail size={19} className="shrink-0 text-blue-400" />
              nilesh@elitecomputer.in
            </a>

            <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">
              <MapPin size={20} className="shrink-0 text-blue-400" />
              <span>
                Shop No. 1, Hinjawadi Phase 1 Road,
                Pune, Maharashtra 411057
              </span>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <Clock size={19} className="shrink-0 text-blue-400" />
              <span>
                Monday – Saturday
                <br />
                10:00 AM – 8:30 PM
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-slate-400">
            © {currentYear} Elite Computer Systems. All rights reserved.
          </p>

          <p className="text-sm text-slate-400">
            Professional Computer Repair & Technical Services.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
