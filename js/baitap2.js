function getEle(func) {
    return document.getElementById(func);
}

const btnTinhTienDien = getEle("btnTinhTienDien");
btnTinhTienDien.onclick = function () {
    const KW_ONE = 50;
    const KW_TWO = 50;
    const KW_THREE = 100;
    const KW_FOUR = 150;

    const KW_ONE_VND = 500;
    const KW_TWO_VND = 650;
    const KW_THREE_VND = 850;
    const KW_FOUR_VND = 1100;
    const KW_FIVE_VND = 1300;

    const fullNameB2 = getEle("fullNameB2").value;
    const kwNumber = getEle("kwNumber").value * 1;
    const showTinhTienDien = getEle("showTinhTienDien");

    let totalKw = 0;

    if (kwNumber >= 0 && kwNumber <= 50) {
        totalKw = kwNumber * KW_ONE_VND;
    } else if (kwNumber > 50 && kwNumber <= 100) {
        totalKw = 50 * KW_ONE_VND + (kwNumber - 50) * KW_TWO_VND;
    } else if (kwNumber > 100 && kwNumber <= 200) {
        totalKw =
            50 * KW_ONE_VND + 50 * KW_TWO_VND + (kwNumber - 100) * KW_THREE_VND;
    } else if (kwNumber > 200 && kwNumber <= 350) {
        totalKw =
            50 * KW_ONE_VND +
            50 * KW_TWO_VND +
            100 * KW_THREE_VND +
            (kwNumber - 200) * KW_FOUR_VND;
    } else if (kwNumber > 350) {
        totalKw =
            50 * KW_ONE_VND +
            50 * KW_TWO_VND +
            100 * KW_THREE_VND +
            150 * KW_FOUR_VND +
            (kwNumber - 350) * KW_FIVE_VND;
    }

    showTinhTienDien.innerHTML = `👉Họ tên: ${fullNameB2}; Tiền điện: ${totalKw.toLocaleString()} `;
};
