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

  // 발렌타인 추천기 (기사 페이지용)
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
