import React, { useState, useEffect } from 'react';
import { Bell, ChevronLeft, ChevronRight, Pause, Play, ExternalLink } from 'lucide-react';
import { NoticeItem, Language } from '../types';
import { toBnDigits, getNoticeTitle } from '../utils/noticeTranslator';

interface NoticeTickerProps {
  notices: NoticeItem[];
  lang: Language;
  onSelectNotice: (notice: NoticeItem) => void;
  onViewAllNotices: () => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({
  notices,
  lang,
  onSelectNotice,
  onViewAllNotices
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Take the most recent 12 notices
  const displayNotices = notices && notices.length > 0 ? notices.slice(0, 12) : [];
  const totalNotices = displayNotices.length;

  // Auto-rotation timer: rotate one by one every 3.8 seconds
  useEffect(() => {
    if (totalNotices <= 1 || isPaused || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalNotices);
    }, 3800);

    return () => clearInterval(timer);
  }, [totalNotices, isPaused, isHovered]);

  const handleNext = () => {
    if (totalNotices === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalNotices);
  };

  const handlePrev = () => {
    if (totalNotices === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalNotices) % totalNotices);
  };

  const currentNotice = displayNotices[currentIndex];

  if (!currentNotice) {
    return null;
  }

  const isRecentNotice = currentIndex < 3;
  const currentTitle = getNoticeTitle(currentNotice, lang);

  return (
    <div
      className="bg-[#05436d] text-white border-b border-[#085a92] shadow-sm relative z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center h-10 gap-2 sm:gap-3">
        {/* 1. Label Badge: "বিজ্ঞপ্তি" / "NOTICES" */}
        <div className="flex items-center gap-1.5 bg-[#02213a] text-cyan-300 font-bold px-2.5 sm:px-3 py-1 rounded text-[11px] sm:text-xs shrink-0 tracking-wider uppercase shadow-xs border border-cyan-500/30">
          <Bell className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          <span>{lang === 'bn' ? 'বিজ্ঞপ্তি' : 'Notices'}</span>
        </div>

        {/* 2. Single Rotating Notice (One by one - ektar por ekta) */}
        <div className="flex-1 overflow-hidden h-8 relative flex items-center">
          <div
            key={currentNotice.id}
            className="w-full flex items-center gap-2 animate-slide-up-fade"
          >
            {/* Date Tag */}
            <span className="hidden sm:inline-flex items-center text-[11px] font-bold text-sky-100 bg-[#073252] border border-sky-400/30 px-2 py-0.5 rounded shrink-0">
              {lang === 'bn' ? toBnDigits(currentNotice.date) : currentNotice.date}
            </span>

            {/* NEW / নতুন Indicator */}
            {isRecentNotice && (
              <span className="inline-flex items-center gap-1 bg-red-600 text-white font-extrabold text-[10px] px-1.5 py-0.2 rounded uppercase tracking-wide shrink-0 animate-pulse shadow-xs">
                {lang === 'bn' ? 'নতুন' : 'NEW'}
              </span>
            )}

            {/* Notice Title Button */}
            <button
              onClick={() => onSelectNotice(currentNotice)}
              className="text-left font-medium text-white hover:text-cyan-200 transition-colors cursor-pointer text-xs sm:text-[13px] truncate max-w-full flex-1 group"
              title={currentTitle}
            >
              <span className="group-hover:underline">{currentTitle}</span>
            </button>
          </div>
        </div>

        {/* 3. Controls & Quick Actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 pl-1.5 border-l border-white/20">
          {/* Index indicator */}
          <span className="hidden md:inline-block text-[11px] font-semibold text-cyan-200 bg-[#02213a] border border-cyan-500/20 px-1.5 py-0.5 rounded">
            {lang === 'bn'
              ? `${toBnDigits(currentIndex + 1)} / ${toBnDigits(totalNotices)}`
              : `${currentIndex + 1} / ${totalNotices}`}
          </span>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="p-1 rounded hover:bg-white/10 text-white transition-colors cursor-pointer"
            title={lang === 'bn' ? 'পূর্ববর্তী নোটিশ' : 'Previous notice'}
            aria-label="Previous notice"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-1 rounded hover:bg-white/10 text-white transition-colors cursor-pointer"
            title={lang === 'bn' ? 'পরবর্তী নোটিশ' : 'Next notice'}
            aria-label="Next notice"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded hover:bg-white/10 text-white transition-colors cursor-pointer"
            title={isPaused ? (lang === 'bn' ? 'চালু করুন' : 'Resume') : (lang === 'bn' ? 'থামান' : 'Pause')}
            aria-label={isPaused ? 'Resume scroll' : 'Pause scroll'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          {/* All Notices Button */}
          <button
            onClick={onViewAllNotices}
            className="inline-flex items-center gap-0.5 text-xs font-bold text-white hover:text-cyan-200 px-2.5 py-1 rounded bg-[#02213a] hover:bg-[#032d4e] border border-cyan-500/30 transition-colors ml-0.5 cursor-pointer shadow-xs"
            title={lang === 'bn' ? 'সকল সংরক্ষিত নোটিশ দেখুন' : 'View all notices'}
          >
            <span className="hidden sm:inline">{lang === 'bn' ? 'সকল নোটিশ' : 'All Notices'}</span>
            <ExternalLink className="w-3 h-3 sm:hidden" />
            <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </div>
    </div>
  );
};
