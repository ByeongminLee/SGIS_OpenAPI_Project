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
    series: [
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
        {
            name: "",
            data: [],
        },
    ],
};

/** 차트에 값 추가 */
ADM_CODE_NAME.map((v, i) => {
    data.series[i].name = v;
    console.log(data.series[i].name);
});
chartData.map((v, i) => {
    data.series[i].data = parseInt(v);
});
console.log(data);

const options = {
    chart: { title: "지역별 총인구", width: 1000, height: 600 },
    series: {
        dataLabels: {
            visible: true,
            anchor: "outer",
        },
    },
};

const chart = toastui.Chart.pieChart({ el, data, options });
