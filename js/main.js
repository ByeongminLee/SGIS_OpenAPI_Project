import { accessToken } from "./module/get_accessToken.js";
import { get_admCode, ADM_CODE_NUM, ADM_CODE_NAME } from "./module/get_admCode.js";

console.log(accessToken);

get_admCode(accessToken);
console.log(ADM_CODE_NUM, ADM_CODE_NAME);
