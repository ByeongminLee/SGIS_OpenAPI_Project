<h1 align="center">
    SGIS_OpenAPI_Project
</h1>

<br>

<div align="center">
    <h4>π  Stack</h4>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">

</div>

<br>

<br>

## μ€ννκΈ°

-   ν΄λ‘  λ°κΈ°

    ```bash
    $ git clone git@github.com:ByeongminLee/SGIS_OpenAPI_Project.git
    ```

<br>

-   ν€ λ°κΈ
    ν΄λ‘ μ λ°κ³  λ λ€μ SGISμμ APIν€λ₯Ό λ°κΈλ°μμΌν©λλ€.

    μ΄ [μ£Όμ](!https://sgis.kostat.go.kr/developer/html/home.html)μμ νμκ°μμ νλ€μ ν€λ₯Ό λ°κΈ λ°μ μ μμ΅λλ€.

     <br>

    keyλ₯Ό λ°κΈλ°κ³  <code>./js</code>κ²½λ‘λ‘ <code>key.js</code>λ‘ νμΌμ λ§λ€μ΄μ λ€μκ³Ό κ°μ΄ μμ±ν΄μΌ ν©λλ€.

    ```js
    // ./js/key.js
    const serviceID = "[λ°κΈλ°μκ°]";
    const securityKey = "[λ°κΈλ°μκ°]";

    export { serviceID, securityKey };
    ```

    <code>key.js</code> μμ±μ΄ λλλ©΄ μ μμ μΌλ‘ μ€ν μν¬ μ μμ΅λλ€.

<br>

<br>

## π μκ°

SGISμ [μ΄μ‘°μ¬μ£Όμμ§ν], [κ±°μ£ΌμΈκ΅¬μμ½μ λ³΄], [μ±λ³μΈκ΅¬ μμ½μ λ³΄] APIλ₯Ό νμ©ν΄μ μ°λ¦¬λλΌμ μ μ²΄ μΈκ΅¬λ₯Ό νλ‘ λ³΄μ¬μ£Όκ³  μ°λ¦¬λλΌμ μ, κ΅°, κ΅¬ λ¨μμ μ§μ­λ³ 10λλ―Έλ§ ~ 70μ΄μκΉμ§ μ°λ Ήλλ³ μΈκ΅¬μμ μ±λ³ λΉμ¨μ νλ©΄μ λ³΄μ¬μ€λλ€.

![κ²°κ³Ό νλ©΄](/readme/result_layout.gif)

|                μ°¨νΈ                |                ν                |
| :--------------------------------: | :------------------------------: |
| ![μ°¨νΈ](./readme/chart_layout.png) | ![ν](./readme/table_layout.png) |

<br>

<br>

## π νμΌ κ΅¬μ‘°

```
.
βββ README.md
βββ img
β   βββ seoul.jpg
βββ index.html
βββ js
β   βββ key.js
β   βββ main.js
β   βββ module
β       βββ get_accessToken.js
β       βββ get_admCodeMain.js
β       βββ get_admCodeSub.js
β       βββ get_ageData.js
β       βββ get_genderData.js
β       βββ print_chart.js
β       βββ tab.js
βββ style
    βββ reset.css
    βββ style.css
```
