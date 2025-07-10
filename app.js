// ==============================
// 1. 다크모드 전환 기능
// ==============================

// 다크모드 토글 버튼 요소 선택
const btn = document.getElementById('toggleMode');

// 버튼 안의 이미지 요소 선택 (아이콘 변경용)
const img = document.getElementById('btnImg');

// 다크모드/라이트모드 이미지 경로 변수
const lightImg = './img/light_mode.svg';
const darkImg = './img/dark_mode.svg';

// 버튼 클릭 시 다크모드 전환 및 아이콘 변경
btn.addEventListener('click', () => {
  // body에 dark-mode 클래스를 토글(추가/제거)
  document.body.classList.toggle('dark-mode');

  // 현재 다크모드 상태에 따라 버튼 이미지 변경
  if (document.body.classList.contains('dark-mode')) {
    img.src = darkImg;    // 다크모드 아이콘으로 변경
  } else {
    img.src = lightImg;   // 라이트모드 아이콘으로 변경
  }
});


// ==============================
// 2. 스크롤 애니메이션 (Intersection Observer)
// ==============================

// .fade-in-section 클래스를 가진 모든 요소 선택
const sections = document.querySelectorAll('.fade-in-section');

// IntersectionObserver 생성: 화면에 요소가 일정 비율 이상 보이면 콜백 실행
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 요소가 화면에 들어오면 visible 클래스 추가 (애니메이션 시작)
      entry.target.classList.add('visible');
    } else {
      // 화면에서 사라지면 visible 클래스 제거 (애니메이션 반복 가능)
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3 // 요소의 30% 이상이 보일 때 콜백 실행
});

// 각 섹션에 Observer 적용
sections.forEach(section => {
  observer.observe(section);
});


// ==============================
// 3. 프로젝트 카드 클릭 시 모달 띄우기
// ==============================

// .card 클래스를 가진 모든 프로젝트 카드 요소 선택
const cards = document.querySelectorAll('.card');

// 모달 전체 요소 선택 (id="modal")
const modal = document.getElementById('modal');

// 모달 내 닫기 버튼 요소 선택 (id="closeModal")
const closeBtn = document.getElementById('closeModal');

// 카드 클릭 시 모달 열기
cards.forEach(card => {
  card.addEventListener('click', () => {
    // .active 클래스 추가 → 모달이 화면에 표시됨
    modal.classList.add('active');
  });
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.onclick = () => modal.classList.remove('active');

// 모달 바깥(오버레이) 클릭 시 모달 닫기
window.onclick = (e) => {
  // 클릭한 대상이 모달(오버레이) 자체일 때만 닫기
  if (e.target === modal) modal.classList.remove('active');
};


// ==============================
// 4. "맨 위로" 버튼 (rollUpBtn)
// ==============================

// 맨 위로 이동 버튼 요소 선택 (id="upwardBtn")
const rollUpBtn = document.getElementById('upwardBtn');

// 버튼 클릭 시 부드럽게 페이지 맨 위로 스크롤
rollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


