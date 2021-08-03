function dateFormat(d) {
    return ((d.getMonth() + 1) + "").padStart(2, "0")
        + "/" + (d.getDate() + "").padStart(2, "0")
        + "/" + d.getFullYear();
}


function loadDuLieu(id) {

}


function loadDuLieuChiTiet(id) {
    $.ajax({
        type: 'POST',
        data: { "id": id },
        url: '/Admin/Bill/Index',
        success: function (response) {
            $("#hd-nguoidat").val(response.hoadon.TaiKhoanNguoiDung.HoTen);
            $("#hd-nguoinhan").val(response.hoadon.HoTenNguoiNhan);
            $("#hd-trangthai").val(response.hoadon.TrangThai ? "Đã thanh toán" : "Chưa thanh toán");
            $("#hd-ngaydat").val(dateFormat(new Date(parseInt((response.hoadon.NgayDat).match(/\d+/)[0]))));
            $("#hd-sdt").val(response.hoadon.SoDienThoaiNhan);
            $("#hd-diachi").val(response.hoadon.DiaChiNhan);
            $("#hd-ghichu").html(response.hoadon.GhiChu);
            $.each(response.cthd, function (index) {
                $("#hd-body-").append("<tr><td><img src" + response.cthd[index].SanPhamChiTiet.SanPham.HinhAnh + " " + +"</td></tr>"
                    + "<tr>"+ a +"</tr>" + "<tr></tr>" + "<tr></tr>" + "<tr></tr>" + "<tr></tr>");
            })
        },
        error: function (response) {
            //debugger;  
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    }); 
}