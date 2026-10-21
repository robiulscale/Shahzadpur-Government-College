import React, { useState } from 'react';
import { Download, FileText, Search, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { COLLEGE_DOCUMENTS, CollegeDocument } from '../../data/documents';
import { Language } from '../../types';

interface DownloadsViewProps {
  lang: Language;
}

export const DownloadsView: React.FC<DownloadsViewProps> = ({ lang }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', labelBn: 'সকল ডাউনলোড', labelEn: 'All Downloads' },
    { id: 'institutional', labelBn: 'প্রাতিষ্ঠানিক ও চার্টার', labelEn: 'Institutional & Charter' },
    { id: 'staff', labelBn: 'শিক্ষক ও কর্মচারী তালিকা', labelEn: 'Faculty & Staff Roster' },
    { id: 'academic', labelBn: 'একাডেমিক ও রুটিন', labelEn: 'Academic & Schedules' },
    { id: 'results', labelBn: 'ফলাফল ও মূল্যায়ন', labelEn: 'Results & Evaluations' }
  ];

  const filteredDocs = COLLEGE_DOCUMENTS.filter((d) => {
    const matchCat = selectedCat === 'all' || d.category === selectedCat;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      d.titleBn.toLowerCase().includes(q) ||
      d.titleEn.toLowerCase().includes(q) ||
      d.descriptionBn.toLowerCase().includes(q) ||
      (d.descriptionEn && d.descriptionEn.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'ডাউনলোড' : 'Downloads'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'অফিসিয়াল ফর্ম ও নথিপত্র' : 'Official Forms & Documents'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'অফিসিয়াল ফর্ম ও ডাউনলোড হাব' : 'Forms & Documents Library'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'bn'
                  ? 'শাহজাদপুর সরকারি কলেজের সকল প্রাতিষ্ঠানিক সনদ, শিক্ষক তালিকা, সিটিজেন চার্টার ও পরীক্ষার ফলাফল কপি।'
                  : 'Official downloadable forms, prospectuses, citizen charter, and institutional gazettes.'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-4 py-2 rounded-xl text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'bn' ? 'প্রত্যয়িত অফিশিয়াল পিডিএফ' : 'Certified Official PDF'}</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCat === c.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lang === 'bn' ? c.labelBn : c.labelEn}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bn' ? 'নথির নাম দিয়ে খুঁজুন...' : 'Search document title...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-200 uppercase font-semibold text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">#</th>
                  <th className="py-3.5 px-4">{lang === 'bn' ? 'নথির শিরোনাম ও বিবরণ' : 'Document Title & Description'}</th>
                  <th className="py-3.5 px-4 w-36">{lang === 'bn' ? 'ক্যাটাগরি' : 'Category'}</th>
                  <th className="py-3.5 px-4 w-28">{lang === 'bn' ? 'আপলোড তারিখ' : 'Upload Date'}</th>
                  <th className="py-3.5 px-4 w-28">{lang === 'bn' ? 'ফাইল সাইজ' : 'File Size'}</th>
                  <th className="py-3.5 px-4 w-40 text-center">{lang === 'bn' ? 'ডাউনলোড' : 'Download'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDocs.map((doc, idx) => (
                  <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono text-slate-400 font-bold">
                      {idx + 1}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">
                        {lang === 'bn' ? doc.titleBn : doc.titleEn}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {lang === 'bn' ? doc.descriptionBn : (doc.descriptionEn || doc.titleEn)}
                      </p>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="bg-blue-50 text-blue-900 px-2 py-0.5 rounded font-semibold text-[10px]">
                        {lang === 'bn' ? doc.categoryLabelBn : doc.categoryLabelEn}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 whitespace-nowrap">
                      {doc.date}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 whitespace-nowrap">
                      {doc.fileSize || 'PDF'}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1.5">
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs flex items-center gap-1 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>{lang === 'bn' ? 'ভিউ' : 'View'}</span>
                        </a>
                        <a
                          href={doc.fileUrl}
                          download
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-colors"
                        >
                          <Download className="w-3 h-3" />
                          <span>{lang === 'bn' ? 'ডাউনলোড' : 'Download'}</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
