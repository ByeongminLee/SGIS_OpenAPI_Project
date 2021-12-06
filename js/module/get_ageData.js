/*
 * @filename : get_ageData.js
 * @description : 각 지역의 나이대별 통계 가져오기
 * @author : 이병민 (bmlee531@gmail.com)
 */
import { ageData } from "./tab.js";

function get_ageData(accessToken, adm_cd) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url =
        "https://sgisapi.kostat.go.kr/OpenAPI3/startupbiz/pplsummary.json?accessToken=" +
        accessToken +
        "&adm_cd=" +
        adm_cd;

    xhr.onreadystatechange = (e) => {
        const { target } = e;

        if (target.readyState == XMLHttpRequest.DONE) {
            if (target.status == 200) {
                const req = JSON.parse(target.response);
                // 이차 배열을 위한 배열
                let ageDataTemp = [];
                // 값 추가
                ageDataTemp.push(req.result[0].adm_nm);
                ageDataTemp.push(req.result[0].teenage_less_than_cnt);
                ageDataTemp.push(req.result[0].teenage_cnt);
                ageDataTemp.push(req.result[0].twenty_cnt);
                ageDataTemp.push(req.result[0].thirty_cnt);
                ageDataTemp.push(req.result[0].forty_cnt);
                ageDataTemp.push(req.result[0].fifty_cnt);
                ageDataTemp.push(req.result[0].fifty_cnt);
                ageDataTemp.push(req.result[0].sixty_cnt);
                ageDataTemp.push(req.result[0].seventy_more_than_cnt);
                ageData.push(ageDataTemp);
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
    xhr.open(method, url);
    xhr.send();
}

export { get_ageData };
