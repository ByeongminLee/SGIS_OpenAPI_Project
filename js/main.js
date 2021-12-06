import { accessToken } from "./module/get_accessToken.js";
import { get_admCodeMain, ADM_CODE_NUM, ADM_CODE_NAME } from "./module/get_admCodeMain.js";

console.log(accessToken);

get_admCodeMain(accessToken);
console.log(ADM_CODE_NUM, ADM_CODE_NAME);
