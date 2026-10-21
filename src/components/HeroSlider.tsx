import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Bell,
  CreditCard,
  Building,
  Award,
  Users,
  Compass
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeInfo';
import { Language } from '../types';

interface HeroSliderProps {
  lang: Language;
  onNavigate: (view: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ lang, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // The 5 marked campus pictures requested by user
  const slides = [
    {
      image: 'https://web.academyims.com/storage/2404022/images/gallery/D5aKPpokS4/D5aKPpokS4_01707411459.jpg',
      titleBn: 'প্রশাসনিক ভবন ও সুবিশাল সবুজ প্রাঙ্গণ',
      titleEn: 'Administrative Building & Scenic Campus Panorama',
      subtitleBn: 'ঐতিহ্যবাহী উত্তরবঙ্গের শ্রেষ্ঠ বিদ্যাপীঠ • প্রতিষ্ঠিত ১৯৬৪ • জাতীয়করণ ১৯৮৪',
      subtitleEn: 'Premier Government Institution in Sirajganj • Estd: 1964 • Nationalized: 1984',
      badgeBn: 'প্রাকৃতিক শোভা ও সুপরিকল্পিত ক্যাম্পাস',
      badgeEn: 'Scenic Architecture & Panoramic Heritage'
    },
    {
      image: '/assets/aistudio/514331839_695018453372605_6422523081287702323_n_eac2cb52.jpg',
      titleBn: 'শাহজাদপুর সরকারি কলেজ',
      titleEn: 'Shahzadpur Government College',
      subtitleBn: 'সুবিশাল খেলার মাঠ ও আধুনিক বহুতল একাডেমিক ভবন সমন্বিত শ্রেষ্ঠ বিদ্যাপীঠ',
      subtitleEn: 'State-of-the-art Multi-storied Academic Buildings and Expansive Sports Ground',
      badgeBn: 'জ্ঞান • চরিত্র • দেশপ্রেম',
      badgeEn: 'Knowledge • Character • Patriotism'
    },
    {
      image: '/assets/aistudio/474818997_1771897683595644_1863748229363705008_n_f1614f64.jpg',
      titleBn: 'ড. মযহারুল ইসলাম বিজ্ঞান ভবন ও রক্তিম কৃষ্ণচূড়া',
      titleEn: 'Dr. Mazharul Islam Science Complex & Blossoming Campus',
      subtitleBn: 'উচ্চ মাধ্যমিক, ডিগ্রি পাস এবং জাতীয় বিশ্ববিদ্যালয়ের অধীনে ১৪টি বিষয়ে অনার্স কোর্স',
      subtitleEn: 'HSC, Degree Pass, and 14 Honours Programs under National University',
      badgeBn: 'আধুনিক বিজ্ঞানাগার ও গবেষণা সুবিধা',
      badgeEn: 'Modern Science Laboratories & Enriched Seminars'
    },
    {
      image: '/assets/aistudio/511177536_695018530039264_3532079326747474039_n_aaa53c07.jpg',
      titleBn: 'সবুজ চত্বর ও কৃষ্ণচূড়া বৃক্ষের মনোরম ছায়া',
      titleEn: 'Lush Greenery, Shaded Lawns & Peaceful Study Corners',
      subtitleBn: 'প্রকৃতির স্নিগ্ধ পরশে সুশৃঙ্খল পাঠদান ও নৈতিক মূল্যবোধ চর্চা',
      subtitleEn: 'Fostering Academic Excellence Amidst Serene Natural Landscapes',
      badgeBn: 'সুশৃঙ্খল ও নান্দনিক শিক্ষাঙ্গন',
      badgeEn: 'Serene Academic Environment'
    },
    {
      image: 'https://web.academyims.com/storage/2404022/images/gallery/9NId5O6VeM/9NId5O6VeM_01740032440.jpg',
      titleBn: 'ক্যাম্পাস বাগান চত্বরে শিক্ষক ও অধ্যক্ষ মহোদয়',
      titleEn: 'Dedicated Leadership & Esteemed Faculty',
      subtitleBn: 'অভিজ্ঞ বিসিএস ক্যাডার শিক্ষকমণ্ডলী ও যুগোপযোগী শিক্ষাদান পদ্ধতি',
      subtitleEn: 'Visionary Mentorship, Campus Beautification & Student Welfare',
      badgeBn: 'মেধাবী ও সুনাগরিক গড়ার অঙ্গীকার',
      badgeEn: 'Shaping the Future Leaders of Bangladesh'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const stats = [
    {
      icon: <Building className="w-5 h-5 text-sky-400" />,
      valueBn: '১৯৬৪',
      valueEn: '1964',
      labelBn: 'প্রতিষ্ঠিত (৬০+ বছর)',
      labelEn: 'Established Year'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      valueBn: '১৪টি',
      valueEn: '14',
      labelBn: 'অনার্স বিষয়সমূহ',
      labelEn: 'Honours Programs'
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      valueBn: '৩১+',
      valueEn: '31+',
      labelBn: 'অভিজ্ঞ সরকারি শিক্ষক',
      labelEn: 'Gazetted Faculty'
    },
    {
      icon: <Award className="w-5 h-5 text-indigo-400" />,
      valueBn: '১০০%',
      valueEn: '100%',
      labelBn: 'মেধাভিত্তিক সুযোগ',
      labelEn: 'Merit-Based System'
    }
  ];

  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      {/* 1. Main Slider Hero Frame */}
      <div className="relative h-[320px] sm:h-[390px] md:h-[450px] lg:h-[490px] w-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <img
              src={slide.image}
              alt={slide.titleBn}
              className="w-full h-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40" />

            {/* Slide Content */}
            {idx === currentSlide && (
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xl sm:max-w-2xl space-y-2 sm:space-y-3">
                    {/* Badge: NSU Deep Ocean Blue with Cyan text */}
                    <div className="inline-flex items-center gap-1.5 bg-[#074770]/90 backdrop-blur-xs text-sky-100 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-sky-400/30">
                      <Compass className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{lang === 'bn' ? slide.badgeBn : slide.badgeEn}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight drop-shadow-md">
                      {lang === 'bn' ? slide.titleBn : slide.titleEn}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-medium leading-relaxed drop-shadow max-w-xl">
                      {lang === 'bn' ? slide.subtitleBn : slide.subtitleEn}
                    </p>

                    {/* Action Buttons */}
                    <div className="pt-1.5 flex flex-wrap gap-2 sm:gap-2.5">
                      <button
                        onClick={() => onNavigate('admission')}
                        className="bg-[#0b2545] hover:bg-[#071a32] text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-lg shadow-md transition-all hover:shadow-lg flex items-center gap-1.5 cursor-pointer border border-sky-500/20"
                      >
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                        <span>{lang === 'bn' ? 'ভর্তি তথ্য ২০২৬' : 'Admissions 2026'}</span>
                      </button>
                      <button
                        onClick={() => onNavigate('notices')}
                        className="bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs sm:text-sm px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                        <span>{lang === 'bn' ? 'নোটিশ বোর্ড' : 'Notice Archive'}</span>
                      </button>
                      <a
                        href={COLLEGE_INFO.portals.feesPayment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex bg-[#0a86b7] hover:bg-[#0284c7] text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm transition-all items-center gap-1.5 border border-white/20"
                      >
                        <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        <span>{lang === 'bn' ? 'অনলাইন ফি' : 'Pay Online'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slider Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-[#0ea5e9]' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Key College Facts & Metrics Banner (Under Hero) */}
      <div className="bg-slate-950 border-t border-b border-slate-800 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((s, idx) => (
              <div key={idx} className={`flex items-center gap-3 px-3 ${idx > 0 ? 'pt-3 md:pt-0' : ''}`}>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-white leading-none">
                    {lang === 'bn' ? s.valueBn : s.valueEn}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {lang === 'bn' ? s.labelBn : s.labelEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
