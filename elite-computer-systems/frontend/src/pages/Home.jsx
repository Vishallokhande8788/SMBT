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
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Wrench,
  BadgeCheck,
  ClipboardCheck,
  Search,
  FileText,
  PackageCheck
} from 'lucide-react';

const services = [
  {
    title: 'Laptop Repair',
    description:
      'Proper diagnosis and repair for hardware and software problems on all major laptop brands.',
    icon: Laptop,
    featured: true
  },
  {
    title: 'MacBook Service',
    description: 'Servicing and troubleshooting for Apple MacBook devices.',
    icon: Apple
  },
  {
    title: 'Motherboard Repair',
    description: 'Chip-level diagnosis and motherboard repair.',
    icon: Cpu
  },
  {
    title: 'Screen Replacement',
    description: 'Display, keyboard, hinge and other part replacement.',
    icon: Monitor
  },
  {
    title: 'SSD & RAM Upgrade',
    description: 'Make your slow computer fast again with a hardware upgrade.',
    icon: HardDrive
  },
  {
    title: 'Data Recovery',
    description: 'Help with storage problems and getting your files back.',
    icon: Database
  }
];

const steps = [
  {
    title: 'Share your problem',
    text: 'Call us, message on WhatsApp or visit the shop.',
    icon: MessageCircle
  },
  {
    title: 'We check your device',
    text: 'Our team finds the exact cause of the problem.',
    icon: Search
  },
  {
    title: 'You get a clear quote',
    text: 'You know the cost before any work starts.',
    icon: FileText
  },
  {
    title: 'Repair and delivery',
    text: 'We fix it, test it and hand it back to you.',
    icon: PackageCheck
  }
];

const reasons = [
  {
    title: 'Honest diagnosis',
    text: 'We tell you what is wrong and what is really needed. No unnecessary repairs.',
    icon: ClipboardCheck
  },
  {
    title: 'Skilled hands',
    text: 'From simple upgrades to chip-level work, handled with care.',
    icon: Wrench
  },
  {
    title: 'Reliable support',
    text: 'Easy to reach by phone or WhatsApp whenever you have a question.',
    icon: ShieldCheck
  }
];

function Home() {
  return (
    <main
      className="overflow-hidden bg-white text-slate-900 antialiased"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <MapPin size={15} className="text-blue-600" />
              Hinjawadi, Pune
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Laptop and computer repair you can trust.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Elite Computer Systems fixes laptops, MacBooks and desktops.
              From broken screens to slow performance, we find the problem
              and solve it properly.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              >
                Get a repair quote
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+919158617272"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
              >
                <Phone size={18} />
                Call us
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-600">
              {['Laptops', 'MacBooks', 'Desktops', 'Upgrades'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <BadgeCheck size={18} className="text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-blue-600/10" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/15">
              <img
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=85"
                alt="Laptop and computer repair workspace"
                className="h-[400px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 text-white">
                <p className="text-sm font-medium text-blue-200">Elite Computer Systems</p>
                <p className="mt-1 text-2xl font-bold">Repair. Restore. Perform.</p>
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:left-auto sm:right-6 sm:w-80">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <MessageCircle size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold">Need quick help?</p>
                <p className="text-sm text-slate-500">Message us on WhatsApp</p>
              </div>
              <a
                href="https://wa.me/919158617272"
                target="_blank"
                rel="noreferrer"
                aria-label="Open WhatsApp"
                className="rounded-full bg-slate-900 p-2.5 text-white transition hover:bg-blue-600"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-blue-600">Our services</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything your computer needs, in one place.
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
          >
            View all services <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group flex flex-col rounded-2xl p-8 transition duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 lg:row-span-2'
                    : 'border border-slate-200 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    service.featured ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className={`mt-6 font-bold ${service.featured ? 'text-2xl' : 'text-xl'}`}>
                  {service.title}
                </h3>

                <p
                  className={`mt-3 leading-7 ${
                    service.featured ? 'text-slate-300' : 'text-sm text-slate-600'
                  }`}
                >
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className={`mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold ${
                    service.featured ? 'text-blue-300' : 'text-blue-600'
                  }`}
                >
                  Enquire now
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">How it works</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Simple repair process, from start to finish.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Icon size={22} />
                    </div>
                    <span className="text-4xl font-extrabold text-slate-100">{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-blue-600">Why Elite Computer Systems</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Technology deserves better care.
            </h2>
            <p className="mt-5 max-w-md leading-8 text-slate-600">
              Your laptop holds your work, your memories and your time.
              We treat every device the way we would treat our own.
            </p>
          </div>

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div key={reason.title} className="flex gap-5 p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{reason.title}</h3>
                    <p className="mt-1.5 leading-7 text-slate-600">{reason.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-white sm:px-14">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Is your device giving you trouble?
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Tell us the problem and we will guide you on the next step.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              >
                Contact us <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919158617272"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold transition hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
