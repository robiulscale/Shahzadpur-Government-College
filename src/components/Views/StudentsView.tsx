import React from 'react';
import {
  CreditCard,
  UserCheck,
  Shield,
  Home,
  CheckCircle2,
  ExternalLink,
  Award,
  HeartHandshake
} from 'lucide-react';
import { COLLEGE_INFO } from '../../data/collegeInfo';
import { Language } from '../../types';

interface StudentsViewProps {
  lang: Language;
}

export const StudentsView: React.FC<StudentsViewProps> = ({ lang }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'শিক্ষার্থী কর্নার' : 'Student Corner'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'সুযোগ-সুবিধা ও সেবা' : 'Facilities & Student Services'}
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lang === 'bn' ? 'শিক্ষার্থী সুযোগ-সুবিধা ও সহশিক্ষা কার্যক্রম' : 'Student Life & Services'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'bn'
                ? 'পোশাক বিধি, অনলাইন ফি পরিশোধ, ছাত্র ও ছাত্রী হোস্টেল সুবিধা এবং রোভার স্কাউট, রেড ক্রিসেন্ট ও বিএনসিসি দল।'
                : 'Uniform dress code, fee management, residential hostels, and co-curricular organizations.'}
            </p>
          </div>
        </div>

        {/* 1. Student Uniform Card */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <div className="p-2 bg-blue-50 text-blue-900 rounded-lg">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {lang === 'bn'
                  ? 'শিক্ষার্থীদের নির্ধারিত ইউনিফর্ম নির্দেশিকা (Student Uniform)'
                  : 'Mandatory Student Uniform & Dress Code'}
              </h2>
              <span className="text-xs text-slate-500">
                {lang === 'bn'
                  ? 'সকল নিয়মিত ছাত্র-ছাত্রীদের জন্য ক্যাম্পাসে নির্ধারিত পোশাক পরিধান বাধ্যতামূলক'
                  : 'Prescribed dress code and college identification badge are mandatory on campus for all regular students'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
              <span className="font-bold text-blue-950 text-sm block">
                {lang === 'bn' ? 'ছাত্রদের নির্ধারিত পোশাক:' : "Boys' Prescribed Uniform:"}
              </span>
              <p className="text-slate-800 text-sm font-semibold">
                {lang === 'bn' ? COLLEGE_INFO.uniformRules.maleBn : COLLEGE_INFO.uniformRules.maleEn}
              </p>
              <p className="text-slate-600 text-xs mt-1">
                {lang === 'bn'
                  ? '(সাদা শার্ট, কালো প্যান্ট ও সাদা কেডস পরিধান করে পরিচয়পত্র সঙ্গে রাখতে হবে)'
                  : '(White shirt, black formal trousers, white sneakers with valid college ID card)'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200 space-y-2">
              <span className="font-bold text-sky-950 text-sm block">
                {lang === 'bn' ? 'ছাত্রীদের নির্ধারিত পোশাক:' : "Girls' Prescribed Uniform:"}
              </span>
              <p className="text-slate-800 text-sm font-semibold">
                {lang === 'bn' ? COLLEGE_INFO.uniformRules.femaleBn : COLLEGE_INFO.uniformRules.femaleEn}
              </p>
              <p className="text-slate-600 text-xs mt-1">
                {lang === 'bn'
                  ? '(আকাশী রঙের কামিজ, সাদা রঙের ওড়না, পায়জামা ও সাদা কেডস পরিধান আবশ্যক)'
                  : '(Sky blue kameez, white orna/scarf, white salwar, and white sneakers with valid college ID card)'}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Fees & Payment Portal */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-50 text-amber-700 rounded-lg">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {lang === 'bn'
                    ? 'শিক্ষার্থীদের বেতন ও অনলাইন ফি প্রদান (Fees Payment)'
                    : 'Tuition & Online Fees Payment Portal'}
                </h2>
                <span className="text-xs text-slate-500">
                  {lang === 'bn' ? 'Academy IMS অনলাইন পেমেন্ট সিস্টেম' : 'Academy IMS Online Gateway'}
                </span>
              </div>
            </div>

            <a
              href={COLLEGE_INFO.portals.feesPayment}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span>{lang === 'bn' ? 'ফি পরিশোধ করতে ক্লিক করুন' : 'Click to Pay Fees Online'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {lang === 'bn'
              ? 'শাহজাদপুর সরকারি কলেজের মাসিক বেতন, অর্ধবার্ষিক/বার্ষিক পরীক্ষার ফি, রেজিস্ট্রেশন ও সেশন ফি অনলাইনে বিকাশ, নগদ, রকেট অথবা যেকোনো ব্যাংক কার্ডের মাধ্যমে প্রদান করা যায়। ফি পরিশোধের সাথে সাথে স্বয়ংক্রিয়ভাবে ডিজিটাল মানি রিসিট প্রস্তুত হয়।'
              : 'Pay monthly college tuition, half-yearly/annual exam fees, registration and session charges through bKash, Nagad, Rocket, or any debit/credit card. Digital money receipts are generated instantly upon confirmation.'}
          </p>
        </div>

        {/* 3. Hostel & Accommodation */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <div className="p-2 bg-purple-50 text-purple-700 rounded-lg">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? COLLEGE_INFO.hostelInfo.titleBn : COLLEGE_INFO.hostelInfo.titleEn}
              </h2>
              <span className="text-xs text-slate-500">
                {lang === 'bn' ? 'নিরাপদ আবাসন ও পরিচ্ছন্ন পরিবেশ' : 'Safe Residential Hostels & Conducive Living'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                {lang === 'bn' ? `১. ${COLLEGE_INFO.hostelInfo.sherEBanglaBn}` : `1. ${COLLEGE_INFO.hostelInfo.sherEBanglaEn}`}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'পুরুষ শিক্ষার্থীদের জন্য কলেজ প্রাঙ্গণে অবস্থিত সুপরিসর ছাত্রাবাস। সুপেয় পানি, নিরবচ্ছিন্ন বিদ্যুৎ, রিডিং রুম ও খেলাধুলার উন্মুক্ত মাঠ সুবিধা রয়েছে।'
                  : 'Spacious on-campus residential dormitory for male students. Features clean drinking water, uninterrupted electricity, quiet reading room, dining facilities, and playground access.'}
              </p>
              <div className="text-amber-800 font-semibold text-[11px]">
                {lang === 'bn'
                  ? '• নোটিশ বিজ্ঞপ্তি মোতাবেক প্রতি সেশনে সিট আবেদন গ্রহণ করা হয়।'
                  : '• Seat applications are invited each session according to official hostel circulars.'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                {lang === 'bn' ? `২. ${COLLEGE_INFO.hostelInfo.girlsHostelBn}` : `2. ${COLLEGE_INFO.hostelInfo.girlsHostelEn}`}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'দূর-দূরান্ত থেকে আগত নারী শিক্ষার্থীদের জন্য সীমানা প্রাচীর ও ২৪ ঘণ্টা সিসিটিভি এবং নিরাপত্তা প্রহরী বেষ্টিত সুসজ্জিত ছাত্রীনিবাস।'
                  : 'Secure, fully-equipped residential hall for female students with boundary perimeter, 24/7 CCTV surveillance, and dedicated female wardens.'}
              </p>
              <div className="text-emerald-800 font-semibold text-[11px]">
                {lang === 'bn'
                  ? '• মেধা ও দূরত্বের ভিত্তিতে ছাত্রীনিবাসে আসন বরাদ্দ প্রদান করা হয়।'
                  : '• Seats are allocated transparently based on academic merit and geographic distance.'}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Co-curricular Activities */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-900" />
            <span>{lang === 'bn' ? 'সহ-পাঠক্রমিক ও সামাজিক সংগঠনসমূহ' : 'Co-curricular & Social Organizations'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 space-y-2">
              <span className="font-bold text-red-900 text-sm block">
                {lang === 'bn' ? 'রেড ক্রিসেন্ট যুব দল' : 'Youth Red Crescent Unit'}
              </span>
              <p className="text-slate-700 leading-relaxed">
                {lang === 'bn'
                  ? 'প্রাথমিক চিকিৎসা, রক্তদান কর্মসূচি, জাতীয় দুর্যোগে ত্রাণ বিতরণ ও মানবকল্যাণে শাহজাদপুর সরকারি কলেজ রেড ক্রিসেন্ট ইউনিট সক্রিয় ভূমিকা পালন করে।'
                  : 'Active volunteer corps providing first aid training, blood donation camps, humanitarian relief during national emergencies, and campus health drives.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
              <span className="font-bold text-emerald-900 text-sm block">
                {lang === 'bn' ? 'বাংলাদেশ রোভার স্কাউট দল' : 'Bangladesh Rover Scout Troop'}
              </span>
              <p className="text-slate-700 leading-relaxed">
                {lang === 'bn'
                  ? 'শৃঙ্খলা, নেতৃত্ব ও আত্মউন্নয়নের দীক্ষায় রোভার স্কাউট দল ক্যাম্পাসে শৃঙ্খলা রক্ষা এবং জাতীয় স্কাউট জাম্বুরিতে নিয়মিত অংশগ্রহণ করে।'
                  : 'Dedicated to discipline, leadership, and community service. Active in maintaining campus order and representing the college at national scout jamborees.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
              <span className="font-bold text-blue-950 text-sm block">
                {lang === 'bn' ? 'বিএনসিসি (BNCC) কন্টিনজেন্ট' : 'BNCC Army Platoon'}
              </span>
              <p className="text-slate-700 leading-relaxed">
                {lang === 'bn'
                  ? 'বাংলাদেশ ন্যাশনাল ক্যাডেট কোর এর মাধ্যমে সামরিক প্রশিক্ষণ, শৃঙ্খলা এবং দেশপ্রেমের চেতনায় শিক্ষার্থীদের উদ্বুদ্ধ করা হয়।'
                  : 'Instills patriotic leadership, basic military training, disaster management preparedness, and national ceremonial honor guards through Bangladesh National Cadet Corps.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
