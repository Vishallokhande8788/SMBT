
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
  Settings,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Laptop & Desktop Repair',
    description: 'Professional diagnosis and repair for laptop and desktop hardware and software issues.',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=85',
    features: ['Hardware diagnosis', 'Software troubleshooting', 'General computer repair']
  },
  {
    number: '02',
    title: 'MacBook & Apple Repair',
    description: 'Servicing and troubleshooting support for MacBook and Apple computer devices.',
    icon: Apple,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85',
    features: ['MacBook diagnosis', 'Hardware servicing', 'Software support']
  },
  {
    number: '03',
    title: 'Motherboard & Chip-Level Repair',
    description: 'Component-level diagnosis and repair for motherboard-related problems.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    features: ['Motherboard diagnosis', 'Component-level repair', 'Power-related issues']
  },
  {
    number: '04',
    title: 'Screen, Keyboard & Hinge',
    description: 'Replacement support for damaged laptop displays, keyboards, hinges and other components.',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85',
    features: ['Display replacement', 'Keyboard replacement', 'Hinge repair']
  },
  {
    number: '05',
    title: 'RAM & SSD Upgrade',
    description: 'Upgrade your computer storage and memory to improve its performance.',
    icon: HardDrive,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85',
    features: ['RAM upgrades', 'SSD installation', 'HDD to SSD migration']
  },
  {
    number: '06',
    title: 'Data Recovery & Software',
    description: 'Assistance with data recovery, operating system installation and software issues.',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85',
    features: ['Data recovery assessment', 'OS installation', 'Software troubleshooting']
  }
];

function Services() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-[#071426] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            OUR SERVICES
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-end">
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              Complete care for
              <span className="block text-blue-400">
                your technology.
              </span>
            </h1>

            <p className="max-w-xl leading-8 text-slate-300">
              Explore our computer repair, hardware servicing
              and upgrade solutions. Contact our team to discuss
              the right service for your device.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/20 px-5 py-2">Laptop Repair</span>
            <span className="rounded-full border border-white/20 px-5 py-2">MacBook Service</span>
            <span className="rounded-full border border-white/20 px-5 py-2">Hardware Upgrades</span>
            <span className="rounded-full border border-white/20 px-5 py-2">Data Recovery</span>
          </div>

        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-widest text-blue-600">
            WHAT WE CAN HELP WITH
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Technical solutions for everyday problems.
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            Every device issue is different. Explore our service
            categories and contact us for a diagnosis and suitable
            repair options.
          </p>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/60 to-transparent" />

                  <span className="absolute bottom-5 left-5 rounded-lg bg-white/95 p-3 text-blue-600">
                    <Icon size={24} />
                  </span>

                  <span className="absolute right-5 top-5 text-sm font-bold text-white">
                    {service.number}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-16 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle2 size={17} className="shrink-0 text-blue-600" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 font-bold text-blue-600"
                  >
                    Enquire About This Service
                    <ArrowUpRight size={19} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </article>
            );
          })}

        </div>
      </section>

      {/* ADDITIONAL SUPPORT */}
      <section className="bg-[#f5f8fc] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold tracking-widest text-blue-600">
              MORE TECHNICAL SUPPORT
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Looking for something specific?
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Contact us for other requirements such as BIOS
              password assistance, operating system installation,
              laptop refurbishment and business hardware support.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Discuss Your Requirement
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="rounded-2xl bg-[#071426] p-9 text-white sm:p-12">
            <Settings size={42} className="text-blue-400" />

            <h3 className="mt-7 text-2xl font-bold">
              Need help choosing a service?
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Tell us about your device and its problem.
              Our team can help you understand the available
              service options.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-400 hover:text-white"
            >
              Contact our team <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-20 text-center">
        <p className="text-sm font-bold tracking-widest text-blue-600">
          ELITE COMPUTER SYSTEMS
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
          Let's find the right solution for your device.
        </h2>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
        >
          Get in Touch <ArrowRight size={19} />
        </Link>
      </section>

    </main>
  );
}

export default Services;
