import React, { useState, useMemo } from 'react';
import { Search, X, FileText, User, BookOpen, Download, ChevronRight } from 'lucide-react';
import { NoticeItem, FacultyMember, AcademicProgram, Language } from '../types';
import { CollegeDocument } from '../data/documents';
import { getNoticeTitle } from '../utils/noticeTranslator';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  notices: NoticeItem[];
  faculty: FacultyMember[];
  programs: AcademicProgram[];
  documents: CollegeDocument[];
  lang: Language;
  onSelectNotice: (notice: NoticeItem) => void;
  onNavigate: (view: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  notices,
  faculty,
  programs,
  documents,
  lang,
  onSelectNotice,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { notices: [], faculty: [], programs: [], documents: [] };

    return {
      notices: notices
        .filter((n) => {
          const titleEn = getNoticeTitle(n, 'en');
          return (
            n.title.toLowerCase().includes(q) ||
            titleEn.toLowerCase().includes(q) ||
            n.date.includes(q)
          );
        })
        .slice(0, 5),
      faculty: faculty
        .filter(
          (f) =>
            f.name.toLowerCase().includes(q) ||
            (f.nameEn && f.nameEn.toLowerCase().includes(q)) ||
            f.department.toLowerCase().includes(q) ||
            f.designation.toLowerCase().includes(q) ||
            (f.email && f.email.toLowerCase().includes(q))
        )
        .slice(0, 4),
      programs: programs
        .filter(
          (p) =>
            p.titleBn.toLowerCase().includes(q) ||
            p.titleEn.toLowerCase().includes(q) ||
            p.subjectsBn.some((s) => s.toLowerCase().includes(q))
        )
        .slice(0, 3),
      documents: documents
        .filter(
          (d) =>
            d.titleBn.toLowerCase().includes(q) ||
            d.titleEn.toLowerCase().includes(q) ||
            d.categoryLabelBn.toLowerCase().includes(q)
        )
        .slice(0, 3)
    };
  }, [query, notices, faculty, programs, documents]);

  if (!isOpen) return null;

  const totalMatches =
    results.notices.length + results.faculty.length + results.programs.length + results.documents.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-16 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#0a86b7] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'bn'
                ? 'নোটিশ, শিক্ষক, ডিপার্টমেন্ট, প্রোগ্রাম বা ডকুমেন্ট খুঁজুন...'
                : 'Search notices, faculty, departments, programs, or documents...'
            }
            className="w-full bg-transparent text-slate-900 text-sm sm:text-base font-medium focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded font-semibold transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1 text-xs">
          {!query.trim() ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-medium text-slate-600">
                {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজের সংরক্ষিত তথ্য অনুসন্ধান করুন' : 'Search College Records'}
              </p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {lang === 'bn'
                  ? '৮৯৯টি অফিশিয়াল নোটিশ, ৩১ জন শিক্ষক, ৩৬ জন কর্মকর্তা-কর্মচারী ও একাডেমিক সিলেবাস সহজে খুঁজে পেতে অনুসন্ধান করুন।'
                  : 'Instantly search across 899 notices, 31 faculty members, 36 staff, and all programs.'}
              </p>
            </div>
          ) : totalMatches === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm font-semibold">
                {lang === 'bn'
                  ? `"${query}" এর সাথে মিল রয়েছে এমন কোনো তথ্য পাওয়া যায়নি।`
                  : `No records found matching "${query}".`}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'bn'
                  ? 'ভিন্ন কোনো শব্দ বা নাম দিয়ে পুনরায় অনুসন্ধান করুন।'
                  : 'Try searching with different keywords or names.'}
              </p>
            </div>
          ) : (
            <>
              {/* Notices matches */}
              {results.notices.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#0a86b7]" />
                    <span>
                      {lang === 'bn' ? `নোটিশ (${results.notices.length})` : `Notices (${results.notices.length})`}
                    </span>
                  </h4>
                  <div className="divide-y divide-slate-100 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    {results.notices.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onSelectNotice(n);
                          onClose();
                        }}
                        className="w-full text-left p-3 hover:bg-sky-50/50 transition-colors flex items-center justify-between gap-3 group cursor-pointer"
                      >
                        <div>
                          <p className="font-semibold text-slate-900 group-hover:text-blue-900 text-xs">
                            {getNoticeTitle(n, lang)}
                          </p>
                          <span className="text-[10px] text-slate-500 mt-0.5 block">
                            {n.date} • {lang === 'bn' ? n.categoryLabelBn : n.categoryLabelEn}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty matches */}
              {results.faculty.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    <span>
                      {lang === 'bn' ? `শিক্ষকমণ্ডলী (${results.faculty.length})` : `Faculty (${results.faculty.length})`}
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {results.faculty.map((f) => (
                      <button
                        key={f.serial}
                        onClick={() => {
                          onNavigate('faculty');
                          onClose();
                        }}
                        className="text-left p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-900 text-xs">
                            {lang === 'bn' ? f.name : (f.nameEn || f.name)}
                          </p>
                          <p className="text-[11px] text-slate-600">
                            {lang === 'bn' ? f.designation : (f.designationEn || f.designation)},{' '}
                            {lang === 'bn' ? f.department : (f.departmentEn || f.department)}
                          </p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {f.email}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Programs matches */}
              {results.programs.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                    <span>
                      {lang === 'bn' ? `কোর্স ও প্রোগ্রাম (${results.programs.length})` : `Programs (${results.programs.length})`}
                    </span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.programs.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onNavigate('academic');
                          onClose();
                        }}
                        className="w-full text-left p-3 bg-slate-50 hover:bg-emerald-50/50 rounded-xl border border-slate-200 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="font-bold text-slate-900 text-xs">
                            {lang === 'bn' ? p.titleBn : p.titleEn}
                          </p>
                          <p className="text-[11px] text-slate-500">{p.boardOrAffiliation}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents matches */}
              {results.documents.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-purple-500" />
                    <span>
                      {lang === 'bn' ? `ডকুমেন্ট ও ফর্ম (${results.documents.length})` : `Documents & Forms (${results.documents.length})`}
                    </span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.documents.map((d) => (
                      <a
                        key={d.id}
                        href={d.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-50 hover:bg-purple-50/50 rounded-xl border border-slate-200 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="font-bold text-slate-900 text-xs">
                            {lang === 'bn' ? d.titleBn : d.titleEn}
                          </p>
                          <span className="text-[10px] text-purple-700 font-semibold bg-purple-100 px-1.5 py-0.2 rounded mt-0.5 inline-block">
                            {lang === 'bn' ? d.categoryLabelBn : d.categoryLabelEn}
                          </span>
                        </div>
                        <Download className="w-4 h-4 text-slate-400 group-hover:text-purple-700 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500">
          {lang === 'bn' ? (
            <>
              টিপস: যেকোনো সময় কীবোর্ডের <kbd className="font-mono bg-white border border-slate-300 px-1 py-0.5 rounded">Ctrl + K</kbd> চেপে অনুসন্ধান বক্সটি খুলতে পারেন।
            </>
          ) : (
            <>
              Tip: Press <kbd className="font-mono bg-white border border-slate-300 px-1 py-0.5 rounded">Ctrl + K</kbd> anytime to open global search.
            </>
          )}
        </div>
      </div>
    </div>
  );
};
