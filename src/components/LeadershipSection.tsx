import React, { useState } from 'react';
import { Quote, ChevronRight, X } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeInfo';
import { Language } from '../types';

interface LeadershipSectionProps {
  lang: Language;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ lang }) => {
  const [selectedLeader, setSelectedLeader] = useState<'principal' | 'vp' | null>(null);

  const { principal, vicePrincipal } = COLLEGE_INFO.speeches;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            {lang === 'bn' ? 'কলেজ প্রশাসন ও নেতৃত্ব' : 'Institutional Leadership'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            {lang === 'bn' ? 'অধ্যক্ষ ও উপাধ্যক্ষ মহোদয়ের বাণী' : 'Messages from College Leadership'}
          </h2>
          <div className="w-16 h-1 bg-[#0a86b7] mx-auto mt-3 rounded-full" />
        </div>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Principal Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 text-center">
              <div className="relative w-32 h-36 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-[#0a86b7] shadow-sm mx-auto">
                <img
                  src={principal.image}
                  alt={lang === 'bn' ? principal.nameBn : principal.nameEn}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <span className="inline-block mt-2 text-[10px] font-bold text-sky-900 bg-sky-100 border border-sky-300 px-2 py-0.5 rounded">
                {lang === 'bn' ? 'অধ্যক্ষ' : 'Principal'}
              </span>
            </div>

            <div className="flex-1 space-y-2 text-center sm:text-left">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'bn' ? principal.nameBn : principal.nameEn}
                </h3>
                <p className="text-xs text-blue-900 font-semibold">
                  {lang === 'bn' ? principal.departmentBn : principal.departmentEn}
                </p>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজ, সিরাজগঞ্জ' : 'Shahzadpur Govt. College, Sirajganj'}
                </p>
              </div>

              <div className="relative bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed italic line-clamp-4">
                <Quote className="w-4 h-4 text-sky-400 absolute top-2 left-2 opacity-30" />
                <span>{lang === 'bn' ? principal.messageBn : principal.messageEn}</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="space-y-0.5 text-slate-600 text-[11px]">
                  <div>
                    {lang === 'bn' ? 'ইমেইল: ' : 'Email: '}
                    <span className="font-mono text-slate-800">{principal.email}</span>
                  </div>
                  <div>
                    {lang === 'bn' ? 'মোবাইল: ' : 'Phone: '}
                    <span className="text-slate-800 font-medium">
                      {lang === 'bn' ? principal.mobile : '01718-372996'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLeader('principal')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-950 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{lang === 'bn' ? 'বাণী বিস্তারিত পড়ুন' : 'Read Full Message'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Vice Principal Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 text-center">
              <div className="relative w-32 h-36 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-slate-400 shadow-sm mx-auto">
                <img
                  src={vicePrincipal.image}
                  alt={lang === 'bn' ? vicePrincipal.nameBn : vicePrincipal.nameEn}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <span className="inline-block mt-2 text-[10px] font-bold text-slate-700 bg-slate-200 border border-slate-300 px-2 py-0.5 rounded">
                {lang === 'bn' ? 'উপাধ্যক্ষ' : 'Vice Principal'}
              </span>
            </div>

            <div className="flex-1 space-y-2 text-center sm:text-left">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'bn' ? vicePrincipal.nameBn : vicePrincipal.nameEn}
                </h3>
                <p className="text-xs text-blue-900 font-semibold">
                  {lang === 'bn' ? vicePrincipal.departmentBn : vicePrincipal.departmentEn}
                </p>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজ, সিরাজগঞ্জ' : 'Shahzadpur Govt. College, Sirajganj'}
                </p>
              </div>

              <div className="relative bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed italic line-clamp-4">
                <Quote className="w-4 h-4 text-slate-400 absolute top-2 left-2 opacity-30" />
                <span>{lang === 'bn' ? vicePrincipal.messageBn : vicePrincipal.messageEn}</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="space-y-0.5 text-slate-600 text-[11px]">
                  <div>
                    {lang === 'bn' ? 'ইমেইল: ' : 'Email: '}
                    <span className="font-mono text-slate-800">{vicePrincipal.email}</span>
                  </div>
                  <div>
                    {lang === 'bn' ? 'মোবাইল: ' : 'Phone: '}
                    <span className="text-slate-800 font-medium">
                      {lang === 'bn' ? vicePrincipal.mobile : '01716-688779'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLeader('vp')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-950 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{lang === 'bn' ? 'বাণী বিস্তারিত পড়ুন' : 'Read Full Message'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Speech */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 border-b border-slate-200 pb-4 mb-4">
              <img
                src={selectedLeader === 'principal' ? principal.image : vicePrincipal.image}
                alt={selectedLeader === 'principal' ? (lang === 'bn' ? principal.nameBn : principal.nameEn) : (lang === 'bn' ? vicePrincipal.nameBn : vicePrincipal.nameEn)}
                className="w-16 h-20 rounded-lg object-cover object-top border border-[#0a86b7] shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-[#0a86b7] uppercase tracking-wider">
                  {selectedLeader === 'principal'
                    ? (lang === 'bn' ? 'অধ্যক্ষ মহোদয়ের বাণী' : 'Principal\'s Message')
                    : (lang === 'bn' ? 'উপাধ্যক্ষ মহোদয়ের বাণী' : 'Vice Principal\'s Message')}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {selectedLeader === 'principal'
                    ? (lang === 'bn' ? principal.nameBn : principal.nameEn)
                    : (lang === 'bn' ? vicePrincipal.nameBn : vicePrincipal.nameEn)}
                </h3>
                <p className="text-xs text-slate-600">
                  {selectedLeader === 'principal'
                    ? (lang === 'bn' ? principal.departmentBn : principal.departmentEn)
                    : (lang === 'bn' ? vicePrincipal.departmentBn : vicePrincipal.departmentEn)}
                </p>
              </div>
            </div>

            <div className="text-sm text-slate-800 leading-relaxed space-y-4 whitespace-pre-line">
              {selectedLeader === 'principal'
                ? (lang === 'bn' ? principal.messageBn : principal.messageEn)
                : (lang === 'bn' ? vicePrincipal.messageBn : vicePrincipal.messageEn)}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-5 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
