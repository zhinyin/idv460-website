$(function () {
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