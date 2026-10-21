export type Language = 'bn' | 'en';

export interface NoticeItem {
  id: number;
  title: string;
  titleEn?: string;
  category: 'academic' | 'exam' | 'admission' | 'administrative' | 'hostel' | 'general';
  categoryLabelBn: string;
  categoryLabelEn: string;
  date: string; // YYYY-MM-DD
  file?: string;
  fileUrl?: string;
  isImportant?: boolean;
  description?: string;
}

export interface FacultyMember {
  serial: string;
  name: string;
  nameEn?: string;
  id_code?: string;
  designation: string;
  designationEn?: string;
  department: string;
  departmentEn?: string;
  mobile_number?: string;
  email?: string;
  notes?: string;
  isLeadership?: boolean;
}

export interface StaffMember {
  serial: string;
  name: string;
  nameEn?: string;
  id_code?: string;
  designation: string;
  designationEn?: string;
  department_or_role?: string | null;
  department_or_roleEn?: string | null;
  mobile_number?: string;
  category: 'Regular' | 'Master Roll' | 'College Mosque';
}

export interface AcademicProgram {
  id: string;
  titleBn: string;
  titleEn: string;
  level: 'HSC' | 'Degree Pass' | 'Honours';
  levelLabelBn: string;
  levelLabelEn?: string;
  duration: string;
  durationEn?: string;
  boardOrAffiliation: string;
  boardOrAffiliationEn?: string;
  descriptionBn: string;
  descriptionEn: string;
  subjectsBn: string[];
  subjectsEn?: string[];
  eligibilityBn: string;
  eligibilityEn?: string;
  seats?: number | string;
}

export interface GalleryAlbum {
  id: number;
  title: string;
  titleBn?: string;
  titleEn?: string;
  date?: string;
  coverImage: string;
  images: { url: string; caption?: string; captionBn?: string; captionEn?: string }[];
}

export interface EssentialLink {
  title: string;
  titleEn: string;
  link: string;
  category: string;
}
