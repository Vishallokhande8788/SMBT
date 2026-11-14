
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Laptop,
  Cpu,
  ShieldCheck,
  Wrench,
  Target,
  CheckCircle2,
  Phone
} from 'lucide-react';

const expertise = [
  {
    icon: Laptop,
    title: 'Laptop & Desktop Repair',
    description: 'Repair and troubleshooting support for laptops and desktop computers.'
  },
  {
    icon: Cpu,
    title: 'Hardware Expertise',
    description: 'Motherboard diagnosis, hardware replacement and performance upgrades.'
  },
  {
    icon: ShieldCheck,
    title: 'Device Care',
    description: 'Careful handling and practical solutions for your technology devices.'
  }
];

function About() {
  return (
    <div className="bg-[#f8fafc] text-slate-900">

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="font-bold tracking-[3px] text-blue-400">
            ABOUT ELITE COMPUTER SYSTEMS
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            Technology Solutions
            <span className="block text-blue-400">
              You Can Count On.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We provide laptop and computer repair services,
            hardware solutions and technical support to help
            keep your devices working smoothly.
          </p>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">

        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-[#071426] to-blue-800 p-10 text-white shadow-2xl sm:p-14">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
              <Laptop size={48} />
            </div>

            <p className="mt-10 text-sm font-semibold tracking-[3px] text-blue-300">
              ELITE COMPUTER SYSTEMS
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-snug">
              Repairing Technology.
              <br />
              Supporting People.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Computer repair and technical support for
              everyday technology needs.
            </p>
          </div>

          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:right-5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" size={30} />
              <div>
                <p className="font-bold">Professional Care</p>
                <p className="text-xs text-slate-500">Device support</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold tracking-widest text-blue-600">
            WHO WE ARE
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Your Local Partner for Computer Care
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Elite Computer Systems is a computer and laptop
            service business based in Hinjawadi Phase 1, Pune.
            We help customers with device repairs, hardware
            upgrades and technical support.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you need help with a laptop issue, a
            motherboard problem, an SSD upgrade or data recovery,
            contact our team to discuss your requirements.
          </p>

          <div className="mt-8 space-y-4">
            {[
              'Laptop and desktop repair',
              'Hardware diagnosis and upgrades',
              'MacBook and Apple device servicing',
              'Data recovery and software support'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-blue-600" size={21} />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>

      </section>

      {/* OUR EXPERTISE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold tracking-widest text-blue-600">
              WHAT WE OFFER
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Our Areas of Expertise
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Practical computer repair and technology
              support for different device requirements.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                  >
                    Explore Services <ArrowUpRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">

        <div>
          <p className="font-bold tracking-widest text-blue-600">
            OUR APPROACH
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Understanding Your Device Comes First.
          </h2>

          <p className="mt-6 leading-8 text-slate-500">
            Every device problem is different. We encourage
            customers to discuss their device issues with our
            team so that the right service can be identified.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
            <Target className="shrink-0 text-blue-600" size={30} />
            <div>
              <h3 className="font-bold">Understand the Problem</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Learn about the device issue and customer requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
            <Wrench className="shrink-0 text-blue-600" size={30} />
            <div>
              <h3 className="font-bold">Identify a Solution</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Discuss suitable repair or upgrade options.
              </p>
            </div>
          </div>

          <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
            <ShieldCheck className="shrink-0 text-blue-600" size={30} />
            <div>
              <h3 className="font-bold">Provide Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Get assistance for your computer and laptop needs.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#071426] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Need Professional Computer Support?
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
          Contact Elite Computer Systems in Hinjawadi Phase 1, Pune.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>

          <a
            href="tel:+919158617272"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10"
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;
