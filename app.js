// 다크모드
const btn = document.getElementById('toggleMode');
const img = document.getElementById('btnImg')

const lightImg = './img/light_mode.svg'
const darkImg = './img/dark_mode.svg'

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // 다크모드 여부에 따라 이미지 변경
  if (document.body.classList.contains('dark-mode')) {
    img.src = darkImg;
  } else {
    img.src = lightImg;
  }
});

// 스크롤 애니메이션
const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }else {
      // 화면에서 사라지면 visible 클래스 제거 (애니메이션 반복)
      entry.target.classList.remove('visible');
    }
    });
},{
  threshold: 0.3
});

sections.forEach(section => {
  observer.observe(section);
});

// 모달띄우기
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');

  // 카드 클릭 시 모달 열기
cards.forEach(card => {
  card.addEventListener('click', () => {
    modal.classList.add('active');
  });
});

  // 닫기 버튼 및 바깥 클릭 시 모달 닫기
closeBtn.onclick = () => modal.classList.remove('active');
window.onclick = (e) => {
  if (e.target === modal) modal.classList.remove('active');
};

//rollUpBtn 
const rollUpBtn = document.getElementById('upwardBtn');

rollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // 300px 이상 스크롤 시
    rollUpBtn.style.display = 'block';
  } else {
    rollUpBtn.style.display = 'none';
  }
});

