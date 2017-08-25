$(function () {
	$('#demprimary').highcharts({
		legend: {
			enabled: true
		},
		credits: {
			text: 'Zhinan Yin / IDV460',
			href: 'index.html'
		},
		chart: {
			type: 'bar',
			style: {
				fontFamily: 'Cinzel'
			},
			spacing: 30,
			backgroundColor: 'rgba(255,255,255,0.5)'
		},
		tooltip: {
			formatter: function() {
				return this.series.name + ' won ' + this.y + ' delegate in ' + this.x;
			}
		},
		title: {
			text: 'The primaries so far',
			style: {
				fontWeight: 900,
				fontSize: '22px'
			},
			align: 'left'
		},
		subtitle: {
			text: 'Whatever you think you need to say here',
			align: 'left',
			style: {
				fontStyle: 'italic'
			}
		},
		xAxis: {
			categories:  ['Iowa', 'New Hampshire', 'Nevada', 'South Carolina', 'Alabama', 'Arkansas', 'Colorado', 'Georgia', 'Massachusetts', 'Minnesota', 'Oklahoma', 'Tennessee', 'Texas', 'Vermont', 'Virginia', 'Kansas', 'Louisiana', 'Nebraska', 'Maine', 'Michigan', 'Mississippi']
		},
		yAxis: {
			title: {
				text: 'Percentage of votes won'
			},
			style: {
				fontStyle: 'italic'
			}
		},
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
			series: [{
			name: 'Hillary Clinton',
			data: [23,9,20,39,44,22,28,72,46,31,17,44,147,0,62,10,37,10,7,58,29],
			color: '#996600',
			dataLabels: {
				enabled: true,
				align: 'right',
				color: 'white',
				x: -2,
				style: {
					fontSize: '12px',
					textShadow: 'none'
				}
			}
		}, {
			name: 'Bernie Sanders',
			data: [21,15,15,14,9,10,38,28,45,46,21,23,74,16,33,23,14,15,15,65,4],
			color: '#cc9900',
			dataLabels: {
				enabled: true,
				align: 'right',
				color: 'white',
				x: -2,	
				style: {
					fontSize: '12px',
					textShadow: 'none'
				}
			}
		}]
	});
	$('#delegate').highcharts({
		legend: {
			enabled: false
		},
		credits: {
			text: 'Zhinan Yin / IDV460',
			href: 'index.html'
		},
		chart: {
			type: 'bar',
			style: {
				fontFamily: 'Cinzel'
			},
			spacing: 30,
			backgroundColor: 'rgba(255,255,255,0.5)'
		},
		title: {
			text: 'GOP delegate count',
			style: {
				fontWeight: 900,
				fontSize: '22px'
			},
			align: 'left'
		},
		subtitle: {
			text: 'Includes delegates award Rico primary',
			align: 'left',
			style: {
				fontStyle: 'italic'
			}
		},
		xAxis: {
			categories:  ['Trump', 'Cruz', 'Rubio', 'Kasich',]
		},
		yAxis: {
			title: {
				text: 'Percentage of votes won'
			}
		},
		series: [{
			name: 'Delegates won',
			data: [384, 300, 151, 37],
			color: '#434323',
			dataLables: {
				color: 'white',
				align: 'right',
				x: -10	
			}
		}]
	});		
});
	