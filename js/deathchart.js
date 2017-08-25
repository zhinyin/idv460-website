google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
    		
    		function drawChart() {
    			var data = new google.visualization.DataTable();
    			data.addColumn('string','State');
    			data.addColumn('number','Executions');
    			data.addRows([
    				['Texas',553],
    				['Oklahoma',112],
    				['Virginia',111],
    				['Florida',92],
    				['Missouri',86],
    				['All others',493]
    			]);
    			//Use these to change presentation of the chart
    			var options = {
    				title:'Leading death penalty states',
    				width:600,
    				height:450,
    				is3D:true
    			};
    			var chart = new google.visualization.PieChart(document.getElementById('deathchart'));
    			chart.draw(data,options);
    			
    		}