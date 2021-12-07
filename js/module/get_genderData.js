/*
 * @filename : get_genderData.js
 * @description : 각 지역의 남녀비율 통계 가져오기
 * @author : 김경의 (chanillekim@gmail.com)
 */
import { genderData } from "./tab.js";

function get_genderData(accessToken, adm_cd) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url =
        "https://sgisapi.kostat.go.kr/OpenAPI3/startupbiz/mfratiosummary.json?accessToken=" +
        accessToken +
        "&adm_cd=" +
        adm_cd;

    xhr.onreadystatechange = (e) => {
        const { target } = e;

        if (target.readyState == XMLHttpRequest.DONE) {
            if (target.status == 200) {
                const req = JSON.parse(target.response);
                // 이차 배열을 위한 배열
                let genderDataTemp = [];
                // 값 추가
                genderDataTemp.push(req.result[0].adm_nm);
                genderDataTemp.push(req.result[0].f_per);
                genderDataTemp.push(req.result[0].m_per);
                genderData.push(genderDataTemp);
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

export { get_genderData };
