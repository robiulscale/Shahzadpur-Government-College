import { NoticeItem, Language } from '../types';

// Convert English numbers to Bengali
export const toBnDigits = (num: number | string): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/\d/g, (d) => bnDigits[parseInt(d, 10)] || d);
};

// Convert Bengali numbers to English
export const toEnDigits = (str: string): string => {
  const bnDigits: { [key: string]: string } = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
  };
  return str.replace(/[০-৯]/g, (d) => bnDigits[d] || d);
};

// Pre-defined high-accuracy English translations for common notices
const EXACT_TITLE_TRANSLATIONS: Record<number, string> = {
  4032: "Notice regarding schedule change for 2025 Degree Pass & Certificate Course 1st Year Examination on 18/10/2026 & 19/10/2026",
  4019: "Notice regarding college office remaining open on Saturday, October 17, 2026",
  4018: "Notice regarding suspension of classes",
  4006: "Condolence Message & Memorial Notice",
  3998: "Notice regarding Registration for 2nd Convocation 2027",
  3989: "Notice regarding seat allocation at Shahzadpur Govt College Female Students Hostel",
  3988: "Seat allocation notice and admission form for Sher-e-Bangla Boys Hostel",
  3987: "Practical examination notice for ICT course of 2025 Honours 1st Year examinees",
  3977: "Form fill-up notice for 2025 Degree (Pass) Certificate Course 2nd Year Examination",
  3964: "No Objection Certificate (NOC) for Assistant Professor Chaiti Basak, Department of History",
  3959: "Application regarding re-evaluation of 2024 Degree (Pass) 3rd Year exam answer scripts",
  3956: "Phase 2 online application notice for confirmed 11th grade students (2026-2027 session)",
  3955: "Rescheduled Phase 2 online admission schedule for Class 11 (2026-2027 session)",
  3954: "Notice regarding commencement of Class 11 classes for academic session 2026-2027",
  3953: "Online application for medical assistance grant from PM Education Assistance Trust (Sep-Oct 2026)",
  3952: "Notice regarding mandatory college uniform attendance for Class 11 students (2026-2027)",
  3947: "Discussion meeting notice on the occasion of Sri Sri Durga Puja celebration",
  3945: "Online bill entry notice for internal and external examiners of 2024 Degree Pass 3rd Year Practical Exam",
  3944: "Hostel seat allocation notice & admission form for Sher-e-Bangla Boys Hostel",
  3942: "Notice regarding financial assistance grants for educational institutions",
  3930: "Notice regarding class commencement for Class 11 students (2026-2027 session)",
  3929: "Notice regarding class commencement for Class 12 students (2025-2026 session)",
  3926: "Date change notice for 2025 Degree (Pass) and Certificate Course 1st Year Examination",
  3925: "Notice regarding collection of admit card for 2025-2026 Class 12 Pre-Test Examination",
  3919: "Notice regarding suspension of classes on the occasion of Fateha-e-Yajdaham",
  3913: "Revised admission notice for Class 11 admission (2026-2027 session)",
  3883: "Notice regarding implementation of dengue awareness and prevention activities",
  3876: "Participation notice for various cultural events on the occasion of Nazrul Year 2026",
  3875: "College-based VDP/TDP basic training notice for HSC and Degree students by Bangladesh Ansar & VDP",
  3871: "Notice for faculty: Preparation of question paper manuscripts for Class 12 Pre-Test Exam 2026",
  3870: "Notice for faculty: Preparation of question paper manuscripts for Monthly Assessment-02 Exam",
  3869: "Schedule notice for Monthly Assessment-02 Examination of Class 12 students (2025-2026)",
  3868: "Schedule notice for Pre-Test Examination 2026 of Class 12 students (2025-2026)",
  3867: "Form fill-up notice for 2025 Honours 3rd Year Examination",
  3863: "Schedule for 14th Batch of Basic Computer Training Course",
  3849: "Results of Monthly Assessment-01 (Science, Business Studies & Humanities) for Class 12 students",
  3847: "Notice for faculty: Question paper manuscript preparation for 2022-23 Degree 3rd Year 1st In-course Exam",
  3846: "Notice regarding 1st In-course Examination of 2022-23 Degree (Pass) 3rd Year",
  3843: "Application regarding re-evaluation of 2024 Honours 4th Year exam answer scripts",
  3831: "Schedule for 2025 Honours 4th Year 2nd In-course and Test Examination",
  3815: "Admission notice for 2025-2026 Honours 1st Year (2nd Release Slip)",
  3812: "Rescheduled examination notice for paper code 212109 of 2025 Honours 1st Year Exam",
  3805: "Information submission notice for HSC graduates admitted into Engineering, Medical & Public Universities",
  3803: "Notice regarding payment of session charges before appearing in Monthly Assessment-01 Exam",
  3790: "Participation notice for Prime Minister's Gold Cup Football Tournament 2026",
  3784: "Cultural and quiz competition notice on Islamic values on the occasion of Eid-e-Miladunnabi (PBUH)",
  3782: "Celebration notice of holy Eid-e-Miladunnabi (PBUH) with due solemnity",
  3781: "Certificate distribution notice for Basic Computer Training Course participants (Batches 10, 11 & 12)",
  3769: "Notice for faculty: Preparation of lesson plans for Class 11-12 (2026-27 session)",
  3762: "Session fee payment notice for regular students of 2022-23 Degree Pass 3rd Year",
  3758: "Notice for faculty regarding multimedia classroom teaching equipment requisition",
  3757: "Practical examination schedule for 2024 Degree (BSc) 3rd Year examinees",
  3756: "Session charge payment notice for 2025-2026 Class 12 students",
  3754: "Notice for faculty: Question paper manuscript preparation for Degree 2nd Year Test Exam",
  3753: "Examination schedule for 2023-24 Degree (Pass) 2nd Year Test & 2nd In-course Exam",
  3752: "Admission application notice for 2025-2026 Degree (Pass) 1st Year",
  3748: "Publicity notice regarding World Russian Championship 2026",
  3746: "Call for research fellowship applications by International Mother Language Institute (IMLI)",
  3744: "Notice for faculty: Question paper manuscript preparation for Class 12 Monthly Assessment-01",
  3743: "Schedule notice for Class 12 Monthly Assessment-01 Examination (2025-2026)",
  3742: "Notice regarding participation in monthly assessment tests and mandatory 100% class attendance",
  3736: "Notice regarding suspension of classes on the occasion of holy Akhiri Chahar Somba",
  3735: "Notice for BCS (General Education) Cadre Officers regarding multimedia classroom teaching",
  3722: "Revised results for specific rolls in Class 11 Annual Examination",
  3710: "Revised practical examination schedule for HSC Exam 2026 at Shahzadpur Govt College Center (Code: 364)",
  3707: "Form fill-up notice for regular and private candidates of 2025 Degree (Pass) 1st Year Exam",
  3705: "Notice regarding class attendance according to routine for Class 12, Degree Pass and Honours students",
  3700: "Practical examination schedule for HSC Exam 2026 examinees at Center 364",
  3697: "Essay, recitation and painting competition notice on July Mass Uprising Day 2026",
  3696: "Celebration notice of July Mass Uprising Day 2026 with due dignity"
};

/**
 * Intelligent fallback generator for notices without manual translation
 */
export const translateNoticeTitle = (title: string): string => {
  let eng = title;

  // Replace Bengali digits with English digits
  eng = toEnDigits(eng);

  // Common pattern replacements
  const replacements: [RegExp, string][] = [
    [/সংক্রান্ত বিজ্ঞপ্তি/g, 'Notice'],
    [/সংক্রান্ত/g, 'Notice regarding'],
    [/বিজ্ঞপ্তি/g, 'Notice'],
    [/সময়সূচি পরিবর্তন/g, 'Schedule Rescheduled'],
    [/সময়সূচি/g, 'Schedule'],
    [/ফরম পূরণ/g, 'Form Fill-Up'],
    [/ব্যবহারিক পরীক্ষা/g, 'Practical Examination'],
    [/ব্যবহারিক/g, 'Practical'],
    [/পরীক্ষার ফলাফল/g, 'Exam Results'],
    [/ফলাফল/g, 'Results'],
    [/পরীক্ষা/g, 'Examination'],
    [/একাদশ শ্রেণি/g, 'Class 11 (HSC 1st Year)'],
    [/দ্বাদশ শ্রেণি/g, 'Class 12 (HSC 2nd Year)'],
    [/ডিগ্রি \(পাস\)/g, 'Degree (Pass)'],
    [/ডিগ্রি পাস/g, 'Degree Pass'],
    [/ডিগ্রি/g, 'Degree'],
    [/অনার্স/g, 'Honours'],
    [/স্নাতক/g, 'Undergraduate'],
    [/ক্লাস বন্ধ/g, 'Suspension of Classes'],
    [/ক্লাস অনুষ্ঠিত/g, 'Class Commencement'],
    [/ভর্তি/g, 'Admission'],
    [/রিলিজ স্লিপ/g, 'Release Slip'],
    [/সেশন চার্জ/g, 'Session Charges'],
    [/ছাত্রাবাস/g, 'Boys Hostel'],
    [/ছাত্রীনিবাস/g, 'Girls Hostel'],
    [/হোস্টেল/g, 'Hostel'],
    [/শিক্ষাবর্ষে/g, 'Academic Year'],
    [/শিক্ষাবর্ষের/g, 'Academic Year'],
    [/সালের/g, 'Session'],
    [/সম্মানিত শিক্ষকবৃন্দ|সম্মানিত শিক্ষকমন্ডলী/g, 'Honorable Faculty Members:'],
    [/শোক সংবাদ/g, 'Condolence Notice'],
    [/অনাপত্তি সনদ \(NOC\)/g, 'No Objection Certificate (NOC)'],
    [/অনলাইন/g, 'Online'],
    [/দরখাস্ত/g, 'Application'],
    [/পুনঃমূল্যায়ন/g, 'Re-evaluation']
  ];

  for (const [pattern, rep] of replacements) {
    eng = eng.replace(pattern, rep);
  }

  // Clean double spaces
  eng = eng.replace(/\s+/g, ' ').trim();

  return eng;
};

/**
 * Main helper to retrieve proper bilingual notice title
 */
export const getNoticeTitle = (notice: NoticeItem, lang: Language): string => {
  if (lang === 'bn') {
    return notice.title;
  }

  // 1. If explicit English title provided in notice object
  if (notice.titleEn && notice.titleEn.trim().length > 0) {
    return notice.titleEn;
  }

  // 2. If pre-defined in exact dictionary
  if (EXACT_TITLE_TRANSLATIONS[notice.id]) {
    return EXACT_TITLE_TRANSLATIONS[notice.id];
  }

  // 3. Fallback smart pattern translator
  return translateNoticeTitle(notice.title);
};
