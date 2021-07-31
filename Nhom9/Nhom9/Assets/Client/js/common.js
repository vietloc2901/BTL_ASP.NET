function loadSanPham(id) {
    $.ajax({
        type: 'POST',
        data: { "id": id },
        url: '/Product/Index',
        success: function (response) {
            $("#modal-a-hinhanh").attr("href", response.HinhAnh);
            $("#modal-hinhanh").attr("src", response.HinhAnh);
            $("#modal-tensp").html(response.TenSP);
            $("#modal-danhmuc").html(response.DanhMuc.TenDanhMuc);
            $("#modal-gia").html(response.Gia.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
            $("#modal-mamau").val(response.MaMau.trim());
            $.each(response.SanPhamChiTiets, function (index) {
                $("#kichco-soluong-" + response.SanPhamChiTiets[index].MaKichCo).val(response.SanPhamChiTiets[index].IDCTSP);
            })
            if (response.SanPhamChiTiets[0].SoLuong == 0) {
                $("#order-text").html("Hết hàng ! Hãy chọn kích cỡ khác");
                $("#order-text").attr("disabled","disabled");
            }
        },
        error: function (response) {
            //debugger;  
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });  
}


$(document).on("change", "#modal-kichco-soluong", function () {
    let id = $(this).val();
    $.ajax({
        type: 'POST',
        data: { "id": id },
        url: '/Product/Detail',
        success: function (response) {
            if (response.SoLuong > 0) {
                $("#order-text").html("Thêm vào giỏ");
                $("#order-text").removeAttr("disabled");
            } else {
                $("#order-text").html("Hết hàng ! Hãy chọn kích cỡ khác");
                $("#order-text").attr("disabled", "disabled");
            }
        },
        error: function (response) {
            //debugger;  
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });  
});