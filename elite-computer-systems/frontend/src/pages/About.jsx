
import {
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Laptop,
  Settings2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const capabilities = [
    {
      number: '01',
      title: 'Laptop & Desktop Care',
      description:
        'Support for common laptop and desktop hardware and software problems.',
    },
    {
      number: '02',
      title: 'MacBook & Apple Service',
      description:
        'Technical support for MacBook and other Apple computer devices.',
    },
    {
      number: '03',
      title: 'Board-Level Diagnostics',
      description:
        'Diagnosis and repair support for motherboard and chip-level issues.',
    },
    {
      number: '04',
      title: 'Hardware Upgrades',
      description:
        'Upgrade options such as RAM, SSD and other compatible components.',
    },
  ];

  return (
    <div className="bg-white text-slate-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#101b35] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            About Elite Computers
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Better support for
            <span className="text-blue-400"> everyday technology.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            We provide computer and laptop repair services in Hinjawadi,
            Pune, helping customers find practical solutions for their
            technology problems.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Who we are
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Technology problems need practical solutions.
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              Elite Computer Systems focuses on computer and laptop
              servicing, hardware troubleshooting and technical support.
              From everyday device issues to more complex hardware
              problems, our aim is to help customers understand their
              repair options.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our service approach covers laptops, desktops, MacBooks,
              hardware upgrades and selected software-related support.
            </p>

            <Link
              to="/services"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#101b35] px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore our services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85"
              alt="Technician working with computer hardware"
              className="h-[420px] w-full rounded-2xl object-cover md:h-[520px]"
            />

            <div className="absolute -bottom-6 left-5 max-w-xs rounded-2xl bg-white p-6 shadow-xl md:left-8">
              <p className="text-sm font-semibold text-blue-600">
                Our focus
              </p>
              <p className="mt-2 text-xl font-semibold leading-snug">
                Repair. Upgrade. Technical support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#f5f7fa] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What we work on
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Technical support across your devices.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Explore the main areas of computer servicing and hardware
              support offered by Elite Computers.
            </p>
          </div>

          <div className="mt-14 grid gap-0 border-t border-slate-200 md:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="border-b border-slate-200 py-9 md:px-8 md:first:pl-0 md:odd:border-r md:odd:pl-0 md:even:pr-0"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              How we approach service
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Clear communication. Practical support.
            </h2>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-3">

            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Settings2 size={26} />
              </div>
              <h3 className="text-xl font-semibold">
                Understand the issue
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                Start by understanding the device, its symptoms and
                the problem reported by the customer.
              </p>
            </div>

            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Wrench size={26} />
              </div>
              <h3 className="text-xl font-semibold">
                Check repair options
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                Identify possible repair or upgrade options based on
                the device and its condition.
              </p>
            </div>

            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-xl font-semibold">
                Explain the next steps
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                Help customers understand the available service
                options before proceeding.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#101b35] px-6 py-20 text-white md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Find us in Pune
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Need help with your computer?
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Get in touch with Elite Computer Systems in Hinjawadi
              Phase 1 to discuss your device and service requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Contact our team
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
}

export default About;
