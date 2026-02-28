/* ============================================
   선물백과 - 공통 JavaScript
   ============================================ */

// 기사 데이터베이스
const ARTICLES = [
  {
    id: 'valentine-gift-guide',
    title: '2026 발렌타인데이 선물 추천 완벽 가이드',
    excerpt: '여자친구, 아내, 썸녀를 위한 센스있는 발렌타인데이 선물을 예산별, 취향별로 추천해드립니다.',
    category: '기념일',
    tags: ['발렌타인데이', '연인선물'],
    date: '2026-01-15',
    emoji: '💝',
    url: '/articles/valentine-gift-guide.html'
  },
  {
    id: 'birthday-gift-for-girlfriend',
    title: '여자친구 생일 선물 추천 TOP 15',
    excerpt: '여자친구 생일에 뭘 사줘야 할지 고민되시나요? 연령대와 취향별 인기 선물을 엄선했습니다.',
    category: '생일',
    tags: ['생일선물', '여자친구'],
    date: '2026-01-20',
    emoji: '🎂',
    url: '/articles/birthday-gift-for-girlfriend.html'
  },
  {
    id: 'anniversary-gift-guide',
    title: '커플 기념일 선물 완벽 가이드',
    excerpt: '100일, 200일, 1주년... 기념일마다 어떤 선물이 좋을까요? 기간별 맞춤 추천을 확인하세요.',
    category: '기념일',
    tags: ['기념일', '커플선물'],
    date: '2026-01-25',
    emoji: '💕',
    url: '/articles/anniversary-gift-guide.html'
  },
  {
    id: 'parents-gift-guide',
    title: '부모님 선물 추천 - 효도 선물 가이드',
    excerpt: '어버이날, 생신, 명절에 부모님께 드릴 감동적인 선물을 상황별로 추천합니다.',
    category: '가족',
    tags: ['부모님선물', '효도선물'],
    date: '2026-02-01',
    emoji: '🙏',
    url: '/articles/parents-gift-guide.html'
  },
  {
    id: 'housewarming-gift-guide',
    title: '집들이 선물 센스있게 고르는 법',
    excerpt: '실용적이면서도 센스있는 집들이 선물, 가격대별로 엄선한 추천 리스트를 확인하세요.',
    category: '축하',
    tags: ['집들이', '실용선물'],
    date: '2026-02-05',
    emoji: '🏠',
    url: '/articles/housewarming-gift-guide.html'
  },
  {
    id: 'graduation-gift-ideas',
    title: '졸업 선물 아이디어 - 새 출발을 축하하며',
    excerpt: '초등학교부터 대학교까지, 졸업생에게 의미있는 선물을 단계별로 추천합니다.',
    category: '축하',
    tags: ['졸업선물', '학생선물'],
    date: '2026-02-08',
    emoji: '🎓',
    url: '/articles/graduation-gift-ideas.html'
  },
  {
    id: 'wedding-gift-guide',
    title: '결혼 선물 예산별 추천 가이드',
    excerpt: '축의금 외에 결혼 선물을 따로 준비하고 싶다면? 관계별, 예산별 결혼 선물을 추천합니다.',
    category: '축하',
    tags: ['결혼선물', '축하선물'],
    date: '2026-02-10',
    emoji: '💒',
    url: '/articles/wedding-gift-guide.html'
  },
  {
    id: 'christmas-gift-ideas',
    title: '크리스마스 선물 아이디어 모음',
    excerpt: '연인, 친구, 가족까지! 대상별 크리스마스 선물 아이디어를 총정리했습니다.',
    category: '기념일',
    tags: ['크리스마스', '연말선물'],
    date: '2026-02-12',
    emoji: '🎄',
    url: '/articles/christmas-gift-ideas.html'
  },
  {
    id: 'budget-gift-ideas',
    title: '가격대별 센스있는 선물 추천',
    excerpt: '1만원부터 10만원 이상까지, 예산에 맞는 최고의 선물을 찾아보세요.',
    category: '가이드',
    tags: ['예산별선물', '가성비'],
    date: '2026-02-14',
    emoji: '💰',
    url: '/articles/budget-gift-ideas.html'
  },
  {
    id: 'gift-wrapping-tips',
    title: '선물 포장 꿀팁 - 감동을 두 배로',
    excerpt: '예쁜 포장은 선물의 가치를 높여줍니다. 초보자도 쉽게 따라할 수 있는 포장 노하우를 알려드립니다.',
    category: '가이드',
    tags: ['선물포장', '꿀팁'],
    date: '2026-02-16',
    emoji: '🎀',
    url: '/articles/gift-wrapping-tips.html'
  },
  {
    id: 'handmade-gift-ideas',
    title: '핸드메이드 선물 아이디어 12가지',
    excerpt: '세상에 하나뿐인 정성 가득한 핸드메이드 선물로 특별한 마음을 전해보세요.',
    category: '가이드',
    tags: ['핸드메이드', 'DIY선물'],
    date: '2026-02-18',
    emoji: '✂️',
    url: '/articles/handmade-gift-ideas.html'
  },
  {
    id: 'chuseok-gift-guide',
    title: '추석 선물 세트 추천 - 명절 효도 가이드',
    excerpt: '매년 고민되는 추석 선물! 부모님, 시댁, 처가 등 받는 분별 맞춤 추천을 확인하세요.',
    category: '가족',
    tags: ['추석선물', '명절선물'],
    date: '2026-02-20',
    emoji: '🌕',
    url: '/articles/chuseok-gift-guide.html'
  },
  {
    id: 'couple-100days-gift',
    title: '커플 100일 선물 추천 - 의미있는 선택',
    excerpt: '사귀고 처음 맞는 100일! 부담되지 않으면서도 의미있는 선물 아이디어를 모았습니다.',
    category: '기념일',
    tags: ['100일선물', '커플선물'],
    date: '2026-02-22',
    emoji: '💑',
    url: '/articles/couple-100days-gift.html'
  },
  {
    id: 'friend-birthday-gift',
    title: '친구 생일 선물 추천 - 우정을 담아서',
    excerpt: '절친, 회사 동료, 지인까지! 관계별 적정 예산과 센스있는 선물을 추천합니다.',
    category: '생일',
    tags: ['친구선물', '생일선물'],
    date: '2026-02-24',
    emoji: '🎉',
    url: '/articles/friend-birthday-gift.html'
  },
  {
    id: 'self-gift-ideas',
    title: '나를 위한 선물 - 셀프 기프팅 트렌드',
    excerpt: '열심히 사는 나에게 주는 보상! 요즘 뜨는 셀프 기프팅 아이디어를 소개합니다.',
    category: '가이드',
    tags: ['셀프선물', '자기보상'],
    date: '2026-02-26',
    emoji: '🎁',
    url: '/articles/self-gift-ideas.html'
  }
];

// 카테고리 목록
const CATEGORIES = ['전체', '기념일', '생일', '가족', '축하', '가이드'];

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  initTheme();
  initMobileMenu();

  // 홈페이지 기사 목록 렌더링
  if (document.getElementById('articles-container')) {
    renderArticles();
    initCategoryFilter();
  }

  // 메인 맞춤 추천기
  if (document.getElementById('rc-submit')) {
    initMainRecommender();
  }

  // 기사 내 발렌타인 추천기 (레거시)
  if (document.getElementById('recommend-btn')) {
    initRecommender();
  }
});

/* ===================== NAVIGATION ===================== */
function renderNav() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) return;

  const isSubpage = navPlaceholder.dataset.root === 'true' ? '' : '/';
  const prefix = window.location.pathname.includes('/articles/') ? '..' : '.';

  navPlaceholder.outerHTML = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="${prefix}/index.html" class="nav-logo">선물백과</a>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="${prefix}/index.html">홈</a></li>
          <li><a href="${prefix}/articles/valentine-gift-guide.html">발렌타인데이</a></li>
          <li><a href="${prefix}/articles/birthday-gift-for-girlfriend.html">생일선물</a></li>
          <li><a href="${prefix}/articles/budget-gift-ideas.html">예산별추천</a></li>
          <li><a href="${prefix}/about.html">소개</a></li>
          <li><a href="${prefix}/contact.html">문의</a></li>
        </ul>
        <div class="nav-right">
          <button class="theme-toggle" id="theme-toggle" aria-label="다크 모드 전환">🌙</button>
          <button class="hamburger" id="hamburger" aria-label="메뉴 열기">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `;
}

/* ===================== FOOTER ===================== */
function renderFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  const prefix = window.location.pathname.includes('/articles/') ? '..' : '.';

  footerPlaceholder.outerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-section">
          <h4>선물백과</h4>
          <p>대한민국 No.1 선물 추천 가이드. 모든 기념일과 특별한 순간을 위한 센스있는 선물 정보를 제공합니다.</p>
          <p>문의: giftpedia.kr@gmail.com</p>
        </div>
        <div class="footer-section">
          <h4>카테고리</h4>
          <ul>
            <li><a href="${prefix}/articles/valentine-gift-guide.html">발렌타인데이</a></li>
            <li><a href="${prefix}/articles/birthday-gift-for-girlfriend.html">생일 선물</a></li>
            <li><a href="${prefix}/articles/parents-gift-guide.html">부모님 선물</a></li>
            <li><a href="${prefix}/articles/budget-gift-ideas.html">예산별 추천</a></li>
            <li><a href="${prefix}/articles/gift-wrapping-tips.html">선물 포장 팁</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>안내</h4>
          <ul>
            <li><a href="${prefix}/about.html">사이트 소개</a></li>
            <li><a href="${prefix}/contact.html">문의하기</a></li>
            <li><a href="${prefix}/privacy.html">개인정보처리방침</a></li>
            <li><a href="${prefix}/terms.html">이용약관</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 선물백과(GiftPedia). All rights reserved.</p>
        <p class="disclaimer">본 사이트는 정보 제공을 목적으로 하며, 일부 링크를 통해 구매 시 파트너스 활동의 일환으로 수수료를 제공받을 수 있습니다.</p>
      </div>
    </footer>
  `;
}

/* ===================== THEME ===================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') themeToggleBtn.textContent = '☀️';
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }

  themeToggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggleBtn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.textContent = '☀️';
    }
  });
}

/* ===================== MOBILE MENU ===================== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav')) {
      navMenu.classList.remove('active');
    }
  });
}

/* ===================== ARTICLES GRID (HOME) ===================== */
function renderArticles(category) {
  const container = document.getElementById('articles-container');
  if (!container) return;

  const filtered = (!category || category === '전체')
    ? ARTICLES
    : ARTICLES.filter(a => a.category === category);

  container.innerHTML = filtered.map(article => `
    <div class="article-card">
      <div class="card-thumb">${article.emoji}</div>
      <div class="card-body">
        <span class="card-category">${article.category}</span>
        <h3 class="card-title"><a href="${article.url}">${article.title}</a></h3>
        <p class="card-excerpt">${article.excerpt}</p>
        <div class="card-meta">
          <span>${article.date}</span>
          <span class="card-tag">${article.tags[0]}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function initCategoryFilter() {
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderArticles(tab.dataset.category);
    });
  });
}

/* ===================== SIDEBAR ===================== */
function renderSidebar() {
  const sidebar = document.getElementById('sidebar-placeholder');
  if (!sidebar) return;

  const prefix = window.location.pathname.includes('/articles/') ? '..' : '.';
  const popular = ARTICLES.slice(0, 5);

  sidebar.outerHTML = `
    <aside class="sidebar">
      <div class="sidebar-widget">
        <h3>인기 글</h3>
        <ol class="popular-list">
          ${popular.map((a, i) => `
            <li><a href="${prefix}${a.url}"><span class="popular-num">${i + 1}</span>${a.title}</a></li>
          `).join('')}
        </ol>
      </div>
      <div class="sidebar-widget">
        <h3>태그</h3>
        <div class="tag-cloud">
          <a href="${prefix}/articles/valentine-gift-guide.html">발렌타인데이</a>
          <a href="${prefix}/articles/birthday-gift-for-girlfriend.html">생일선물</a>
          <a href="${prefix}/articles/parents-gift-guide.html">효도선물</a>
          <a href="${prefix}/articles/budget-gift-ideas.html">가성비</a>
          <a href="${prefix}/articles/gift-wrapping-tips.html">포장팁</a>
          <a href="${prefix}/articles/handmade-gift-ideas.html">핸드메이드</a>
          <a href="${prefix}/articles/self-gift-ideas.html">셀프기프팅</a>
          <a href="${prefix}/articles/housewarming-gift-guide.html">집들이</a>
        </div>
      </div>
    </aside>
  `;
}

// 기사 페이지에서 사이드바 렌더링 호출
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('sidebar-placeholder')) {
    renderSidebar();
  }
});

/* ===================== MAIN RECOMMENDER ===================== */
function initMainRecommender() {
  const submitBtn = document.getElementById('rc-submit');
  const retryBtn = document.getElementById('rc-retry');
  const errorEl = document.getElementById('rc-error');
  const resultsSection = document.getElementById('rc-results');
  const resultsGrid = document.getElementById('rc-results-grid');
  const resultsTitle = document.getElementById('rc-results-title');

  const S = (q) => `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(q)}`;

  // 금액대 정의
  const BUDGETS = [
    { key: 'under1', label: '1만원 이하', tag: '가성비', css: 'budget-low' },
    { key: '1to3',   label: '1~3만원',   tag: '센스있는', css: 'budget-mid' },
    { key: '3to5',   label: '3~5만원',   tag: '인기',     css: 'budget-high' },
    { key: '5to10',  label: '5~10만원',  tag: '프리미엄', css: 'budget-premium' },
    { key: 'over10', label: '10만원 이상', tag: '럭셔리',  css: 'budget-luxury' }
  ];

  // ===== 대규모 선물 데이터베이스 =====
  const GIFTS = [
    // ── 1만원 이하 ──
    { name: "스타벅스 음료 쿠폰", desc: "누구나 부담없이 즐기는 커피 한 잔", reason: "가격 부담 없이 마음을 전하기 가장 좋은 선물. 카카오톡으로 간편하게 보낼 수 있어 온라인 선물로도 최적입니다.", budget: "under1", recipient: ["girlfriend","boyfriend","friend","colleague"], occasion: ["birthday","thankyou","nooccasion","valentine","christmas"], age: ["10s","20s","30s","40s","50s"], interest: ["food","tech","beauty","interior","health"], link: S("스타벅스 기프트카드") },
    { name: "고급 입욕제 세트", desc: "하루의 피로를 녹이는 향기로운 목욕", reason: "가벼운 가격이지만 '나를 위한 시간'을 선물하는 센스있는 아이템입니다.", budget: "under1", recipient: ["girlfriend","friend","colleague"], occasion: ["birthday","thankyou","nooccasion","christmas"], age: ["20s","30s","40s"], interest: ["beauty","interior"], link: S("입욕제 선물세트") },
    { name: "편의점 상품권 1만원", desc: "실용 100%, 호불호 0%의 선물", reason: "학생에게는 가장 현실적으로 기쁜 선물입니다. 편의점에서 간식을 실컷 고르는 재미까지!", budget: "under1", recipient: ["friend","child"], occasion: ["birthday","graduation","thankyou","nooccasion"], age: ["10s","20s"], interest: ["food","tech","beauty","interior","health"], link: S("편의점 상품권") },
    { name: "프리미엄 핸드크림", desc: "매일 쓰는 보습템, 센스있는 소품", reason: "향이 좋은 핸드크림은 실용적이면서도 기분 좋은 소소한 럭셔리를 선사합니다.", budget: "under1", recipient: ["girlfriend","friend","colleague"], occasion: ["birthday","thankyou","nooccasion","christmas","valentine"], age: ["20s","30s","40s","50s"], interest: ["beauty"], link: S("프리미엄 핸드크림 선물") },
    { name: "감성 메시지 엽서 + 캔들", desc: "따뜻한 마음을 전하는 감성 세트", reason: "말로 하기 어려운 진심을 예쁜 엽서와 은은한 캔들로 전달할 수 있습니다.", budget: "under1", recipient: ["girlfriend","friend"], occasion: ["birthday","thankyou","nooccasion","valentine","anniversary"], age: ["10s","20s","30s"], interest: ["interior"], link: S("감성캔들 엽서 세트") },
    { name: "건강 에너지바 선물세트", desc: "건강을 챙기는 맛있는 간식", reason: "운동하는 분께 실용적이면서 건강까지 생각한 선물입니다.", budget: "under1", recipient: ["boyfriend","friend","colleague","parents"], occasion: ["birthday","thankyou","nooccasion"], age: ["20s","30s","40s","50s"], interest: ["health"], link: S("에너지바 프로틴바 선물세트") },

    // ── 1~3만원 ──
    { name: "올리브영 기프트카드 3만원", desc: "취향대로 고르는 뷰티 쇼핑 찬스", reason: "화장품은 취향을 타기 때문에 직접 고를 수 있는 상품권이 실패 확률 0%의 선택입니다.", budget: "1to3", recipient: ["girlfriend","friend"], occasion: ["birthday","valentine","christmas","thankyou","nooccasion"], age: ["10s","20s","30s"], interest: ["beauty"], link: S("올리브영 기프트카드 3만원") },
    { name: "탬버린즈 핸드크림", desc: "힙한 패키징과 독보적인 향기", reason: "스몰 럭셔리의 정석. 가벼운 가격이지만 고급스러운 느낌을 줘 만족도가 매우 높습니다.", budget: "1to3", recipient: ["girlfriend","friend","colleague"], occasion: ["birthday","valentine","thankyou","nooccasion","christmas"], age: ["20s","30s"], interest: ["beauty"], link: S("탬버린즈 핸드크림") },
    { name: "양키캔들 스몰자 + 워머", desc: "은은한 분위기의 향기 인테리어", reason: "불을 붙이지 않아 안전하고, 은은한 조명 역할까지. 방 꾸미기를 좋아하는 분께 완벽합니다.", budget: "1to3", recipient: ["girlfriend","friend","colleague"], occasion: ["housewarming","birthday","christmas","nooccasion"], age: ["20s","30s","40s"], interest: ["interior"], link: S("양키캔들 스몰자 워머 세트") },
    { name: "고디바 초콜릿 골드 컬렉션", desc: "프리미엄 브랜드의 달콤한 감동", reason: "명품 초콜릿의 패키지와 맛 모두 선물의 격을 올려줍니다. 기념일에 특히 어울립니다.", budget: "1to3", recipient: ["girlfriend","boyfriend","friend","colleague","parents"], occasion: ["valentine","birthday","christmas","thankyou","anniversary"], age: ["20s","30s","40s","50s"], interest: ["food"], link: S("고디바 골드 컬렉션") },
    { name: "스탠리(STANLEY) 퀜처 텀블러", desc: "SNS 대세 보온보냉 실용템", reason: "매일 쓰는 텀블러라 실용적이고, 트렌디한 디자인으로 센스있다는 소리를 들을 수 있습니다.", budget: "1to3", recipient: ["girlfriend","boyfriend","friend","colleague"], occasion: ["birthday","graduation","thankyou","nooccasion"], age: ["10s","20s","30s","40s"], interest: ["tech","health"], link: S("스탠리 퀜처 텀블러") },
    { name: "배달의민족 기프트카드", desc: "맛있는 한 끼를 선물하는 센스", reason: "음식 좋아하는 분께는 이것만큼 확실한 선물이 없습니다. 원하는 음식을 직접 골라 먹는 행복!", budget: "1to3", recipient: ["boyfriend","friend","colleague","child"], occasion: ["birthday","thankyou","nooccasion","graduation"], age: ["10s","20s","30s","40s"], interest: ["food"], link: S("배달의민족 기프트카드") },
    { name: "무선 충전 패드", desc: "책상 위를 깔끔하게 정리하는 필수템", reason: "매일 쓰는 실용품이라 감사하게 쓸 수 있고, 깔끔한 디자인으로 인테리어까지 챙깁니다.", budget: "1to3", recipient: ["boyfriend","friend","colleague","parents"], occasion: ["birthday","thankyou","nooccasion","christmas"], age: ["20s","30s","40s","50s"], interest: ["tech"], link: S("무선 충전패드") },
    { name: "프리미엄 견과 선물세트", desc: "건강하고 맛있는 효도 간식", reason: "부모님이나 어른에게 가장 무난하면서도 실용적인 건강 선물입니다.", budget: "1to3", recipient: ["parents","colleague"], occasion: ["holiday","birthday","thankyou","housewarming"], age: ["40s","50s"], interest: ["health","food"], link: S("견과류 선물세트") },
    { name: "네임펜 각인 볼펜 세트", desc: "세상에 하나뿐인 이니셜 문구", reason: "이름 각인은 특별함을 더해주고, 실용적이면서도 기억에 남는 졸업·입사 선물입니다.", budget: "1to3", recipient: ["friend","colleague","boyfriend"], occasion: ["graduation","birthday","thankyou"], age: ["20s","30s","40s"], interest: ["tech","interior"], link: S("각인 볼펜 선물") },
    { name: "레고 미니 세트 / 나노블럭", desc: "조립하는 재미가 있는 소품 선물", reason: "아이부터 어른까지 즐길 수 있고, 완성 후 인테리어 소품으로도 활용 가능합니다.", budget: "1to3", recipient: ["child","friend","boyfriend"], occasion: ["birthday","christmas","nooccasion"], age: ["10s","20s","30s"], interest: ["interior","tech"], link: S("나노블럭 선물") },

    // ── 3~5만원 ──
    { name: "이솝(Aesop) 레저렉션 핸드 밤", desc: "하이엔드 핸드크림의 대명사", reason: "내 돈 주고 사기엔 아깝지만 받으면 가장 기분 좋은 '스몰 럭셔리'의 대표주자입니다.", budget: "3to5", recipient: ["girlfriend","friend","colleague"], occasion: ["birthday","valentine","christmas","thankyou"], age: ["20s","30s","40s"], interest: ["beauty"], link: S("이솝 레저렉션 핸드 밤") },
    { name: "러쉬(LUSH) 배쓰밤 세트", desc: "알록달록 입욕제의 힐링 타임", reason: "형형색색 예쁜 디자인에 언박싱 반응이 가장 좋습니다. 피로 회복에도 탁월한 감성 선물.", budget: "3to5", recipient: ["girlfriend","friend"], occasion: ["birthday","valentine","christmas","nooccasion"], age: ["10s","20s","30s"], interest: ["beauty","interior"], link: S("러쉬 배쓰밤 세트") },
    { name: "와인 & 치즈 세트", desc: "로맨틱한 저녁을 완성하는 한 병", reason: "함께 와인을 즐기며 분위기를 연출할 수 있는 일석이조 아이템입니다.", budget: "3to5", recipient: ["girlfriend","boyfriend","friend"], occasion: ["anniversary","valentine","birthday","housewarming","christmas"], age: ["20s","30s","40s"], interest: ["food"], link: S("와인 치즈 세트") },
    { name: "JBL Go 3 블루투스 스피커", desc: "어디서든 음악을 즐기는 포터블 스피커", reason: "작지만 강력한 사운드와 귀여운 디자인. 캠핑, 운동, 일상 어디서나 쓸 수 있는 실용템입니다.", budget: "3to5", recipient: ["boyfriend","friend","colleague"], occasion: ["birthday","christmas","graduation","nooccasion"], age: ["10s","20s","30s","40s"], interest: ["tech"], link: S("JBL Go3 블루투스 스피커") },
    { name: "아로마 디퓨저 세트", desc: "집 안을 호텔처럼 바꿔주는 향기", reason: "실용적이면서도 인테리어 효과까지 있어 집들이 선물로 센스있다는 칭찬을 받을 수 있습니다.", budget: "3to5", recipient: ["girlfriend","friend","colleague","parents"], occasion: ["housewarming","birthday","thankyou","christmas","nooccasion"], age: ["20s","30s","40s","50s"], interest: ["interior"], link: S("프리미엄 디퓨저 세트") },
    { name: "나이키/아디다스 운동 양말 세트 + 보틀", desc: "운동하는 분을 위한 실용 세트", reason: "운동을 좋아하는 분께 매일 쓸 수 있는 실용적인 스포츠 용품은 항상 환영받습니다.", budget: "3to5", recipient: ["boyfriend","friend","colleague"], occasion: ["birthday","nooccasion","thankyou"], age: ["10s","20s","30s","40s"], interest: ["health"], link: S("나이키 양말 세트 선물") },
    { name: "정관장 홍삼정 에브리타임", desc: "매일 한 포, 건강을 챙기는 효도템", reason: "부모님 건강을 생각하는 마음이 담긴 가장 클래식한 효도 선물입니다.", budget: "3to5", recipient: ["parents"], occasion: ["birthday","holiday","thankyou"], age: ["40s","50s"], interest: ["health","food"], link: S("정관장 에브리타임") },
    { name: "문화상품권 5만원", desc: "영화, 공연, 도서 등 자유롭게 사용", reason: "취향을 몰라도 걱정 없는 만능 선물. 좋아하는 곳에 직접 쓸 수 있어 만족도가 높습니다.", budget: "3to5", recipient: ["friend","colleague","child"], occasion: ["birthday","graduation","thankyou","christmas"], age: ["10s","20s","30s"], interest: ["food","interior","tech","beauty","health"], link: S("문화상품권 5만원") },

    // ── 5~10만원 ──
    { name: "샤넬 루쥬 코코 밤", desc: "로고만으로 기분 좋아지는 럭셔리 립밤", reason: "립스틱과 달리 색상 선택이 필요 없고, 하얀 샤넬 로고의 시각적 만족감이 엄청납니다.", budget: "5to10", recipient: ["girlfriend"], occasion: ["birthday","valentine","anniversary","christmas"], age: ["20s","30s","40s"], interest: ["beauty"], link: S("샤넬 루쥬 코코 밤") },
    { name: "제이에스티나 데일리 목걸이", desc: "영롱한 빛의 심플 주얼리", reason: "심플한 펜던트는 어떤 옷에나 어울리며, '당신을 소중히 여긴다'는 메시지를 전달합니다.", budget: "5to10", recipient: ["girlfriend"], occasion: ["anniversary","birthday","valentine","christmas"], age: ["20s","30s","40s"], interest: ["beauty","interior"], link: S("제이에스티나 목걸이") },
    { name: "미들급 오마카세 식사권", desc: "눈과 입이 즐거운 특별한 경험", reason: "물건 대신 '잊지 못할 경험'을 선물하세요. 특별한 식사는 최고의 기념일 추억이 됩니다.", budget: "5to10", recipient: ["girlfriend","boyfriend","parents","friend"], occasion: ["anniversary","birthday","valentine","thankyou"], age: ["20s","30s","40s","50s"], interest: ["food"], link: "https://app.catchtable.co.kr/" },
    { name: "삼성 갤럭시 버즈 FE", desc: "가성비 최강 무선 이어폰", reason: "음악이나 영상을 즐기는 분께 매일 사용하는 실용 아이템. 통학/출퇴근의 질이 달라집니다.", budget: "5to10", recipient: ["boyfriend","friend","child"], occasion: ["birthday","graduation","christmas"], age: ["10s","20s","30s"], interest: ["tech"], link: S("갤럭시 버즈 FE") },
    { name: "발뮤다 토스터", desc: "매일 아침을 특별하게 만드는 주방 명품", reason: "감각적인 디자인과 바삭한 토스트의 조합. 신혼부부나 집들이 선물로 최적입니다.", budget: "5to10", recipient: ["friend","colleague","parents"], occasion: ["wedding","housewarming","birthday"], age: ["20s","30s","40s","50s"], interest: ["food","interior"], link: S("발뮤다 토스터") },
    { name: "프리미엄 한우 선물세트", desc: "가장 확실한 명절 효도 선물", reason: "좋은 고기 앞에 슬픈 사람 없습니다. 온 가족이 함께 즐기는 최고급 선물세트입니다.", budget: "5to10", recipient: ["parents"], occasion: ["holiday","birthday","thankyou"], age: ["40s","50s"], interest: ["food","health"], link: S("프리미엄 한우 선물세트") },
    { name: "닥터마틴 마일즈 샌들 / 1461 슈즈", desc: "클래식하면서 트렌디한 패션 아이템", reason: "유행을 타지 않는 클래식한 디자인으로 오래 신을 수 있어 실용성과 스타일 모두 잡습니다.", budget: "5to10", recipient: ["girlfriend","boyfriend","friend"], occasion: ["birthday","graduation","christmas","nooccasion"], age: ["10s","20s","30s"], interest: ["beauty","tech"], link: S("닥터마틴") },
    { name: "안마기 / 마사지건", desc: "뭉친 근육을 풀어주는 힐링 아이템", reason: "일하느라 지친 몸을 생각하는 건강 선물. 부모님이나 운동하는 분께 특히 감동적입니다.", budget: "5to10", recipient: ["parents","boyfriend","friend"], occasion: ["birthday","thankyou","holiday"], age: ["30s","40s","50s"], interest: ["health"], link: S("마사지건 안마기") },

    // ── 10만원 이상 ──
    { name: "바이레도(BYREDO) 50ml 향수", desc: "독보적인 하이엔드 니치 향수", reason: "흔하지 않은 고급 향기와 세련된 보틀 디자인. 화장대 위의 멋진 오브제가 됩니다.", budget: "over10", recipient: ["girlfriend"], occasion: ["anniversary","birthday","valentine","christmas"], age: ["20s","30s","40s"], interest: ["beauty"], link: S("바이레도 향수 50ml") },
    { name: "애플 에어팟 프로", desc: "삶의 질을 바꾸는 노이즈 캔슬링 이어폰", reason: "한번 쓰면 절대 돌아갈 수 없는 극강의 실용템. 통학·출퇴근의 질을 완전히 바꿔줍니다.", budget: "over10", recipient: ["girlfriend","boyfriend","friend","child"], occasion: ["birthday","graduation","christmas","anniversary"], age: ["10s","20s","30s","40s"], interest: ["tech"], link: S("에어팟 프로 2세대") },
    { name: "5성급 럭셔리 호텔 호캉스", desc: "완벽한 하루의 휴식을 선물하다", reason: "가격은 높지만 감동도 압도적. 룸서비스와 수영장을 즐기며 스트레스를 날려버리세요.", budget: "over10", recipient: ["girlfriend","boyfriend","parents"], occasion: ["anniversary","birthday","valentine","christmas","thankyou"], age: ["20s","30s","40s","50s"], interest: ["food","interior"], link: "https://kr.trip.com/hotels/" },
    { name: "다이슨 에어랩 / 슈퍼소닉", desc: "뷰티 가전의 끝판왕", reason: "여성들의 위시리스트 1순위. 매일 쓰는 실용성에 명품 브랜드의 만족감까지 갖춘 최고의 선물.", budget: "over10", recipient: ["girlfriend"], occasion: ["birthday","anniversary","christmas","valentine"], age: ["20s","30s","40s"], interest: ["beauty","tech"], link: S("다이슨 에어랩") },
    { name: "애플 워치 SE", desc: "건강과 스타일을 동시에 챙기는 스마트워치", reason: "운동 기록, 건강 관리, 일정 알림까지. 실용성과 패션을 모두 갖춘 하이테크 선물입니다.", budget: "over10", recipient: ["boyfriend","girlfriend","parents"], occasion: ["birthday","graduation","christmas","anniversary"], age: ["20s","30s","40s","50s"], interest: ["tech","health"], link: S("애플 워치 SE") },
    { name: "발뮤다/버미큘라 프리미엄 가전", desc: "주방을 격상시키는 프리미엄 조리가전", reason: "결혼·집들이 선물의 왕. 매일 쓰는 실용성에 인테리어까지 완벽한 고급 가전입니다.", budget: "over10", recipient: ["friend","colleague","parents"], occasion: ["wedding","housewarming"], age: ["20s","30s","40s","50s"], interest: ["food","interior"], link: S("발뮤다 가전 선물") },
    { name: "프리미엄 골프 용품 세트", desc: "골프 좋아하는 분을 위한 완벽한 선물", reason: "골프 라운딩을 즐기시는 부모님이나 상사에게 최고의 감동을 드릴 수 있습니다.", budget: "over10", recipient: ["parents","colleague","boyfriend"], occasion: ["birthday","holiday","thankyou"], age: ["40s","50s"], interest: ["health"], link: S("프리미엄 골프 선물세트") },
    { name: "르크루제 냄비 세트", desc: "주방 위의 예술품, 프리미엄 쿡웨어", reason: "화려한 색감에 뛰어난 열전도. 요리하는 즐거움을 선물하는 결혼·집들이 선물의 정석.", budget: "over10", recipient: ["friend","parents"], occasion: ["wedding","housewarming","birthday"], age: ["30s","40s","50s"], interest: ["food","interior"], link: S("르크루제 냄비 세트") }
  ];

  // ===== 추천 로직 =====
  submitBtn.addEventListener('click', () => {
    const recipient = document.getElementById('rc-recipient').value;
    const occasion = document.getElementById('rc-occasion').value;
    const age = document.getElementById('rc-age').value;
    const interest = document.getElementById('rc-interest').value;

    if (!recipient || !occasion || !age || !interest) {
      errorEl.classList.remove('hidden');
      return;
    }
    errorEl.classList.add('hidden');

    // 각 금액대별 최적의 선물 1개씩 선정
    const results = BUDGETS.map(budget => {
      // 1차: 모든 조건 일치
      let pool = GIFTS.filter(g =>
        g.budget === budget.key &&
        g.recipient.includes(recipient) &&
        g.occasion.includes(occasion) &&
        g.age.includes(age) &&
        g.interest.includes(interest)
      );
      // 2차: 대상 + 관심사
      if (!pool.length) pool = GIFTS.filter(g =>
        g.budget === budget.key &&
        g.recipient.includes(recipient) &&
        g.interest.includes(interest)
      );
      // 3차: 대상 + 상황
      if (!pool.length) pool = GIFTS.filter(g =>
        g.budget === budget.key &&
        g.recipient.includes(recipient) &&
        g.occasion.includes(occasion)
      );
      // 4차: 대상만
      if (!pool.length) pool = GIFTS.filter(g =>
        g.budget === budget.key &&
        g.recipient.includes(recipient)
      );
      // 5차: 해당 금액대 전체
      if (!pool.length) pool = GIFTS.filter(g => g.budget === budget.key);

      const gift = pool[Math.floor(Math.random() * pool.length)];
      return { budget, gift };
    });

    // 대상 라벨
    const recipientLabels = { girlfriend: '여자친구/아내', boyfriend: '남자친구/남편', parents: '부모님', friend: '친구', colleague: '직장 동료', child: '아이/조카' };
    resultsTitle.textContent = `${recipientLabels[recipient]}에게 딱 맞는 선물`;

    // 결과 렌더링
    resultsGrid.innerHTML = results.map(({ budget, gift }) => `
      <div class="rc-card">
        <div class="rc-card-header ${budget.css}">
          <span>${budget.label}</span>
          <span>${budget.tag}</span>
        </div>
        <div class="rc-card-body">
          <div class="rc-gift-name">${gift.name}</div>
          <div class="rc-gift-desc">${gift.desc}</div>
          <div class="rc-gift-reason">
            <strong>추천 이유</strong>
            ${gift.reason}
          </div>
          <a href="${gift.link}" target="_blank" rel="noopener noreferrer" class="rc-gift-link">자세히 알아보기</a>
        </div>
      </div>
    `).join('');

    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // 다시 추천받기
  retryBtn.addEventListener('click', () => {
    resultsSection.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===================== VALENTINE RECOMMENDER ===================== */
function initRecommender() {
  const recommendBtn = document.getElementById('recommend-btn');
  const ageSelect = document.getElementById('age-group');
  const styleSelect = document.getElementById('style-type');
  const priceSelect = document.getElementById('price-range');
  const resultContainer = document.getElementById('result');
  const giftNameEl = document.getElementById('gift-name');
  const giftDescEl = document.getElementById('gift-desc');
  const giftReasonEl = document.getElementById('gift-reason');
  const buyLinkEl = document.getElementById('buy-link');
  const errorMsgEl = document.getElementById('error-message');

  const createSearchLink = (query) => `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(query)}`;

  const gifts = [
    { name: "올리브영 기프트카드 3만원권", desc: "가장 실용적인 화장품 쇼핑 찬스", reason: "취향을 타는 화장품을 직접 고르는 것보다, 필요한 아이템을 직접 고를 수 있는 상품권이 실패 확률 0%의 센스있는 선택입니다.", age: ["10s","20s","30s"], style: "beauty", price: "under3", link: createSearchLink("올리브영 기프트카드 3만원") },
    { name: "탬버린즈 튜브 핸드크림", desc: "요즘 가장 힙한 브랜드의 향기", reason: "단순한 보습을 넘어 감각적인 패키징과 독보적인 향으로 가벼운 가격대임에도 고급스러운 느낌을 주어 만족도가 매우 높습니다.", age: ["20s","30s"], style: "beauty", price: "under3", link: createSearchLink("탬버린즈 핸드크림") },
    { name: "양키캔들 스몰자 + 워머", desc: "방 안을 은은한 분위기로 채워줄 향기", reason: "불을 붙이지 않아 안전하며, 은은한 조명 역할까지 해주어 방 꾸미기를 좋아하는 여성분들에게 완벽한 감성 소품입니다.", age: ["20s","30s"], style: "romantic", price: "under3", link: createSearchLink("양키캔들 스몰자 워머 세트") },
    { name: "스타벅스 e-기프트카드", desc: "언제든 쓸 수 있는 실용성 갑 생명수 쿠폰", reason: "호불호가 갈리지 않으며, 일상 속에서 가장 유용하게 바로 사용할 수 있어 부담 없이 주고받기 가장 좋은 선물입니다.", age: ["20s","30s"], style: "practical", price: "under3", link: createSearchLink("스타벅스 기프트카드") },
    { name: "고디바 초콜릿 골드 컬렉션", desc: "발렌타인데이의 정석, 고급스러운 달콤함", reason: "발렌타인데이의 의미를 가장 잘 살리면서도, 프리미엄 브랜드의 패키지로 성의를 표현하기에 부족함이 없습니다.", age: ["20s","30s"], style: "foodie", price: "under3", link: createSearchLink("고디바 골드 컬렉션") },
    { name: "이솝(Aesop) 레저렉션 핸드 밤", desc: "시그니처 아로마 향의 하이엔드 핸드크림", reason: "내 돈 주고 사기엔 조금 아깝지만 선물 받으면 가장 기분 좋은 '스몰 럭셔리'의 대표주자로, 센스 있다는 칭찬을 받을 수 있습니다.", age: ["20s","30s"], style: "beauty", price: "3to5", link: createSearchLink("이솝 레저렉션 핸드 밤") },
    { name: "러쉬(LUSH) 배쓰밤 세트", desc: "하루의 피로를 녹여주는 향기로운 입욕", reason: "눈과 코가 모두 즐거운 힐링 타임을 선물할 수 있으며, 형형색색의 예쁜 디자인 덕분에 언박싱 시 리액션이 가장 좋습니다.", age: ["10s","20s","30s"], style: "beauty", price: "3to5", link: createSearchLink("러쉬 배쓰밤 세트") },
    { name: "스탠리(STANLEY) 퀜처 텀블러", desc: "요즘 대세! 엄청난 보온보냉의 실용템", reason: "최근 SNS에서 폭발적인 인기를 끌고 있는 아이템으로, 직장이나 학교에서 매일 물을 마실 때마다 선물한 사람을 떠올리게 합니다.", age: ["10s","20s","30s"], style: "practical", price: "3to5", link: createSearchLink("스탠리 퀜처 텀블러") },
    { name: "분위기 좋은 와인 & 치즈 세트", desc: "로맨틱한 저녁을 완성해줄 와인 한 병", reason: "선물을 주고받는 날 저녁, 함께 와인을 즐기며 로맨틱한 분위기를 자연스럽게 연출할 수 있는 일석이조의 아이템입니다.", age: ["20s","30s"], style: "foodie", price: "3to5", link: createSearchLink("와인 치즈 세트") },
    { name: "샤넬 루쥬 코코 밤", desc: "로고만으로도 기분 좋아지는 럭셔리 립밤", reason: "색깔 선택이 어려운 립스틱과 달리, 립밤은 누구나 유용하게 쓰며 하얀 샤넬 로고 패키지가 주는 엄청난 시각적 만족감이 있습니다.", age: ["20s","30s"], style: "beauty", price: "5to10", link: createSearchLink("샤넬 루쥬 코코 밤") },
    { name: "스톤헨지/제이에스티나 데일리 목걸이", desc: "목선을 예쁘게 빛내줄 영롱한 주얼리", reason: "심플한 디자인의 펜던트는 어떤 옷에나 잘 어울리며, 주얼리 선물은 '당신을 소중하게 생각한다'는 로맨틱한 메시지를 직관적으로 전달합니다.", age: ["20s","30s"], style: "romantic", price: "5to10", link: createSearchLink("제이에스티나 목걸이") },
    { name: "미들급 스시 오마카세 예약", desc: "눈과 입이 즐거운 특별한 식사 경험", reason: "물건 대신 '특별한 경험'을 선물하세요. 셰프가 눈앞에서 쥐어주는 초밥을 먹는 2시간은 잊지 못할 발렌타인데이 추억이 될 것입니다.", age: ["20s","30s"], style: "foodie", price: "5to10", link: "https://app.catchtable.co.kr/" },
    { name: "바이레도(BYREDO) 50ml 향수", desc: "독보적인 감성의 하이엔드 니치 향수", reason: "흔하지 않은 고급스러운 향기는 그녀의 품격을 높여주며, 세련된 바틀 디자인은 화장대 위를 빛내는 멋진 오브제가 됩니다.", age: ["20s","30s"], style: "beauty", price: "over10", link: createSearchLink("바이레도 향수 50ml") },
    { name: "애플 에어팟 프로 2세대", desc: "삶의 질을 수직 상승시켜주는 노이즈 캔슬링", reason: "한 번 쓰면 절대 이전으로 돌아갈 수 없다는 극강의 실용템입니다. 출퇴근/통학 시간의 질을 완전히 바꿔줄 수 있는 최고의 선물입니다.", age: ["10s","20s","30s"], style: "practical", price: "over10", link: createSearchLink("에어팟 프로 2세대") },
    { name: "5성급 럭셔리 호텔 호캉스", desc: "하루 종일 푹 쉬며 즐기는 완벽한 휴식", reason: "가격대가 높지만, 그만큼 감동의 크기도 압도적입니다. 룸서비스와 수영장을 즐기며 일상의 스트레스를 날려버릴 최고의 휴가를 선물하세요.", age: ["20s","30s"], style: "foodie", price: "over10", link: "https://kr.trip.com/hotels/" }
  ];

  recommendBtn.addEventListener('click', () => {
    const selectedAge = ageSelect.value;
    const selectedStyle = styleSelect.value;
    const selectedPrice = priceSelect.value;

    if (!selectedAge || !selectedStyle || !selectedPrice) {
      errorMsgEl.classList.remove('hidden');
      return;
    }
    errorMsgEl.classList.add('hidden');

    let filteredGifts = gifts.filter(g => g.price === selectedPrice && g.age.includes(selectedAge) && g.style === selectedStyle);
    if (filteredGifts.length === 0) filteredGifts = gifts.filter(g => g.price === selectedPrice && g.style === selectedStyle);
    if (filteredGifts.length === 0) filteredGifts = gifts.filter(g => g.price === selectedPrice);
    if (filteredGifts.length === 0) filteredGifts = gifts;

    const selected = filteredGifts[Math.floor(Math.random() * filteredGifts.length)];

    giftNameEl.textContent = selected.name;
    giftDescEl.textContent = selected.desc;
    giftReasonEl.textContent = selected.reason;

    if (selected.link) {
      buyLinkEl.href = selected.link;
      buyLinkEl.style.display = 'inline-block';
    } else {
      buyLinkEl.style.display = 'none';
    }

    resultContainer.classList.remove('hidden');
    resultContainer.style.transform = 'scale(0.95)';
    void resultContainer.offsetWidth;
    resultContainer.style.transform = 'scale(1)';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
