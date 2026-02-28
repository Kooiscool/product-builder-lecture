document.addEventListener('DOMContentLoaded', () => {
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
  const themeToggleBtn = document.getElementById('theme-toggle');

  const createSearchLink = (query) => `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(query)}`;

  // Enhanced Gift Database with 'reason' for higher quality content
  const gifts = [
    // --- 3만원 이하 (under3) ---
    { 
      name: "올리브영 기프트카드 3만원권", 
      desc: "가장 실용적인 화장품 쇼핑 찬스 💄", 
      reason: "취향을 타는 화장품을 직접 고르는 것보다, 필요한 아이템을 직접 고를 수 있는 상품권이 실패 확률 0%의 센스있는 선택입니다.",
      age: ["10s", "20s", "30s"], style: "beauty", price: "under3", link: createSearchLink("올리브영 기프트카드 3만원") 
    },
    { 
      name: "탬버린즈 튜브 핸드크림", 
      desc: "요즘 가장 힙한 브랜드의 향기 🧴", 
      reason: "단순한 보습을 넘어 감각적인 패키징과 독보적인 향으로 가벼운 가격대임에도 고급스러운 느낌을 주어 만족도가 매우 높습니다.",
      age: ["20s", "30s"], style: "beauty", price: "under3", link: createSearchLink("탬버린즈 핸드크림") 
    },
    { 
      name: "양키캔들 스몰자 + 워머", 
      desc: "방 안을 은은한 분위기로 채워줄 향기 🕯️", 
      reason: "불을 붙이지 않아 안전하며, 은은한 조명 역할까지 해주어 방 꾸미기를 좋아하는 여성분들에게 완벽한 감성 소품입니다.",
      age: ["20s", "30s"], style: "romantic", price: "under3", link: createSearchLink("양키캔들 스몰자 워머 세트") 
    },
    { 
      name: "스타벅스 e-기프트카드", 
      desc: "언제든 쓸 수 있는 실용성 갑 생명수 쿠폰 ☕", 
      reason: "호불호가 갈리지 않으며, 일상 속에서 가장 유용하게 바로 사용할 수 있어 부담 없이 주고받기 가장 좋은 선물입니다.",
      age: ["20s", "30s"], style: "practical", price: "under3", link: createSearchLink("스타벅스 기프트카드") 
    },
    { 
      name: "고디바 초콜릿 골드 컬렉션", 
      desc: "발렌타인데이의 정석, 고급스러운 달콤함 🍫", 
      reason: "발렌타인데이의 의미를 가장 잘 살리면서도, 프리미엄 브랜드의 패키지로 성의를 표현하기에 부족함이 없습니다.",
      age: ["20s", "30s"], style: "foodie", price: "under3", link: createSearchLink("고디바 골드 컬렉션") 
    },

    // --- 3만원 ~ 5만원 (3to5) ---
    { 
      name: "이솝(Aesop) 레저렉션 핸드 밤", 
      desc: "시그니처 아로마 향의 하이엔드 핸드크림 ✨", 
      reason: "내 돈 주고 사기엔 조금 아깝지만 선물 받으면 가장 기분 좋은 '스몰 럭셔리'의 대표주자로, 센스 있다는 칭찬을 받을 수 있습니다.",
      age: ["20s", "30s"], style: "beauty", price: "3to5", link: createSearchLink("이솝 레저렉션 핸드 밤") 
    },
    { 
      name: "러쉬(LUSH) 배쓰밤 세트", 
      desc: "하루의 피로를 녹여주는 향기로운 입욕 🛁", 
      reason: "눈과 코가 모두 즐거운 힐링 타임을 선물할 수 있으며, 형형색색의 예쁜 디자인 덕분에 언박싱 시 리액션이 가장 좋습니다.",
      age: ["10s", "20s", "30s"], style: "beauty", price: "3to5", link: createSearchLink("러쉬 배쓰밤 세트") 
    },
    { 
      name: "스탠리(STANLEY) 퀜처 텀블러", 
      desc: "요즘 대세! 엄청난 보온보냉의 실용템 🧊", 
      reason: "최근 SNS에서 폭발적인 인기를 끌고 있는 아이템으로, 직장이나 학교에서 매일 물을 마실 때마다 선물한 사람을 떠올리게 합니다.",
      age: ["10s", "20s", "30s"], style: "practical", price: "3to5", link: createSearchLink("스탠리 퀜처 텀블러") 
    },
    { 
      name: "분위기 좋은 와인 & 치즈 세트", 
      desc: "로맨틱한 저녁을 완성해줄 와인 한 병 🍷", 
      reason: "선물을 주고받는 날 저녁, 함께 와인을 즐기며 로맨틱한 분위기를 자연스럽게 연출할 수 있는 일석이조의 아이템입니다.",
      age: ["20s", "30s"], style: "foodie", price: "3to5", link: createSearchLink("와인 치즈 세트") 
    },

    // --- 5만원 ~ 10만원 (5to10) ---
    { 
      name: "샤넬 루쥬 코코 밤", 
      desc: "로고만으로도 기분 좋아지는 럭셔리 립밤 💋", 
      reason: "색깔 선택이 어려운 립스틱과 달리, 립밤은 누구나 유용하게 쓰며 하얀 샤넬 로고 패키지가 주는 엄청난 시각적 만족감이 있습니다.",
      age: ["20s", "30s"], style: "beauty", price: "5to10", link: createSearchLink("샤넬 루쥬 코코 밤") 
    },
    { 
      name: "스톤헨지/제이에스티나 데일리 목걸이", 
      desc: "목선을 예쁘게 빛내줄 영롱한 주얼리 💎", 
      reason: "심플한 디자인의 펜던트는 어떤 옷에나 잘 어울리며, 주얼리 선물은 '당신을 소중하게 생각한다'는 로맨틱한 메시지를 직관적으로 전달합니다.",
      age: ["20s", "30s"], style: "romantic", price: "5to10", link: createSearchLink("제이에스티나 목걸이") 
    },
    { 
      name: "미들급 스시 오마카세 예약", 
      desc: "눈과 입이 즐거운 특별한 식사 경험 🍣", 
      reason: "물건 대신 '특별한 경험'을 선물하세요. 셰프가 눈앞에서 쥐어주는 초밥을 먹는 2시간은 잊지 못할 발렌타인데이 추억이 될 것입니다.",
      age: ["20s", "30s"], style: "foodie", price: "5to10", link: "https://app.catchtable.co.kr/" 
    },

    // --- 10만원 이상 (over10) ---
    { 
      name: "바이레도(BYREDO) 50ml 향수", 
      desc: "독보적인 감성의 하이엔드 니치 향수 🌹", 
      reason: "흔하지 않은 고급스러운 향기는 그녀의 품격을 높여주며, 세련된 바틀 디자인은 화장대 위를 빛내는 멋진 오브제가 됩니다.",
      age: ["20s", "30s"], style: "beauty", price: "over10", link: createSearchLink("바이레도 향수 50ml") 
    },
    { 
      name: "애플 에어팟 프로 2세대", 
      desc: "삶의 질을 수직 상승시켜주는 노이즈 캔슬링 🎧", 
      reason: "한 번 쓰면 절대 이전으로 돌아갈 수 없다는 극강의 실용템입니다. 출퇴근/통학 시간의 질을 완전히 바꿔줄 수 있는 최고의 선물입니다.",
      age: ["10s", "20s", "30s"], style: "practical", price: "over10", link: createSearchLink("에어팟 프로 2세대") 
    },
    { 
      name: "5성급 럭셔리 호텔 호캉스", 
      desc: "하루 종일 푹 쉬며 즐기는 완벽한 휴식 🏨", 
      reason: "가격대가 높지만, 그만큼 감동의 크기도 압도적입니다. 룸서비스와 수영장을 즐기며 일상의 스트레스를 날려버릴 최고의 휴가를 선물하세요.",
      age: ["20s", "30s"], style: "foodie", price: "over10", link: "https://kr.trip.com/hotels/" 
    }
  ];

  // Theme Logic
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') themeToggleBtn.textContent = '☀️';
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }

  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
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

  // Recommend Logic
  recommendBtn.addEventListener('click', () => {
    const selectedAge = ageSelect.value;
    const selectedStyle = styleSelect.value;
    const selectedPrice = priceSelect.value;

    // Graceful error handling instead of alert()
    if (!selectedAge || !selectedStyle || !selectedPrice) {
      errorMsgEl.classList.remove('hidden');
      return;
    }
    errorMsgEl.classList.add('hidden');

    let filteredGifts = gifts.filter(gift => 
      gift.price === selectedPrice && gift.age.includes(selectedAge) && gift.style === selectedStyle
    );

    if (filteredGifts.length === 0) {
      filteredGifts = gifts.filter(gift => gift.price === selectedPrice && gift.style === selectedStyle);
    }
    if (filteredGifts.length === 0) {
      filteredGifts = gifts.filter(gift => gift.price === selectedPrice);
    }
    if (filteredGifts.length === 0) {
      filteredGifts = gifts; // Fallback
    }

    const randomIndex = Math.floor(Math.random() * filteredGifts.length);
    const selectedGift = filteredGifts[randomIndex];

    // Update UI
    giftNameEl.textContent = selectedGift.name;
    giftDescEl.textContent = selectedGift.desc;
    giftReasonEl.textContent = selectedGift.reason || "이 조합에 가장 잘 어울리는 센스있는 선택입니다.";
    
    if (selectedGift.link) {
      buyLinkEl.href = selectedGift.link;
      buyLinkEl.style.display = 'inline-block';
    } else {
      buyLinkEl.style.display = 'none';
    }
    
    // Animation
    resultContainer.classList.remove('hidden');
    resultContainer.style.transform = 'scale(0.95)';
    void resultContainer.offsetWidth; // trigger reflow
    resultContainer.style.transform = 'scale(1)';
    
    // Scroll to result gently
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});