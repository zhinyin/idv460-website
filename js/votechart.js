google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
    		function drawChart() {
    			var data = new google.visualization.DataTable();
    			data.addColumn('string','Name');
    			data.addColumn('number','voters');
    			data.addRows([
    				['Donald J. Trump',34531],
    				['Marco Rubio',17940],
    				['Ted Cruz',16079],
    				['Ben Carson',3619],
    				['John Kasich',2709],
    				['Others',338]
    			]);
    			//Use these to change presentation of the chart
    			var options = {
    				title:'Nevada Caucus Results',
    				width:600,
    				height:450,
    				pieHole: 0.45
    			};
    			var chart = new google.visualization.PieChart(document.getElementById('votechart'));
    			chart.draw(data,options);
    			
    		}