
//load dữ liệu lên form sửa
function loadData(id) {
    $.ajax({
        type: 'POST',
        data: { "id": id },
        url: '/ClientUser/Index',
        success: function (response) {
            $("#matk").val(response.MaTK);
            $("#tendangnhap").val(response.TenDangNhap);
            $("#hoten").val(response.HoTen);
            if (response.TrangThai == true) {
                $("#actived").attr("checked", true);
            } else {
                $("#blocked").attr("checked", true);
            }
        },
        error: function (response) {
            //debugger;  
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}

//ajax sửa tài khoản
function suaTaiKhoan() {
    let data = {};
    let formData = $('#update-form').serializeArray({
    });
    $.each(formData, function (index, value) {
        data["" + value.name + ""] = value.value;
    });
    $.ajax({
        url: '/ClientUser/Update',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (respone) {
            $("#update-message").html(respone.message);
            if (respone.status == true) {
                $("#update-message").addClass("text-warning");
                setTimeout(function () {
                    window.location.replace("/Admin/ClientUser");
                }, 1000)
            } else {
                $("#update-message").addClass("text-danger");
            }
        },
        error: function (respone) {
            console.log(respone);
        }
    });
    return false;
}

//load data lên form xóa
function deleteData(id) {
    $("#delete-user-matk").val(id);
}

function xoaTaiKhoan() {
    let id = $("#delete-user-matk").val();
    $.ajax({
        type: 'POST',
        data: { "id": id },
        url: '/ClientUser/Delete',
        success: function (response) {
            if (response.status == true) {
                $(".cancelPopup").click();
                $("#row-" + id).remove();
            }
        },
        error: function (response) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}