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

//折线图1模块
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['今年报到率', '往年报到率'],
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12px"
      }
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
      data: [],
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12px"
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
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
    },
    series: [
      {
        name: '今年报到率',
        type: 'line',
        smooth: true,
        data: [],
        lineStyle: {
          color: '#2f89cf'
        },
        itemStyle: {
          color: '#2f89cf'
        }
      },
      {
        name: '往年报到率',
        type: 'line',
        smooth: true,
        data: [],
        lineStyle: {
          color: '#ff6b6b'
        },
        itemStyle: {
          color: '#ff6b6b'
        }
      }
    ]
  };

  $.getJSON("http://localhost/line_proj/php/get_rate_compare.php", function (data) {
    myChart.setOption({
      xAxis: {
        data: data.depart
      },
      series: [
        {
          data: data.rate
        },
        {
          data: data.last_rate
        }
      ]
    });
  });

  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//折线图2模块
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['计划招生数', '实际报到数'],
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12px"
      }
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
      data: [],
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12px"
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
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
    },
    series: [
      {
        name: '计划招生数',
        type: 'line',
        smooth: true,
        data: [],
        lineStyle: {
          color: '#4cc7ff'
        },
        itemStyle: {
          color: '#4cc7ff'
        }
      },
      {
        name: '实际报到数',
        type: 'line',
        smooth: true,
        data: [],
        lineStyle: {
          color: '#ffa726'
        },
        itemStyle: {
          color: '#ffa726'
        }
      }
    ]
  };

  $.getJSON("http://localhost/line_proj/php/get_report_num.php", function (data) {
    myChart.setOption({
      xAxis: {
        data: data.depart
      },
      series: [
        {
          data: data.plan_num
        },
        {
          data: data.come_num
        }
      ]
    });
  });

  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//中国地图飞行模块
(function () {

  var myChart = echarts.init(document.querySelector(".map .chart"));

  var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: '西安' }, { name: '北京', value: 100 }],
    [{ name: '西安' }, { name: '上海', value: 100 }],
    [{ name: '西安' }, { name: '广州', value: 100 }],
    [{ name: '西安' }, { name: '西宁', value: 100 }],
    [{ name: '西安' }, { name: '银川', value: 100 }]
  ];

  var XNData = [
    [{ name: '西宁' }, { name: '北京', value: 100 }],
    [{ name: '西宁' }, { name: '上海', value: 100 }],
    [{ name: '西宁' }, { name: '广州', value: 100 }],
    [{ name: '西宁' }, { name: '西安', value: 100 }],
    [{ name: '西宁' }, { name: '银川', value: 100 }]
  ];

  var YCData = [
    [{ name: '银川' }, { name: '北京', value: 100 }],
    [{ name: '银川' }, { name: '广州', value: 100 }],
    [{ name: '银川' }, { name: '上海', value: 100 }],
    [{ name: '银川' }, { name: '西安', value: 100 }],
    [{ name: '银川' }, { name: '西宁', value: 100 }],
  ];

  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  //var planePath = 'arrow';
  var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;

  };

  var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
  var series = [];
  [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
    series.push({
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: 'red',   //arrow箭头的颜色
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    },
      {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      });
  });
  var option = {
    backgroundColor: '#000',
    title: {
      text: '模拟航线',
      subtext: '数据纯属虚构',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'multiple'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#00186E',
          borderColor: '#195BB9',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: series
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();