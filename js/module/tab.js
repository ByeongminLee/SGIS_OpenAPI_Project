/*
 * @filename : tab.js
 * @description : 탭 클릭시 active하는 함수
 * @author : 이슬기 (abcabcp@naver.com) 전찬민 (cksals3753@gmail.com)
 */
import { accessToken } from "./get_accessToken.js";
import { ADM_CODE_SUB_NUM } from "./get_admCodeSub.js";
import { ageData, get_ageData } from "./get_ageData.js";
import { get_genderData } from "./get_genderData.js";

/** 각 도 마다 탭에대한 active 활성/비활성 */
const tablinks = document.querySelectorAll(".tablinks");

for (const tab of tablinks) {
    tab.addEventListener("click", (e) => {
        // 모든 버튼에 대한 active 클래스 해제
        for (const item of document.querySelectorAll(".tablinks")) {
            item.classList.remove("active");
        }
        // 클릭된 자기 자신은 active 클래스 적용
        e.currentTarget.classList.add("active");

        // 화면상에 보이는 모든 페이지를 숨김
        for (const fa of document.querySelectorAll(".tabcontent")) {
            fa.classList.remove("active");
        }
        //  클릭된 버튼에 적용된 'data-target' 값을 취득
        let city = e.currentTarget.dataset.target;
        let cityNum = parseInt(city);

        /** 탭에 해당하는 데이터 값 가져오기 */
        let subNumber = ADM_CODE_SUB_NUM[cityNum];

        for (let z = 1; z < subNumber.length; z++) {
            get_ageData(accessToken, subNumber[z]);
            get_genderData(accessToken, subNumber[z]);
            console.log(ageData);
        }

        /** 데이터 값 가져오기 end */

        // 취득한 값을 id속성으로 사용하는 페이지에게 active클래스 적용
        document.getElementById(city).classList.add("active");
    });
}
/** 각 구 마다 탭에대한 active 활성/비활성 */
const citizen = document.querySelectorAll(".citizen");

for (const citizenGu of citizen) {
    citizenGu.addEventListener("click", (e) => {
        // 모든 버튼에 대한 active 클래스 해제
        for (const h of document.querySelectorAll(".citizen")) {
            h.classList.remove("active");
        }
        // 클릭된 자신은 active 클래스 적용
        e.currentTarget.classList.add("active");

        // 화면상에 보이는 모든 페이지 숨기기
        for (const ha of document.querySelector(".citizen")) {
            ha.classList.remove("active");
        }
    });
}
