function makeAwsomeTitle() {
    var chartDom = document.getElementById('title');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: '全国疫情实时追踪',
                        fontSize: 50,
                        fontWeight: 'normal',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: 'red',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 3000,
                        loop: false,
                        keyframes: [
                            {
                                percent: 0.7,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                            {
                                // Stop for a while.
                                percent: 0.8,
                                style: {
                                    fill: 'transparent'
                                }
                            },
                            {
                                percent: 1,
                                style: {
                                    fill: 'white'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    };

    option && myChart.setOption(option);
}

makeAwsomeTitle();