# Shahzadpur Government College - Official Website Content Audit

**Audit Date**: October 18, 2026  
**Audited Source URL**: `https://shgc.edu.bd/`  
**Backend Data Source**: `https://web.academyims.com/api/indexdata` (Institute ID: `2404022`, User ID: `163`)  
**Design Reference**: North South University (`https://www.northsouth.edu/`)  

---

## 1. Executive Summary & Verification Findings

Shahzadpur Government College (শাহজাদপুর সরকারি কলেজ), located in Shahzadpur, Sirajganj, Bangladesh, was founded in 1964 and nationalized in November 1984. It operates under the Rajshahi Education Board for Higher Secondary (HSC Code: **3450**) and National University for undergraduate/degree programs (NU College Code: **2214**).

The audit covered:
- **Homepage and navigation hierarchy**: 12 top-level sections, 26 verified submenu modules (`/menus/*`), active marquee announcement banner, prayer time and weather widgets.
- **Notice Board**: **899 official notices** spanning from February 2024 to October 17, 2026. Every notice contains an authentic title, publication date, and linked official PDF attachment hosted on the institutional document repository (`https://web.academyims.com/storage/2404022/images/notice/*`).
- **Leadership**:
  - **Principal (অধ্যক্ষ)**: প্রফেসর মোঃ আব্দুর রাজ্জাক (BCS ID: 00015576, Department: Mathematics, Email: `razzaque015576@gmail.com`, Phone: `01718-372996`). Full official message preserved.
  - **Vice Principal (উপাধ্যক্ষ)**: প্রফেসর মোহাম্মদ ইয়াছিন আলী (BCS ID: 00008946, Department: Botany, Email: `eyasin101068@gmail.com`, Phone: `01716-688779`). Full official message preserved.
- **Faculty Directory**: Official document `pdf_2404022.pdf` (updated October 05, 2026) transcribed with 31 verified professors, associate professors, assistant professors, and lecturers across 12 academic departments.
- **Staff Directory**: Official document `PDF_2404022.pdf` (updated October 08, 2026) transcribed with 36 verified personnel (12 Regular/Seniority cadre, 22 Master Roll, 2 College Mosque staff).
- **Institutional Documents**:
  - History of the College (কলেজের ইতিহাস)
  - Citizen Charter (`Citizen_Charter._2404022.pdf`)
  - Teaching Permission & Recognition (`PDF_2404022.pdf`)
  - Science GPA Test Internal Examination Results (`Science_Gpa_test_2024_2404022.pdf`)
  - Student Uniform Regulations (ছাত্র ও ছাত্রী পোশাক নির্দেশিকা)
- **Official Media Assets**:
  - Header Banner (`webheader_banner1729098053.webp`)
  - Footer Banner (`webfooter_banner1714123550.webp`)
  - Slider 1 (`slider_1707410875.webp`) & Slider 2 (`slider_1707410956.webp`)
  - Principal Official Photograph (`অধ্যক্ষ_1730096756.webp`)
  - Vice Principal Official Photograph (`উপাধ্যক্ষ_1708240234.webp`)
  - Campus Photo Albums (Campus grounds, Rose garden inspection with Principal, Pahela Baishakh 1432 cultural rally)
  - Official National Anthem Audio (`national_anthem-93c55a3e.mp3`)
- **External Portals Verified**:
  - Directorate of Secondary and Higher Education (DSHE): `https://dshe.gov.bd/`
  - Ministry of Education (SHED): `https://shed.gov.bd/`
  - Rajshahi Education Board: `https://rajshahieducationboard.gov.bd/`
  - National University Bangladesh: `https://www.nu.ac.bd`
  - Prime Minister's Education Assistance Trust (PMEAT): `http://www.pmeat.gov.bd/`
  - Bangladesh Public Service Commission (BPSC): `https://bpsc.gov.bd/`
  - Online Fees Payment: `https://pay.academyims.com`
  - Student Portal: `https://live.academyims.com/Student_Portal`
  - Official Facebook Group: `https://www.facebook.com/groups/shahzadpurgovernmentcollege`

---

## 2. Content Inventory Statistics

| Category | Discovered Items | Verified Items | Migrated | Status |
|---|---|---|---|---|
| Institutional Information & History | 6 | 6 | 6 | Completed |
| College Leadership & Administration | 4 | 4 | 4 | Completed |
| Faculty Members (Teacher Directory) | 31 | 31 | 31 | Completed |
| Non-Teaching Staff | 36 | 36 | 36 | Completed |
| Academic Information & Programs | 5 | 5 | 5 | Completed |
| Admission Information & Portals | 4 | 4 | 4 | Completed |
| Student Services & Uniform | 4 | 4 | 4 | Completed |
| Examination Results & Records | 3 | 3 | 3 | Completed |
| Co-curricular (Red Crescent, Scout, BNCC) | 3 | 3 | 3 | Completed |
| Official Notices | 899 | 899 | 899 | Completed (Searchable, Filtered, Paginated) |
| Downloadable Forms & Documents | 8 | 8 | 8 | Completed |
| Gallery Albums & Campus Photos | 4 | 4 | 4 | Completed |
| External Educational Portals | 8 | 8 | 8 | Completed |

---

## 3. Migration Checklist

- [x] Extract full database payload from live API (`web.academyims.com/api/indexdata`)
- [x] Download and transcribe official teacher directory scan (`pdf_2404022.pdf`)
- [x] Download and decode official staff seniority schedule (`PDF_2404022.pdf`)
- [x] Download Citizen Charter and Internal Results PDFs
- [x] Verify image CDN endpoints for sliders, banners, and leadership photos
- [x] Create structured content inventory (`content-inventory.csv`)
- [x] Map all 26 `/menus/*` endpoints to structured routes
- [x] Preserve original Bengali texts with authentic punctuation and typography
- [x] Build North South University-inspired modern layout and information architecture
- [x] Implement search, department filtering, pagination, and document download capabilities
- [x] Implement protected Admin CMS for notice and faculty management
- [x] Document gaps and pending items in `CONTENT_GAPS.md`
