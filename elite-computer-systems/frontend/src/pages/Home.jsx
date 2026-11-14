
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Laptop,
  Cpu,
  Monitor,
  HardDrive,
  Database,
  Apple,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Wrench,
  Clock3
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Chip-Level Repair',
    description: 'Motherboard diagnosis and component-level repair solutions.'
  },
  {
    icon: Apple,
    title: 'MacBook Repair',
    description: 'Professional Apple laptop servicing and troubleshooting.'
  },
  {
    icon: Monitor,
    title: 'Screen & Keyboard',
    description: 'Laptop display, keyboard, hinge and hardware replacement.'
  },
  {
    icon: HardDrive,
    title: 'SSD & RAM Upgrade',
    description: 'Improve your computer performance with hardware upgrades.'
  },
  {
    icon: Database,
    title: 'Data Recovery',
    description: 'Help with data recovery and storage-related problems.'
  },
  {
    icon: Laptop,
    title: 'Laptop & PC Repair',
    description: 'Diagnosis and repair for laptops and desktop computers.'
  }
];

function Home() {
  return (
    <div className="bg-[#f8fafc] text-slate-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              COMPUTER REPAIR & TECHNOLOGY SERVICES
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Technology.
              <span className="block text-blue-400">
                Our Expertise.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Reliable laptop and computer repair solutions.
              From motherboard repairs to performance upgrades,
              get professional support for your devices.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Book a Repair
                <ArrowRight size={19} />
              </Link>

              <a
                href="https://wa.me/919158617272"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                <MessageCircle size={19} />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-7 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold">Laptop</p>
                <p className="mt-1 text-sm text-slate-400">Repair Services</p>
              </div>
              <div>
                <p className="text-2xl font-bold">MacBook</p>
                <p className="mt-1 text-sm text-slate-400">Apple Servicing</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Hardware</p>
                <p className="mt-1 text-sm text-slate-400">Upgrades & Support</p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900 p-5 shadow-2xl">
              <div className="rounded-2xl border border-white/10 bg-[#0b1d33] p-7 sm:p-10">

                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">ELITE COMPUTER SYSTEMS</p>
                    <p className="mt-1 text-xl font-bold">Repair. Restore. Perform.</p>
                  </div>
                  <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
                    <Wrench size={25} />
                  </div>
                </div>

                <div className="flex justify-center py-8">
                  <div className="relative flex h-48 w-64 items-center justify-center rounded-2xl border-4 border-slate-500 bg-gradient-to-br from-slate-800 to-slate-950 shadow-2xl">
                    <Laptop size={125} strokeWidth={1} className="text-blue-400" />
                    <div className="absolute -bottom-5 h-3 w-72 rounded-full bg-slate-500" />
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/5 p-4">
                    <Cpu className="mb-3 text-cyan-400" />
                    <p className="font-semibold">Hardware</p>
                    <p className="mt-1 text-xs text-slate-400">Repair & upgrades</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    <ShieldCheck className="mb-3 text-blue-400" />
                    <p className="font-semibold">Expert Care</p>
                    <p className="mt-1 text-xs text-slate-400">Device support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-white p-4 text-slate-900 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3 text-green-600">
                  <CheckCircle2 size={25} />
                </div>
                <div>
                  <p className="font-bold">Need a Repair?</p>
                  <p className="text-xs text-slate-500">Talk to our team</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <Wrench className="text-blue-600" size={28} />
            <div>
              <p className="font-bold">Technical Support</p>
              <p className="text-sm text-slate-500">Repair and troubleshooting</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-blue-600" size={28} />
            <div>
              <p className="font-bold">Hardware Solutions</p>
              <p className="text-sm text-slate-500">Parts and upgrades</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock3 className="text-blue-600" size={28} />
            <div>
              <p className="font-bold">Customer Support</p>
              <p className="text-sm text-slate-500">Contact us for assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold tracking-widest text-blue-600">
              WHAT WE DO
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Complete Computer Care
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-500">
              Professional repair and maintenance solutions for
              laptops, desktops and Apple devices.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:gap-4"
          >
            Explore All Services <ArrowUpRight size={19} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-7 inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={29} />
                </div>

                <p className="mb-3 text-sm font-semibold text-blue-600">
                  SERVICE 0{index + 1}
                </p>

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-900 transition group-hover:text-blue-600"
                >
                  Enquire Now <ArrowRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-16 text-white sm:px-14">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[35px] border-white/10" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-semibold text-blue-100">
                ELITE COMPUTER SYSTEMS
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Let's Get Your Device Working Again.
              </h2>
              <p className="mt-4 text-blue-100">
                Contact our team for your laptop and computer repair needs.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Contact Us <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
