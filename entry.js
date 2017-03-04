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
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
//折线图
var lineChart = echarts.init(document.getElementById('lineChart'));
lineChart.setOption({
    title: {
        text: '某楼盘销售情况',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['意向','预购','成交']
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {show: true, type: ['stack', 'tiled']},
            saveAsImage: {show: true}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '成交',
        type: 'line',
        smooth: true,
        data: [10, 12, 21, 54, 260, 830, 710]
    },
        {
            name: '预购',
            type: 'line',
            smooth: true,
            data: [30, 182, 434, 791, 390, 30, 10]
        },
        {
            name: '意向',
            type: 'line',
            smooth: true,
            data: [1320, 1132, 601, 234, 120, 90, 20]
        }]
});