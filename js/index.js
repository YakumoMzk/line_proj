(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var option = {
    color: "#2f89cf",
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['信息技术', '艺术设计', '生态工程', '材料工程', '电子技术', '生物技术', '机械工程'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12px"
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        max: 100,

        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12px"
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '35%',
        data: [10, 52, 20, 33, 39, 33, 22],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  myChart.setOption(option);

  javascript: window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//柱状图2模块
(function () {
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var myColor = ["#ff0000", "#fbff00", "#0008ff", "#11ff00", "#00eeff", "#ff00ea", "#6f00ff"];
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%'
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      show: false
    },
    yAxis: [{
      type: 'category',
      data: ['信息技术', '艺术设计', '生态工程', '材料工程', '电子技术', '生物技术', '机械工程'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,1)",
      }
    },

    {
      type: 'category',
      data: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,1)",
      }
    }
    ],
    series: [
      {
        name: '报到率',
        type: 'bar',
        yAxisIndex: 0,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function (params) {
              return myColor[params.dataIndex];
            }
          },


        },
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%",
          color: "#fff"
        },

        data: [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3]
      },
      {
        name: '招生数',
        type: 'bar',
        yAxisIndex: 1,
        data: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4],
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          barBorderRadius: 15,
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3
        }
      }
    ]

  };

  myChart.setOption(option);

  javascript:
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();