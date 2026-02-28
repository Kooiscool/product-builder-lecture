document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommend-btn');
  const ageSelect = document.getElementById('age-group');
  const styleSelect = document.getElementById('style-type');
  const priceSelect = document.getElementById('price-range');
  
  const resultContainer = document.getElementById('result');
  const giftNameEl = document.getElementById('gift-name');
  const giftDescEl = document.getElementById('gift-desc');
  const buyLinkEl = document.getElementById('buy-link');
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Helper function to create Naver Shopping search links
  const createSearchLink = (query) => `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(query)}`;

  // Gift Database with tags and links
  const gifts = [
    // --- 3만원 이하 (under3) ---
    { name: "올리브영 기프트카드 3만원권", desc: "가장 실용적인 화장품 쇼핑 찬스 💄", age: ["10s", "20s", "30s"], style: "beauty", price: "under3", link: createSearchLink("올리브영 기프트카드 3만원") },
    { name: "롬앤/페리페라 베스트 틴트", desc: "학생들에게 인기 만점인 예쁜 컬러 💋", age: ["10s"], style: "beauty", price: "under3", link: createSearchLink("롬앤 틴트") },
    { name: "탬버린즈 튜브 핸드크림", desc: "요즘 가장 힙한 브랜드의 향기 🧴", age: ["20s", "30s"], style: "beauty", price: "under3", link: createSearchLink("탬버린즈 핸드크림") },
    
    { name: "카카오프렌즈 춘식이 인형", desc: "귀여운 걸 좋아한다면 실패 없는 선택 🧸", age: ["10s", "20s"], style: "romantic", price: "under3", link: createSearchLink("춘식이 인형") },
    { name: "양키캔들 스몰자 + 워머", desc: "방 안을 은은한 분위기로 채워줄 향기 🕯️", age: ["20s", "30s"], style: "romantic", price: "under3", link: createSearchLink("양키캔들 스몰자 워머 세트") },
    
    { name: "모트모트 플래너 & 문구세트", desc: "공부할 때 기분 좋아지는 예쁜 학용품 📝", age: ["10s"], style: "practical", price: "under3", link: createSearchLink("모트모트 플래너 세트") },
    { name: "스타벅스 e-기프트카드", desc: "언제든 쓸 수 있는 생명수 쿠폰 ☕", age: ["20s", "30s"], style: "practical", price: "under3", link: createSearchLink("스타벅스 기프트카드") },
    { name: "귀여운 수면양말 세트", desc: "발끝까지 따뜻하고 포근하게 🧦", age: ["10s", "20s", "30s"], style: "practical", price: "under3", link: createSearchLink("수면양말 세트") },

    { name: "마라탕/엽떡 배달 기프티콘", desc: "스트레스가 확 풀리는 맛있는 선물 떡볶이 🌶️", age: ["10s", "20s"], style: "foodie", price: "under3", link: createSearchLink("배달의민족 상품권") },
    { name: "고디바 초콜릿 골드 컬렉션", desc: "발렌타인데이의 정석, 고급스러운 달콤함 🍫", age: ["20s", "30s"], style: "foodie", price: "under3", link: createSearchLink("고디바 골드 컬렉션") },

    // --- 3만원 ~ 5만원 (3to5) ---
    { name: "맥(MAC) 총알 립스틱", desc: "여성들의 영원한 스테디셀러 뷰티템 💄", age: ["20s", "30s"], style: "beauty", price: "3to5", link: createSearchLink("맥 총알 립스틱") },
    { name: "러쉬(LUSH) 배쓰밤 세트", desc: "하루의 피로를 녹여주는 향기로운 입욕 🛁", age: ["10s", "20s", "30s"], style: "beauty", price: "3to5", link: createSearchLink("러쉬 배쓰밤 세트") },
    { name: "이솝(Aesop) 레저렉션 핸드 밤", desc: "시그니처 아로마 향의 고급 핸드크림 ✨", age: ["20s", "30s"], style: "beauty", price: "3to5", link: createSearchLink("이솝 레저렉션 핸드 밤") },

    { name: "크로우캐년 마블 머그컵", desc: "SNS에서 핫한 힙한 디자인의 컵 🥤", age: ["10s", "20s"], style: "romantic", price: "3to5", link: createSearchLink("크로우캐년 머그컵") },
    { name: "감성 무드등 / 단스탠드", desc: "침대 옆에 두기 좋은 따뜻한 조명 💡", age: ["20s", "30s"], style: "romantic", price: "3to5", link: createSearchLink("감성 단스탠드 무드등") },

    { name: "스탠리(STANLEY) 퀜처 텀블러", desc: "요즘 대세! 엄청난 보온보냉의 실용템 🧊", age: ["10s", "20s", "30s"], style: "practical", price: "3to5", link: createSearchLink("스탠리 퀜처 텀블러") },
    { name: "록시땅 시어버터 보습 세트", desc: "건조한 겨울철 필수 아이템 🧴", age: ["20s", "30s"], style: "practical", price: "3to5", link: createSearchLink("록시땅 시어버터 세트") },

    { name: "유명 카페 디저트 기프티콘", desc: "노티드, 아우어베이커리 등 핫플 빵지순례 🥐", age: ["10s", "20s"], style: "foodie", price: "3to5", link: createSearchLink("노티드 기프티콘") },
    { name: "분위기 좋은 와인 & 치즈 세트", desc: "로맨틱한 저녁을 완성해줄 와인 한 병 🍷", age: ["20s", "30s"], style: "foodie", price: "3to5", link: createSearchLink("와인 치즈 세트") },

    // --- 5만원 ~ 10만원 (5to10) ---
    { name: "샤넬 루쥬 코코 밤", desc: "로고만으로도 기분 좋아지는 럭셔리 립밤 💋", age: ["20s", "30s"], style: "beauty", price: "5to10", link: createSearchLink("샤넬 루쥬 코코 밤") },
    { name: "조말론 런던 30ml 향수", desc: "호불호 적은 베스트셀러 니치 향수 🌿", age: ["20s", "30s"], style: "beauty", price: "5to10", link: createSearchLink("조말론 향수 30ml") },

    { name: "스톤헨지/제이에스티나 목걸이", desc: "목선을 예쁘게 빛내줄 데일리 주얼리 💎", age: ["20s", "30s"], style: "romantic", price: "5to10", link: createSearchLink("제이에스티나 목걸이") },
    { name: "폴로 랄프로렌 케이블 니트 머플러", desc: "클래식하고 따뜻한 겨울 필수템 🧣", age: ["10s", "20s", "30s"], style: "practical", price: "5to10", link: createSearchLink("폴로 랄프로렌 케이블 머플러") },

    { name: "아크네 스튜디오 비니", desc: "귀여운 로고가 포인트인 힙한 패션템 🧢", age: ["10s", "20s"], style: "practical", price: "5to10", link: createSearchLink("아크네 스튜디오 비니") },
    { name: "오덴세(odense) 식기 세트", desc: "예쁜 그릇을 좋아한다면 최고의 선물 🍽️", age: ["30s"], style: "practical", price: "5to10", link: createSearchLink("오덴세 식기 세트") },

    { name: "아웃백 스테이크하우스 10만원권", desc: "투움바 파스타와 스테이크 배터지게 먹기 🥩", age: ["10s", "20s", "30s"], style: "foodie", price: "5to10", link: createSearchLink("아웃백 기프티콘 10만원") },
    { name: "미들급 스시 오마카세 1인/런치 2인", desc: "눈과 입이 즐거운 특별한 식사 경험 🍣", age: ["20s", "30s"], style: "foodie", price: "5to10", link: "https://app.catchtable.co.kr/" }, // 캐치테이블 링크로 대체

    // --- 10만원 이상 (over10) ---
    { name: "다이슨 에어랩 멀티 스타일러", desc: "모든 여성들의 워너비 뷰티 가전 💇‍♀️", age: ["20s", "30s"], style: "beauty", price: "over10", link: createSearchLink("다이슨 에어랩") },
    { name: "바이레도(BYREDO) 50ml 향수", desc: "독보적인 감성의 하이엔드 니치 향수 🌹", age: ["20s", "30s"], style: "beauty", price: "over10", link: createSearchLink("바이레도 향수 50ml") },

    { name: "티파니앤코(Tiffany&Co) 미니 펜던트", desc: "민트색 박스가 주는 엄청난 설렘 💍", age: ["20s", "30s"], style: "romantic", price: "over10", link: createSearchLink("티파니앤코 미니 펜던트") },
    { name: "신라호텔 망고 쇼트케이크 & 와인", desc: "최고급 호텔 베이커리에서 준비한 로맨틱 🍰", age: ["20s", "30s"], style: "romantic", price: "over10", link: "https://www.shillahotels.com/membership/offers/pack/memOfferPackList.do" },

    { name: "애플 에어팟 프로 2세대", desc: "출퇴근/통학길의 질을 높여주는 노이즈 캔슬링 🎧", age: ["10s", "20s", "30s"], style: "practical", price: "over10", link: createSearchLink("에어팟 프로 2세대") },
    { name: "메종 마르지엘라 스티치 카드지갑", desc: "감성을 더해주는 심플한 명품 가죽 굿즈 🪪", age: ["20s", "30s"], style: "practical", price: "over10", link: createSearchLink("메종 마르지엘라 카드지갑") },

    { name: "호텔 뷔페(파크뷰/라세느/아리아) 2인권", desc: "기념일의 끝판왕, 최고급 다이닝 🦞", age: ["20s", "30s"], style: "foodie", price: "over10", link: createSearchLink("호텔 뷔페 식사권") },
    { name: "5성급 럭셔리 호텔 호캉스", desc: "하루 종일 아무것도 안 하고 푹 쉬는 완벽한 휴식 🏨", age: ["20s", "30s"], style: "foodie", price: "over10", link: "https://kr.trip.com/hotels/" } // 트립닷컴 링크로 대체
  ];

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
    const selectedAge = ageSelect.value;
    const selectedStyle = styleSelect.value;
    const selectedPrice = priceSelect.value;

    if (!selectedAge || !selectedStyle || !selectedPrice) {
      alert("그녀의 정보를 모두 선택해주세요! 😉");
      return;
    }

    // 1순위: 예산, 연령대, 스타일 모두 일치하는 선물
    let filteredGifts = gifts.filter(gift => 
      gift.price === selectedPrice && 
      gift.age.includes(selectedAge) && 
      gift.style === selectedStyle
    );

    // 2순위: 예산과 스타일만 일치 (연령대 무관하게)
    if (filteredGifts.length === 0) {
      filteredGifts = gifts.filter(gift => 
        gift.price === selectedPrice && 
        gift.style === selectedStyle
      );
    }

    // 3순위: 예산만 일치 (적어도 가격대는 맞춰서 아무거나)
    if (filteredGifts.length === 0) {
      filteredGifts = gifts.filter(gift => 
        gift.price === selectedPrice
      );
    }

    // Pick random gift from filtered options
    const randomIndex = Math.floor(Math.random() * filteredGifts.length);
    const selectedGift = filteredGifts[randomIndex];

    // Display result
    giftNameEl.textContent = selectedGift.name;
    giftDescEl.textContent = selectedGift.desc;
    
    // Update and show buy link
    if (selectedGift.link) {
      buyLinkEl.href = selectedGift.link;
      buyLinkEl.style.display = 'inline-block';
    } else {
      buyLinkEl.style.display = 'none';
    }
    
    // Remove hidden class and add a small animation effect
    resultContainer.classList.remove('hidden');
    resultContainer.style.transform = 'scale(0.95)';
    
    // Force reflow to restart transition
    void resultContainer.offsetWidth; 
    
    resultContainer.style.transform = 'scale(1)';
  });
});