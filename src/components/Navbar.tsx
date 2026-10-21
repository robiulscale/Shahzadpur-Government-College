import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Globe
} from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { COLLEGE_INFO } from '../data/collegeInfo';
import { Language } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  lang: Language;
  onToggleLang: () => void;
  onOpenSearch?: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  lang,
  onToggleLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home' },
    {
      id: 'about',
      labelBn: 'আমাদের সম্পর্কে',
      labelEn: 'About',
      children: [
        { id: 'about-history', labelBn: 'কলেজের ইতিহাস', labelEn: 'History of College', view: 'about' },
        { id: 'about-charter', labelBn: 'সিটিজেন চার্টার', labelEn: 'Citizen Charter', view: 'about' },
        { id: 'about-recognition', labelBn: 'পাঠদানের অনুমতি ও স্বীকৃতি', labelEn: 'Recognition & Approval', view: 'about' },
        { id: 'about-rules', labelBn: 'বিধি ও প্রবিধান', labelEn: 'Rules & Regulations', view: 'about' },
        { id: 'about-mpo', labelBn: 'এমপিও ও জাতীয়করণের তথ্য', labelEn: 'MPO & Nationalization', view: 'about' }
      ]
    },
    {
      id: 'administration',
      labelBn: 'প্রশাসন',
      labelEn: 'Administration',
      children: [
        { id: 'admin-principal', labelBn: 'অধ্যক্ষ মহোদয়ের বাণী ও পরিচিতি', labelEn: 'Principal Profile & Message', view: 'leadership' },
        { id: 'admin-vp', labelBn: 'উপাধ্যক্ষ মহোদয়ের বাণী ও পরিচিতি', labelEn: 'Vice Principal Profile', view: 'leadership' },
        { id: 'admin-teachers', labelBn: 'শিক্ষকবৃন্দের তালিকা (৩১ জন শিক্ষক)', labelEn: 'Faculty Directory (31 Faculty)', view: 'faculty' },
        { id: 'admin-staff', labelBn: 'কর্মচারীবৃন্দের তালিকা (৩৬ জন কর্মকর্তা-কর্মচারী)', labelEn: 'Staff Directory (36 Staff)', view: 'staff' }
      ]
    },
    {
      id: 'academic',
      labelBn: 'একাডেমিক',
      labelEn: 'Academic',
      children: [
        { id: 'acad-programs', labelBn: 'কোর্স ও বিভাগসমূহ', labelEn: 'Academic Programs', view: 'academic' },
        { id: 'acad-hsc', labelBn: 'উচ্চ মাধ্যমিক (বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা)', labelEn: 'Higher Secondary (HSC)', view: 'academic' },
        { id: 'acad-degree', labelBn: 'ডিগ্রি পাস (বিএ, বিএসএস, বিএসসি, বিবিএস)', labelEn: 'Degree Pass Courses', view: 'academic' },
        { id: 'acad-honours', labelBn: 'স্নাতক (সম্মান) - ১৪টি বিষয়ে অনার্স', labelEn: 'Honours Programs (14 Subjects)', view: 'academic' },
        { id: 'acad-routines', labelBn: 'পরীক্ষার সময়সূচি ও রুটিন', labelEn: 'Examination Schedules', view: 'academic' }
      ]
    },
    {
      id: 'admission',
      labelBn: 'ভর্তি',
      labelEn: 'Admission',
      children: [
        { id: 'adm-policy', labelBn: 'ভর্তি নির্দেশিকা ও নীতিমালা', labelEn: 'Admission Guidelines', view: 'admission' },
        { id: 'adm-process', labelBn: 'আবেদন প্রক্রিয়া ও যোগ্যতা', labelEn: 'Application Process', view: 'admission' },
        { id: 'adm-xi', labelBn: 'একাদশ শ্রেণি কেন্দ্রীয় অনলাইন ভর্তি (XI)', labelEn: 'XI Class Admission Portal', view: 'admission' },
        { id: 'adm-nu', labelBn: 'জাতীয় বিশ্ববিদ্যালয় ডিগ্রি ও অনার্স ভর্তি', labelEn: 'NU Admission Portal', view: 'admission' }
      ]
    },
    {
      id: 'students',
      labelBn: 'শিক্ষার্থী কর্নার',
      labelEn: 'Students',
      children: [
        { id: 'stu-uniform', labelBn: 'শিক্ষার্থীদের নির্ধারিত ইউনিফর্ম', labelEn: 'Student Uniform Code', view: 'students' },
        { id: 'stu-fees', labelBn: 'অনলাইন ফি পরিশোধ ও পোর্টাল', labelEn: 'Online Fees & Payment', view: 'students' },
        { id: 'stu-hostel', labelBn: 'আবাসন ও হোস্টেল সুবিধা (শেরে বাংলা ও ছাত্রীনিবাস)', labelEn: 'Hostel & Housing', view: 'students' },
        { id: 'stu-scout', labelBn: 'রোভার স্কাউট, রেড ক্রিসেন্ট ও বিএনসিসি', labelEn: 'Co-curricular (Scout, BNCC)', view: 'students' }
      ]
    },
    {
      id: 'results',
      labelBn: 'ফলাফল',
      labelEn: 'Results',
      children: [
        { id: 'res-internal', labelBn: 'অভ্যন্তরীণ পরীক্ষার ফলাফল (Science GPA Test)', labelEn: 'Internal Examination Results', view: 'results' },
        { id: 'res-hsc', labelBn: 'এইচএসসি ফলাফল (রাজশাহী বোর্ড)', labelEn: 'HSC Results (Rajshahi Board)', view: 'results' },
        { id: 'res-nu', labelBn: 'জাতীয় বিশ্ববিদ্যালয় ফলাফল পোর্টাল', labelEn: 'National University Results', view: 'results' }
      ]
    },
    {
      id: 'notices',
      labelBn: 'নোটিশ বোর্ড',
      labelEn: 'Notices',
      children: [
        { id: 'not-all', labelBn: 'সকল নোটিশ (৮৯৯টি সংরক্ষিত নোটিশ)', labelEn: 'All Notices Archive (899 Notices)', view: 'notices' },
        { id: 'not-exam', labelBn: 'পরীক্ষা সংক্রান্ত নোটিশ', labelEn: 'Examination Notices', view: 'notices' },
        { id: 'not-adm', labelBn: 'ভর্তি সংক্রান্ত নোটিশ', labelEn: 'Admission Notices', view: 'notices' },
        { id: 'not-admin', labelBn: 'প্রশাসনিক নোটিশ', labelEn: 'Administrative Notices', view: 'notices' }
      ]
    },
    { id: 'downloads', labelBn: 'ফর্ম ও ডাউনলোড', labelEn: 'Downloads', view: 'downloads' },
    { id: 'gallery', labelBn: 'ছবি গ্যালারী', labelEn: 'Gallery', view: 'gallery' },
    { id: 'contact', labelBn: 'যোগাযোগ', labelEn: 'Contact', view: 'contact' }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-200">
      {/* MAIN HEADER (Compact Logo, Typography & Language Selector) */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between gap-3">
          {/* Logo & College Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer"
          >
            <CollegeLogo size={42} className="drop-shadow-xs group-hover:scale-105 transition-transform" />
            <div>
              <h1 className="text-base sm:text-lg lg:text-[19px] font-bold text-slate-900 leading-tight tracking-tight group-hover:text-blue-900 transition-colors">
                {lang === 'bn' ? COLLEGE_INFO.nameBn : COLLEGE_INFO.nameEn}
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium flex items-center gap-1.5 mt-0.5">
                <span>{lang === 'bn' ? COLLEGE_INFO.nameEn : 'Shahzadpur, Sirajganj, Bangladesh'}</span>
                <span className="hidden md:inline-block text-slate-300">•</span>
                <span className="hidden md:inline-block text-slate-500 text-[11px]">
                  {lang === 'bn' ? 'রাজশাহী বোর্ড ও জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত' : 'Rajshahi Board & NU Affiliated'}
                </span>
              </p>
            </div>
          </button>

          {/* Right: Language Option & Admission Button */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-300 transition-all cursor-pointer shadow-xs hover:shadow"
              title={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            >
              <Globe className="w-3.5 h-3.5 text-[#0a86b7]" />
              <span className="text-[#074770] font-bold">
                {lang === 'bn' ? 'English' : 'বাংলা'}
              </span>
            </button>

            {/* Admission Action Button */}
            <button
              onClick={() => handleNavClick('admission')}
              className="flex items-center gap-1 bg-[#0b2545] hover:bg-blue-950 text-white font-semibold text-xs px-3 py-1 rounded-md shadow-xs transition-all hover:shadow cursor-pointer border border-sky-500/20"
            >
              <span>{lang === 'bn' ? 'ভর্তি তথ্য ২০২৬' : 'Admission 2026'}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-[#0a86b7]" />
              <span>{lang === 'bn' ? 'EN' : 'বাং'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* PRIMARY NAVIGATION BAR (Sleek & Compact Navy #0b2545 with Cyan Hover) */}
      <nav className="bg-[#0b2545] text-white hidden lg:block border-t border-slate-800 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between text-[12.5px] font-semibold tracking-normal">
            {navItems.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isSelected = currentView === item.id || (item.children && item.children.some(c => c.view === currentView));

              return (
                <li
                  key={item.id}
                  className="relative group py-1"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => {
                      if (!hasDropdown) {
                        handleNavClick(item.view || item.id);
                      }
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all cursor-pointer ${
                      isSelected
                        ? 'text-cyan-300 font-bold bg-white/15 shadow-xs'
                        : 'text-slate-100 hover:text-cyan-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{lang === 'bn' ? item.labelBn : item.labelEn}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3 h-3 text-slate-300 group-hover:text-cyan-300 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </button>

                  {/* Desktop Dropdown Mega-Menu */}
                  {hasDropdown && (
                    <div
                      className={`absolute left-0 top-full pt-1 w-64 transition-all duration-150 origin-top z-50 ${
                        activeDropdown === item.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                    >
                      <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-1.5 overflow-hidden text-slate-800">
                        {item.children?.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavClick(child.view)}
                            className="w-full text-left px-3.5 py-1.5 text-xs font-medium hover:bg-slate-100 hover:text-blue-900 transition-colors flex items-center justify-between group/child cursor-pointer"
                          >
                            <span>{lang === 'bn' ? child.labelBn : child.labelEn}</span>
                            <span className="text-slate-400 opacity-0 group-hover/child:opacity-100 transition-opacity">
                              →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-3">
            {/* Quick Admission & Portal Links */}
            <div className="pb-3 border-b border-slate-800">
              <button
                onClick={() => handleNavClick('admission')}
                className="w-full bg-[#0a86b7] text-white font-bold py-2 rounded-lg text-xs text-center cursor-pointer shadow-sm"
              >
                {lang === 'bn' ? 'ভর্তি তথ্য ২০২৬' : 'Admission 2026'}
              </button>
            </div>

            {/* Nav list */}
            <ul className="space-y-1 text-sm">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-slate-800/60 pb-1">
                  {item.children ? (
                    <div>
                      <div className="font-semibold text-cyan-400 px-2 py-1 text-xs uppercase tracking-wider">
                        {lang === 'bn' ? item.labelBn : item.labelEn}
                      </div>
                      <div className="pl-3 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavClick(child.view)}
                            className="w-full text-left px-2 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
                          >
                            • {lang === 'bn' ? child.labelBn : child.labelEn}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.view || item.id)}
                      className="w-full text-left font-semibold text-slate-200 hover:text-cyan-300 px-2 py-1.5 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                    >
                      {lang === 'bn' ? item.labelBn : item.labelEn}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Footer Language Switcher */}
            <div className="pt-3 flex items-center justify-between border-t border-slate-800 text-xs">
              <button
                onClick={onToggleLang}
                className="w-full flex items-center justify-center gap-1.5 text-white bg-[#074770] hover:bg-[#063f64] font-bold px-3 py-2 rounded-lg border border-sky-500/30 cursor-pointer"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
