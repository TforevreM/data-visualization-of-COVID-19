function lineStack(elementID, titleOption, legendData, xAxisData, seriesData) {
    var chartDom = document.getElementById(elementID);
    var myChart = echarts.init(chartDom);
    var option;

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

function getBaiduData() {
    $.ajax({
        url: "/getBaiduData",
        dataType: "json",
        success: function (baidu_data) {
            console.log("成功获取到百度数据");
            // console.log(data);
            // 累计-确诊，凝似，治愈，死亡
            var updateDate = baidu_data["updateDate"];
            lineStack(
                "left-1",
                {
                    text: "国内累计趋势",
                    subtext: "数据来源于百度疫情大数据",
                    sublink: "https://voice.baidu.com/act/newpneumonia/newpneumonia"
                },
                ["确诊","疑似", "治愈","死亡"],
                updateDate,
                [
                    {
                        name: "确诊",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][0]["data"]
                    },
                    {
                      name:"疑似",
                      type: "line",
                      data: baidu_data["list"][1]["data"]
                    },
                    {
                        name: "治愈",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][2]["data"]
                    },
                    {
                        name: "死亡",
                        type: "line",
                        data: baidu_data["list"][3]["data"]
                    }
                ]
            );
            lineStack(
                "left-2",
                {
                    text: "国内新增趋势",
                    subtext: "数据来源于百度疫情大数据",
                    sublink: "https://voice.baidu.com/act/newpneumonia/newpneumonia"
                },
                ["确诊","疑似", "治愈","死亡"],
                updateDate,
                [
                    {
                        name: "确诊",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][4]["data"]
                    },
                    {
                        name: "疑似",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][5]["data"]
                    },
                    {
                        name: "治愈",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][6]["data"]
                    },
                    {
                        name: "死亡",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][7]["data"]
                    }
                ]
            );
            lineStack(
                "right-1",
                {
                    text: "新增国内和境外输入趋势",
                    subtext: "数据来源于百度疫情大数据",
                    sublink: "https://voice.baidu.com/act/newpneumonia/newpneumonia"
                },
                ["国内", "境外"],
                updateDate,
                [
                    {
                        name: "国内",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][10]["data"]
                    },
                    {
                        name: "境外",
                        type: "line",
                        // stack: "Total",
                        data: baidu_data["list"][9]["data"]
                    },
                ]
            );
        },
        error: function () {
            console.log("加载数据出错");
        }
    })
}

getBaiduData();
setInterval(getBaiduData, 1000 * 60 * 60 * 25);