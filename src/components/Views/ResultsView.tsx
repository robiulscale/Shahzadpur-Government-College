import React from 'react';
import { Award, Download, ExternalLink, FileText } from 'lucide-react';
import { Language } from '../../types';

interface ResultsViewProps {
  lang: Language;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ lang }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'ফলাফল' : 'Results'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'পরীক্ষার ফলাফল ও মেরিট শিট' : 'Examination Results & Merit Sheets'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'পরীক্ষার ফলাফল ও মূল্যায়ন পত্র' : 'Examination Results'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'bn'
                  ? 'শাহজাদপুর সরকারি কলেজের অভ্যন্তরীণ পরীক্ষা, নির্বাচনী পরীক্ষা, রাজশাহী শিক্ষা বোর্ড ও জাতীয় বিশ্ববিদ্যালয়ের ফলাফল।'
                  : 'Official internal assessment results, Science GPA test sheets, and external board/university results portal.'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-950 px-4 py-2 rounded-xl text-xs font-semibold">
              <Award className="w-4 h-4 text-purple-600" />
              <span>
                {lang === 'bn' ? 'বিজ্ঞান জিপিএ টেস্ট ও বোর্ড পোর্টাল' : 'Science GPA Test & Official Portals'}
              </span>
            </div>
          </div>
        </div>

        {/* 1. Internal Examination Results (Verified Science GPA Test PDF) */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
            <div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 uppercase">
                {lang === 'bn' ? 'অভ্যন্তরীণ পরীক্ষা' : 'Internal Examination'}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                {lang === 'bn'
                  ? 'বিজ্ঞান বিভাগ অভ্যন্তরীণ পরীক্ষা ফলাফল (Science GPA Test Sheet)'
                  : 'Science Section Internal GPA Test Results Merit Sheet'}
              </h3>
            </div>

            <span className="text-xs text-slate-400 font-mono">
              {lang === 'bn' ? 'ফাইল সাইজ: ৮০৬ KB • ফরম্যাট: PDF' : 'File Size: 806 KB • Format: PDF'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {lang === 'bn'
              ? 'শাহজাদপুর সরকারি কলেজের উচ্চ মাধ্যমিক বিজ্ঞান বিভাগের শিক্ষার্থীদের অভ্যন্তরীণ মূল্যায়ন ও জিপিএ টেস্টের ফলাফল পত্র নিম্নের লিংক থেকে সরাসরি ডাউনলোড করে দেখা যাবে।'
              : 'Official certified internal evaluation and GPA test result sheet for HSC Science students of Shahzadpur Government College. View online or download as PDF.'}
          </p>

          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">
                  Science_Gpa_test_2024_2404022.pdf
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'bn'
                    ? 'অফিসিয়াল সিলযুক্ত বিজ্ঞান বিভাগ টেস্ট ফলাফল বিবরণী'
                    : 'Official Sealed Science Department Merit & GPA Tabulation Sheet'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="https://web.academyims.com/storage/2404022/document/Science_Gpa_test_2024_2404022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ব্রাউজারে ভিউ করুন' : 'View in Browser'}</span>
              </a>
              <a
                href="https://web.academyims.com/storage/2404022/document/Science_Gpa_test_2024_2404022.pdf"
                download
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ডাউনলোড (PDF)' : 'Download (PDF)'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. External Examination Lookup Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: HSC Results (Rajshahi Board) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="p-2.5 bg-blue-50 text-blue-900 rounded-xl font-bold">
                  <Award className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {lang === 'bn' ? 'কলেজ কোড: ৩৪৫০' : 'College Code: 3450'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'এইচএসসি ফলাফল (রাজশাহী শিক্ষা বোর্ড)' : 'HSC Results (Rajshahi Education Board)'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'রাজশাহী মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ডের অফিসিয়াল সার্ভার থেকে রোল ও রেজিস্ট্রেশন নম্বর ইনপুট দিয়ে বিস্তারিত মার্কশিট সংগ্রহ করুন।'
                  : 'Access full individual marksheets and institutional results with Roll and Registration number from the official Rajshahi Board server.'}
              </p>
            </div>

            <a
              href="https://rajshahieducationboard.gov.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{lang === 'bn' ? 'রাজশাহী বোর্ড রেজাল্ট পোর্টালে যান' : 'Go to Rajshahi Board Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: National University Results */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="p-2.5 bg-amber-50 text-amber-700 rounded-xl font-bold">
                  <Award className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {lang === 'bn' ? 'কলেজ কোড: ২২১৪' : 'College Code: 2214'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'ডিগ্রি ও অনার্স ফলাফল (জাতীয় বিশ্ববিদ্যালয়)' : 'Degree & Honours Results (National University)'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'জাতীয় বিশ্ববিদ্যালয়ের সেন্ট্রাল রেজাল্ট পোর্টাল থেকে ডিগ্রি (পাস) ও ১৪টি বিষয়ে অনার্স শিক্ষার্থীদের সেমিস্টার ভিত্তিক ফলাফল ও সিজিপিএ দেখুন।'
                  : 'Check semester results and CGPA for Degree (Pass) and 14 Honours programs directly via the National University Central Results portal.'}
              </p>
            </div>

            <a
              href="https://www.nu.ac.bd/results/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{lang === 'bn' ? 'nu.ac.bd/results পোর্টালে যান' : 'Go to nu.ac.bd/results Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
