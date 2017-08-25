$(function () {
	$('#temps').highcharts({
		legend: {
			enabled: false
		},


		credits: {
			text: 'Zhinan Yin / IDV460',
			href: 'index.html'
		},

		chart: {
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
			categories:  ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
		},

		yAxis: [{
			labels: {
				format: '{value}°F'
			},
			title: {
				text: 'Temperature'
			}
		} , {
			labels: {
				format: '{value} inches'
			},
			title: {
				text: 'Rainfall'
			},
			opposite: true
		}],

		tooltip: {
			shared: true
		},

		series: [{
			name: 'Precipitation',
			type: 'column',
			yAxis: 1,
			data: [3.07,2.8,3.5,4.49,5.87,4.72,4.53,3.46,3.7,3.66,3.86,3.66],
			tooltip: {
				valueSuffix: ' inches '
			},
			color: 'blue'
		} , {
			name: 'Average high',
			type: 'spline',
			data: [37,42,53,64,74,82,85,85,78,66,54,41],
			tooltip: {
				valueSuffix: ' °F '
		    } , 
			color: 'orange'
		} , {
			name: 'Average low',
			type: 'spline',
			data: [37,42,53,64,74,82,85,85,78,66,54,41],
			tooltip: {
				valueSuffix: ' °F '
			},
			color: 'peachpuff'
		}]

	});
});