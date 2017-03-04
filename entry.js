//require('./style.css') // 载入 style.css

//引入echarts 主模块
var echarts = require('echarts');
//引入柱状图
/*
 require('echarts/lib/chart/bar');
 // 引入提示框和标题组件
 require('echarts/lib/component/tooltip');
 require('echarts/lib/component/title');
 */


// 基于准备好的dom，初始化echarts实例 柱状图
var histogramChart = echarts.init(document.getElementById('histogram'));
// 绘制图表
histogramChart.setOption({
    title: { text: '2017产品销量柱状图' },
    tooltip: {},
    legend: {
        data:['销量','人数']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [523, 740, 886, 550, 330, 1220]
    },{
        name: '人数',
        type: 'line',
        smooth: true,
        data: [523, 740, 886, 550, 330, 1220]
    },
    ]
});