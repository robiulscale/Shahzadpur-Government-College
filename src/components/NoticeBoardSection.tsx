import React, { useState } from 'react';
import {
  Bell,
  Download,
  Search,
  ChevronRight
} from 'lucide-react';
import { NoticeItem, Language } from '../types';
import { getNoticeTitle } from '../utils/noticeTranslator';

interface NoticeBoardSectionProps {
  notices: NoticeItem[];
  lang: Language;
  onSelectNotice: (notice: NoticeItem) => void;
  onViewAllNotices: () => void;
}

export const NoticeBoardSection: React.FC<NoticeBoardSectionProps> = ({
  notices,
  lang,
  onSelectNotice,
  onViewAllNotices
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'exam' | 'admission' | 'academic' | 'administrative'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = notices.filter((n) => {
    const matchesTab = activeTab === 'all' || n.category === activeTab;
    const titleToSearch = getNoticeTitle(n, lang);
    const matchesQuery =
      !searchQuery.trim() ||
      titleToSearch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  const displayList = filteredNotices.slice(0, 8);

  const tabs = [
    { id: 'all', labelBn: 'সকল নোটিশ', labelEn: 'All Notices' },
    { id: 'exam', labelBn: 'পরীক্ষা', labelEn: 'Examinations' },
    { id: 'admission', labelBn: 'ভর্তি', labelEn: 'Admissions' },
    { id: 'academic', labelBn: 'একাডেমিক', labelEn: 'Academic' },
    { id: 'administrative', labelBn: 'প্রশাসনিক', labelEn: 'Administrative' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-[#0b2545] text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#0a86b7]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#0a86b7] text-white font-bold shadow-xs">
            <Bell className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {lang === 'bn' ? 'অফিসিয়াল নোটিশ বোর্ড' : 'Official Notice Board'}
            </h3>
            <p className="text-xs text-sky-200/80">
              {lang === 'bn' ? 'সর্বশেষ বিজ্ঞপ্তি, সময়সূচি ও সার্কুলার' : 'Latest Circulars, Schedules & Updates'}
            </p>
          </div>
        </div>

        {/* View All Button */}
        <button
          onClick={onViewAllNotices}
          className="inline-flex items-center gap-1 bg-[#0a86b7] hover:bg-[#0284c7] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs border border-white/20"
        >
          <span>{lang === 'bn' ? 'নোটিশ আর্কাইভ (৮৯৯টি)' : 'Full Archive (899)'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {lang === 'bn' ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'bn' ? 'নোটিশ খুঁজুন...' : 'Search notices...'}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-800"
          />
        </div>
      </div>

      {/* Notices List */}
      <div className="divide-y divide-slate-100">
        {displayList.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            {lang === 'bn' ? 'কোন নোটিশ পাওয়া যায়নি।' : 'No notices found.'}
          </div>
        ) : (
          displayList.map((notice, idx) => {
            const title = getNoticeTitle(notice, lang);
            return (
              <div
                key={notice.id}
                className="p-3 sm:p-4 hover:bg-slate-50/80 transition-colors flex items-center justify-between gap-3 group"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {/* Date Badge */}
                  <div className="shrink-0 bg-slate-100 group-hover:bg-blue-50 border border-slate-200 text-center px-2 py-1.5 rounded-lg min-w-[56px] transition-colors">
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">
                      {new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="block text-base font-extrabold text-blue-900 leading-none">
                      {new Date(notice.date).getDate()}
                    </span>
                    <span className="block text-[9px] text-slate-400">
                      {new Date(notice.date).getFullYear()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {lang === 'bn' ? notice.categoryLabelBn : notice.categoryLabelEn}
                      </span>
                      {idx < 2 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-red-700 border border-red-200">
                          {lang === 'bn' ? 'নতুন' : 'NEW'}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectNotice(notice)}
                      className="text-left font-semibold text-slate-900 group-hover:text-blue-900 text-xs sm:text-sm line-clamp-2 leading-snug cursor-pointer hover:underline"
                    >
                      {title}
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="shrink-0 flex items-center gap-1.5">
                  {notice.fileUrl && (
                    <a
                      href={notice.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 transition-colors border border-slate-200"
                      title={lang === 'bn' ? 'পিডিএফ ডাউনলোড করুন' : 'Download PDF'}
                      aria-label="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => onSelectNotice(notice)}
                    className="px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-900 hover:bg-blue-100 font-semibold text-xs transition-colors hidden sm:inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'বিস্তারিত' : 'Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer link to full archive */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
        <button
          onClick={onViewAllNotices}
          className="text-xs font-bold text-blue-900 hover:text-blue-950 inline-flex items-center gap-1 cursor-pointer"
        >
          <span>{lang === 'bn' ? 'সকল ৮৯৯টি আর্কাইভ নোটিশ ও সার্চ দেখুন →' : 'View All 899 Archived Notices & Filter →'}</span>
        </button>
      </div>
    </div>
  );
};
