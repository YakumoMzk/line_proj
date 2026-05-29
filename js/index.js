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
        data: [],
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
        data: [],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  //通过ajax调用获取配置项数据
  $.getJSON("http://localhost/line_proj/php/get_report_rate.php", function (data) {

    myChart.setOption({
      xAxis: {
        data: data.depart
      },
      series: [
        {
          name: '报到率',
          data: data.rate
        }
      ]
    });
  });

  myChart.setOption(option);

  window.addEventListener("resize", function () {
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
      data: [],
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
      data: [],
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
        name: '报到数',
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
          formatter: "{c}",
          color: "#fff"
        },

        data: []
      },
      {
        name: '招生数',
        type: 'bar',
        yAxisIndex: 1,
        data: [],
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

  //通过ajax调用获取配置项数据
  $.getJSON("http://localhost/line_proj/php/get_report_num.php", function (data) {

    myChart.setOption({
      yAxis: [{

        data: data.depart,
      },

      {
        data: data.plan_num,
      }
      ],
      series: [
        {
          data: data.come_num,
        },
        {
          data: data.plan_num,
        }
      ]
    });
  });

  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();

  });
})();