function get_china_total() {
    $.ajax({
        url: "/chinaTotal",
        timeout: 10000,//超时设置为10秒
        dataType: "json",
        success: function (data) {
            $("#confirm").html(data["confirm"]);
            $("#nowConfirm").html(data["nowConfirm"]);
            $("#heal").html(data["heal"]);
            $("#dead").html(data["dead"]);
        },
        error: function () {
            console.log("获取数据出错");
        }
    })
}

get_china_total();
setInterval(get_china_total, 1000 * 60 * 5);