
import { Link } from 'react-router-dom';
import {
  Laptop,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Laptop & Desktop Repair',
    'MacBook Service',
    'Motherboard Repair',
    'Screen Replacement',
    'RAM & SSD Upgrade',
    'Data Recovery',
  ];

  return (
    <footer className="bg-[#101b35] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-10">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#101b35]">
              <Laptop size={26} />
            </div>

            <div>
              <p className="text-xl font-bold tracking-tight">
                ELITE
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Computer Systems
              </p>
            </div>
          </Link>

          <p className="mt-7 max-w-sm text-sm leading-7 text-slate-400">
            Computer and laptop repair services, hardware
            troubleshooting and technical support in Hinjawadi,
            Pune.
          </p>

          <a
            href="https://wa.me/919158617272"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={17} />
            WhatsApp us
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
            Quick links
          </h3>

          <ul className="mt-7 space-y-4">
            <li>
              <Link to="/" className="text-sm text-slate-400 transition hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="text-sm text-slate-400 transition hover:text-white">
                About us
              </Link>
            </li>

            <li>
              <Link to="/services" className="text-sm text-slate-400 transition hover:text-white">
                Our services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-sm text-slate-400 transition hover:text-white">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
            Our services
          </h3>

          <ul className="mt-7 space-y-4">
            {services.map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
            Contact details
          </h3>

          <div className="mt-7 space-y-6">

            <a
              href="tel:+919158617272"
              className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
            >
              <Phone size={18} className="mt-0.5 shrink-0 text-blue-400" />
              +91 91586 17272
            </a>

            <a
              href="mailto:nilesh@elitecomputer.in"
              className="flex items-start gap-3 break-all text-sm text-slate-400 transition hover:text-white"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-blue-400" />
              nilesh@elitecomputer.in
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Elite+Computer+Systems+Hinjawadi+Pune"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-sm leading-7 text-slate-400 transition hover:text-white"
            >
              <MapPin size={18} className="mt-1 shrink-0 text-blue-400" />
              Hinjawadi Phase 1, Pune, Maharashtra 411057
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-7 text-sm text-slate-500 md:flex-row md:items-center">

          <p>
            © {currentYear} Elite Computer Systems. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>

            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
