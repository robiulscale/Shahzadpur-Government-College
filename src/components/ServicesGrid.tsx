import React from 'react';
import {
  CreditCard,
  UserCheck,
  FileCheck,
  Award,
  ExternalLink,
  Download
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeInfo';
import { Language } from '../types';

interface ServicesGridProps {
  lang: Language;
  onNavigate: (view: string) => void;
  isPlayingAnthem?: boolean;
  onToggleAnthem?: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  lang,
  onNavigate
}) => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                {lang === 'bn' ? 'শিক্ষার্থী ই-সেবা ও পোর্টাল' : 'Student Services & Portals'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {lang === 'bn' ? 'ডিজিটাল ক্যাম্পাস সেবা ও অনলাইন পোর্টাল' : 'Digital Campus Services & Portals'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {lang === 'bn'
                ? 'কলেজের সকল অনলাইন ফি পরিশোধ, শিক্ষার্থী তথ্য ভাণ্ডার এবং সনদ সেবা এক ক্লিকে।'
                : 'Direct access to institutional payment gateways, student dashboards, and academic charter.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Service 1: Online Fees Payment (NSU Deep Ocean Blue with Cyan Accent) */}
            <a
              href={COLLEGE_INFO.portals.feesPayment}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#074770] hover:bg-[#063f64] text-white shadow-sm hover:shadow-md transition-all group flex flex-col justify-between border border-sky-500/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-[#02213a] text-cyan-400 font-bold border border-cyan-500/30">
                    <CreditCard className="w-5 h-5" />
                  </span>
                  <ExternalLink className="w-4 h-4 text-sky-300 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-extrabold text-base leading-tight">
                  {lang === 'bn' ? 'অনলাইন ফি পরিশোধ পোর্টাল' : 'Online Fees Payment'}
                </h3>
                <p className="text-xs text-sky-100/80 mt-1.5 leading-relaxed">
                  {lang === 'bn'
                    ? 'কলেজের সকল প্রকার বেতন, পরীক্ষার ফি ও সেশন চার্জ অনলাইনে পরিশোধ করুন।'
                    : 'Pay tuition, examination fees, and session charges securely via Academy IMS.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold flex items-center justify-between text-cyan-300">
                <span>pay.academyims.com</span>
                <span>{lang === 'bn' ? 'ফি প্রদান করুন →' : 'Pay Now →'}</span>
              </div>
            </a>

            {/* Service 2: Student Portal */}
            <a
              href={COLLEGE_INFO.portals.studentPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950 text-white shadow-sm hover:shadow-md transition-all group flex flex-col justify-between border border-blue-800"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-blue-800 text-sky-300 font-bold border border-blue-700">
                    <UserCheck className="w-5 h-5" />
                  </span>
                  <ExternalLink className="w-4 h-4 text-sky-300 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-extrabold text-base leading-tight">
                  {lang === 'bn' ? 'শিক্ষার্থী লগইন পোর্টাল' : 'Student Login Portal'}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {lang === 'bn'
                    ? 'শিক্ষার্থীর উপস্থিতি, রেজাল্ট শিট ও একাডেমিক প্রোফাইল দেখার কেন্দ্রীয় পোর্টাল।'
                    : 'Access individual student attendance, report cards, and digital profile.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/20 text-xs font-bold flex items-center justify-between text-sky-300">
                <span>live.academyims.com</span>
                <span>{lang === 'bn' ? 'পোর্টাল লগইন →' : 'Portal Login →'}</span>
              </div>
            </a>

            {/* Service 3: Citizen Charter */}
            <div
              onClick={() => onNavigate('about')}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                    <FileCheck className="w-5 h-5" />
                  </span>
                  <a
                    href="https://web.academyims.com/storage/2404022/document/Citizen_Charter._2404022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 rounded bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-900">
                  {lang === 'bn' ? 'সিটিজেন চার্টার (নাগরিক সনদ)' : 'Citizen Charter'}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {lang === 'bn'
                    ? 'কলেজ প্রদত্ত সেবাসমূহ, সময়সীমা ও দায়িত্বরত কর্মকর্তার পরিচিতি।'
                    : 'Official charter detailing academic services, timeframes, and officials.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-blue-900 flex items-center justify-between">
                <span>{lang === 'bn' ? 'অফিসিয়াল সনদপত্র' : 'Official Charter'}</span>
                <span>{lang === 'bn' ? 'বিস্তারিত দেখুন →' : 'View Details →'}</span>
              </div>
            </div>

            {/* Service 4: Internal Exam Results */}
            <div
              onClick={() => onNavigate('results')}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-purple-100 text-purple-800 font-bold">
                    <Award className="w-5 h-5" />
                  </span>
                  <a
                    href="https://web.academyims.com/storage/2404022/document/Science_Gpa_test_2024_2404022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 rounded bg-white hover:bg-purple-50 text-purple-800 border border-purple-200"
                    title="Download Result Sheet"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-900">
                  {lang === 'bn' ? 'পরীক্ষার ফলাফল ও মেরিট শিট' : 'Results & Merit Sheets'}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {lang === 'bn'
                    ? 'অভ্যন্তরীণ পরীক্ষার ফলাফল, বিজ্ঞান জিপিএ টেস্ট ও বোর্ড ফলাফল অনুসন্ধান।'
                    : 'Check internal term examinations and external board results.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-blue-900 flex items-center justify-between">
                <span>Science GPA Test PDF</span>
                <span>{lang === 'bn' ? 'ফলাফল অনুসন্ধান →' : 'Search Results →'}</span>
              </div>
            </div>
          </div>

          {/* Student Uniform Banner */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-blue-900 block text-sm">
                {lang === 'bn' ? 'শিক্ষার্থীদের নির্ধারিত ইউনিফর্ম নির্দেশিকা' : 'Official Student Uniform Code'}
              </span>
              <span className="text-slate-700 mt-0.5 block">
                {lang === 'bn'
                  ? `${COLLEGE_INFO.uniformRules.maleBn} | ${COLLEGE_INFO.uniformRules.femaleBn}`
                  : `${COLLEGE_INFO.uniformRules.maleEn} | ${COLLEGE_INFO.uniformRules.femaleEn}`}
              </span>
            </div>
            <button
              onClick={() => onNavigate('students')}
              className="shrink-0 font-bold text-blue-900 hover:underline cursor-pointer"
            >
              {lang === 'bn' ? 'নিয়মাবলী →' : 'Details →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
