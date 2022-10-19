function getChinaMap() {
    var chartDom = document.getElementById("middle-2");
    var mychart = echarts.init(chartDom);
    var option;

    mychart.showLoading();
    $.ajax({
        url: "/nowConfirm",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            $.get("/geoJson", function (geoJson) {
                console.log("获取到CHINA-MAP-JSON数据了");
                // console.log(geoJson);
                echarts.registerMap("CHINA", geoJson);
                option = {
                    title: {
                        text: "国内现有确诊病例分布",
                        subtext: "数据来源于腾讯新闻",
                        sublink: "https://news.qq.com/zt2020/page/feiyan.htm"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: '地区:{b}<br/>确诊:{c}'
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    visualMap: {
                        show: true,
                        x: "left",
                        y: "bottom",
                        textStyle: {
                            fontSize: 8
                        },
                        splitList: [
                            {start: 10000, color: "red"},
                            {start: 1000, end: 9999, color: "yellow"},
                            {start: 100, end: 999, color: "rgb(230, 69, 70)"},
                            {start: 10, end: 99, color: "rgb(245, 117, 103)"},
                            {start: 1, end: 9, color: "rgb(255, 229, 219)"},
                            {start: 0, end: 0, color: "white"}
                        ],
                    },
                    series: [
                        {
                            name: "累计确诊",
                            type: "map",
                            map: "CHINA",
                            label: {
                                show: true,
                                fontSize: 8
                            },
                            data: [
                                {name: "北京市", value: data["北京"]},
                                {name: "天津市", value: data["天津"]},
                                {name: "河北省", value: data["河北"]},
                                {name: "山西省", value: data["山西"]},
                                {name: "内蒙古自治区", value: data["内蒙古"]},
                                {name: "辽宁省", value: data["辽宁"]},
                                {name: "吉林省", value: data["吉林"]},
                                {name: "黑龙江省", value: data["黑龙江"]},
                                {name: "上海市", value: data["上海"]},
                                {name: "江苏省", value: data["江苏"]},
                                {name: "浙江省", value: data["浙江"]},
                                {name: "安徽省", value: data["安徽"]},
                                {name: "福建省", value: data["福建"]},
                                {name: "江西省", value: data["江西"]},
                                {name: "山东省", value: data["山东"]},
                                {name: "河南省", value: data["河南"]},
                                {name: "湖北省", value: data["湖北"]},
                                {name: "湖南省", value: data["湖南"]},
                                {name: "广东省", value: data["广东"]},
                                {name: "广西壮族自治区", value: data["广西"]},
                                {name: "海南省", value: data["海南"]},
                                {name: "重庆市", value: data["重庆"]},
                                {name: "四川省", value: data["四川"]},
                                {name: "贵州省", value: data["贵州"]},
                                {name: "云南省", value: data["云南"]},
                                {name: "西藏自治区", value: data["西藏"]},
                                {name: "陕西省", value: data["陕西"]},
                                {name: "甘肃省", value: data["甘肃"]},
                                {name: "青海省", value: data["青海"]},
                                {name: "台湾省", value: data["台湾"]},
                                {name: "宁夏回族自治区", value: data["宁夏"]},
                                {name: "新疆维吾尔自治区", value: data["新疆"]},
                                {name: "香港特别行政区", value: data["香港"]},
                                {name: "澳门特别行政区", value: data["澳门"]}
                            ]
                        }
                    ]
                };
                mychart.hideLoading();
                mychart.setOption(option);

                // 点击事件
                mychart.on("click",function (params) {
                    console.log(params.name);
                    new_url = `area/${params.name}`;
                    window.open(new_url);
                });
            })
        },
        error: function () {
            console.log("获取疫情数据CHINA-ALL出错");
        }
    })
}

getChinaMap();
setInterval(getChinaMap, 1000 * 60 * 5);