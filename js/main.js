import { accessToken } from "./module/get_accessToken.js";
import { get_admCodeMain, ADM_CODE_NUM, ADM_CODE_NAME } from "./module/get_admCodeMain.js";
import { get_admCodeSub, ADM_CODE_SUB_NUM, ADM_CODE_SUB_NAME } from "./module/get_admCodeSub.js";
import { get_ageData } from "./module/get_ageData.js";
import { get_genderData } from "./module/get_genderData.js";
import "./module/tab.js";

// 행정구역 (도, 시 코드 가져오기)
get_admCodeMain(accessToken);

// 행정구역 "도, 시코드 번호"의 배열 길이
let admNumLength = ADM_CODE_NUM.length;

/**
 *  "도, 시 코드 번호"를 0~끝까지 반복하여
 *  "도, 시"에 속한 "시,구"의 코드를 가져오기
 */
for (let x = 0; x < admNumLength; x++) {
    let mainNumber = ADM_CODE_NUM[x];
    get_admCodeSub(accessToken, mainNumber);
}

console.log(ADM_CODE_SUB_NUM, ADM_CODE_SUB_NAME);

// 각 지역의 나이대별 통계 가져오기
let admSubNumLength = ADM_CODE_SUB_NUM.length;

// y <admSubNumLength (전체다 출력할시 변경해야함)
for (let y = 0; y < 1; y++) {
    let subNumber = ADM_CODE_SUB_NUM[y];

    for (let z = 1; z < subNumber.length; z++) {
        get_ageData(accessToken, subNumber[z]);
        get_genderData(accessToken, subNumber[z]);
    }
}
