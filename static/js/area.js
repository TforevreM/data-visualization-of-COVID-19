function lineStack(elementID, titleOption, legendData, xAxisData, seriesData) {
    var chartDom = document.getElementById(elementID);
    var myChart = echarts.init(chartDom);
    var option;

    // console.log("开始画图了");
    option = {
        title: titleOption,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: "right",
            data: legendData,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData
        },
        yAxis: {
            type: 'value'
        },
        series: seriesData

    };
    myChart.setOption(option);
}

function getData() {
    var area_name = $("#area").html();
    var data_url = `/areaData/${area_name}`
    console.log(data_url);
    $.ajax({
        url: data_url,
        dataType: "json",
        success: function (data) {
            // console.log(data);
            var updateDate = data["updateDate"];
            lineStack(
                "sum",
                {
                    text: `${area_name}-疫情累计趋势`,
                    subtext: "数据来源于百度疫情大数据",
                    sublink: "https://voice.baidu.com/act/newpneumonia/newpneumonia"
                },
                ["确诊","治愈","死亡"],
                updateDate,
                [
                    {
                        name: "确诊",
                        type: "line",
                        // stack: "Total",
                        data: data["list"][0]["data"]
                    },
                    {
                        name: "治愈",
                        type: "line",
                        // stack: "Total",
                        data: data["list"][1]["data"]
                    },
                    {
                        name: "死亡",
                        type: "line",
                        data: data["list"][2]["data"]
                    }
                ]
            );
            lineStack(
                "extend",
                {
                    text: `${area_name}-疫情新增趋势`,
                    subtext: "数据来源于百度疫情大数据",
                    sublink: "https://voice.baidu.com/act/newpneumonia/newpneumonia"
                },
                ["新增确诊","新增本土","新增无症状"],
                updateDate,
                [
                    {
                        name: "新增确诊",
                        type: "line",
                        // stack: "Total",
                        data: data["list"][3]["data"]
                    },
                    {
                        name: "新增本土",
                        type: "line",
                        // stack: "Total",
                        data: data["list"][4]["data"]
                    },
                    {
                        name: "新增无症状",
                        type: "line",
                        data: data["list"][5]["data"]
                    }
                ]
            );
        },
        error: function () {
            console.log("获取area数据出错");
        }
    });
}
getData();