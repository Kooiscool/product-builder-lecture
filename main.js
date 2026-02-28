document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommend-btn');
  const priceRangeSelect = document.getElementById('price-range');
  const resultContainer = document.getElementById('result');
  const giftNameEl = document.getElementById('gift-name');
  const giftDescEl = document.getElementById('gift-desc');
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Gift Database
  const gifts = {
    under1: [
      { name: "페레로로쉐 T8 하트", desc: "실패 없는 달콤함, 하트 모양 포장 🍫" },
      { name: "양키캔들 보티브", desc: "작지만 강한 향기, 블랙체리 향 추천 🕯️" },
      { name: "이니스프리 핸드크림", desc: "제주 풍경을 담은 향긋한 핸드크림 🧴" },
      { name: "스타벅스 e-기프트카드", desc: "가장 실용적인 커피 한 잔의 여유 ☕" }
    ],
    '1to3': [
      { name: "논픽션 핸드크림", desc: "감각적인 패키지와 독보적인 향 🧴" },
      { name: "러쉬 바디스프레이 (미니)", desc: "은은하고 매력적인 잔향의 바디스프레이 🌸" },
      { name: "고디바 초콜릿 컬렉션", desc: "벨기에 프리미엄 초콜릿의 정석 💝" },
      { name: "스탠리 보온보냉 텀블러", desc: "디자인과 실용성을 모두 잡은 텀블러 ☕" }
    ],
    '3to5': [
      { name: "이솝(Aesop) 핸드 밤", desc: "시그니처 아로마 향의 고급 핸드크림 ✨" },
      { name: "딥티크(Diptyque) 고체 향수", desc: "휴대하기 좋은 시크한 고체 향수 🌹" },
      { name: "크로우캐년 커플 머그컵", desc: "힙한 마블 패턴의 커플 아이템 🥤" },
      { name: "록시땅(L'OCCITANE) 샤워젤 세트", desc: "피로를 풀어주는 향기로운 바디워시 🛀" }
    ],
    '5to10': [
      { name: "샤넬 루쥬 코코 립밤", desc: "누구나 좋아하는 럭셔리 뷰티 💄" },
      { name: "조말론 런던 디퓨저", desc: "공간을 고급스럽게 채우는 향기 🌿" },
      { name: "아웃백 스테이크하우스 상품권", desc: "맛있는 스테이크 데이트 🥩" },
      { name: "아크네 스튜디오 비니", desc: "포인트 주기 좋은 귀여운 패션템 🧣" }
    ],
    over10: [
      { name: "신라호텔 더 파크뷰 식사권 2인", desc: "최고급 뷔페에서 즐기는 특별한 저녁 🍽️" },
      { name: "애플 에어팟 프로 2세대", desc: "최고의 노이즈 캔슬링 무선 이어폰 🎧" },
      { name: "메종 마르지엘라 카드지갑", desc: "감성을 더해주는 심플한 레더 굿즈 🪪" },
      { name: "시그니엘 서울 호캉스", desc: "최고급 호텔에서 즐기는 완벽한 휴식 🏨" }
    ]
  };

  // Theme checking logic
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      themeToggleBtn.textContent = '☀️';
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }

  // Theme toggle click event
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

  // Recommend logic
  recommendBtn.addEventListener('click', () => {
    const selectedRange = priceRangeSelect.value;
    const options = gifts[selectedRange];
    
    // Pick random gift
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedGift = options[randomIndex];

    // Display result
    giftNameEl.textContent = selectedGift.name;
    giftDescEl.textContent = selectedGift.desc;
    
    // Remove hidden class and add a small animation effect
    resultContainer.classList.remove('hidden');
    resultContainer.style.transform = 'scale(0.95)';
    
    // Force reflow to restart transition
    void resultContainer.offsetWidth; 
    
    resultContainer.style.transform = 'scale(1)';
  });
});