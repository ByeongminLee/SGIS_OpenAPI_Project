/*
 * @filename : print_data.js
 * @description : 거주 인구 통계를 화면에 출력하는 함수
 * @author : 이슬기 (abcabcp@naver.com)
 */


function print_data() {

    const list = document.querySelector('#list');

    //tbody의 자식요소들 지우기
    Array.from(list.getElementsByTagName('tbody')).map((v, i) => {
        list.removeChild(v);
    });

    //tbody 생성
    const tbody = document.createElement("tbody");
    list.appendChild(tbody);

    //tr생성
    const tr = document.createElement("tr");


    //지역
    const th1 = document.createElement("th");
    th1.innerHTML = v.adm_cd;

    /**인구수/10000단위*/

    //남자인구
    //여성인구
    //10대 인구
    const th4 = document.createElement("th");
    th4.innerHTML = Math.floor(v.teenage_cnt);

    //20대 인구
    const th5 = document.createElement("th");
    th5.innerHTML = Math.floor(v.twenty_cnt);

    //30대 인구
    const th6 = document.createElement("th");
    th6.innerHTML = Math.floor(v.thirty_cnt);

    //40대 인구
    const th7 = document.createElement("th");
    th7.innerHTML = Math.floor(v.forty_cnt);

    //50대 인구
    const th8 = document.createElement("th");
    th8.innerHTML = Math.floor(v.fifty_cnt);

    //60대 인구
    const th9 = document.createElement("th");
    th9.innerHTML = Math.floor(v.sixty_cnt);

    //70대 이상
    const th10 = document.createElement("th");
    th10.innerHTML = Math.floor(v.seventy_more_than_cnt);


    th1.appendChild(tr);


    th4.appendChild(tr);
    th5.appendChild(tr);
    th6.appendChild(tr);
    th7.appendChild(tr);
    th8.appendChild(tr);
    th9.appendChild(tr);
    th10.appendChild(tr);

    tr.appendChild(tbody);
}



