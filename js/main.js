import { accessToken } from "./module/get_accessToken.js";
import {
    get_admCodeMain,
    ADM_CODE_NUM,
    ADM_CODE_NAME,
    chartData,
} from "./module/get_admCodeMain.js";
import { get_admCodeSub, ADM_CODE_SUB_NUM, ADM_CODE_SUB_NAME } from "./module/get_admCodeSub.js";
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
const el = document.getElementById("chart");
const data = {
    categories: [],
    series: [
        {
            name: "총인구",
            data: [],
        },
    ],
};
ADM_CODE_NAME.map((v, i) => {
    data.categories.push(v);
});
chartData.map((v, i) => {
    data.series[0].data.push(v);
});

const options = {
    chart: { title: "", width: 900, height: 400 },
};

const chart = toastui.Chart.barChart({ el, data, options });
