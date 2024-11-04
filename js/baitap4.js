const chooseCustomer = document.getElementById("chooseCustomer");
chooseCustomer.onclick = function () {
    const txtSoKetNoi = document.getElementById("txtSoKetNoi");
    chooseCustomer.value === "doanhNghiep"
        ? txtSoKetNoi.classList.remove("offInput")
        : txtSoKetNoi.classList.add("offInput");
};

function getTypeValue() {
    const chooseCustomer = document.getElementById("chooseCustomer");

    let type = "";
    if (chooseCustomer.value === "nhaDan") {
        type = "NHA_DAN";
    } else if (chooseCustomer.value === "doanhNghiep") {
        type = "DOANH_NGHIEP";
    }

    return type;
}

const btnTinhTienCap = document.getElementById("btnTinhTienCap");
btnTinhTienCap.onclick = function () {
    const showTinhTienCap = document.getElementById("showTinhTienCap");
    const txtMaKhachHang = document.getElementById("txtMaKhachHang").value;
    const txtSoKenhCaoCap =
        document.getElementById("txtSoKenhCaoCap").value * 1;
    const txtSoKetNoi = document.getElementById("txtSoKetNoi").value * 1;

    const phiXuLyHoaDonND = 4.5;
    const phiDichVuCoBanND = 20.5;
    const thueKenhCaoCapND = 7.5;

    const phiXuLyHoaDonDN = 15;
    const phiDichVuCoBanDN =
        txtSoKetNoi <= 10 ? 75 : 75 + (txtSoKetNoi - 10) * 5;
    const thueKenhCaoCapDN = 50;

    const type = getTypeValue();
    let totalCap = 0;

    switch (type) {
        case "NHA_DAN":
            totalCap =
                thueKenhCaoCapND * txtSoKenhCaoCap +
                phiDichVuCoBanND +
                phiXuLyHoaDonND;
            break;

        case "DOANH_NGHIEP":
            totalCap =
                thueKenhCaoCapDN * txtSoKenhCaoCap +
                phiDichVuCoBanDN +
                phiXuLyHoaDonDN;
            break;

        default:
            alert("Mời bạn chọn loại khách hàng");
            break;
    }

    console.log(totalCap.toFixed(2));
    showTinhTienCap.innerHTML = `👉Mã khách hàng: ${txtMaKhachHang}; Tiền cáp: $${totalCap.toFixed(
        2
    )}`;
};
