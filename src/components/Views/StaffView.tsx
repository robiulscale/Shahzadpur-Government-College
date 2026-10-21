import React, { useState, useMemo } from 'react';
import { Users, Search, Phone, Download, Building, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { STAFF_MEMBERS } from '../../data/staff';
import { Language } from '../../types';

interface StaffViewProps {
  lang: Language;
}

export const StaffView: React.FC<StaffViewProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', labelBn: 'সকল কর্মকর্তা ও কর্মচারী (৩৬ জন)', labelEn: 'All Staff Members (36)' },
    { id: 'Regular', labelBn: '৩য় ও ৪র্থ শ্রেণি জ্যেষ্ঠতা তালিকা (১২ জন)', labelEn: 'Regular Cadre (12)' },
    { id: 'Master Roll', labelBn: 'মাস্টাররোল কর্মচারী (২২ জন)', labelEn: 'Master Roll (22)' },
    { id: 'College Mosque', labelBn: 'কলেজ জামে মসজিদ (২ জন)', labelEn: 'College Mosque (2)' }
  ];

  const filteredStaff = useMemo(() => {
    return STAFF_MEMBERS.filter((s) => {
      const matchCat = selectedCategory === 'all' || s.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        (s.nameEn && s.nameEn.toLowerCase().includes(q)) ||
        s.designation.toLowerCase().includes(q) ||
        (s.designationEn && s.designationEn.toLowerCase().includes(q)) ||
        (s.department_or_role && s.department_or_role.toLowerCase().includes(q)) ||
        (s.department_or_roleEn && s.department_or_roleEn.toLowerCase().includes(q)) ||
        (s.mobile_number && s.mobile_number.includes(q));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'প্রশাসন' : 'Administration'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'কর্মচারীবৃন্দ' : 'Support Staff Roster'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'কর্মকর্তা ও কর্মচারীবৃন্দের তালিকা' : 'Staff Directory'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'bn'
                  ? 'শাহজাদপুর সরকারি কলেজের ৩য় ও ৪র্থ শ্রেণির কর্মচারীদের জ্যেষ্ঠতা তালিকা ও দায়িত্ব বণ্টন (০৮-১০-২০২৬ তারিখের অফিসিয়াল নথি অনুযায়ী)।'
                  : 'Official schedule of administrative, technical, laboratory, library, and support staff members (dated 08-10-2026).'}
              </p>
            </div>

            <a
              href="https://web.academyims.com/storage/2404022/document/PDF_2404022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'bn' ? 'অফিসিয়াল কর্মচারী তালিকা PDF' : 'Official Staff PDF'}</span>
            </a>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'bn' ? 'নাম, পদবি বা দায়িত্ব দিয়ে খুঁজুন...' : 'Search staff by name, role or designation...'}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
              />
            </div>

            <span className="text-xs text-slate-500 font-medium">
              {lang === 'bn'
                ? `প্রদর্শিত: ${filteredStaff.length} জন কর্মী`
                : `Showing: ${filteredStaff.length} Staff Members`}
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 text-xs">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lang === 'bn' ? c.labelBn : c.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Staff Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-200 uppercase font-semibold text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 w-16 text-center">{lang === 'bn' ? 'ক্রমিক' : 'SL'}</th>
                  <th className="py-3.5 px-4 w-48">{lang === 'bn' ? 'কর্মচারীর নাম' : 'Staff Name'}</th>
                  <th className="py-3.5 px-4 w-44">{lang === 'bn' ? 'পদবি' : 'Designation'}</th>
                  <th className="py-3.5 px-4">{lang === 'bn' ? 'দায়িত্ব / বিভাগ' : 'Department / Assigned Duties'}</th>
                  <th className="py-3.5 px-4 w-32">{lang === 'bn' ? 'ক্যাটাগরি' : 'Category'}</th>
                  <th className="py-3.5 px-4 w-36 text-center">{lang === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStaff.map((s) => {
                  const name = lang === 'bn' ? s.name : (s.nameEn || s.name);
                  const designation = lang === 'bn' ? s.designation : (s.designationEn || s.designation);
                  const role = lang === 'bn'
                    ? (s.department_or_role || 'মূল প্রশাসনিক দপ্তর')
                    : (s.department_or_roleEn || s.department_or_role || 'Central Administration');

                  return (
                    <tr key={s.serial} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 text-center text-slate-500 font-bold text-xs">
                        {s.serial}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        <div>{name}</div>
                        {s.id_code && (
                          <div className="text-[10px] text-slate-500">
                            {lang === 'bn' ? 'আইডি: ' : 'ID: '}
                            <span className="font-semibold font-mono">{s.id_code}</span>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-blue-900 font-semibold">
                        {designation}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {role}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            s.category === 'Regular'
                              ? 'bg-emerald-100 text-emerald-800'
                              : s.category === 'Master Roll'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {lang === 'bn'
                            ? (s.category === 'Regular' ? 'নিয়মিত' : s.category === 'Master Roll' ? 'মাস্টার রোল' : 'কলেজ মসজিদ')
                            : (s.category === 'Regular' ? 'Regular Cadre' : s.category === 'Master Roll' ? 'Master Roll' : 'College Mosque')}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center font-medium text-slate-800 text-xs font-mono">
                        {s.mobile_number ? (
                          <a
                            href={`tel:${s.mobile_number}`}
                            className="hover:text-blue-900 hover:underline flex items-center justify-center gap-1"
                          >
                            <Phone className="w-3 h-3 text-emerald-600" />
                            <span>{s.mobile_number}</span>
                          </a>
                        ) : (
                          '-'
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
