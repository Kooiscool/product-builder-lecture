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
      { name: "수제 초콜릿 바", desc: "예쁜 포장의 수제 초콜릿 🍫" },
      { name: "작은 캔들", desc: "은은한 향으로 분위기를 내보세요. 🕯️" },
      { name: "귀여운 양말 세트", desc: "실용적이고 귀여운 선물! 🧦" },
      { name: "하트 모양 마카롱", desc: "달콤하고 예쁜 마카롱 디저트 🍬" }
    ],
    '1to3': [
      { name: "핸드크림 세트", desc: "건조한 손을 지켜줄, 향 좋은 핸드크림 🧴" },
      { name: "디퓨저", desc: "방 안을 향기롭게 채워줄 디퓨저 🌸" },
      { name: "프리미엄 초콜릿 박스", desc: "고급스러운 맛의 초콜릿 모음 💝" },
      { name: "텀블러", desc: "항상 곁에 두고 쓸 수 있는 실용적인 선물 ☕" }
    ],
    '3to5': [
      { name: "향수 (미니/롤온)", desc: "기분 좋은 향기를 선물하세요. ✨" },
      { name: "목도리", desc: "따뜻한 마음을 전하는 겨울 목도리 🧣" },
      { name: "와인 한 병", desc: "로맨틱한 저녁을 위한 와인 🍷" },
      { name: "커플 머그컵", desc: "함께 쓸 수 있는 예쁜 머그컵 세트 ☕" }
    ],
    '5to10': [
      { name: "레스토랑 디너 식사권", desc: "맛있는 음식과 함께하는 특별한 시간 🍽️" },
      { name: "브랜드 립스틱/화장품", desc: "센스 있는 뷰티 아이템 💄" },
      { name: "가죽 지갑", desc: "매일 사용하는 필수 아이템 🪪" },
      { name: "무선 이어폰", desc: "음악을 좋아하는 연인을 위해! 🎧" }
    ],
    over10: [
      { name: "호텔 호캉스", desc: "하루 종일 편안하게 쉬는 힐링 데이트 🏨" },
      { name: "스마트워치", desc: "스마트한 일상을 위한 선물 ⌚" },
      { name: "명품 스몰 레더 굿즈", desc: "오래 쓸 수 있는 고급스러운 아이템 👜" },
      { name: "오마카세/파인다이닝 2인", desc: "잊지 못할 미식 경험 🍣" }
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