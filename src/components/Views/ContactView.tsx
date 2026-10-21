import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Facebook, ExternalLink } from 'lucide-react';
import { COLLEGE_INFO } from '../../data/collegeInfo';
import { Language } from '../../types';

interface ContactViewProps {
  lang: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'যোগাযোগ' : 'Contact'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'অফিসিয়াল ঠিকানা ও অনুসন্ধান' : 'Official Address & Inquiries'}
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lang === 'bn' ? 'কলেজ প্রশাসনের সাথে যোগাযোগ' : 'Contact College Administration'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'bn'
                ? 'যেকোনো প্রশাসনিক তথ্য, ভর্তি পরামর্শ বা প্রাতিষ্ঠানিক যোগাযোগের জন্য অফিস সময়ে যোগাযোগ করুন।'
                : 'Get in touch with the college administration, inquiry desk, or academic office during working hours.'}
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                {lang === 'bn' ? 'ঠিকানা ও অবস্থান' : 'Campus Location & Address'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {lang === 'bn' ? COLLEGE_INFO.location.addressBn : COLLEGE_INFO.location.addressEn}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {lang === 'bn' ? 'সিরাজগঞ্জ, রাজশাহী বিভাগ' : 'Sirajganj, Rajshahi Division, Bangladesh'}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                {lang === 'bn' ? 'টেলিফোন ও হটলাইন' : 'Telephone & Helpdesk'}
              </h3>
              <p className="text-xs text-slate-800 font-mono mt-1 font-semibold">
                {COLLEGE_INFO.location.phones.join(' / ')}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {lang === 'bn'
                  ? `মোবাইল হেল্প: ${COLLEGE_INFO.location.mobileHelp}`
                  : `Mobile Hotline: ${COLLEGE_INFO.location.mobileHelp}`}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                {lang === 'bn' ? 'ইমেইল ও সামাজিক যোগাযোগ' : 'Email & Social Links'}
              </h3>
              <a
                href={`mailto:${COLLEGE_INFO.location.email}`}
                className="text-xs text-blue-900 hover:underline font-mono block mt-1"
              >
                {COLLEGE_INFO.location.email}
              </a>
              <a
                href={COLLEGE_INFO.location.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-blue-700 hover:underline inline-flex items-center gap-1 mt-1 font-medium"
              >
                <Facebook className="w-3 h-3" />
                <span>{lang === 'bn' ? 'ফেসবুক গ্রুপ' : 'Official Facebook Group'}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Map & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Official Google Map */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>
                  {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজ স্যাটেলাইট ম্যাপ' : 'Shahzadpur Govt. College Satellite Map'}
                </span>
              </h3>
              <span className="text-[11px] text-slate-400">
                {lang === 'bn' ? 'লাইভ গুগল ম্যাপ' : 'Live Google Maps'}
              </span>
            </div>

            <div className="flex-1 min-h-[360px] bg-slate-100 relative">
              <iframe
                title="Shahzadpur Government College Google Map"
                src={COLLEGE_INFO.location.googleMapEmbed}
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Inquiry / Feedback Form */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'অনলাইন যোগাযোগ ও বার্তা প্রেরণ' : 'Send an Inquiry / Feedback'}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {lang === 'bn'
                  ? 'আপনার যেকোনো প্রশ্ন বা মতামতের জন্য ফর্মটি পূরণ করে পাঠান।'
                  : 'Please submit this form with your query or feedback; the college administrative desk will respond promptly.'}
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-sm">
                  {lang === 'bn' ? 'আপনার বার্তা সফলভাবে প্রেরিত হয়েছে!' : 'Your message has been successfully transmitted!'}
                </h4>
                <p className="text-xs text-emerald-700">
                  {lang === 'bn'
                    ? 'কলেজ অফিস শীঘ্রই আপনার প্রদত্ত ইমেইল বা নম্বরে যোগাযোগ করবে। ধন্যবাদ।'
                    : 'The administration office will get in touch with you shortly. Thank you.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {lang === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'আপনার নাম' : 'Your Full Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'bn' ? 'পুরো নাম লিখুন' : 'Enter full name'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'মোবাইল নম্বর' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {lang === 'bn' ? 'বিষয়' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={lang === 'bn' ? 'বার্তার বিষয়' : 'Inquiry subject'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {lang === 'bn' ? 'বিস্তারিত বার্তা' : 'Message / Details'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'bn' ? 'আপনার বার্তা বা প্রশ্ন বিস্তারিত লিখুন...' : 'Write your detailed message or inquiry...'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'বার্তা প্রেরণ করুন' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
