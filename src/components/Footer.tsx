import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp
} from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { COLLEGE_INFO } from '../data/collegeInfo';
import { Language } from '../types';
import { toBnDigits } from '../utils/noticeTranslator';

interface FooterProps {
  lang: Language;
  onNavigate: (view: string) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Contact phones formatted cleanly for universal font support
  const phoneEn = '+880 2588833748 / 02588833583';
  const phoneBn = '+880 2588833748 / 02588833583';

  return (
    <footer className="relative bg-[#021323] text-white overflow-hidden pt-12 pb-8 border-t border-[#0b3b5e]">
      {/* 1. Atmospheric Twilight Campus Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="/assets/aistudio/474806539_1771897566928989_2403978366791406118_n_68f59e59.jpg"
          alt="Campus Facade"
          className="w-full h-full object-cover object-center filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021323] via-[#042138]/90 to-[#021323]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Top Header Block (Logo & Institutional Title) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 text-center sm:text-left">
          <CollegeLogo size={64} className="shrink-0 drop-shadow-lg" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
              {lang === 'bn' ? COLLEGE_INFO.nameBn : COLLEGE_INFO.nameEn}
            </h2>
            <p className="text-sm sm:text-base text-sky-200/90 font-medium mt-0.5">
              {lang === 'bn' ? 'ঐতিহ্যবাহী উত্তরবঙ্গের শ্রেষ্ঠ বিদ্যাপীঠ' : 'Center of Excellence in Higher Education'}
            </p>
          </div>
        </div>

        {/* 3. Signature NSU-style Translucent Deep Blue Curved Card */}
        <div className="bg-[#074770]/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Column 1: About */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base tracking-wide">
                {lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About'}
              </h3>
              <ul className="space-y-2.5 text-xs text-sky-100/85">
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজ পরিচিতি' : 'About College'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'লক্ষ্য, উদ্দেশ্য ও দর্শন' : 'Vision, Mission & Strategy'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('leadership')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'অধ্যক্ষ ও উপাধ্যক্ষ মহোদয়ের বাণী' : 'Leadership & Governance'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'ঐতিহ্য ও গৌরবগাথা (স্থাপিত ১৯৬৪)' : 'Facts & Heritage'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'পাঠদানের অনুমতি ও স্বীকৃতি' : 'Accreditation & Affiliation'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Academic */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base tracking-wide">
                {lang === 'bn' ? 'একাডেমিক' : 'Academic'}
              </h3>
              <ul className="space-y-2.5 text-xs text-sky-100/85">
                <li>
                  <button
                    onClick={() => onNavigate('academic')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'উচ্চ মাধ্যমিক (বিজ্ঞান, মানবিক, ব্যবসায়)' : 'Higher Secondary (HSC)'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('academic')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'ডিগ্রি (পাস) কোর্স (বিএ, বিএসএস, বিএসসি)' : 'Degree (Pass) Course'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('academic')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'স্নাতক (সম্মান) - ১৪টি বিভাগ' : 'Honours Programs (14 Subjects)'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('academic')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'মাস্টার্স কোর্স ও সেমিনার' : 'Master\'s Programs'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('academic')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'একাডেমিক ক্যালেন্ডার ও সিলেবাস' : 'Academic Calendar & Syllabus'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Admission */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base tracking-wide">
                {lang === 'bn' ? 'ভর্তি তথ্য' : 'Admission'}
              </h3>
              <ul className="space-y-2.5 text-xs text-sky-100/85">
                <li>
                  <button
                    onClick={() => onNavigate('admission')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'একাদশ শ্রেণি কেন্দ্রীয় অনলাইন ভর্তি (XI)' : 'Undergraduate Admission (XI)'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('admission')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'স্নাতক (সম্মান) ১ম বর্ষ ভর্তি' : 'Honours 1st Year Admission'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('admission')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'ডিগ্রি (পাস) কোর্স ভর্তি' : 'Degree (Pass) Admission'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('students')}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {lang === 'bn' ? 'উপবৃত্তি ও শিক্ষা সহায়তা ট্রাস্ট' : 'Scholarship & Financial Aid'}
                  </button>
                </li>
                <li>
                  <a
                    href={COLLEGE_INFO.portals.feesPayment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1 text-sky-200"
                  >
                    <span>{lang === 'bn' ? 'অনলাইন ফি ও বেতন পরিশোধ' : 'Tuition Fees & Charges'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-base tracking-wide">
                {lang === 'bn' ? 'যোগাযোগ' : 'Contact'}
              </h3>

              <div className="space-y-3 text-xs text-sky-100/85">
                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${COLLEGE_INFO.location.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {COLLEGE_INFO.location.email}
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'bn' ? COLLEGE_INFO.location.addressBn : COLLEGE_INFO.location.addressEn}
                  </span>
                </div>

                {/* See Map Link */}
                <div className="flex items-center gap-2.5 pl-6">
                  <a
                    href="https://maps.google.com/?q=Shahzadpur+Government+College+Sirajganj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-white hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>{lang === 'bn' ? 'ম্যাপে দেখুন' : 'See map'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                  <span className="font-sans font-medium tracking-wide">
                    {lang === 'bn' ? phoneBn : phoneEn}
                  </span>
                </div>

                {/* Social Media Icons Row (Facebook, LinkedIn, Instagram, X, YouTube) */}
                <div className="flex items-center gap-3 pt-2 text-sky-200">
                  <a
                    href="https://www.facebook.com/p/Shahzadpur-Govt-College-Verified-page-100094866693433/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                    title="Official Facebook Page"
                    aria-label="Official Facebook Page"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/groups/shahzadpurgovernmentcollege"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                    title="Facebook Group"
                    aria-label="Facebook Group"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                    title="X (Twitter)"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                    title="YouTube"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Emergency Helpline Strip (Bilingual: 999, 333, 109, 106) */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-sky-200/80">
            <span className="font-semibold text-white">
              {lang === 'bn' ? 'জাতীয় জরুরি হটলাইন:' : 'National Emergency Hotlines:'}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#074770]/90 px-2.5 py-1 rounded-md border border-white/10">
                <strong className="text-white font-mono">{lang === 'bn' ? '৯৯৯' : '999'}</strong>{' '}
                <span className="text-sky-300">({lang === 'bn' ? 'জরুরি সেবা' : 'Emergency'})</span>
              </span>
              <span className="bg-[#074770]/90 px-2.5 py-1 rounded-md border border-white/10">
                <strong className="text-white font-mono">{lang === 'bn' ? '৩৩৩' : '333'}</strong>{' '}
                <span className="text-sky-300">({lang === 'bn' ? 'সরকারি তথ্য' : 'Govt Services'})</span>
              </span>
              <span className="bg-[#074770]/90 px-2.5 py-1 rounded-md border border-white/10">
                <strong className="text-white font-mono">{lang === 'bn' ? '১০৯' : '109'}</strong>{' '}
                <span className="text-sky-300">({lang === 'bn' ? 'নারী ও শিশু' : 'Women & Child'})</span>
              </span>
              <span className="bg-[#074770]/90 px-2.5 py-1 rounded-md border border-white/10">
                <strong className="text-white font-mono">{lang === 'bn' ? '১০৬' : '106'}</strong>{' '}
                <span className="text-sky-300">({lang === 'bn' ? 'দুদক' : 'Anti-Corruption'})</span>
              </span>
            </div>
          </div>
        </div>

        {/* 5. Bottom Disclaimer & Attribution Bar + Floating Cyan Scroll to Top Button */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="text-center sm:text-left max-w-3xl leading-relaxed">
            <a
              href="https://www.facebook.com/robiul.scale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors group cursor-pointer"
            >
              <span className="group-hover:underline">
                {lang === 'bn' ? (
                  <>
                    এটি কোন অফিসিয়াল বা কলেজ কর্তৃপক্ষ দ্বারা পরিচালিত কোন সাইট নয় বরং এটি একটি পরীক্ষামূলক প্রজেক্ট যা বানিয়েছেন{' '}
                    <strong className="text-amber-300 font-semibold underline decoration-amber-400/50">
                      মোঃ রবিউল ইসলাম
                    </strong>
                  </>
                ) : (
                  <>
                    This is not an official site or operated by the college authority, rather an experimental project developed by{' '}
                    <strong className="text-amber-300 font-semibold underline decoration-amber-400/50">
                      Md. Robiul Islam
                    </strong>
                  </>
                )}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400 shrink-0 opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Floating Cyan/Teal Scroll-to-Top Button (Identical to NSU footer) */}
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-[#0a86b7] hover:bg-[#0284c7] text-white flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 border border-white/20"
            title={lang === 'bn' ? 'উপরে যান' : 'Back to Top'}
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 text-white stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
