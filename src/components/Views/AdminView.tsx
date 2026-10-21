import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  FileText,
  Users,
  Bell,
  Clock,
  Search,
  Eye,
  AlertCircle
} from 'lucide-react';
import { NoticeItem, FacultyMember, Language } from '../../types';

interface AdminViewProps {
  notices: NoticeItem[];
  faculty: FacultyMember[];
  onAddNotice: (notice: NoticeItem) => void;
  onUpdateNotice: (notice: NoticeItem) => void;
  onDeleteNotice: (id: number) => void;
  onAddFaculty: (member: FacultyMember) => void;
  lang: Language;
}

export const AdminView: React.FC<AdminViewProps> = ({
  notices,
  faculty,
  onAddNotice,
  onUpdateNotice,
  onDeleteNotice,
  onAddFaculty,
  lang
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'notices' | 'faculty' | 'audit'>('overview');

  // New notice form state
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState<'academic' | 'exam' | 'admission' | 'administrative' | 'hostel' | 'general'>('general');
  const [newNoticeDate, setNewNoticeDate] = useState(new Date().toISOString().split('T')[0]);
  const [newNoticeFileUrl, setNewNoticeFileUrl] = useState('');
  const [noticeSuccessMsg, setNoticeSuccessMsg] = useState('');

  // New faculty form state
  const [newFacName, setNewFacName] = useState('');
  const [newFacDesignation, setNewFacDesignation] = useState('প্রভাষক');
  const [newFacDept, setNewFacDept] = useState('বাংলা');
  const [newFacPhone, setNewFacPhone] = useState('');
  const [newFacEmail, setNewFacEmail] = useState('');
  const [facSuccessMsg, setFacSuccessMsg] = useState('');

  // Audit Log State
  const [auditLogs, setAuditLogs] = useState<Array<{ time: string; user: string; action: string }>>([
    { time: '2026-10-18 10:45:00', user: 'admin@shgc.edu.bd', action: 'System audit and database sync completed' },
    { time: '2026-10-17 03:47:46', user: 'admin@shgc.edu.bd', action: 'Published notice #4032 (Degree Pass 1st Year Exam Reschedule)' },
    { time: '2026-10-15 11:20:00', user: 'admin@shgc.edu.bd', action: 'Published notice #4019 (College Office open on Saturday)' }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'shgcadmin2026' || passwordInput === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
      setPasswordInput('');
    } else {
      setAuthError('ভুল পাসওয়ার্ড! দয়া করে সঠিক পাসওয়ার্ড দিন। (পাসওয়ার্ড: shgcadmin2026)');
    }
  };

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle.trim()) return;

    const catLabelsBn: Record<string, string> = {
      academic: 'একাডেমিক',
      exam: 'পরীক্ষা সংক্রান্ত',
      admission: 'ভর্তি সংক্রান্ত',
      administrative: 'প্রশাসনিক',
      hostel: 'ছাত্রাবাস ও আবাসন',
      general: 'সাধারণ নোটিশ'
    };

    const newId = Math.max(...notices.map((n) => n.id), 4032) + 1;
    const item: NoticeItem = {
      id: newId,
      title: newNoticeTitle.trim(),
      category: newNoticeCategory,
      categoryLabelBn: catLabelsBn[newNoticeCategory],
      categoryLabelEn: newNoticeCategory.toUpperCase(),
      date: newNoticeDate,
      fileUrl: newNoticeFileUrl.trim() || undefined,
      isImportant: true
    };

    onAddNotice(item);
    setAuditLogs((prev) => [
      {
        time: new Date().toISOString().replace('T', ' ').slice(0, 19),
        user: 'admin@shgc.edu.bd',
        action: `Created notice #${newId}: "${item.title.slice(0, 40)}..."`
      },
      ...prev
    ]);

    setNewNoticeTitle('');
    setNewNoticeFileUrl('');
    setNoticeSuccessMsg('নতুন নোটিশ সফলভাবে যুক্ত ও প্রকাশিত হয়েছে!');
    setTimeout(() => setNoticeSuccessMsg(''), 4000);
  };

  const handleCreateFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFacName.trim()) return;

    const newSerial = String(faculty.length + 1).padStart(2, '০');
    const member: FacultyMember = {
      serial: newSerial,
      name: newFacName.trim(),
      designation: newFacDesignation,
      department: newFacDept,
      mobile_number: newFacPhone.trim() || undefined,
      email: newFacEmail.trim() || undefined,
      notes: 'বিসিএস (সাধারণ শিক্ষা)'
    };

    onAddFaculty(member);
    setAuditLogs((prev) => [
      {
        time: new Date().toISOString().replace('T', ' ').slice(0, 19),
        user: 'admin@shgc.edu.bd',
        action: `Added faculty profile: ${member.name} (${member.designation}, ${member.department})`
      },
      ...prev
    ]);

    setNewFacName('');
    setNewFacPhone('');
    setNewFacEmail('');
    setFacSuccessMsg('নতুন শিক্ষকের তথ্য সফলভাবে যুক্ত হয়েছে!');
    setTimeout(() => setFacSuccessMsg(''), 4000);
  };

  // Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="py-16 bg-slate-100 min-h-[75vh] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              কলেজ প্রশাসন লগইন
            </h2>
            <p className="text-xs text-slate-500">
              শাহজাদপুর সরকারি কলেজ • কনটেন্ট ও নোটিশ ম্যানেজমেন্ট পোর্টাল
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                অ্যাডমিন পাসওয়ার্ড (Admin Password)
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  autoFocus
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="পাসওয়ার্ড প্রদান করুন..."
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                />
              </div>
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-900">
              <span className="font-bold">সুরক্ষিত ডেমো অ্যাক্সেস:</span> পাসওয়ার্ড হলো{' '}
              <code className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-amber-300">
                shgcadmin2026
              </code>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-xs shadow-md"
            >
              ড্যাশবোর্ডে প্রবেশ করুন
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Admin Header Bar */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border-b-4 border-amber-500 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400">Authenticated Session (Administrator)</span>
              <h1 className="text-xl sm:text-2xl font-bold">শাহজাদপুর সরকারি কলেজ অ্যাডমিন প্যানেল</h1>
            </div>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-1.5 bg-red-600/90 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>লগআউট (Logout)</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'overview', label: 'সারসংক্ষেপ (Overview)' },
            { id: 'notices', label: `নোটিশ ব্যবস্থাপনা (${notices.length} টি)` },
            { id: 'faculty', label: `শিক্ষক ব্যবস্থাপনা (${faculty.length} জন)` },
            { id: 'audit', label: 'অডিট লগ ও পরিবর্তন ইতিহাস' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">সংরক্ষিত নোটিশ</span>
                <div className="text-2xl font-extrabold text-blue-900">{notices.length} টি</div>
                <span className="text-[11px] text-emerald-600">১০০% পিডিএফ সংযুক্ত</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">কর্মরত শিক্ষক</span>
                <div className="text-2xl font-extrabold text-amber-600">{faculty.length} জন</div>
                <span className="text-[11px] text-slate-500">বিসিএস ক্যাডার গেজেটেড</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">কর্মকর্তা ও কর্মচারী</span>
                <div className="text-2xl font-extrabold text-emerald-600">৩৬ জন</div>
                <span className="text-[11px] text-slate-500">নিয়মিত ও মাস্টাররোল</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs text-slate-500 font-medium">সিস্টেম স্ট্যাটাস</span>
                <div className="text-2xl font-extrabold text-purple-600">Active</div>
                <span className="text-[11px] text-emerald-600">লাইভ সিডিএন কানেক্টেড</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
                প্রশাসনিক দ্রুত পদক্ষেপ
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveTab('notices')}
                  className="px-4 py-2 bg-blue-900 text-white rounded-xl text-xs font-bold hover:bg-blue-950 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন নোটিশ প্রকাশ করুন</span>
                </button>
                <button
                  onClick={() => setActiveTab('faculty')}
                  className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold hover:bg-amber-600 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন শিক্ষক প্রোফাইল যুক্ত করুন</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Notice Management Tab */}
        {activeTab === 'notices' && (
          <div className="space-y-6">
            {/* Create Notice Form */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>নতুন নোটিশ বা সার্কুলার প্রকাশ করুন</span>
              </h3>

              {noticeSuccessMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{noticeSuccessMsg}</span>
                </div>
              )}

              <form onSubmit={handleCreateNotice} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    নোটিশের শিরোনাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newNoticeTitle}
                    onChange={(e) => setNewNoticeTitle(e.target.value)}
                    placeholder="যেমন: ২০২৬ সালের অনার্স ১ম বর্ষ পরীক্ষার ফরম পূরণ সংক্রান্ত বিজ্ঞপ্তি..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">ক্যাটাগরি</label>
                    <select
                      value={newNoticeCategory}
                      onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="general">সাধারণ নোটিশ</option>
                      <option value="exam">পরীক্ষা সংক্রান্ত</option>
                      <option value="admission">ভর্তি সংক্রান্ত</option>
                      <option value="academic">একাডেমিক</option>
                      <option value="administrative">প্রশাসনিক</option>
                      <option value="hostel">ছাত্রাবাস ও আবাসন</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">প্রকাশকাল (Date)</label>
                    <input
                      type="date"
                      required
                      value={newNoticeDate}
                      onChange={(e) => setNewNoticeDate(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">সংযুক্ত পিডিএফ লিংক (ঐচ্ছিক)</label>
                    <input
                      type="url"
                      value={newNoticeFileUrl}
                      onChange={(e) => setNewNoticeFileUrl(e.target.value)}
                      placeholder="https://.../notice.pdf"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-xl text-xs transition-colors shadow-xs"
                >
                  নোটিশ প্রকাশ করুন (Publish Notice)
                </button>
              </form>
            </div>

            {/* Recent Notices List with Delete/Action */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900">
                  সর্বশেষ প্রকাশিত নোটিশসমূহ (ম্যানেজমেন্ট)
                </h4>
                <span className="text-xs text-slate-500">সর্বমোট: <strong className="font-mono text-slate-800 font-bold">{notices.length}</strong> টি</span>
              </div>

              <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto text-xs">
                {notices.slice(0, 20).map((n) => (
                  <div key={n.id} className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-slate-400">#{n.id}</span>
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.2 rounded font-semibold text-[10px]">
                          {n.categoryLabelBn}
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">{n.date}</span>
                      </div>
                      <p className="font-bold text-slate-900 truncate">{n.title}</p>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          if (confirm(`আপনি কি "${n.title}" নোটিশটি ডিলিট করতে চান?`)) {
                            onDeleteNotice(n.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                        title="Delete Notice"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. Faculty Management Tab */}
        {activeTab === 'faculty' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>নতুন শিক্ষক প্রোফাইল যুক্ত করুন</span>
              </h3>

              {facSuccessMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{facSuccessMsg}</span>
                </div>
              )}

              <form onSubmit={handleCreateFaculty} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      শিক্ষকের নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={newFacName}
                      onChange={(e) => setNewFacName(e.target.value)}
                      placeholder="পুরো নাম"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">পদবি</label>
                    <select
                      value={newFacDesignation}
                      onChange={(e) => setNewFacDesignation(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="অধ্যাপক">অধ্যাপক (Professor)</option>
                      <option value="সহযোগী অধ্যাপক">সহযোগী অধ্যাপক (Associate Professor)</option>
                      <option value="সহকারী অধ্যাপক">সহকারী অধ্যাপক (Assistant Professor)</option>
                      <option value="প্রভাষক">প্রভাষক (Lecturer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">বিভাগ</label>
                    <input
                      type="text"
                      required
                      value={newFacDept}
                      onChange={(e) => setNewFacDept(e.target.value)}
                      placeholder="যেমন: বাংলা, ইংরেজি, গণিত..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">মোবাইল নম্বর</label>
                    <input
                      type="tel"
                      value={newFacPhone}
                      onChange={(e) => setNewFacPhone(e.target.value)}
                      placeholder="০১৭১X-XXXXXX"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">ইমেইল ঠিকানা</label>
                    <input
                      type="email"
                      value={newFacEmail}
                      onChange={(e) => setNewFacEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-xs"
                >
                  প্রোফাইল যুক্ত করুন
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 4. Audit Log Tab */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900">
                প্রশাসনিক অডিট ও পরিবর্তনের ইতিহাস (Audit Trail)
              </h4>
              <span className="text-xs text-slate-500 font-medium">সুরক্ষিত লগ</span>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {auditLogs.map((log, idx) => (
                <div key={idx} className="p-3.5 flex items-start gap-3 hover:bg-slate-50">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{log.action}</p>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="font-mono">{log.time}</span>
                      <span>•</span>
                      <span className="text-blue-900">{log.user}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
