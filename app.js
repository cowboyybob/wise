// letnie
const summerProgramsData = [
  {
    id: 1,
    name: "YYS (Yale Summer Session)",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    priority: "3 - Medium-High",
    isTopChoice: false,
    category: "business",
    website: "https://summer.yale.edu/",
    applyUrl: "https://apply.summer.yale.edu/account/register?r=https%3a%2f%2fapply.summer.yale.edu%2fapply%2f",
    acceptanceRate: "35–40%",
    deadline: "1 May (Rolling Admission)",
    country: "🇺🇸 U.S.A",
    city: "New Haven",
    field: "Law, Business, and Teaching for visiting & international students",
    grade: "10–11 классы",
    age: "16–18 лет",
    format: "Residential",
    duration: "2 weeks",
    dates: "Session A: May 25 – June 26, 2026 | Session B: June 29 – July 31, 2026",
    feeWaiver: "Have Fee Waiver ($80 fee)",
    financialAid: "Yes",
    cost: "$7,500 USD",
    testScores: "TOEFL: 100 min; IELTS: 7.0 min; Duolingo: 120 min; Cambridge: 185 min",
    notes: "Rolling admission — подавайте заявку как можно раньше."
  },
  {
    id: 2,
    name: "YYGS (Yale Young Global Scholars)",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "stem",
    website: "https://globalscholars.yale.edu/",
    applyUrl: "https://apply.globalscholars.yale.edu/apply/",
    acceptanceRate: "15–20%",
    deadline: "Oct 15, 2026 (EA) / Jan 6, 2027 (RD)",
    country: "🇺🇸 U.S.A",
    city: "New Haven",
    field: "Innovations in Science & Tech (IST), Politics, Law & Economics (PLE), Solving Global Challenges (SGC)",
    grade: "10–11 классы",
    age: "16–18 лет",
    format: "Residential",
    duration: "2 weeks",
    dates: "Session I: June 20 – July 2 | Session II: July 4 – July 16 | Session III: July 18 – July 30",
    feeWaiver: "Have Fee Waiver ($85 EA / $100 RD)",
    financialAid: "Yes (до 100% на обучение)",
    cost: "$7,500 USD",
    testScores: "N/A (опционально)",
    notes: "Требуется школьный транскрипт, 1 рекомендация, список активностей, эссе 400 слов и 200 слов."
  },
  {
    id: 3,
    name: "Telluride Association Summer Seminar (TASS)",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "humanities",
    website: "https://tellurideassociation.org/",
    applyUrl: "https://tellurideassociation.org/our-programs/high-school-students/",
    acceptanceRate: "3–5%",
    deadline: "Oct 15, 2026 – Dec 3, 2026",
    country: "🇺🇸 U.S.A",
    city: "Cornell, Maryland, Boston Univ, Michigan",
    field: "Humanities & Social Sciences; Critical Black Studies (TASS-CBS) / Anti-Oppressive Studies (TASS-AOS)",
    grade: "9–11 классы",
    age: "15–17 лет",
    format: "Residential",
    duration: "5 weeks",
    dates: "June 21 – July 25, 2026",
    feeWaiver: "Program is Free",
    financialAid: "Yes — 100% Полное покрытие",
    cost: "Free Fully (Бесплатно)",
    testScores: "N/A",
    notes: "Проживание, питание, книги и при необходимости перелет покрываются полностью. Есть интервью."
  },
  {
    id: 4,
    name: "SSP (Summer Science Program)",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "stem",
    website: "https://ssp.org/",
    applyUrl: "https://ssp.org/remind-me/",
    acceptanceRate: "4–5%",
    deadline: "Зима (Январь–Февраль)",
    country: "🇺🇸 U.S.A",
    city: "Partner Universities across USA",
    field: "Astrophysics, Biochemistry, Genomics",
    grade: "11 класс",
    age: "15–18 лет",
    format: "Residential",
    duration: "5–6 weeks",
    dates: "Mid-June to Late July / Early August",
    feeWaiver: "Free Application / Have Fee Waiver",
    financialAid: "Yes (включая грант на перелет)",
    cost: "$11,800 USD",
    testScores: "N/A",
    notes: "Одна из самых престижных научных программ США с полной финансовой поддержкой need-blind."
  },
  {
    id: 5,
    name: "RSI (Research Science Institute)",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "stem",
    website: "https://www.cee.org/programs/research-science-institute",
    applyUrl: "https://www.cee.org/programs/research-science-institute",
    acceptanceRate: "2.5–3%",
    deadline: "December 10",
    country: "🇺🇸 U.S.A",
    city: "Cambridge (MIT)",
    field: "STEM, Natural Sciences, Engineering & Math Research",
    grade: "11 класс",
    age: "16–18 лет",
    format: "Residential",
    duration: "6 weeks",
    dates: "Июнь – Август",
    feeWaiver: "Program is Free",
    financialAid: "Yes (100% Free)",
    cost: "Free (Полный грант для всех участников)",
    testScores: "Рекомендуются высокие баллы SAT/ACT",
    notes: "Проводится на базе MIT. Самая селективная научная программа в мире для старшеклассников."
  },
  {
    id: 6,
    name: "MITES (MIT Introduction to Tech, Engineering & Science)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "stem",
    website: "https://mites.mit.edu/",
    applyUrl: "https://mites.mit.edu/discover-mites/mites-summer/",
    acceptanceRate: "3–5%",
    deadline: "1 февраля",
    country: "🇺🇸 U.S.A",
    city: "Cambridge (MIT)",
    field: "STEM, Engineering, Computer Science",
    grade: "11 класс",
    age: "16–17 лет",
    format: "Residential / Hybrid",
    duration: "6 weeks",
    dates: "Конец июня – начало августа",
    feeWaiver: "Program is Free",
    financialAid: "Yes (100% Free)",
    cost: "Free (Бесплатно)",
    testScores: "Опционально",
    notes: "Шестинедельная программа в MIT, все расходы на обучение и проживание покрываются."
  },
  {
    id: 7,
    name: "Wharton Global Youth Program",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    priority: "2 - High Priority",
    isTopChoice: false,
    category: "business",
    website: "https://globalyouth.wharton.upenn.edu/",
    applyUrl: "https://globalyouth.wharton.upenn.edu/application-information/",
    acceptanceRate: "10–20%",
    deadline: "Открытие в ноябре",
    country: "🇺🇸 U.S.A",
    city: "Philadelphia (UPenn)",
    field: "Business, Finance, Management, Entrepreneurship",
    grade: "9–11 классы",
    age: "14–18 лет",
    format: "Hybrid / Residential",
    duration: "1–3 weeks",
    dates: "Июнь – Август",
    feeWaiver: "Have Fee Waiver",
    financialAid: "Yes",
    cost: "$11,899 USD",
    testScores: "TOEFL / IELTS / Duolingo",
    notes: "Программы бизнес-школы Wharton при University of Pennsylvania."
  },
  {
    id: 8,
    name: "UChicago Summer Session",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
    priority: "2 - High Priority",
    isTopChoice: false,
    category: "broad",
    website: "https://summer.uchicago.edu/",
    applyUrl: "https://summer.uchicago.edu/Admissions",
    acceptanceRate: "15–25%",
    deadline: "Зима – Весна (несколько раундов)",
    country: "🇺🇸 U.S.A",
    city: "Chicago",
    field: "Broad Academic Exploration, Economics, Arts & Sciences",
    grade: "9–11 классы",
    age: "14–18 лет",
    format: "Hybrid / Residential",
    duration: "3–7 weeks",
    dates: "Июнь – Август",
    feeWaiver: "Have Fee Waiver",
    financialAid: "Yes",
    cost: "$9,300 USD",
    testScores: "Опционально / Сертификат английского",
    notes: "Позволяет погрузиться в исследовательскую культуру Чикагского университета."
  },
  {
    id: 9,
    name: "Fordham Pre-College Programs",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=900&q=80",
    priority: "2 - High Priority",
    isTopChoice: false,
    category: "broad",
    website: "https://www.fordham.edu/summer-session/pre-college-programs/",
    applyUrl: "https://www.fordham.edu/summer-session/pre-college-programs/college-courses-for-high-school-students/apply/",
    acceptanceRate: "40–60%",
    deadline: "Открытие в декабре",
    country: "🇺🇸 U.S.A",
    city: "New York",
    field: "Broad Academic Exploration, Media, Finance, Law",
    grade: "10–11 классы",
    age: "13–17 лет",
    format: "Hybrid / Residential / Commuter",
    duration: "3–4 weeks",
    dates: "Июнь – Июль",
    feeWaiver: "Have Fee Waiver",
    financialAid: "Yes",
    cost: "$2,086 – $6,173 USD",
    testScores: "Сертификат английского языка",
    notes: "Обучение в самом центре Нью-Йорка с возможностью получить кредиты колледжа."
  },
  {
    id: 10,
    name: "St. John’s College Summer Academy",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
    priority: "2 - High Priority",
    isTopChoice: false,
    category: "humanities",
    website: "https://www.stjohns.edu/academics/summer-academy",
    applyUrl: "https://www.stjohns.edu/academics/summer-academy",
    acceptanceRate: "50–70%",
    deadline: "Весна (Rolling)",
    country: "🇺🇸 U.S.A",
    city: "Annapolis & Santa Fe",
    field: "Liberal Arts, Philosophy, Great Books",
    grade: "10–11 классы",
    age: "15–18 лет",
    format: "Residential",
    duration: "1–2 weeks",
    dates: "Июнь – Июль",
    feeWaiver: "Have Fee Waiver",
    financialAid: "Yes",
    cost: "$1,400 USD",
    testScores: "N/A",
    notes: "Семинарский формат обучения по великим философским и литературным трудам."
  },
  {
    id: 11,
    name: "NYU Shanghai Summer Academy",
    image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "broad",
    website: "https://shanghai.nyu.edu/academics/summer-academy",
    applyUrl: "https://apply.globalstudy.nyu.edu/portal/nyu_studyaway",
    acceptanceRate: "30–50%",
    deadline: "Весна 2027",
    country: "🇨🇳 China",
    city: "Shanghai",
    field: "Broad Academic Exploration, Global Studies, Innovation",
    grade: "10–11 классы",
    age: "15–18 лет",
    format: "Residential / Commuter",
    duration: "2–6 weeks",
    dates: "Session I: May 17 – June 25, 2027 | Session II: June 28 – August 6, 2027",
    feeWaiver: "Have Fee Waiver",
    financialAid: "Yes",
    cost: "$6,152 USD",
    testScores: "Проводится интервью",
    notes: "Международный кампус Нью-Йоркского университета в Шанхае."
  },
  {
    id: 12,
    name: "NYU Abu Dhabi High School Programs",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "broad",
    website: "https://nyuad.nyu.edu/en/apply/undergraduate/why-nyu-abu-dhabi/nyuad-programs-for-high-school-students.html",
    applyUrl: "https://nyuad.nyu.edu/en/apply/undergraduate/why-nyu-abu-dhabi/nyuad-programs-for-high-school-students.html",
    acceptanceRate: "30–50%",
    deadline: "Nov 2 – Nov 8, 2026",
    country: "🇦🇪 UAE",
    city: "Abu Dhabi",
    field: "Broad Academic Exploration, Leadership, STEM & Arts",
    grade: "10–11 классы",
    age: "15–18 лет",
    format: "Residential",
    duration: "2–6 weeks",
    dates: "First week of June, 2027",
    feeWaiver: "Have Fee Waiver",
    financialAid: "Yes",
    cost: "$19,000 – $23,000 USD (доступны гранты)",
    testScores: "Проводится интервью",
    notes: "Академическая подготовка на кампусе NYU Abu Dhabi."
  }
];

//zimnie
const winterProgramsData = [
  {
    id: 101,
    name: "Harvard Mun & Winter Leadership Institute",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "business",
    website: "https://www.harvardmun.org/",
    applyUrl: "https://www.harvardmun.org/apply",
    acceptanceRate: "20–30%",
    deadline: "Октябрь – Ноябрь",
    country: "🇺🇸 U.S.A",
    city: "Boston / Cambridge",
    field: "International Relations, Diplomacy, Public Policy & Leadership",
    grade: "9–11 классы",
    age: "14–18 лет",
    format: "In-Person (Winter)",
    duration: "1 week (January)",
    dates: "Конец января 2027",
    feeWaiver: "Доступны скидки для делегаций",
    financialAid: "Partial Scholarships",
    cost: "$1,200 USD",
    testScores: "Английский B2–C1",
    notes: "Зимняя конференция и дипломатический интенсив в Бостоне."
  },
  {
    id: 102,
    name: "Pioneer Academics — Winter-Spring Research Term",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "stem",
    website: "https://pioneeracademics.com/",
    applyUrl: "https://pioneeracademics.com/apply/",
    acceptanceRate: "12–18%",
    deadline: "Декабрь 2026",
    country: "🌐 Global / USA Faculty",
    city: "Online with US Professors",
    field: "STEM, Computer Science, Economics, Humanities Research",
    grade: "10–11 классы",
    age: "15–18 лет",
    format: "Online Research",
    duration: "10 weeks (Winter Term)",
    dates: "Февраль – Май",
    feeWaiver: "Free Application",
    financialAid: "Yes (Need-based Grants до 100%)",
    cost: "$6,850 USD (покрывается грантом)",
    testScores: "Интервью при отборе",
    notes: "Написание собственной научной работы под руководством профессоров топовых вузов США с получением кредитов колледжа."
  },
  {
    id: 103,
    name: "Oxford Royale Winter Academic Enrichment",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    priority: "2 - High Priority",
    isTopChoice: false,
    category: "humanities",
    website: "https://www.oxford-royale.com/",
    applyUrl: "https://www.oxford-royale.com/",
    acceptanceRate: "35–45%",
    deadline: "Ноябрь 2026",
    country: "🇬🇧 UK / Europe",
    city: "Oxford & Online",
    field: "Law, Philosophy, Literature, Future Global Leaders",
    grade: "9–11 классы",
    age: "14–18 лет",
    format: "Hybrid / Winter Intensive",
    duration: "2 weeks",
    dates: "Январь",
    feeWaiver: "По запросу",
    financialAid: "Merit Scholarships",
    cost: "£2,995",
    testScores: "B2+",
    notes: "Зимние академические модули в стиле оксфордских тьюториалов."
  },
  {
    id: 104,
    name: "Stanford Pre-Collegiate Winter University-Level Math & Physics",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80",
    priority: "1 - Top Choice",
    isTopChoice: true,
    category: "stem",
    website: "https://spcs.stanford.edu/programs",
    applyUrl: "https://spcs.stanford.edu/programs",
    acceptanceRate: "15–25%",
    deadline: "Ноябрь 2026",
    country: "🇺🇸 U.S.A",
    city: "Stanford Online",
    field: "Advanced Mathematics, Quantum Physics, Theoretical CS",
    grade: "9–11 классы",
    age: "14–18 лет",
    format: "Winter Semester",
    duration: "12 weeks (Winter)",
    dates: "Январь – Март",
    feeWaiver: "Have Fee Waiver",
    financialAid: "Yes",
    cost: "$1,700 USD",
    testScores: "Транскрипт по математике/физике",
    notes: "Зимний семестр университетского уровня от Стэнфордского университета."
  }
];



//gen
function createProgramCardHTML(program) {
  return `
    <article class="program-card" data-category="${program.category}" data-top="${program.isTopChoice}">

      <!-- левая часть: информация и кнопки -->
      <div class="card-info-side">
        <div class="card-top-badges">
          <span class="priority-badge ${program.isTopChoice ? 'top-choice' : ''}">
            ${program.isTopChoice ? '⭐ ' : ''}${program.priority}
          </span>
          <span class="aid-badge">FinAid: ${program.financialAid}</span>
        </div>

        <span class="card-location">${program.country} • ${program.city}</span>
        <h3 class="card-title">${program.name}</h3>
        <p class="card-field">${program.field}</p>

        <ul class="card-details">
          <li><strong>Acceptance:</strong> ${program.acceptanceRate}</li>
          <li><strong>Класс:</strong> ${program.grade}</li>
          <li><strong>Длительность:</strong> ${program.duration}</li>
          <li><strong>Формат:</strong> ${program.format}</li>
          <li><strong>Дедлайн:</strong> ${program.deadline}</li>
          <li><strong>Стоимость:</strong> ${program.cost}</li>
        </ul>

        <div class="card-actions">
          <a href="${program.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-apply-now">
            Apply Now ↗
          </a>
          <a href="${program.website}" target="_blank" rel="noopener noreferrer" class="btn-visit-site">
            Сайт программы ↗
          </a>
          <button class="btn-details" onclick="openProgramModal(${program.id})">
            Подробнее
          </button>
        </div>
      </div>

      <!-- правая часть: фото программы -->
      <div class="card-image-side" data-label="${program.name.split(' ')[0]}">
        <img
          class="card-image"
          src="${program.image}"
          alt="${program.name}"
          loading="lazy"
          onerror="this.parentElement.classList.add('image-fallback'); this.remove();"
        />
      </div>
    </article>
  `;
}




document.addEventListener("DOMContentLoaded", () => {
  const summerGrid = document.getElementById("summerProgramsGrid");
  const winterGrid = document.getElementById("winterProgramsGrid");

  function renderSummerCatalog(filter = "all") {
    const filtered = summerProgramsData.filter((prog) => {
      if (filter === "all") return true;
      if (filter === "top") return prog.isTopChoice;
      return prog.category === filter;
    });

    summerGrid.innerHTML = filtered.length
      ? filtered.map(createProgramCardHTML).join("")
      : `<p style="grid-column: 1/-1; text-align:center; padding: 30px; color:#475569;">Программы не найдены.</p>`;
  }

  function renderWinterCatalog(filter = "all") {
    const filtered = winterProgramsData.filter((prog) => {
      if (filter === "all") return true;
      return prog.category === filter;
    });

    winterGrid.innerHTML = filtered.map(createProgramCardHTML).join("");
  }


  renderSummerCatalog();
  renderWinterCatalog();

  // Фильтр
  document.querySelectorAll("#summerFilters .filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#summerFilters .filter-tab").forEach((b) => b.classList.remove("active"));
        tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderSummerCatalog(filter);
    });
  });

  // Фильтр
  document.querySelectorAll("#winterFilters .filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#winterFilters .filter-tab").forEach((b) => b.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderWinterCatalog(filter);
    });
  });

  // модальное
  const modalOverlay = document.getElementById("programModalOverlay");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  modalCloseBtn.addEventListener("click", () => modalOverlay.classList.remove("open"));
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("open");
  });
});





function openProgramModal(programId) {
  const allPrograms = [...summerProgramsData, ...winterProgramsData];
  const program = allPrograms.find((p) => p.id === programId);
  if (!program) return;

  const modalBody = document.getElementById("modalBodyContent");
  const modalOverlay = document.getElementById("programModalOverlay");

  modalBody.innerHTML = `
    <span class="section-tag">${program.priority}</span>
    <h2 style="font-size: 1.6rem; margin-bottom: 6px;">${program.name}</h2>
    <p style="color: #475569; font-weight: 600;">${program.country} • ${program.city}</p>

    <ul class="modal-info-list">
      <li><strong>Направление (Field):</strong> ${program.field}</li>
      <li><strong>Процент зачисления (Acceptance Rate):</strong> ${program.acceptanceRate}</li>
      <li><strong>Дедлайн подачи:</strong> ${program.deadline}</li>
      <li><strong>Классы и возраст:</strong> ${program.grade} (${program.age})</li>
      <li><strong>Формат и длительность:</strong> ${program.format}, ${program.duration}</li>
      <li><strong>Даты проведения:</strong> ${program.dates}</li>
      <li><strong>Стоимость и FinAid:</strong> ${program.cost} | Financial Aid: ${program.financialAid} (${program.feeWaiver})</li>
      <li><strong>Требования к тестам / отбору:</strong> ${program.testScores}</li>
      <li><strong>Заметки (Notes):</strong> ${program.notes}</li>
    </ul>

    <div class="modal-links">
      <a href="${program.website}" target="_blank" rel="noopener noreferrer" class="primary-btn">
        Официальный сайт программы ↗
      </a>
      <a href="${program.applyUrl}" target="_blank" rel="noopener noreferrer" class="secondary-btn">
        Портал подачи заявки (Apply Now) ↗
      </a>
    </div>
  `;

  modalOverlay.classList.add("open");
}