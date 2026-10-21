import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle2,
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../../data/academicPrograms';
import { Language } from '../../types';

interface AcademicViewProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

export const AcademicView: React.FC<AcademicViewProps> = ({ lang, onNavigate }) => {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'HSC' | 'Degree Pass' | 'Honours'>('all');

  const tabs = [
    { id: 'all', labelBn: 'সকল প্রোগ্রাম', labelEn: 'All Programs' },
    { id: 'HSC', labelBn: 'উচ্চ মাধ্যমিক (HSC)', labelEn: 'Higher Secondary (HSC)' },
    { id: 'Degree Pass', labelBn: 'ডিগ্রি (পাস) কোর্স', labelEn: 'Degree (Pass) Course' },
    { id: 'Honours', labelBn: 'স্নাতক (সম্মান) - অনার্স', labelEn: 'Bachelor (Honours)' }
  ];

  const filtered = ACADEMIC_PROGRAMS.filter(
    (p) => selectedLevel === 'all' || p.level === selectedLevel
  );

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'একাডেমিক' : 'Academic'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'কোর্স ও বিভাগসমূহ' : 'Courses & Academic Departments'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'একাডেমিক প্রোগ্রাম ও পাঠদান' : 'Academic Programs & Curriculum'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'bn'
                  ? 'উচ্চ মাধ্যমিক (বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা), ডিগ্রি পাস এবং জাতীয় বিশ্ববিদ্যালয়ের অধীনে ১৪টি বিষয়ে স্নাতক (সম্মান) কোর্স।'
                  : 'Comprehensive academic programs covering Higher Secondary Certificate, Degree Pass, and 14 Honours disciplines.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('admission')}
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <span>{lang === 'bn' ? 'ভর্তি প্রক্রিয়া দেখুন' : 'View Admission Guidelines'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Level Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedLevel(tab.id as any)}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedLevel === tab.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lang === 'bn' ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Programs List */}
        <div className="space-y-6">
          {filtered.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-900">
                      {lang === 'bn' ? prog.levelLabelBn : (prog.levelLabelEn || prog.level)}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {lang === 'bn' ? `মেয়াদ: ${prog.duration}` : `Duration: ${prog.durationEn || prog.duration}`}
                    </span>
                    <span className="text-xs text-slate-400">
                      • {lang === 'bn' ? prog.boardOrAffiliation : (prog.boardOrAffiliationEn || prog.boardOrAffiliation)}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900">
                    {lang === 'bn' ? prog.titleBn : prog.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'bn' ? prog.titleEn : prog.titleBn}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('admission')}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    {lang === 'bn' ? 'ভর্তি যোগ্যতা' : 'Eligibility & Apply'}
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {lang === 'bn' ? prog.descriptionBn : prog.descriptionEn}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      {lang === 'bn' ? 'বিষয়সমূহ ও পাঠ্যসূচি:' : 'Curriculum & Subjects:'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.subjectsBn.map((subj, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded-lg border border-slate-200 font-medium"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2.5">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1">
                    {lang === 'bn' ? 'ভর্তি ও আসনের বিবরণ' : 'Admission & Seat Matrix'}
                  </h4>
                  <div>
                    <span className="text-slate-500 block">
                      {lang === 'bn' ? 'ভর্তি যোগ্যতা:' : 'Eligibility Criteria:'}
                    </span>
                    <span className="font-medium text-slate-800">
                      {lang === 'bn' ? prog.eligibilityBn : (prog.eligibilityEn || prog.eligibilityBn)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">
                      {lang === 'bn' ? 'অনুমোদিত আসন:' : 'Approved Seats:'}
                    </span>
                    <span className="font-bold text-emerald-800">
                      {prog.seats ? (lang === 'bn' ? `${prog.seats}` : `${prog.seats}`) : (lang === 'bn' ? 'বিভাগভিত্তিক' : 'Department-wise')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
