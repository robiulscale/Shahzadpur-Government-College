import React from 'react';
import { X, Calendar, Download, ExternalLink, FileText, Share2, Check } from 'lucide-react';
import { NoticeItem, Language } from '../types';
import { getNoticeTitle, toBnDigits } from '../utils/noticeTranslator';

interface NoticeDetailModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
  lang: Language;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({
  notice,
  onClose,
  lang
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!notice) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '?notice=' + notice.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const title = getNoticeTitle(notice, lang);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-4 sm:p-6 flex items-start justify-between gap-4 border-b-2 border-[#0a86b7]">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0a86b7] text-white">
                {lang === 'bn' ? notice.categoryLabelBn : notice.categoryLabelEn}
              </span>
              <span className="text-xs text-sky-200 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-sky-300" />
                <span>
                  {lang === 'bn' ? `প্রকাশকাল: ${toBnDigits(notice.date)}` : `Published: ${notice.date}`}
                </span>
              </span>
              <span className="text-[11px] text-sky-200/80">
                {lang === 'bn' ? 'স্মারক নং: ' : 'Memo: '}
                <span className="font-mono text-white">SHGC/NOTICE/{notice.id}</span>
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-bold leading-snug text-white">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Institutional Header Stamp */}
          <div className="text-center py-3 border-b border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {lang === 'bn'
                ? 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার • অধ্যক্ষের কার্যালয়'
                : 'Government of Bangladesh • Office of the Principal'}
            </p>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              {lang === 'bn'
                ? 'শাহজাদপুর সরকারি কলেজ, শাহজাদপুর, সিরাজগঞ্জ'
                : 'Shahzadpur Government College, Shahzadpur, Sirajganj'}
            </h4>
            <p className="text-xs text-slate-500">
              {lang === 'bn' ? 'ওয়েবসাইট: ' : 'Website: '}
              <span className="font-mono text-slate-700 font-medium">www.shgc.edu.bd</span> •{' '}
              {lang === 'bn' ? 'ইমেইল: ' : 'Email: '}
              <span className="font-mono text-slate-700 font-medium">shahzadpur.govt.college@gmail.com</span>
            </p>
          </div>

          {/* Notice Text */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-slate-900 mb-2">
              {lang === 'bn' ? `বিজ্ঞপ্তির বিষয়: ${title}` : `Subject: ${title}`}
            </p>
            <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line">
              {notice.description ||
                (lang === 'bn'
                  ? `সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে যে, শাহজাদপুর সরকারি কলেজের উক্ত বিজ্ঞপ্তির বিশদ বিবরণ এবং অফিশিয়াল নির্দেশনা পত্র সংযুক্ত মূল ফাইলে প্রদান করা হয়েছে। নিম্নের ডাউনলোড বা ভিউ লিংকে ক্লিক করে পূর্ণাঙ্গ অফিশিয়াল সিলযুক্ত পিডিএফ কপিটি সংরক্ষণ করুন।`
                  : `For the information of all concerned, details of this official notification and regulatory directives of Shahzadpur Government College are provided in the attached verified document. Please click the download or view link below to access the full sealed PDF circular.`)}
            </p>
          </div>

          {/* Attached Document File Box */}
          {notice.fileUrl ? (
            <div className="rounded-xl border-2 border-dashed border-sky-300 bg-sky-50/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 text-red-700 rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-900">
                    {notice.file || (lang === 'bn' ? 'অফিসিয়াল বিজ্ঞপ্তি সংযুক্তি (.PDF)' : 'Official Notice Attachment (.PDF)')}
                  </h5>
                  <p className="text-xs text-slate-600">
                    {lang === 'bn'
                      ? 'অফিসিয়াল ফাইল টাইপ: Portable Document Format (.PDF)'
                      : 'File Format: Portable Document Format (.PDF)'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={notice.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'ব্রাউজারে দেখুন' : 'View PDF'}</span>
                </a>
                <a
                  href={notice.fileUrl}
                  download
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0a86b7] hover:bg-[#0284c7] text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'ডাউনলোড' : 'Download'}</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-100 text-slate-600 text-xs text-center">
              {lang === 'bn' ? 'এই নোটিশের সাথে আলাদা কোনো পিডিএফ সংযুক্ত নেই।' : 'No attachment with this notice.'}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-3 sm:p-4 flex items-center justify-between gap-2 text-xs">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>
              {copied
                ? (lang === 'bn' ? 'লিংক কপি করা হয়েছে!' : 'Link Copied!')
                : (lang === 'bn' ? 'লিংক শেয়ার করুন' : 'Share Link')}
            </span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
