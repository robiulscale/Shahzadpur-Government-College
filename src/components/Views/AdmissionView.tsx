import React from 'react';
import {
  GraduationCap,
  ExternalLink,
  CreditCard,
  FileText,
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { COLLEGE_INFO } from '../../data/collegeInfo';
import { Language } from '../../types';

interface AdmissionViewProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

export const AdmissionView: React.FC<AdmissionViewProps> = ({ lang, onNavigate }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'ভর্তি কর্নার' : 'Admission Corner'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'ভর্তি নির্দেশিকা ও আবেদন প্রক্রিয়া' : 'Admission Guidelines & Portals'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'ভর্তি নির্দেশিকা ও আবেদন প্রক্রিয়া' : 'Admission Information & Portals'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'bn'
                  ? 'একাদশ শ্রেণি, ডিগ্রি (পাস) ও স্নাতক (সম্মান) কোর্সে ভর্তির নীতিমালা, সময়সূচি ও অফিশিয়াল লিংক।'
                  : 'Official admission policies, required credentials, deadlines, and direct government application links.'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-950 px-4 py-2 rounded-xl text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'bn' ? '১০০% কেন্দ্রীয় ডিজিটাল ভর্তি ব্যবস্থা' : '100% Centralized Digital Admission System'}</span>
            </div>
          </div>
        </div>

        {/* Portals Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: HSC Class XI Admission */}
          <div className="bg-white rounded-2xl border-2 border-blue-900/20 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-blue-50 text-blue-900 font-bold border border-blue-100">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                  {lang === 'bn' ? 'শিক্ষা মন্ত্রণালয় কেন্দ্রীয় সিস্টেম' : 'Ministry of Education Central System'}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                {lang === 'bn' ? 'একাদশ শ্রেণি কেন্দ্রীয় অনলাইন ভর্তি (XI Class)' : 'Class XI Central Online Admission (HSC)'}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রণালয়ের অধীন একাদশ শ্রেণির কেন্দ্রীয় অনলাইন পোর্টালে শাহজাদপুর সরকারি কলেজ প্রথম পছন্দের তালিকায় নির্বাচন করে আবেদন সম্পন্ন করতে হয়।'
                  : 'Apply through the Ministry of Education central admission portal, selecting Shahzadpur Government College as your top preference for Science, Humanities, or Business Studies.'}
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                <div className="font-semibold text-slate-900">
                  {lang === 'bn' ? 'কলেজ নির্বাচন তথ্য:' : 'College Selection Credentials:'}
                </div>
                <div className="text-slate-700">
                  {lang === 'bn' ? 'কলেজের নাম: ' : 'College Name: '}
                  <strong className="text-blue-900">Shahzadpur Govt. College</strong>
                </div>
                <div className="text-slate-700">
                  {lang === 'bn' ? 'EIIN নম্বর: ' : 'EIIN Number: '}
                  <strong className="font-mono text-blue-900">{COLLEGE_INFO.eiin}</strong>
                </div>
                <div className="text-slate-700">
                  {lang === 'bn' ? 'এইচএসসি কোড (রাজশাহী বোর্ড): ' : 'HSC Board Code: '}
                  <strong className="font-mono text-blue-900">{COLLEGE_INFO.hscCodeEn}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <a
                href={COLLEGE_INFO.portals.xiAdmission}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{lang === 'bn' ? 'xiclassadmission.gov.bd প্রবেশ করুন' : 'Visit xiclassadmission.gov.bd'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: National University Degree & Honours */}
          <div className="bg-white rounded-2xl border-2 border-amber-500/30 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-amber-50 text-amber-700 font-bold border border-amber-200">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  {lang === 'bn' ? 'জাতীয় বিশ্ববিদ্যালয় কেন্দ্রীয় সিস্টেম' : 'National University Central Portal'}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                {lang === 'bn'
                  ? 'ডিগ্রি (পাস) ও অনার্স ভর্তি পোর্টাল (National University)'
                  : 'Degree (Pass) & Honours Admission Portal (National University)'}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'জাতীয় বিশ্ববিদ্যালয়ের ভর্তি পোর্টালের মাধ্যমে শাহজাদপুর সরকারি কলেজে ডিগ্রি (পাস) ও ১৪টি বিষয়ে অনার্স কোর্সে আবেদন গ্রহণ করা হয়। এসএসসি ও এইচএসসি ফলের ভিত্তিতে কেন্দ্রীয়ভাবে মেধা তালিকা প্রস্তুত হয়।'
                  : 'Applications for Degree (Pass) and 14 Honours disciplines are processed centrally via the National University admission portal based on combined SSC & HSC merit scores.'}
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                <div className="font-semibold text-slate-900">
                  {lang === 'bn' ? 'কলেজ নির্বাচন তথ্য:' : 'College Selection Credentials:'}
                </div>
                <div className="text-slate-700">
                  {lang === 'bn' ? 'কলেজের নাম: ' : 'College Name: '}
                  <strong className="text-blue-900">Shahzadpur Govt. College</strong>
                </div>
                <div className="text-slate-700">
                  {lang === 'bn' ? 'জাতীয় বিশ্ববিদ্যালয় কলেজ কোড: ' : 'NU College Code: '}
                  <strong className="font-mono text-blue-900">{COLLEGE_INFO.nuCodeEn}</strong>
                </div>
                <div className="text-slate-700">
                  {lang === 'bn' ? 'জেলা: ' : 'District: '}
                  <strong className="text-slate-900">{lang === 'bn' ? 'সিরাজগঞ্জ' : 'Sirajganj'}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <a
                href={COLLEGE_INFO.portals.nuAdmission}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{lang === 'bn' ? 'app1.nu.edu.bd ভর্তি পোর্টালে যান' : 'Go to app1.nu.edu.bd Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-900" />
            <span>{lang === 'bn' ? 'ভর্তির সময় প্রয়োজনীয় নথিপত্র ও প্রমাণাদি' : 'Required Documents & Credentials at Admission'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">
                  {lang === 'bn' ? 'মূল মার্কশিট ও প্রশংসাপত্র:' : 'Original Marksheet & Testimonial:'}
                </strong>
                <span className="text-slate-600">
                  {lang === 'bn'
                    ? 'এসএসসি/সমমান বা এইচএসসি পরীক্ষার মূল একাডেমিক ট্রান্সক্রিপ্ট এবং সত্যায়িত ২ সেট ফটোকপি।'
                    : 'Original academic transcript and testimonial along with 2 attested sets of photocopies.'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">
                  {lang === 'bn' ? 'রিসেন্ট পাসপোর্ট সাইজ ছবি:' : 'Recent Passport Size Photographs:'}
                </strong>
                <span className="text-slate-600">
                  {lang === 'bn'
                    ? 'শিক্ষার্থীর সদ্য তোলা পাসপোর্ট সাইজের রঙিন ছবি (৪ কপি) এবং স্টুডেন্ট আইডি ফর্ম।'
                    : 'Four recent color passport-sized photographs of the student and official enrollment application form.'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">
                  {lang === 'bn' ? 'অনলাইন ভর্তি নিশ্চয়নের কপি:' : 'Online Admission Confirmation Slip:'}
                </strong>
                <span className="text-slate-600">
                  {lang === 'bn'
                    ? 'কেন্দ্রীয় ভর্তি পোর্টালে কলেজ সিলেকশনের পর প্রাপ্ত সিকিউরিটি কোড ও কনফার্মেশন প্রিন্ট কপি।'
                    : 'Security code confirmation printout obtained from the central admission portal after college selection.'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">
                  {lang === 'bn' ? 'অনলাইন ফি পরিশোধের রসিদ:' : 'Online Fee Payment Receipt:'}
                </strong>
                <span className="text-slate-600">
                  {lang === 'bn'
                    ? 'কলেজের অনলাইন পেমেন্ট গেটওয়ে (pay.academyims.com) মাধ্যমে পরিশোধিত ফি-এর মানি রিসিট।'
                    : 'Official digital money receipt generated after paying admission fees via pay.academyims.com.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fees Payment Instructions */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-0.5 rounded-full">
              <CreditCard className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'অনলাইন পেমেন্ট গেটওয়ে' : 'Online Payment Gateway'}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'bn' ? 'ভর্তি ফি ও যাবতীয় চার্জ অনলাইনে পরিশোধ করুন' : 'Pay Admission Fees & Institutional Charges Online'}
            </h3>
            <p className="text-xs text-slate-700 max-w-2xl leading-relaxed">
              {lang === 'bn'
                ? 'বিকাশ, নগদ, রকেট অথবা যেকোনো ডেবিট/ক্রেডিট কার্ডের মাধ্যমে ঘরে বসেই কলেজের অফিশিয়াল পেমেন্ট পোর্টাল থেকে ফি পরিশোধ করে তাৎক্ষণিক মানি রিসিট সংগ্রহ করুন।'
                : 'Conveniently pay admission fees, session dues, and college levies using bKash, Nagad, Rocket, or any debit/credit card. Receive instant digital confirmation and receipts.'}
            </p>
          </div>

          <a
            href={COLLEGE_INFO.portals.feesPayment}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
          >
            <span>{lang === 'bn' ? 'পেমেন্ট পোর্টালে যান' : 'Go to Payment Gateway'}</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
