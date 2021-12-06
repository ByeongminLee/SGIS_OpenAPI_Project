/*
 * @filename : get_admCodeSub.js
 * @description : 행정구역 (시, 구) 코드 가져오기
 * @author : 이병민 (bmlee531@gmail.com)
 */

// 행정구역 코드 번호
let ADM_CODE_SUB_NUM = [];
// 행정구역명
let ADM_CODE_SUB_NAME = [];

/**
 * 행정구역 (도,시 코드)로 가져온 값으로
 * 행정구역 (시, 구 코드) 번호 가져오기
 * @param {string} accessToken        접근 토큰
 * @param {string} mainNumber        행정구역 번호
 * @return {string}        (시, 구 코드)를 저장
 */
function get_admCodeSub(accessToken, mainNumber) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url =
        "https://sgisapi.kostat.go.kr/OpenAPI3/stats/population.json?accessToken=" +
        accessToken +
        "&year=2020&low_search=1&adm_cd=" +
        mainNumber;

    xhr.onreadystatechange = (e) => {
        const { target } = e;

        if (target.readyState == XMLHttpRequest.DONE) {
            if (target.status == 200) {
                const req = JSON.parse(target.response);

                // 길이 저장
                let adm_len = req.result.length;

                /**
                 * 행정구역코드, 행정구역번호 뽑기
                 *  각각 임시 배열에 넣은뒤 ADM_CODE_SUB_NUM,ADM_CODE_SUB_NAME에 그 배열을 다시 넣어서 이중 배열 구조로 구성
                 */

                let tempArrNum = [];
                let tempArrName = [];

                // (도, 시)별로 구분하기 위해서 맨 처음부분에 mainNumber값을 넣음
                tempArrNum.push(mainNumber);
                tempArrName.push(mainNumber);

                for (let i = 0; i < adm_len; i++) {
                    tempArrNum.push(req.result[i].adm_cd);
                    tempArrName.push(req.result[i].adm_nm);
                }
                ADM_CODE_SUB_NUM.push(tempArrNum);
                ADM_CODE_SUB_NAME.push(tempArrName);
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

export { get_admCodeSub, ADM_CODE_SUB_NUM, ADM_CODE_SUB_NAME };
