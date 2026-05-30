//柱状图1模块
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

//饼图1模块
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    title: {
      left: 'center',
      top: 10,
      textStyle: {
        color: '#fff',
        fontSize: 24
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: 'transparent',
      textStyle: {
        color: '#fff',
        fontSize: 16
      }
    },
    legend: {
      orient: 'horizontal',
      top: '0%',
      left: 'center',
      textStyle: {
        show: true,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
      },
      data: []
    },
    series: [
      {
        name: '民族人数',
        type: 'pie',
        radius: ['40%', '70%'], // 环形效果
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
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
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff'
          },
          itemStyle: {
            shadowBlur: 15,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        labelLine: {
          show: false
        },
        data: []
      }
    ]
  };

  // 从 PHP 接口获取数据，并同步更新图例
  $.getJSON("http://localhost/line_proj/php/get_nation_num.php", function (data) {
    var pieData = [];
    for (var i = 0; i < data.nation.length; i++) {
      pieData.push({
        name: data.nation[i],
        value: data.count[i]
      });
    }
    // 同时更新 饼图数据 和 图例
    myChart.setOption({
      series: [{
        data: pieData
      }],
      legend: {
        data: data.nation // 直接把后端返回的民族数组给图例
      }
    });
  });

  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//饼图2模块
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    backgroundColor: 'transparent',
    title: {
      left: 'center',
      top: 10,
      textStyle: {
        color: '#fff',
        fontSize: 24
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: 'transparent',
      textStyle: {
        color: '#fff',
        fontSize: 16
      },
      formatter: '{b}: {c}'
    },
    legend: {
      show: false // 隐藏图例，改用外部标签
    },
    series: [
      {
        name: '省份人数',
        type: 'pie',
        radius: ['10%', '70%'], // 内圈小，外圈大的玫瑰效果
        center: ['50%', '55%'],
        roseType: 'area', // 面积模式，扇区角度相同，半径随数值变化
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#0f1c3a', // 和背景深色融合
          borderWidth: 2
        },
        // 外部标签 + 连线（和示例效果一致）
        label: {
          show: true,
          position: 'outside',
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
          align: 'center'
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: '#4cc7ff', // 连线用浅蓝色
            width: 2,
            type: 'solid'
          }
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: []
      }
    ]
  };

  $.getJSON("http://localhost/line_proj/php/get_prov_num.php", function (data) {
    var pieData = [];
    for (var i = 0; i < data.prov.length; i++) {
      pieData.push({
        name: data.prov[i],
        value: data.count[i]
      });
    }
    myChart.setOption({
      series: [{
        data: pieData
      }]
    });
  });

  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();