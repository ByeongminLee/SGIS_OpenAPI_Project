/*
 * @filename : get_accessToken.js
 * @description : accessToken 얻는 함수
 * @author : 이병민 (bmlee531@gmail.com)
 */
import { serviceID, securityKey } from "../key.js";
let accessToken = "";

/**
 * 입력한 값(serviceID,securityKey)으로 API에 접근 가능한 accessToken 획득
 * @param {string} serviceID        서비스ID
 * @param {string} securityKey      보안Key
 * @return {string}        accessToken을 string으로 획득
 */
function get_accessToken(serviceID, securityKey) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url =
        "https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json?consumer_key=" +
        serviceID +
        "&consumer_secret=" +
        securityKey;

    xhr.onreadystatechange = (e) => {
        const { target } = e;

        if (target.readyState == XMLHttpRequest.DONE) {
            if (target.status == 200) {
                const req = JSON.parse(target.response);
                // accessToken 저장
                accessToken = req.result.accessToken;
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
    xhr.open(method, url, false); // false: 동기 처리로 바꾸어줌
    xhr.send();
}

get_accessToken(serviceID, securityKey);

export { accessToken };
