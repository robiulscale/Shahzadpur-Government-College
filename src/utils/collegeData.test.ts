import test from 'node:test';
import assert from 'node:assert/strict';
import { NOTICES_ARCHIVE } from '../data/notices.ts';
import { FACULTY_MEMBERS, DEPARTMENTS_LIST } from '../data/faculty.ts';
import { STAFF_MEMBERS } from '../data/staff.ts';
import { ACADEMIC_PROGRAMS } from '../data/academicPrograms.ts';
import { COLLEGE_INFO } from '../data/collegeInfo.ts';
import { COLLEGE_DOCUMENTS } from '../data/documents.ts';
import { GALLERY_ALBUMS } from '../data/galleries.ts';

test('College info contains verified institutional credentials', () => {
  assert.equal(COLLEGE_INFO.eiin, '128485');
  assert.equal(COLLEGE_INFO.hscCodeEn, '3450');
  assert.equal(COLLEGE_INFO.nuCodeEn, '2214');
  assert.equal(COLLEGE_INFO.establishedYear, '1964');
  assert.ok(COLLEGE_INFO.speeches.principal.nameBn.includes('আব্দুর রাজ্জাক'));
  assert.ok(COLLEGE_INFO.speeches.principal.messageEn?.includes('Education is the backbone of a nation'));
  assert.ok(COLLEGE_INFO.speeches.vicePrincipal.nameBn.includes('ইয়াছিন আলী'));
  assert.ok(COLLEGE_INFO.speeches.vicePrincipal.messageEn?.includes('venerated institutions of higher learning'));
});

test('Notice archive contains 899 verified official notices', () => {
  assert.ok(NOTICES_ARCHIVE.length >= 899, `Expected at least 899 notices, got ${NOTICES_ARCHIVE.length}`);
  const sample = NOTICES_ARCHIVE[0];
  assert.ok(sample.id > 0);
  assert.ok(sample.title.length > 5);
  assert.ok(sample.date.match(/^\d{4}-\d{2}-\d{2}$/));
  assert.ok(['academic', 'exam', 'admission', 'administrative', 'hostel', 'general'].includes(sample.category));
});

test('Faculty roster contains 31 verified teachers with valid departments and contacts', () => {
  assert.equal(FACULTY_MEMBERS.length, 31);
  assert.ok(DEPARTMENTS_LIST.length >= 12);

  // Check sample teachers
  const t1 = FACULTY_MEMBERS[0];
  assert.equal(t1.serial, '০১');
  assert.ok(t1.name.includes('রফিকুল ইসলাম'));
  assert.equal(t1.department, 'উদ্ভিদবিদ্যা');
  assert.equal(t1.departmentEn, 'Botany');

  const t11 = FACULTY_MEMBERS.find(t => t.name.includes('চৈতী বসাক'));
  assert.ok(t11, 'Choity Basak should be present');
  assert.equal(t11?.department, 'ইতিহাস');
  assert.equal(t11?.designation, 'সহকারী অধ্যাপক');
  assert.equal(t11?.designationEn, 'Assistant Professor');
});

test('Staff roster contains 36 verified personnel with bilingual details', () => {
  assert.equal(STAFF_MEMBERS.length, 36);
  const regular = STAFF_MEMBERS.filter(s => s.category === 'Regular');
  const masterRoll = STAFF_MEMBERS.filter(s => s.category === 'Master Roll');
  const mosque = STAFF_MEMBERS.filter(s => s.category === 'College Mosque');

  assert.equal(regular.length, 12);
  assert.equal(masterRoll.length, 22);
  assert.equal(mosque.length, 2);

  // Verify English name and designation on first staff
  const s1 = STAFF_MEMBERS[0];
  assert.equal(s1.nameEn, 'Md. Habibur Rahman');
  assert.equal(s1.designationEn, 'Head Assistant');
});

test('Academic programs include HSC, Degree Pass, and Honours tracks with English fields', () => {
  const levels = new Set(ACADEMIC_PROGRAMS.map(p => p.level));
  assert.ok(levels.has('HSC'));
  assert.ok(levels.has('Degree Pass'));
  assert.ok(levels.has('Honours'));

  const honours = ACADEMIC_PROGRAMS.find(p => p.id === 'honours-programs');
  assert.ok(honours?.subjectsBn.length && honours.subjectsBn.length >= 14);
  assert.ok(honours?.levelLabelEn);
  assert.ok(honours?.eligibilityEn);
});

test('Downloadable documents include official Citizen Charter and exam result', () => {
  assert.ok(COLLEGE_DOCUMENTS.length >= 5);
  const charter = COLLEGE_DOCUMENTS.find(d => d.id === 'doc-citizen-charter');
  assert.ok(charter?.fileUrl.includes('Citizen_Charter'));
  assert.ok(charter?.descriptionEn);
  const results = COLLEGE_DOCUMENTS.find(d => d.id === 'doc-science-gpa-test-2024');
  assert.ok(results?.fileUrl.includes('Science_Gpa_test'));
});

test('Gallery albums contain bilingual titles and captions', () => {
  assert.ok(GALLERY_ALBUMS.length >= 5);
  GALLERY_ALBUMS.forEach(album => {
    assert.ok(album.titleBn, `Album ${album.id} missing titleBn`);
    assert.ok(album.titleEn, `Album ${album.id} missing titleEn`);
    assert.ok(album.images.length > 0);
  });
});
