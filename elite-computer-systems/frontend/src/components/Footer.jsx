
import { Laptop, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-slate-950 text-white pt-12 pb-6">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Company */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Laptop className="text-orange-500" size={32} />

                            <h2 className="text-xl font-bold">
                                Elite Computer Systems
                            </h2>
                        </div>

                        <p className="text-gray-400 leading-7">
                            Professional laptop and computer repair
                            services in Hinjawadi, Pune.
                            We provide hardware repair, software
                            support and data recovery services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-400">
                            <Link to="/" className="hover:text-orange-400">Home</Link>
                            <Link to="/about" className="hover:text-orange-400">About Us</Link>
                            <Link to="/services" className="hover:text-orange-400">Services</Link>
                            <Link to="/contact" className="hover:text-orange-400">Contact</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <p className="flex gap-3">
                                <Phone className="text-orange-500 shrink-0" />
                                +91 91586 17272
                            </p>

                            <p className="flex gap-3">
                                <Mail className="text-orange-500 shrink-0" />
                                nilesh@elitecomputer.in
                            </p>

                            <p className="flex gap-3">
                                <MapPin className="text-orange-500 shrink-0" />
                                Hinjawadi Phase 1, Pune, Maharashtra
                            </p>

                        </div>
                    </div>

                </div>

                <hr className="border-gray-800 my-8" />

                <p className="text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Elite Computer Systems.
                    All Rights Reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;
