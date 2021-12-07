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
}

export { print_chart };
