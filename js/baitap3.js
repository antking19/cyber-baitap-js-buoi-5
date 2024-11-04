// function tinhThueThuNhapCaNhan(hoTen, tongThuNhapNam, soNguoiPhuThuoc) {
//     // Tính thu nhập chịu thuế
//     const thuNhapChiuThue =
//         tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
//     let thuePhaiTra = 0;

//     // Tính thuế dựa trên thu nhập chịu thuế
//     if (thuNhapChiuThue <= 60000000) {
//         thuePhaiTra = thuNhapChiuThue * 0.05;
//     } else if (thuNhapChiuThue <= 120000000) {
//         thuePhaiTra = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
//     } else if (thuNhapChiuThue <= 210000000) {
//         thuePhaiTra =
//             60000000 * 0.05 +
//             60000000 * 0.1 +
//             (thuNhapChiuThue - 120000000) * 0.15;
//     } else if (thuNhapChiuThue <= 384000000) {
//         thuePhaiTra =
//             60000000 * 0.05 +
//             60000000 * 0.1 +
//             90000000 * 0.15 +
//             (thuNhapChiuThue - 210000000) * 0.2;
//     } else if (thuNhapChiuThue <= 624000000) {
//         thuePhaiTra =
//             60000000 * 0.05 +
//             60000000 * 0.1 +
//             90000000 * 0.15 +
//             174000000 * 0.2 +
//             (thuNhapChiuThue - 384000000) * 0.25;
//     } else if (thuNhapChiuThue <= 960000000) {
//         thuePhaiTra =
//             60000000 * 0.05 +
//             60000000 * 0.1 +
//             90000000 * 0.15 +
//             174000000 * 0.2 +
//             240000000 * 0.25 +
//             (thuNhapChiuThue - 624000000) * 0.3;
//     } else {
//         thuePhaiTra =
//             60000000 * 0.05 +
//             60000000 * 0.1 +
//             90000000 * 0.15 +
//             174000000 * 0.2 +
//             240000000 * 0.25 +
//             336000000 * 0.3 +
//             (thuNhapChiuThue - 960000000) * 0.35;
//     }

//     console.log(`Họ tên: ${hoTen}`);
//     console.log(`Tổng thu nhập năm: ${tongThuNhapNam} VND`);
//     console.log(`Số người phụ thuộc: ${soNguoiPhuThuoc}`);
//     console.log(
//         `Thu nhập chịu thuế: ${thuNhapChiuThue > 0 ? thuNhapChiuThue : 0} VND`
//     );
//     console.log(
//         `Thuế thu nhập cá nhân phải trả: ${
//             thuePhaiTra > 0 ? thuePhaiTra : 0
//         } VND`
//     );
// }

// // Ví dụ chạy chương trình
// tinhThueThuNhapCaNhan("Nguyen Van A", 500000000, 2);
