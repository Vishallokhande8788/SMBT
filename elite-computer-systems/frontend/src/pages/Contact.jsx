import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

import api from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device_type: 'Laptop',
    device_model: '',
    issue: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await api.post('enquiries/', formData);

      setStatus({
        type: 'success',
        message: 'Your enquiry has been submitted successfully. We will contact you soon.',
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        device_type: 'Laptop',
        device_model: '',
        issue: '',
        message: '',
      });
    } catch (error) {
      console.error('Enquiry submission error:', error);

      setStatus({
        type: 'error',
        message: 'Unable to submit your enquiry. Please try again or contact us by phone.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#101b35] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Contact Elite Computers
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Let's get your
            <span className="text-blue-400"> technology </span>
            working again.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Have a laptop problem or need technical support?
            Tell us what happened. Our team can help you with the next step.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Information */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Get in touch
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              We're here to help.
            </h2>

            <p className="mt-5 max-w-md leading-8 text-slate-500">
              Contact us for laptop repairs, MacBook servicing, hardware
              upgrades and other computer-related support.
            </p>

            <div className="mt-12 space-y-8">

              {/* Phone */}
              <a
                href="tel:+919158617272"
                className="group flex items-start gap-5"
              >
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="font-semibold">Call us</p>
                  <p className="mt-1 text-slate-500">+91 91586 17272</p>
                </div>

                <ArrowUpRight className="ml-auto text-slate-400 transition group-hover:text-blue-600" />
              </a>

              {/* Email */}
              <a
                href="mailto:nilesh@elitecomputer.in"
                className="group flex items-start gap-5"
              >
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="font-semibold">Email us</p>
                  <p className="mt-1 break-all text-slate-500">
                    nilesh@elitecomputer.in
                  </p>
                </div>

                <ArrowUpRight className="ml-auto text-slate-400 transition group-hover:text-blue-600" />
              </a>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-semibold">Visit our store</p>
                  <p className="mt-2 max-w-xs leading-7 text-slate-500">
                    Shop No. 1, Hinjawadi Phase 1 Road,
                    Above H2O Bar, Rajiv Gandhi Infotech Park,
                    Pune, Maharashtra 411057.
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Elite+Computer+Systems+Hinjawadi+Pune"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Get directions <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600">
                  <Clock size={22} />
                </div>

                <div>
                  <p className="font-semibold">Opening hours</p>
                  <p className="mt-2 text-slate-500">
                    Monday – Saturday
                  </p>
                  <p className="text-slate-500">
                    10:00 AM – 8:30 PM
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919158617272"
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#eaf8f0] px-6 py-4 font-semibold text-[#16834a] transition hover:bg-[#d8f2e3]"
            >
              <MessageCircle size={20} />
              Chat with us on WhatsApp
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Repair enquiry
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Tell us about your device.
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Fill in the details below. We will receive your enquiry.
            </p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-6">

              {/* Name and Phone */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Device Type and Model */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Device type *
                  </label>

                  <select
                    name="device_type"
                    value={formData.device_type}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Laptop">Laptop</option>
                    <option value="Desktop">Desktop</option>
                    <option value="MacBook">MacBook</option>
                    <option value="iMac">iMac</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Device model
                  </label>

                  <input
                    type="text"
                    name="device_model"
                    value={formData.device_model}
                    onChange={handleChange}
                    placeholder="Example: Dell Inspiron"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Issue */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  What is the problem? *
                </label>

                <input
                  type="text"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  placeholder="Example: Laptop not turning on"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Additional details
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your device problem..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Success / Error Message */}
              {status.message && (
                <div
                  className={`flex items-start gap-3 rounded-xl p-4 text-sm ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 size={20} className="shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="shrink-0" />
                  )}

                  <p>{status.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Submitting...' : 'Submit enquiry'}
                {!loading && <Send size={18} />}
              </button>

              <p className="text-center text-xs leading-6 text-slate-400">
                By submitting this form, you agree to be contacted about your enquiry.
              </p>
            </form>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f1f5f9] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Need assistance?
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Let's find the right solution.
            </h2>
          </div>

          <a
            href="tel:+919158617272"
            className="inline-flex items-center gap-3 rounded-full bg-[#101b35] px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <Phone size={18} />
            Call Elite Computers
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;