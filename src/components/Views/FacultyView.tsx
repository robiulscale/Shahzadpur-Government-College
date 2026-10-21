import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Filter,
  Mail,
  Phone,
  GraduationCap,
  Download,
  ShieldCheck,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { FACULTY_MEMBERS, DEPARTMENTS_LIST } from '../../data/faculty';
import { Language } from '../../types';

interface FacultyViewProps {
  lang: Language;
}

const DEPARTMENTS_MAPPING: { [key: string]: string } = {
  'বাংলা': 'Bengali',
  'ইংরেজি': 'English',
  'অর্থনীতি': 'Economics',
  'রাষ্ট্রবিজ্ঞান': 'Political Science',
  'ইতিহাস': 'History',
  'ইসলামের ইতিহাস ও সংস্কৃতি': 'Islamic History & Culture',
  'দর্শন': 'Philosophy',
  'হিসাববিজ্ঞান': 'Accounting',
  'ব্যবস্থাপনা': 'Management',
  'পদার্থবিদ্যা': 'Physics',
  'রসায়ন': 'Chemistry',
  'গণিত': 'Mathematics',
  'উদ্ভিদবিদ্যা': 'Botany',
  'প্রাণিবিদ্যা': 'Zoology'
};

export const FacultyView: React.FC<FacultyViewProps> = ({ lang }) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeachers = useMemo(() => {
    return FACULTY_MEMBERS.filter((t) => {
      const matchDept = selectedDept === 'all' || t.department === selectedDept;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        (t.nameEn && t.nameEn.toLowerCase().includes(q)) ||
        t.department.toLowerCase().includes(q) ||
        (t.departmentEn && t.departmentEn.toLowerCase().includes(q)) ||
        t.designation.toLowerCase().includes(q) ||
        (t.designationEn && t.designationEn.toLowerCase().includes(q)) ||
        (t.email && t.email.toLowerCase().includes(q));
      return matchDept && matchSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'প্রশাসন' : 'Administration'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'শিক্ষক পরিচিতি ও ডিরেক্টরি' : 'Faculty Directory & Roster'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'সম্মানিত শিক্ষকমণ্ডলীর পরিচিতি' : 'Faculty Directory'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'bn'
                  ? 'শাহজাদপুর সরকারি কলেজের বিসিএস (সাধারণ শিক্ষা) ক্যাডারভুক্ত অভিজ্ঞ অধ্যাপক, সহযোগী অধ্যাপক, সহকারী অধ্যাপক ও প্রভাষকবৃন্দের তালিকা।'
                  : 'Official directory of Bangladesh Civil Service (BCS General Education) cadre professors, associate professors, assistant professors, and lecturers across 14 academic departments.'}
              </p>
            </div>

            {/* Official PDF Document Download */}
            <a
              href="https://web.academyims.com/storage/2404022/document/pdf_2404022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'bn' ? 'অফিসিয়াল শিক্ষক তালিকা PDF (০৫/১০/২০২৬)' : 'Official Faculty PDF (05/10/2026)'}</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'bn' ? 'শিক্ষকের নাম, পদবি বা বিষয় খুঁজুন...' : 'Search teacher name, designation or subject...'}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 focus:bg-white"
              />
            </div>

            <span className="text-xs text-slate-500 font-medium">
              {lang === 'bn'
                ? `প্রদর্শিত হচ্ছে: ${filteredTeachers.length} জন শিক্ষক`
                : `Showing: ${filteredTeachers.length} Faculty Members`}
            </span>
          </div>

          {/* Department Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 text-xs">
            <button
              onClick={() => setSelectedDept('all')}
              className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedDept === 'all'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {lang === 'bn' ? `সকল বিভাগ (${FACULTY_MEMBERS.length})` : `All Departments (${FACULTY_MEMBERS.length})`}
            </button>
            {DEPARTMENTS_LIST.map((dept) => {
              const label = lang === 'bn' ? dept : (DEPARTMENTS_MAPPING[dept] || dept);
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTeachers.map((t) => {
            const name = lang === 'bn' ? t.name : (t.nameEn || t.name);
            const designation = lang === 'bn' ? t.designation : (t.designationEn || t.designation);
            const department = lang === 'bn' ? t.department : (t.departmentEn || DEPARTMENTS_MAPPING[t.department] || t.department);

            return (
              <div
                key={t.serial}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge: Serial & BCS Code */}
                  <div className="flex items-center justify-between mb-3 text-[11px]">
                    <span className="font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      {lang === 'bn' ? `ক্রমিক নং: ${t.serial}` : `Serial: ${t.serial}`}
                    </span>
                    {t.id_code && (
                      <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                        {lang === 'bn' ? 'আইডি: ' : 'BCS ID: '}
                        <span className="font-semibold">{t.id_code}</span>
                      </span>
                    )}
                  </div>

                  {/* Name & Designation */}
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-900 transition-colors">
                    {name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                    {designation}
                  </p>

                  {/* Department */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <Building2 className="w-4 h-4 text-blue-900 shrink-0" />
                    <span className="font-medium">
                      {lang === 'bn' ? `বিভাগ: ${department}` : `Department: ${department}`}
                    </span>
                  </div>

                  {/* Cadre tag */}
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>
                      {lang === 'bn'
                        ? (t.notes || 'বিসিএস (সাধারণ শিক্ষা) ক্যাডার')
                        : 'BCS (General Education) Cadre'}
                    </span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {t.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <a
                        href={`mailto:${t.email}`}
                        className="hover:text-blue-900 font-mono text-[11px] truncate"
                      >
                        {t.email}
                      </a>
                    </div>
                  )}
                  {t.mobile_number && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-[12px] font-medium text-slate-700 font-mono">{t.mobile_number}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
