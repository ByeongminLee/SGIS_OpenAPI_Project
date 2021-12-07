/*
 * @filename : print_chart.js
 * @description : 차트 데이터 가져오고 화면에 그리기
 * @author : 이병민 (bmlee531@gmail.com)
 */

function print_chart(ADM_CODE_NAME, chartData) {
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
    });
    chartData.map((v, i) => {
        data.series[i].data = parseInt(v);
    });

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
}

export { print_chart };
