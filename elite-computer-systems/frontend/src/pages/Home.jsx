
import { Link } from 'react-router-dom';
import {
  Laptop,
  ShieldCheck,
  Clock,
  Wrench,
  ArrowRight,
  Phone
} from 'lucide-react';

function Home() {
  const features = [
    {
      icon: <Wrench size={28} />,
      title: 'Expert Repair',
      description: 'Professional laptop and computer repair services.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Quality Service',
      description: 'Careful diagnosis and reliable repair solutions.'
    },
    {
      icon: <Clock size={28} />,
      title: 'Quick Support',
      description: 'Contact our team for repair and service enquiries.'
    }
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-400 font-semibold mb-4">
              ELITE COMPUTER SYSTEMS
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Expert Laptop & Computer Repair Services
            </h1>

            <p className="text-slate-300 mt-6 text-lg">
              From laptop repairs to hardware upgrades, we help keep
              your devices running smoothly.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                Contact Us <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+919158617272"
                className="border border-slate-500 hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-10 flex justify-center items-center">
            <Laptop size={180} strokeWidth={1} className="text-blue-400" />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Reliable Computer Repair Support
          </h2>
          <p className="text-slate-600 mt-4">
            Support for your laptop and computer needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-8 hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Need Help With Your Laptop?
        </h2>

        <p className="mt-4 text-blue-100">
          Contact Elite Computer Systems for repair enquiries.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold mt-8 hover:bg-slate-100"
        >
          Get in Touch <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}

export default Home;
