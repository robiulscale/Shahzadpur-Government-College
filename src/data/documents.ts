export interface CollegeDocument {
  id: string;
  titleBn: string;
  titleEn: string;
  category: 'institutional' | 'academic' | 'results' | 'forms' | 'staff';
  categoryLabelBn: string;
  categoryLabelEn: string;
  fileUrl: string;
  fileType: string;
  fileSize?: string;
  date: string;
  descriptionBn: string;
  descriptionEn?: string;
}

export const COLLEGE_DOCUMENTS: CollegeDocument[] = [
  {
    id: 'doc-citizen-charter',
    titleBn: 'সিটিজেন চার্টার (Citizen Charter) - শাহজাদপুর সরকারি কলেজ',
    titleEn: 'Citizen Charter - Shahzadpur Government College',
    category: 'institutional',
    categoryLabelBn: 'প্রাতিষ্ঠানিক নথি',
    categoryLabelEn: 'Institutional Document',
    fileUrl: 'https://web.academyims.com/storage/2404022/document/Citizen_Charter._2404022.pdf',
    fileType: 'PDF',
    fileSize: '8.2 KB',
    date: '2024-04-02',
    descriptionBn: 'কলেজের নাগরিক সনদ ও সেবাসমূহ পাওয়ার সুনির্দিষ্ট সময়সীমা এবং নীতিমালা।',
    descriptionEn: 'Official citizen charter delineating public service timelines, delivery mechanisms, and administrative guidelines.'
  },
  {
    id: 'doc-teachers-directory',
    titleBn: 'কর্মরত শিক্ষকগণের তালিকা ও যোগাযোগ পরিচিতি (অফিসিয়াল গেজেটেড তালিকা)',
    titleEn: 'Official Faculty Directory & Contact Details',
    category: 'staff',
    categoryLabelBn: 'প্রশাসনিক ও শিক্ষক',
    categoryLabelEn: 'Faculty & Staff',
    fileUrl: 'https://web.academyims.com/storage/2404022/document/pdf_2404022.pdf',
    fileType: 'PDF',
    fileSize: '415 KB',
    date: '2026-10-05',
    descriptionBn: 'শাহজাদপুর সরকারি কলেজের কর্মরত সকল অধ্যাপক, সহযোগী অধ্যাপক, সহকারী অধ্যাপক ও প্রভাষকদের পদবি, বিষয় ও মোবাইল নম্বর।',
    descriptionEn: 'Comprehensive roster of all professors, associate professors, assistant professors, and lecturers with contact info.'
  },
  {
    id: 'doc-staff-seniority',
    titleBn: '৩য় ও ৪র্থ শ্রেণির কর্মচারীদের জ্যেষ্ঠতা ও দায়িত্ব বণ্টন তালিকা',
    titleEn: 'Staff Seniority & Duty Schedule (3rd & 4th Class)',
    category: 'staff',
    categoryLabelBn: 'প্রশাসনিক ও শিক্ষক',
    categoryLabelEn: 'Faculty & Staff',
    fileUrl: 'https://web.academyims.com/storage/2404022/document/PDF_2404022.pdf',
    fileType: 'PDF',
    fileSize: '73.5 KB',
    date: '2026-10-08',
    descriptionBn: 'নিয়মিত ও মাস্টাররোল কর্মচারীদের পদবি, দায়িত্বপ্রাপ্ত বিভাগ এবং যোগাযোগ নম্বর।',
    descriptionEn: 'Official seniority list and departmental allocations for regular cadre and master roll support staff.'
  },
  {
    id: 'doc-science-gpa-test-2024',
    titleBn: 'বিজ্ঞান বিভাগ অভ্যন্তরীণ পরীক্ষার ফলাফল (Science GPA Test)',
    titleEn: 'Internal Examination Results (Science GPA Test)',
    category: 'results',
    categoryLabelBn: 'পরীক্ষার ফলাফল',
    categoryLabelEn: 'Examination Results',
    fileUrl: 'https://web.academyims.com/storage/2404022/document/Science_Gpa_test_2024_2404022.pdf',
    fileType: 'PDF',
    fileSize: '806 KB',
    date: '2024-03-28',
    descriptionBn: 'এইচএসসি বিজ্ঞান বিভাগের শিক্ষার্থীদের অভ্যন্তরীণ মূল্যায়ন ও জিপিএ ফলাফল পত্র।',
    descriptionEn: 'Official signed merit sheet and internal evaluation results for HSC Science section students.'
  },
  {
    id: 'doc-degree-exam-reschedule-2026',
    titleBn: '২০২৫ সালের ডিগ্রি পাস ও সার্টিফিকেট কোর্স ১ম বর্ষ পরীক্ষার সময়সূচি পরিবর্তন',
    titleEn: 'Degree Pass 1st Year Exam Reschedule Notice',
    category: 'academic',
    categoryLabelBn: 'একাডেমিক নথি',
    categoryLabelEn: 'Academic Document',
    fileUrl: 'https://web.academyims.com/storage/2404022/images/notice/notice_1792208866.pdf',
    fileType: 'PDF',
    fileSize: '507 KB',
    date: '2026-10-17',
    descriptionBn: 'জাতীয় বিশ্ববিদ্যালয়ের ডিগ্রি পাস ও সার্টিফিকেট কোর্স পরীক্ষার ১৮ ও ১৯ অক্টোবর ২০২৬ তারিখের রুটিন সংশোধন।',
    descriptionEn: 'National University revised timetable notification for Degree Pass & Certificate Course Year 1 exams.'
  },
  {
    id: 'doc-convocation-2027',
    titleBn: '২য় সমাবর্তন ২০২৭ রেজিস্ট্রেশন সংক্রান্ত অফিশিয়াল নির্দেশিকা',
    titleEn: '2nd Convocation 2027 Registration Guidelines',
    category: 'academic',
    categoryLabelBn: 'একাডেমিক নথি',
    categoryLabelEn: 'Academic Document',
    fileUrl: 'https://web.academyims.com/storage/2404022/images/notice/notice_1791456430.pdf',
    fileType: 'PDF',
    fileSize: '480 KB',
    date: '2026-10-08',
    descriptionBn: 'উত্তীর্ণ শিক্ষার্থীদের জন্য সমাবর্তন সনদ ও গাউন বিতরণ রেজিস্ট্রেশন নিয়মাবলী।',
    descriptionEn: 'Official circular governing graduate degree certificate registration and academic regalia collection.'
  },
  {
    id: 'doc-teaching-permission',
    titleBn: 'পাঠদানের অনুমতি ও স্বীকৃতি সংক্রান্ত সরকারি আদেশপত্র',
    titleEn: 'Teaching Permission and Government Recognition Order',
    category: 'institutional',
    categoryLabelBn: 'প্রাতিষ্ঠানিক নথি',
    categoryLabelEn: 'Institutional Document',
    fileUrl: 'https://web.academyims.com/storage/2404022/document/PDF_2404022.pdf',
    fileType: 'PDF',
    fileSize: '74 KB',
    date: '2024-02-15',
    descriptionBn: 'শিক্ষা মন্ত্রণালয় ও জাতীয় বিশ্ববিদ্যালয় কর্তৃক বিষয়ভিত্তিক পাঠদানের স্বীকৃতি ও অনুমোদন।',
    descriptionEn: 'Official gazette recognition from the Ministry of Education & National University for undergraduate disciplines.'
  }
];
