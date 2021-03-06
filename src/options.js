export const options1 = {
  color: ['blue'],
  title: {
	  text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
	  data:['销量']
  },
  xAxis: {
	  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
	  name: '销量',
	  type: 'bar',
	  data: [5, 20, 36, 10, 10, 20]
  }],
  animationDuration: 200
};

export const options2 = {
  color: ['tomato'],
  title: {
	  text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
	  data:['销量']
  },
  xAxis: {
	  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
	  name: '销量',
	  type: 'bar',
	  data: [5, 20, 10, 10, 10, 100]
  }],
  animationDuration: 200
};


let data = []

for (let i = 0; i <= 360; i++) {
	let t = i / 180 * Math.PI
	let r = Math.sin(2 * t) * Math.cos(2 * t)
	data.push([r, i])
}

export const list = [{
  title: {
	text: '极坐标双数值轴'
  },
  legend: {
	data: ['line']
  },
  polar: {
	center: ['50%', '54%']
  },
  tooltip: {
	trigger: 'axis',
	axisPointer: {
	  type: 'cross'
	}
  },
  angleAxis: {
	type: 'value',
	startAngle: 0
  },
  radiusAxis: {
	min: 0
  },
  series: [
	{
	  coordinateSystem: 'polar',
	  name: 'line',
	  type: 'line',
	  showSymbol: false,
	  data: data
	}
  ],
  animationDuration: 2000
}, {
  color: ['tomato'],
  title: {
	  text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
	  data:['销量']
  },
  xAxis: {
	  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
	  name: '销量',
	  type: 'bar',
	  data: [5, 20, 10, 10, 10, 100]
  }],
  animationDuration: 200
}, {
  color: ['blue'],
  title: {
	  text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
	  data:['销量']
  },
  xAxis: {
	  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
	  name: '销量',
	  type: 'bar',
	  data: [5, 20, 36, 10, 10, 20]
  }],
  animationDuration: 200
}];

