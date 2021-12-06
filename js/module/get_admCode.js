/*
 * @filename : adm_code.js
 * @description : 행정구역 코드
 * @author : 이병민 (bmlee531@gmail.com)
 */

// 행정구역 코드 번호
const ADM_CODE_NUM = [];
// 행정구역명
const ADM_CODE_NAME = [];

function get_admCode(accessToken) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url =
        "https://sgisapi.kostat.go.kr/OpenAPI3/stats/population.json?accessToken=" +
        accessToken +
        "&year=2020&low_search=1";

    xhr.onreadystatechange = (e) => {
        const { target } = e;

        if (target.readyState == XMLHttpRequest.DONE) {
            if (target.status == 200) {
                const req = JSON.parse(target.response);
                let len = req.result.length;

                for (let i = 0; i < len; i++) {
                    // 코드 번호 저장
                    ADM_CODE_NUM.push(req.result[i].adm_cd);
                    // 코드 이름(지역명) 저장
                    ADM_CODE_NAME.push(req.result[i].adm_nm);

                    //console.log(req.result[i].adm_cd, req.result[i].adm_nm);
                    //console.log(ADM_CODE_NUM, ADM_CODE_NAME);
                }
            } else {
                const s = parseInt(target.status / 100);
                let errMsg = null;

                if (s == 4) {
                    errMsg =
                        "[" +
                        target.status +
                        "]" +
                        target.statusText +
                        "- 요청 주소가 잘못 되었습니다.";
                } else if (s == 5) {
                    errMsg =
                        "[" + target.status + "]" + target.statusText + "- 서버의 응답이 없습니다.";
                } else {
                    errMsg =
                        "[" + target.status + "]" + target.statusText + "- 요청에 실패했습니다..";
                }
                alert(errMsg);
            }
        }
    };
    xhr.open(method, url, false);
    xhr.send();
}

export { get_admCode, ADM_CODE_NUM, ADM_CODE_NAME };
