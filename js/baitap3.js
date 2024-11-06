/**
 * Bài 1: Tính thuế thu nhập cá nhân
 * Mô hình 3 khối
 * ** Đầu vào
 *  - Khai báo biến txtTongThuNhapNam (tổng thu nhập năm)
 *  - Khai báo biến txtSoNguoiPhuThuoc (Số người phụ thuộc)
 *  - Tạo biến tienThue để chứa tiền thuế thu nhập cá nhân
 *
 * ** Xử lý
 *  - Tạo biến thuNhapChiuThue và tính bằng công thức được ho
 *      -> Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 *  - Phân chia từng mức rồi tính
 *      -> tổng thu nhập năm > 0 và tổng thu nhập năm <= 60 thì nhân cho 0.05
 *      -> tổng thu nhập năm > 60 và tổng thu nhập năm <= 120 thì nhân cho 0.1
 *      -> tổng thu nhập năm > 120 và tổng thu nhập năm <= 210 thì nhân cho 0.15
 *      -> tổng thu nhập năm > 210 và tổng thu nhập năm <= 384 thì nhân cho 0.2
 *      -> tổng thu nhập năm > 384 và tổng thu nhập năm <= 624 thì nhân cho 0.25
 *      -> tổng thu nhập năm > 624 và tổng thu nhập năm <= 960 thì nhân cho 0.3
 *      -> tổng thu nhập năm > 960 thì nhân cho 0.35
 *
 * ** Đầu ra
 *  - Xuất kết quả ra màn hình
 */

const btnTinhTienThue = document.getElementById("btnTinhTienThue");
btnTinhTienThue.onclick = function () {
    const fullNameB3 = document.getElementById("fullNameB3").value;
    const showTinhTienThue = document.getElementById("showTinhTienThue");
    const txtTongThuNhapNam =
        document.getElementById("txtTongThuNhapNam").value * 1;
    const txtSoNguoiPhuThuoc =
        document.getElementById("txtSoNguoiPhuThuoc").value * 1;

    const thuNhapChiuThue =
        txtTongThuNhapNam - 4000000 - txtSoNguoiPhuThuoc * 1600000;

    let tienThue = 0;
    if (txtTongThuNhapNam > 0) {
        tienThue = thuNhapChiuThue * 0.05;
    }
    if (txtTongThuNhapNam > 60000000) {
        tienThue = thuNhapChiuThue * 0.1;
    }
    if (txtTongThuNhapNam > 120000000) {
        tienThue = thuNhapChiuThue * 0.15;
    }
    if (txtTongThuNhapNam > 210000000) {
        tienThue = thuNhapChiuThue * 0.2;
    }
    if (txtTongThuNhapNam > 210000000) {
        tienThue = thuNhapChiuThue * 0.2;
    }
    if (txtTongThuNhapNam > 384000000) {
        tienThue = thuNhapChiuThue * 0.25;
    }
    if (txtTongThuNhapNam > 624000000) {
        tienThue = thuNhapChiuThue * 0.3;
    }
    if (txtTongThuNhapNam > 960000000) {
        tienThue = thuNhapChiuThue * 0.35;
    }

    if (tienThue < 0) {
        alert("Số tiền thu nhập không hợp lệ");
    } else {
        const result = `👉Họ tên: ${fullNameB3}; Tiền thuế thu nhập cá nhân: ${tienThue.toLocaleString()} VND`;
        showTinhTienThue.innerHTML = result;
    }
};
