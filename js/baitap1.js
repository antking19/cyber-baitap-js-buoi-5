/**
 * Bài 1: Quản lý tuyển sinh
 * Mô hình 3 khối
 * ** Đầu vào
 *  - Khu vực A: 2
 *  - Khu vực B: 1
 *  - Khu vực C: 0.5
 *  - Đối tượng 1: 2.5
 *  - Đối tượng 2: 1.5
 *  - Đối tượng 3: 1
 *  - Tạo biến lấy điểm môn thứ 1
 *  - Tạo biến lấy điểm môn thứ 2
 *  - Tạo biến lấy điểm môn thứ 3
 *  - Tạo biến lấy điểm chuẩn
 *
 * ** Xử lý
 *  - Tạo hàm so sánh khu vực, đối tượng và giá trị của khu vực hay đối tượng đó
 *  - Tạo một biến totalDiemMon = điểm môn thứ 1 + điểm môn thứ 2 + điểm môn thứ 3 + biến chứa hàm khu vực + biến chứa hàm đối tượng
 *  - Tạo một biết result chứa so sánh điểm chuẩn và totalDiemMon
 *
 * ** Đầu ra
 *  - Xuất kết quả ra màn hình
 */

function getEle(func) {
    return document.getElementById(func);
}

function chooseVaule(
    func,
    value1,
    value2,
    value3,
    valueNumber1,
    valueNumber2,
    valueNumber3
) {
    const getFunc = getEle(func);
    if (getFunc.value === value1) return valueNumber1;
    else if (getFunc.value === value2) return valueNumber2;
    else if (getFunc.value === value3) return valueNumber3;
}

const btnKetQua = getEle("btnKetQua");
btnKetQua.onclick = function () {
    const chooseArea = chooseVaule("chooseArea", "A", "B", "C", 2, 1, 0.5);
    const chooseObject = chooseVaule(
        "chooseObject",
        "1",
        "2",
        "3",
        2.5,
        1.5,
        1
    );

    const txtDiemMonThu1 = getEle("txtDiemMonThu1").value * 1;
    const txtDiemMonThu2 = getEle("txtDiemMonThu2").value * 1;
    const txtDiemMonThu3 = getEle("txtDiemMonThu3").value * 1;
    const txtDiemChuan = getEle("txtDiemChuan").value * 1;
    const ketQua = getEle("ketQua");

    const totalDiemMon =
        txtDiemMonThu1 +
        txtDiemMonThu2 +
        txtDiemMonThu3 +
        chooseArea +
        chooseObject;

    const result =
        txtDiemChuan <= totalDiemMon
            ? `👉Bạn đã đậu. Tổng điểm: ${totalDiemMon}`
            : `👉Bạn đã rớt. Tổng điểm: ${totalDiemMon}`;

    ketQua.innerHTML = result;
};
