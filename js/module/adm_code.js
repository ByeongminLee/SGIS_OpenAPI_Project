/*
 * @filename : adm_code.js
 * @description : 행정구역 코드
 * @author : 이병민 (bmlee531@gmail.com), 김경의 (chanillekim@gmail.com)
 */

const ADM_CODE = {
    main_code: {
        Seoul: "11",
        Busan: "21",
        Daegu: "22",
        Incheon: "23",
        Gwangju: "24",
        Daejeon: "25",
        Ulsan: "26",
        Sejong: "29",
        Gyeonggi: "31",
        Gangwon: "32",
        Chungcheongbuk: "33",
        Chungcheongnam: "34",
        Jeonbuk: "35",
        Jeonnam: "36",
        Gyeongbuk: "37",
        Gyeongnam: "38",
        Jeju: "39",
    },
    11: {
        jongno: "010",
        Jung: "020",
        Yongsan: "030",
        jusoen: "040",
        Gwangjin: "050",
        Dongdaemun: "060",
        Jungnang: "070",
        Seongdong: "080",
        Gangbuk: "090",
        Dobong: "100",
        Nowon: "110",
        Eunpyeong: "120",
        Seodaemun: "130",
        Mapo: "140",
        Yangcheon: "150",
        Gangseo: "160",
        Guro: "170",
        Geumcheon: "180",
        Yeongdeungpo: "190",
        Dongjak: "200",
        Gwanak: "210",
        Seocho: "220",
        Gangnam: "230",
        Songpa: "240",
        Gangdong: "250",
    },
    21: {
        Jung: "010",
        Seo: "020",
        Dong: "030",
        Yeongdo: "040",
        Busanjin: "050",
        Dongnae: "060",
        Nam: "070",
        Buk: "080",
        Haeundae: "090",
        Saha: "100",
        Geumjeong: "110",
        Gangseo: "120",
        Yeonje: "130",
        Suyeong: "140",
        Sasang: "150",
        Gijang: "310",
    },
    22: {
        Jung: "010",
        Dong: "020",
        Seo: "030",
        Nam: "040",
        Buk: "050",
        Suseong: "060",
        Dalseo: "070",
        Dalseong: "310",
    },
    23: {
        Jung: "010",
        Dong: "020",
        Yeonsu: "040",
        Namdong: "050",
        Bupyeong: "060",
        Gyeyang: "070",
        Seo: "080",
        Michuhol: "090",
        Ganghwa: "310",
        Ongjin: "320",
    },
    24: {
        Dong: "010",
        Seo: "020",
        Nam: "030",
        Buk: "040",
        Gwangsan: "050",
    },
    25: {
        Dong: "010",
        Jung: "020",
        Seo: "030",
        Yuseong: "040",
        Daedeok: "050",
    },
    26: {
        Jung: "010",
        Nam: "020",
        Dong: "030",
        Buk: "040",
        Ulju: "310",
    },
    29: {
        Sejong: "010",
    },
    31: {
        Suwon_jangan: "011",
        Suwon_ksun: "012",
        Suwon_paldal: "013",
        Suwon_yt: "014",
        Seongnam_sujeong: "021",
        Seongnam_jungwong: "022",
        Seongnam_bundang: "023",
        Uijeongbu: "030",
        Anyang_manan: "041",
        Anyang_dongan: "042",
        Bucheon: "050",
        Gwangmyeong: "060",
        Pyeongtaek: "070",
        Dongducheon: "080",
        Ansan_sangok: "091",
        Ansan_danwon: "092",
        Goyang_dygu: "101",
        Goyang_ilsegu: "103",
        Goyang_ilswgu: "104",
        Gwacheon: "110",
        Guri: "120",
        Namyangju: "130",
        Osan: "140",
        Siheung: "150",
        Gunpo: "160",
        Uiwang: "170",
        Hanam: "180",
        Yongin_Cheoin: "191",
        Yongin_Giheung: "192",
        Yongin_Suji: "193",
        Paju: "200",
        Icheon: "210",
        Anseong: "220",
        Gimpo: "230",
        Hwaseong: "240",
        Gwangju: "250",
        Yangju: "260",
        Pocheon: "270",
        Yeoju: "280",
        Yeoncheon: "350",
        Gapyeong: "370",
        Yangpyeong: "380",
    },
    32: {
        Chuncheon: "010",
        Wonju: "020",
        Gangneung: "030",
        Donghae: "040",
        Taebaek: "050",
        Sokcho: "060",
        Samcheok: "070",
        Hongcheon: "310",
        Hoengseong: "320",
        Yeongwol: "330",
        Pyeongchang: "340",
        Jeongseon: "350",
        Cheorwon: "360",
        Hwacheon: "370",
        Yanggu: "380",
        Inje: "390",
        Goseong: "400",
        Yangyang: "410",
    },
    33: {
        Chungju: "020",
        Jecheon: "030",
        CheongjuSangdanggu: "041",
        CheongjuSeowongu: "042",
        CheongjuHeungdeokgu: "043",
        CheongjuCheongwongu: "044",
        Boeungun: "320",
        Okcheongun: "330",
        Yeongdonggun: "340",
        Jincheongun: "350",
        Goesangun: "360",
        Eumseonggun: "370",
        Danyanggun: "380",
        Jeungpyeonggun: "390",
    },
    34: {
        CheonanDongnamgu: "011",
        CheonanSeobukgu: "012",
        Gongju: "020",
        Boryeong: "030",
        Asan: "040",
        Seosan: "050",
        Nonsan: "060",
        Gyeryong: "070",
        Dangjin: "080",
        Geumsangun: "310",
        Buyeogun: "330",
        Seocheongun: "340",
        Cheongyanggun: "350",
        Hongseonggun: "360",
        Yesangun: "370",
        Taeangun: "380",
    },
    35: {
        JeonjuWansangu: "011",
        JeonjuDeokjingu: "012",
        Gunsan: "020",
        Iksan: "030",
        Jeongeup: "040",
        Namwon: "050",
        Gimje: "060",
        Wanjugun: "310",
        Jinangun: "320",
        Mujugun: "330",
        Jangsugun: "340",
        Imsilgun: "350",
        Sunchanggun: "360",
        Gochanggun: "370",
        Buangun: "380",
    },
    36: {
        Mokpo: "010",
        Yeosu: "020",
        Suncheon: "030",
        Naju: "040",
        Gwangyang: "060",
        Damyanggun: "310",
        Gokseonggun: "320",
        Guryegun: "330",
        Goheunggun: "350",
        Boseonggun: "360",
        Hwasungun: "370",
        Jangheunggun: "380",
        Gangjingun: "390",
        Haenamgun: "400",
        Yeongamgun: "410",
        Muangun: "420",
        Hampyeonggun: "430",
        Yeonggwanggun: "440",
        Jangseonggun: "450",
        Wandogun: "460",
        Jindogun: "470",
        Sinangun: "480",
    },
    37: {
        PohangNamgu: "011",
        PohangBukgu: "012",
        Gyeongju: "020",
        Gimcheon: "030",
        Andong: "040",
        Gumi: "050",
        Yeongju: "060",
        Yeongcheon: "070",
        Sangju: "080",
        Mungyeong: "090",
        Gyeongsan: "100",
        Gunwigun: "320",
        Cheongsonggun: "330",
        Yeongyanggun: "340",
        Yeongdeokgun: "350",
        Cheongdogun: "360",
        Goryeonggun: "370",
        Seongjugun: "380",
        Chilgokgun: "390",
        Yecheongun: "400",
        Bonghwagun: "410",
        Uljingun: "420",
        Ulleunggun: "430",
    },
    38: {
        Jinju: "030",
        Tongyeong: "050",
        Sacheon: "060",
        Gimhae: "070",
        Miryang: "080",
        Geoje: "090",
        Yangsan: "100",
        ChangwonUichanggu: "111",
        ChangwonSeongsangu: "112",
        ChangwonMasanhappogu: "113",
        Changwonmasanhoewongu: "114",
        ChangwonJinhaegu: "115",
        Uiryeonggun: "310",
        Hamanungun: "320",
        Changnyeongun: "330",
        Goseonggun: "340",
        Namhaegun: "350",
        Hadonggun: "360",
        Sancheonggun: "370",
        Hamyanggun: "380",
        Geochanggun: "390",
        Hapcheongun: "400",
    },
    39: {
        jeju: "010",
        Seogwipo: "020",
    },
};

export { ADM_CODE };
