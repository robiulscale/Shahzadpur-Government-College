import React from 'react';
import { BookOpen, GraduationCap, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface ProgramsSectionProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ lang, onNavigate }) => {
  const honoursSubjectsBn = ['বাংলা', 'ইংরেজি', 'অর্থনীতি', 'রাষ্ট্রবিজ্ঞান', 'হিসাববিজ্ঞান', 'গণিত', 'রসায়ন', 'উদ্ভিদবিদ্যা'];
  const honoursSubjectsEn = ['Bangla', 'English', 'Economics', 'Political Science', 'Accounting', 'Math', 'Chemistry', 'Botany'];

  return (
    <section className="py-12 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
              {lang === 'bn' ? 'একাডেমিক বিভাগ ও কোর্সসমূহ' : 'Academic Programs'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              {lang === 'bn' ? 'পাঠদান ও শিক্ষাক্রম' : 'Curriculum & Study Programs'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {lang === 'bn'
                ? 'রাজশাহী শিক্ষা বোর্ডের অধীনে উচ্চ মাধ্যমিক এবং জাতীয় বিশ্ববিদ্যালয়ের অধীনে স্নাতক (পাস) ও অনার্স কোর্স।'
                : 'Higher Secondary under Rajshahi Board, and Degree Pass & Honours degrees under National University.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('academic')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-950 bg-white border border-slate-300 hover:border-slate-400 px-4 py-2 rounded-lg transition-colors shadow-xs cursor-pointer"
          >
            <span>{lang === 'bn' ? 'সকল বিভাগ ও সিলেবাস দেখুন' : 'Explore All Programs'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Main Level Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Higher Secondary (HSC) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-sky-50 text-sky-700 font-bold border border-sky-100">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {lang === 'bn' ? '২ বছর মেয়াদী' : '2 Years'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {lang === 'bn' ? 'উচ্চ মাধ্যমিক (একাদশ-দ্বাদশ)' : 'Higher Secondary (HSC)'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {lang === 'bn'
                  ? 'বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখার শিক্ষার্থীদের জন্য আধুনিক মাল্টিমিডিয়া ক্লাসরুম ও সমৃদ্ধ ল্যাব সুবিধা।'
                  : 'Science, Humanities, and Business Studies tracks with dedicated lab facilities.'}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'bn' ? 'বিজ্ঞান শাখা (Science Group)' : 'Science Group (HSC)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'bn' ? 'মানবিক শাখা (Humanities Group)' : 'Humanities Group (HSC)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'bn' ? 'ব্যবসায় শিক্ষা (Business Studies)' : 'Business Studies Group (HSC)'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('academic')}
                className="w-full text-center text-xs font-bold text-blue-900 hover:text-blue-950 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'বিষয় তালিকা ও আসন সংখ্যা →' : 'View Subjects & Details →'}
              </button>
            </div>
          </div>

          {/* Card 2: Degree Pass */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-teal-50 text-teal-700 font-bold border border-teal-100">
                  <BookOpen className="w-6 h-6" />
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {lang === 'bn' ? '৩ বছর মেয়াদী' : '3 Years'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {lang === 'bn' ? 'ডিগ্রি (পাস) ও সার্টিফিকেট কোর্স' : 'Degree Pass Courses'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {lang === 'bn'
                  ? 'জাতীয় বিশ্ববিদ্যালয়ের অধীনে কলা, সামাজিক বিজ্ঞান, বিজ্ঞান ও ব্যবসায় শিক্ষা অনুষদে স্নাতক ডিগ্রি।'
                  : 'Bachelor of Arts (BA), Social Science (BSS), Science (BSc), and Business Studies (BBS) under NU.'}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{lang === 'bn' ? 'বি.এ (ব্যাচেলর অব আর্টস)' : 'B.A. (Bachelor of Arts)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{lang === 'bn' ? 'বি.এস.এস (সোশ্যাল সায়েন্স)' : 'B.S.S. (Social Science)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{lang === 'bn' ? 'বি.এসসি ও বি.বি.এস (কমার্স)' : 'B.Sc. & B.B.S. (Commerce)'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('academic')}
                className="w-full text-center text-xs font-bold text-blue-900 hover:text-blue-950 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'ডিগ্রি পাস ভর্তির তথ্য →' : 'View Degree Courses →'}
              </button>
            </div>
          </div>

          {/* Card 3: Honours Programs */}
          <div className="bg-white rounded-2xl border-2 border-blue-900/20 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-blue-50 text-blue-900 font-bold border border-blue-100">
                  <Award className="w-6 h-6 text-blue-900" />
                </span>
                <span className="text-xs font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                  {lang === 'bn' ? '৪ বছর (সম্মান)' : '4-Year Honours'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {lang === 'bn' ? 'স্নাতক (সম্মান) - ১৪টি অনার্স বিষয়' : 'Honours Programs (14 Subjects)'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {lang === 'bn'
                  ? 'অভিজ্ঞ অধ্যাপকগণের সরাসরি তত্ত্বাবধানে বাংলা, ইংরেজি, অর্থনীতি, রাষ্ট্রবিজ্ঞান, ইতিহাস, হিসাববিজ্ঞান, পদার্থবিদ্যা, রসায়ন, গণিত, উদ্ভিদবিদ্যা ইত্যাদি।'
                  : 'Major degrees in 14 subjects including English, Economics, Political Science, Accounting, Physics, Chemistry, Botany, and Math.'}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {(lang === 'bn' ? honoursSubjectsBn : honoursSubjectsEn).map((subj, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {subj}
                  </span>
                ))}
                <span className="text-[11px] bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded">
                  {lang === 'bn' ? '+ আরও ৬টি' : '+ 6 More'}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('academic')}
                className="w-full text-center text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 py-2 rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'bn' ? 'অনার্স সকল বিভাগের তালিকা →' : 'Explore All 14 Departments →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
