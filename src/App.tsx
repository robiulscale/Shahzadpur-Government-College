import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NoticeTicker } from './components/NoticeTicker';
import { HeroSlider } from './components/HeroSlider';
import { NoticeBoardSection } from './components/NoticeBoardSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ServicesGrid } from './components/ServicesGrid';
import { NoticeDetailModal } from './components/NoticeDetailModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Views
import { NoticeArchiveView } from './components/Views/NoticeArchiveView';
import { FacultyView } from './components/Views/FacultyView';
import { StaffView } from './components/Views/StaffView';
import { AboutView } from './components/Views/AboutView';
import { AcademicView } from './components/Views/AcademicView';
import { AdmissionView } from './components/Views/AdmissionView';
import { ResultsView } from './components/Views/ResultsView';
import { DownloadsView } from './components/Views/DownloadsView';
import { GalleryView } from './components/Views/GalleryView';
import { ContactView } from './components/Views/ContactView';
import { StudentsView } from './components/Views/StudentsView';
import { AdminView } from './components/Views/AdminView';

// Data
import { NOTICES_ARCHIVE } from './data/notices';
import { FACULTY_MEMBERS } from './data/faculty';
import { ACADEMIC_PROGRAMS } from './data/academicPrograms';
import { COLLEGE_DOCUMENTS } from './data/documents';
import { COLLEGE_INFO } from './data/collegeInfo';
import { NoticeItem, FacultyMember, Language } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [lang, setLang] = useState<Language>('bn');
  const [notices, setNotices] = useState<NoticeItem[]>(NOTICES_ARCHIVE);
  const [faculty, setFaculty] = useState<FacultyMember[]>(FACULTY_MEMBERS);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Check URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const noticeId = params.get('notice');
    const viewParam = params.get('view');

    if (noticeId) {
      const match = notices.find((n) => n.id === Number(noticeId));
      if (match) setSelectedNotice(match);
    }

    if (viewParam) {
      setCurrentView(viewParam);
    }
  }, [notices]);

  // Global keyboard listener for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSelectedNotice(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Admin mutation handlers
  const handleAddNotice = (item: NoticeItem) => {
    setNotices((prev) => [item, ...prev]);
  };

  const handleUpdateNotice = (item: NoticeItem) => {
    setNotices((prev) => prev.map((n) => (n.id === item.id ? item : n)));
  };

  const handleDeleteNotice = (id: number) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
  };

  const handleAddFaculty = (item: FacultyMember) => {
    setFaculty((prev) => [...prev, item]);
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. Header Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={() => setLang(lang === 'bn' ? 'en' : 'bn')}
      />

      {/* 2. Announcement Ticker */}
      <NoticeTicker
        notices={notices}
        lang={lang}
        onSelectNotice={(notice) => setSelectedNotice(notice)}
        onViewAllNotices={() => handleNavigate('notices')}
      />

      {/* 3. Main Page Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Grand Hero Slider */}
            <HeroSlider lang={lang} onNavigate={handleNavigate} />

            {/* Split Section: Notice Board & College Intro */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left 2 Cols: Interactive Notice Board */}
                  <div className="lg:col-span-2">
                    <NoticeBoardSection
                      notices={notices}
                      lang={lang}
                      onSelectNotice={(n) => setSelectedNotice(n)}
                      onViewAllNotices={() => handleNavigate('notices')}
                    />
                  </div>

                  {/* Right Col: About Shahzadpur Govt College Summary */}
                  <div className="space-y-6">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#0a86b7]"></span>
                        <span>{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About College'}</span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                        {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজ' : 'Shahzadpur Govt. College'}
                      </h3>

                      <p className="text-xs text-slate-700 leading-relaxed">
                        {lang === 'bn'
                          ? `${COLLEGE_INFO.historyBn.slice(0, 310)}...`
                          : `${COLLEGE_INFO.historyEn.slice(0, 340)}...`}
                      </p>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-500">
                          {lang === 'bn' ? 'স্থাপিত: ১৯৬৪' : 'Established: 1964'}
                        </span>
                        <button
                          onClick={() => handleNavigate('about')}
                          className="font-bold text-blue-900 hover:text-blue-950 hover:underline cursor-pointer"
                        >
                          {lang === 'bn' ? 'সম্পূর্ণ ইতিহাস পড়ুন →' : 'Read Full History →'}
                        </button>
                      </div>
                    </div>

                    {/* EIIN & Code Card */}
                    <div className="bg-gradient-to-br from-blue-900 to-slate-950 text-white p-5 rounded-2xl shadow-sm space-y-3">
                      <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
                        {lang === 'bn' ? 'সরকারি নিবন্ধন ও পরিচিতি' : 'Official Registration & Codes'}
                      </span>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-white/10 p-2 rounded-lg">
                          <div className="text-[10px] text-slate-300">EIIN</div>
                          <div className="font-mono font-bold text-sky-200">{COLLEGE_INFO.eiin}</div>
                        </div>
                        <div className="bg-white/10 p-2 rounded-lg">
                          <div className="text-[10px] text-slate-300">HSC Code</div>
                          <div className="font-mono font-bold text-cyan-300">{COLLEGE_INFO.hscCodeEn}</div>
                        </div>
                        <div className="bg-white/10 p-2 rounded-lg">
                          <div className="text-[10px] text-slate-300">NU Code</div>
                          <div className="font-mono font-bold text-emerald-300">{COLLEGE_INFO.nuCodeEn}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Academic Programs Section */}
            <ProgramsSection lang={lang} onNavigate={handleNavigate} />

            {/* Leadership Section */}
            <LeadershipSection lang={lang} />

            {/* Services Grid (Fees, Student Portal, Citizen Charter, Results) */}
            <ServicesGrid
              lang={lang}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentView === 'about' && <AboutView lang={lang} />}
        {currentView === 'leadership' && <LeadershipSection lang={lang} />}
        {currentView === 'faculty' && <FacultyView lang={lang} />}
        {currentView === 'staff' && <StaffView lang={lang} />}
        {currentView === 'academic' && <AcademicView lang={lang} onNavigate={handleNavigate} />}
        {currentView === 'admission' && <AdmissionView lang={lang} onNavigate={handleNavigate} />}
        {currentView === 'students' && <StudentsView lang={lang} />}
        {currentView === 'results' && <ResultsView lang={lang} />}
        {currentView === 'notices' && (
          <NoticeArchiveView
            notices={notices}
            lang={lang}
            onSelectNotice={(n) => setSelectedNotice(n)}
          />
        )}
        {currentView === 'downloads' && <DownloadsView lang={lang} />}
        {currentView === 'gallery' && <GalleryView lang={lang} />}
        {currentView === 'contact' && <ContactView lang={lang} />}
        {currentView === 'admin' && (
          <AdminView
            notices={notices}
            faculty={faculty}
            onAddNotice={handleAddNotice}
            onUpdateNotice={handleUpdateNotice}
            onDeleteNotice={handleDeleteNotice}
            onAddFaculty={handleAddFaculty}
            lang={lang}
          />
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
      />

      {/* 5. Modals */}
      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
        lang={lang}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        notices={notices}
        faculty={faculty}
        programs={ACADEMIC_PROGRAMS}
        documents={COLLEGE_DOCUMENTS}
        lang={lang}
        onSelectNotice={(notice) => setSelectedNotice(notice)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
