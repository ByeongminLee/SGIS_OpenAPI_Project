/*
 * @filename : get_ageData.js
 * @description : 각 지역의 나이대별 통계 가져오기
 * @author : 이병민 (bmlee531@gmail.com)
 */

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
                console.log(
                    "adm_cd:" +
                        adm_cd +
                        req.result[0].adm_nm +
                        "::: \n 10대 미만 인구수:" +
                        req.result[0].teenage_less_than_cnt +
                        "\n 10대 인구수 :" +
                        req.result[0].teenage_cnt +
                        "\n 20대 인구수 :" +
                        req.result[0].twenty_cnt +
                        "\n 30대 인구수 :" +
                        req.result[0].thirty_cnt +
                        "\n 40대 인구수 :" +
                        req.result[0].forty_cnt +
                        "\n 50대 인구수 :" +
                        req.result[0].fifty_cnt +
                        "\n 60대 인구수 :" +
                        req.result[0].sixty_cnt +
                        "\n 60대 인구수 :" +
                        req.result[0].seventy_more_than_cnt
                );
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

export { get_ageData };
