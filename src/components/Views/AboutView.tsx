import React from 'react';
import {
  Building2,
  FileCheck,
  Award,
  Download,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { COLLEGE_INFO } from '../../data/collegeInfo';
import { Language } from '../../types';

interface AboutViewProps {
  lang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'কলেজের পরিচিতি ও প্রাতিষ্ঠানিক তথ্য' : 'Institutional Overview & Heritage'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজের ইতিহাস ও পরিচিতি' : 'About Shahzadpur Government College'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'bn'
                  ? 'উত্তরবঙ্গের সিরাজগঞ্জ জেলার ইতিহাস, ঐতিহ্য ও উচ্চশিক্ষার অন্যতম বাতিঘর।'
                  : 'A heritage seat of higher learning in Sirajganj district, Bangladesh.'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-950 px-4 py-2 rounded-xl text-xs font-semibold">
              <Calendar className="w-4 h-4 text-[#0a86b7]" />
              <span>
                {lang === 'bn' ? 'স্থাপিত: ১৯৬৪ • জাতীয়করণ: ১৯৮৪' : 'Established: 1964 • Nationalized: 1984'}
              </span>
            </div>
          </div>
        </div>

        {/* 1. History Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <div className="p-2 bg-blue-50 text-blue-900 rounded-lg">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {lang === 'bn' ? 'কলেজের গৌরবময় ইতিহাস' : 'History of the College'}
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
            {lang === 'bn' ? (
              <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
                {COLLEGE_INFO.historyBn}
              </p>
            ) : (
              <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
                {COLLEGE_INFO.historyEn}
              </p>
            )}
          </div>
        </div>

        {/* 2. Institutional Information & Recognition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Institutional Data Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'প্রাতিষ্ঠানিক তথ্য ও কোডসমূহ' : 'Institutional Credentials & Codes'}
              </h3>
            </div>

            <ul className="divide-y divide-slate-100 text-xs">
              <li className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 font-medium">
                  {lang === 'bn' ? 'প্রতিষ্ঠানের নাম:' : 'Institution Name:'}
                </span>
                <span className="font-bold text-slate-900">
                  {lang === 'bn' ? COLLEGE_INFO.nameBn : COLLEGE_INFO.nameEn}
                </span>
              </li>
              <li className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 font-medium">
                  {lang === 'bn' ? 'প্রতিষ্ঠা সাল:' : 'Foundation Year:'}
                </span>
                <span className="font-bold text-slate-900">
                  {lang === 'bn' ? '১৯৬৪ খ্রিস্টাব্দ' : '1964 AD'}
                </span>
              </li>
              <li className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 font-medium">
                  {lang === 'bn' ? 'জাতীয়করণ তারিখ:' : 'Nationalization Date:'}
                </span>
                <span className="font-bold text-emerald-800">
                  {lang === 'bn' ? 'নভেম্বর ১৯৮৪' : 'November 1984'}
                </span>
              </li>
              <li className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 font-medium">EIIN:</span>
                <span className="font-mono font-bold text-blue-900 bg-slate-100 px-2 py-0.5 rounded">
                  {COLLEGE_INFO.eiin}
                </span>
              </li>
              <li className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 font-medium">
                  {lang === 'bn' ? 'এইচএসসি কলেজ কোড:' : 'HSC College Code (Rajshahi):'}
                </span>
                <span className="font-mono font-bold text-blue-900 bg-slate-100 px-2 py-0.5 rounded">
                  {COLLEGE_INFO.hscCodeEn}
                </span>
              </li>
              <li className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 font-medium">
                  {lang === 'bn' ? 'জাতীয় বিশ্ববিদ্যালয় কোড:' : 'National University Code:'}
                </span>
                <span className="font-mono font-bold text-blue-900 bg-slate-100 px-2 py-0.5 rounded">
                  {COLLEGE_INFO.nuCodeEn}
                </span>
              </li>
              <li className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 font-medium">
                  {lang === 'bn' ? 'অধিভুক্তি:' : 'Affiliation:'}
                </span>
                <span className="font-semibold text-slate-800 text-right">
                  {lang === 'bn'
                    ? 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, রাজশাহী এবং জাতীয় বিশ্ববিদ্যালয়'
                    : 'Rajshahi Education Board & National University Bangladesh'}
                </span>
              </li>
            </ul>
          </div>

          {/* Citizen Charter & Documents Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <div className="p-2 bg-sky-50 text-sky-800 rounded-lg">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'bn' ? 'সিটিজেন চার্টার (নাগরিক সনদ)' : 'Citizen Charter'}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-3">
                {lang === 'bn'
                  ? 'শাহজাদপুর সরকারি কলেজ শিক্ষার্থীদের দ্রুততম সময়ে প্রশংসাপত্র, নম্বরপত্র, প্রত্যয়নপত্র, ট্রান্সফার সার্টিফিকেট ও ভর্তি সংক্রান্ত সেবা প্রদানে অঙ্গীকারবদ্ধ। প্রতিটি সেবার সময়সীমা ও সংশ্লিষ্ট দায়িত্বপ্রাপ্ত কর্মকর্তা চার্টারে নির্ধারিত রয়েছে।'
                  : 'Shahzadpur Government College is committed to providing prompt delivery of testimonials, transcripts, certificates, TC, and admission services with transparent timeframes.'}
              </p>

              <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'bn'
                      ? 'প্রশংসাপত্র ও প্রত্যয়নপত্র বিতরণ: সর্বোচ্চ ৩ কার্যদিবস'
                      : 'Testimonials & Certifications: Max 3 Working Days'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'bn'
                      ? 'টিসি ও ছাড়পত্র প্রদান: সর্বোচ্চ ৫ কার্যদিবস'
                      : 'Transfer Certificate (TC): Max 5 Working Days'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'bn'
                      ? 'ডিগ্রি ও অনার্স মার্কশিট সেবা: তাৎক্ষণিক / ২ কার্যদিবস'
                      : 'Degree & Honours Marksheet: Instant / 2 Working Days'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://web.academyims.com/storage/2404022/document/Citizen_Charter._2404022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>
                  {lang === 'bn'
                    ? 'অফিসিয়াল সিটিজেন চার্টার PDF ডাউনলোড'
                    : 'Download Official Citizen Charter PDF'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Campus Facilities */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            {lang === 'bn' ? 'ক্যাম্পাস অবকাঠামো ও শিক্ষার্থী সুবিধাসমূহ' : 'Campus Infrastructure & Facilities'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">
                {lang === 'bn' ? 'কেন্দ্রীয় লাইব্রেরি' : 'Central Library'}
              </span>
              <p className="text-slate-600">
                {lang === 'bn'
                  ? 'হাজারো দুর্লভ বই, মুক্তিযুদ্ধ ও সাহিত্য কর্নার এবং সমৃদ্ধ পাঠাগার সুবিধা।'
                  : 'Thousands of volumes, Liberation War archive, literature collection, and study rooms.'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">
                {lang === 'bn' ? 'বিজ্ঞান ল্যাবরেটরি' : 'Science Laboratories'}
              </span>
              <p className="text-slate-600">
                {lang === 'bn'
                  ? 'পদার্থ, রসায়ন, উদ্ভিদ ও প্রাণিবিদ্যা বিষয়ের আধুনিক যন্ত্রপাতি সজ্জিত স্বতন্ত্র ল্যাব।'
                  : 'Fully equipped modern laboratories for Physics, Chemistry, Botany, and Zoology.'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">
                {lang === 'bn' ? 'ছাত্র ও ছাত্রী হোস্টেল' : 'Student Hostels'}
              </span>
              <p className="text-slate-600">
                {lang === 'bn'
                  ? 'শেরে বাংলা ছাত্রাবাস ও শাহজাদপুর সরকারি কলেজ ছাত্রীনিবাস আবাসন সুবিধা।'
                  : 'Sher-e-Bangla Boys Hostel and Shahzadpur Govt College Girls Hostel facilities.'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">
                {lang === 'bn' ? 'কলেজ জামে মসজিদ' : 'College Central Mosque'}
              </span>
              <p className="text-slate-600">
                {lang === 'bn'
                  ? 'ক্যাম্পাস চত্বরে অবস্থিত মনোরম কলেজ জামে মসজিদ ও নিয়মিত ইমাম-মোয়াজ্জিন সেবা।'
                  : 'Serene campus mosque providing daily congregational prayer services.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
