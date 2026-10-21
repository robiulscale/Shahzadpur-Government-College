import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Calendar,
  Download,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { NoticeItem, Language } from '../../types';
import { getNoticeTitle, toBnDigits } from '../../utils/noticeTranslator';

interface NoticeArchiveViewProps {
  notices: NoticeItem[];
  lang: Language;
  onSelectNotice: (notice: NoticeItem) => void;
}

export const NoticeArchiveView: React.FC<NoticeArchiveViewProps> = ({
  notices,
  lang,
  onSelectNotice
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const categories = [
    { id: 'all', labelBn: 'সকল ক্যাটাগরি', labelEn: 'All Categories' },
    { id: 'exam', labelBn: 'পরীক্ষা সংক্রান্ত', labelEn: 'Examinations' },
    { id: 'admission', labelBn: 'ভর্তি সংক্রান্ত', labelEn: 'Admissions' },
    { id: 'academic', labelBn: 'একাডেমিক', labelEn: 'Academic' },
    { id: 'administrative', labelBn: 'প্রশাসনিক', labelEn: 'Administrative' },
    { id: 'hostel', labelBn: 'ছাত্রাবাস ও আবাসন', labelEn: 'Hostel' }
  ];

  const filteredNotices = useMemo(() => {
    return notices.filter((n) => {
      const matchCat = selectedCategory === 'all' || n.category === selectedCategory;
      const matchYear = selectedYear === 'all' || n.date.startsWith(selectedYear);
      const titleEn = getNoticeTitle(n, 'en');
      const matchSearch =
        !searchQuery.trim() ||
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.date.includes(searchQuery);
      return matchCat && matchYear && matchSearch;
    });
  }, [notices, selectedCategory, selectedYear, searchQuery]);

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage) || 1;
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb & Title */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'হোম' : 'Home'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">
              {lang === 'bn' ? 'নোটিশ বোর্ড ও সংরক্ষণাগার' : 'Notice Board & Archive'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'bn' ? 'অফিসিয়াল নোটিশ আর্কাইভ' : 'Official Notice Archive'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {lang === 'bn'
                  ? 'শাহজাদপুর সরকারি কলেজের সকল ভর্তি, পরীক্ষা, ফলাফল ও প্রশাসনিক সার্কুলার (মোট ৮৯৯টি অফিশিয়াল নোটিশ সংরক্ষিত)'
                  : 'Complete historical archive of all verified notices, circulars, and official PDF documents (899 notices).'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-950 px-4 py-2 rounded-xl text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === 'bn'
                  ? `মোট নোটিশ: ${toBnDigits(filteredNotices.length)} টি`
                  : `Total Notices: ${filteredNotices.length}`}
              </span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative md:col-span-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={lang === 'bn' ? 'শিরোনাম বা তারিখ দিয়ে খুঁজুন...' : 'Search title or date...'}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 focus:bg-white"
              />
            </div>

            {/* Category Select */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {lang === 'bn' ? c.labelBn : c.labelEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Select */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
              >
                <option value="all">{lang === 'bn' ? 'সকল বছর (২০২৪ - ২০২৬)' : 'All Years (2024-2026)'}</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notices Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0b2545] text-slate-200 uppercase font-semibold text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 w-16 text-center">{lang === 'bn' ? 'নং' : 'SL'}</th>
                  <th className="py-3.5 px-4 w-28">{lang === 'bn' ? 'প্রকাশকাল' : 'Date'}</th>
                  <th className="py-3.5 px-4 w-32">{lang === 'bn' ? 'ক্যাটাগরি' : 'Category'}</th>
                  <th className="py-3.5 px-4">{lang === 'bn' ? 'বিজ্ঞপ্তির শিরোনাম' : 'Notice Title'}</th>
                  <th className="py-3.5 px-4 w-36 text-center">{lang === 'bn' ? 'সংযুক্তি ও একশন' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedNotices.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500">
                      {lang === 'bn' ? 'কোন নোটিশের রেকর্ড পাওয়া যায়নি।' : 'No notice records found.'}
                    </td>
                  </tr>
                ) : (
                  paginatedNotices.map((n, idx) => {
                    const title = getNoticeTitle(n, lang);
                    return (
                      <tr
                        key={n.id}
                        className="hover:bg-sky-50/50 transition-colors group"
                      >
                        {/* Number */}
                        <td className="py-3.5 px-4 text-center font-mono text-slate-400">
                          {lang === 'bn'
                            ? toBnDigits((currentPage - 1) * itemsPerPage + idx + 1)
                            : (currentPage - 1) * itemsPerPage + idx + 1}
                        </td>

                        {/* Date */}
                        <td className="py-3.5 px-4 font-mono font-medium text-slate-700 whitespace-nowrap">
                          <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[11px]">
                            {lang === 'bn' ? toBnDigits(n.date) : n.date}
                          </span>
                        </td>

                        {/* Category */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-900 transition-colors">
                            {lang === 'bn' ? n.categoryLabelBn : n.categoryLabelEn}
                          </span>
                        </td>

                        {/* Title */}
                        <td className="py-3.5 px-4 font-medium text-slate-900">
                          <button
                            onClick={() => onSelectNotice(n)}
                            className="text-left group-hover:text-blue-900 hover:underline line-clamp-2 leading-relaxed cursor-pointer font-semibold"
                          >
                            {title}
                          </button>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            {n.fileUrl && (
                              <a
                                href={n.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-colors"
                                title={lang === 'bn' ? 'পিডিএফ ডাউনলোড করুন' : 'Download PDF'}
                                aria-label="Download PDF"
                              >
                                <Download className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <button
                              onClick={() => onSelectNotice(n)}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-blue-900 hover:text-white rounded-lg font-semibold text-[11px] text-slate-700 transition-colors cursor-pointer"
                            >
                              {lang === 'bn' ? 'বিস্তারিত' : 'Details'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              {lang === 'bn'
                ? `পৃষ্ঠা ${toBnDigits(currentPage)} / ${toBnDigits(totalPages)} (মোট ${toBnDigits(filteredNotices.length)} টি নোটিশ)`
                : `Page ${currentPage} of ${totalPages} (Total ${filteredNotices.length} notices)`}
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="px-3 py-1 bg-blue-900 text-white font-bold rounded-lg font-mono text-xs">
                {lang === 'bn' ? toBnDigits(currentPage) : currentPage}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
