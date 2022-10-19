function getTopAddCountry() {
    var chartDom = document.getElementById('right-2');
    var myChart = echarts.init(chartDom);
    var option;

    $.ajax({
        url: "/topAddCountry",
        dataType: "json",
        success: function(data) {
            option = {
                title: {
                    text: "新增确诊国家Top10",
                    subtext: "数据来源于百度疫情大数据",
                    sublink: "https://voice.baidu.com/act/newpneumonia/newpneumonia"
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    x: "right",
                    y:"center",
                    orient:"vertical"
                },
                series: [
                    {
                        name: '新增确诊国家',
                        type: 'pie',
                        radius: ['30%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: data
                    }
                ]
            };
            option && myChart.setOption(option);
        },
        error:function() {
            console.log("获取asymptomatic数据时出错了");
        }
    })

}
getTopAddCountry();
setInterval(getTopAddCountry,1000 * 60 * 60 * 25);