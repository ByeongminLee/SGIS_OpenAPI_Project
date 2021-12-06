/*
 * @filename : tab.js
 * @description : 탭 클릭시 active하는 함수
 * @author : 이슬기 (abcabcp@naver.com) 전찬민 (cksals3753@gmail.com)
 */

/** 각 도 마다 탭에대한 active 활성/비활성 */
const tablinks = document.querySelectorAll(".tablinks");

for (const tab of tablinks) {
    tab.addEventListener('click', e => {
        // 모든 버튼에 대한 active 클래스 해제
        for (const item of document.querySelectorAll(".tablinks")) {
            item.classList.remove('active');
        }
        // 클릭된 자기 자신은 active 클래스 적용
        e.currentTarget.classList.add('active');

        // 화면상에 보이는 모든 페이지를 숨김
        for (const fa of document.querySelector(".tabcontent")) {
            fa.classList.remove('active');
        }
    });
}
/** 각 구 마다 탭에대한 active 활성/비활성 */
const citizen = document.querySelectorAll('.citizen');

for (const citizenGu of citizen) {
    citizenGu.addEventListener('click', e => {
        // 모든 버튼에 대한 active 클래스 해제
        for (const h of document.querySelectorAll(".citizen")) {
            h.classList.remove('active');
        }
        // 클릭된 자신은 active 클래스 적용
        e.currentTarget.classList.add('active');
        
        // 화면상에 보이는 모든 페이지 숨기기
        for (const ha of document.querySelector('.citizen')) {
            ha.classList.remove('active');
        }
    });
}
