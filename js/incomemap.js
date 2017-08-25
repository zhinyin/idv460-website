$(function () {

var data = [
        {
            "hc-key": "us-in-001",
            "value": 33424
        },
        {
            "hc-key": "us-in-003",
            "value": 39712
        },
        {
            "hc-key": "us-in-005",
            "value": 44129
        },
        {
            "hc-key": "us-in-007",
            "value": 42582
        },
        {
            "hc-key": "us-in-009",
            "value": 34809
        },
        {
            "hc-key": "us-in-011",
            "value": 63269
        },
        {
            "hc-key": "us-in-013",
            "value": 39598
        },
        {
            "hc-key": "us-in-015",
            "value": 39616
        },
        {
            "hc-key": "us-in-017",
            "value": 34249
        },
        {
            "hc-key": "us-in-019",
            "value": 37610
        },
        {
            "hc-key": "us-in-021",
            "value": 34329
        },
        {
            "hc-key": "us-in-023",
            "value": 34116
        },
        {
            "hc-key": "us-in-025",
            "value": 30623
        },
        {
            "hc-key": "us-in-027",
            "value": 36914
        },
        {
            "hc-key": "us-in-029",
            "value": 42008
        },
        {
            "hc-key": "us-in-031",
            "value": 38480
        },
        {
            "hc-key": "us-in-033",
            "value": 37014
        },
        {
            "hc-key": "us-in-035",
            "value": 31933
        },
        {
            "hc-key": "us-in-037",
            "value": 50087
        },
        {
            "hc-key": "us-in-039",
            "value": 37344
        },
        {
            "hc-key": "us-in-041",
            "value": 34016
        },
        {
            "hc-key": "us-in-043",
            "value": 45404
        },
        {
            "hc-key": "us-in-045",
            "value": 36844
        },
        {
            "hc-key": "us-in-047",
            "value": 39129
        },
        {
            "hc-key": "us-in-049",
            "value": 35903
        },
        {
            "hc-key": "us-in-051",
            "value": 41992
        },
        {
            "hc-key": "us-in-053",
            "value": 35547
        },
        {
            "hc-key": "us-in-055",
            "value": 35035
        },
        {
            "hc-key": "us-in-057",
            "value": 63141
        },
        {
            "hc-key": "us-in-059",
            "value": 43860
        },
        {
            "hc-key": "us-in-061",
            "value": 36090
        },
        {
            "hc-key": "us-in-063",
            "value": 42945
        },
        {
            "hc-key": "us-in-065",
            "value": 32800
        },
        {
            "hc-key": "us-in-067",
            "value": 35278
        },
        {
            "hc-key": "us-in-069",
            "value": 36507
        },
        {
            "hc-key": "us-in-071",
            "value": 38733
        },
        {
            "hc-key": "us-in-073",
            "value": 40130
        },
        {
            "hc-key": "us-in-075",
            "value": 38169
        },
        {
            "hc-key": "us-in-077",
            "value": 36794
        },
        {
            "hc-key": "us-in-079",
            "value": 32563
        },
        {
            "hc-key": "us-in-081",
            "value": 41899
        },
        {
            "hc-key": "us-in-083",
            "value": 41512
        },
        {
            "hc-key": "us-in-085",
            "value": 40469
        },
        {
            "hc-key": "us-in-087",
            "value": 31081
        },
        {
            "hc-key": "us-in-089",
            "value": 38386
        },
        {
            "hc-key": "us-in-091",
            "value": 35882
        },
        {
            "hc-key": "us-in-093",
            "value": 34424
        },
        {
            "hc-key": "us-in-095",
            "value": 32563
        },
        {
            "hc-key": "us-in-097",
            "value": 40074
        },
        {
            "hc-key": "us-in-099",
            "value": 35767
        },
        {
            "hc-key": "us-in-101",
            "value": 38333
        },
        {
            "hc-key": "us-in-103",
            "value": 30334
        },
        {
            "hc-key": "us-in-105",
            "value": 33953
        },
        {
            "hc-key": "us-in-107",
            "value": 35039
        },
        {
            "hc-key": "us-in-109",
            "value": 36975
        },
        {
            "hc-key": "us-in-111",
            "value": 37390
        },
        {
            "hc-key": "us-in-113",
            "value": 33107
        },
        {
            "hc-key": "us-in-115",
            "value": 34505
        },
        {
            "hc-key": "us-in-117",
            "value": 32893
        },
        {
            "hc-key": "us-in-119",
            "value": 31772
        },
        {
            "hc-key": "us-in-121",
            "value": 30092
        },
        {
            "hc-key": "us-in-123",
            "value": 33752
        },
        {
            "hc-key": "us-in-125",
            "value": 36597
        },
        {
            "hc-key": "us-in-127",
            "value": 44472
        },
        {
            "hc-key": "us-in-129",
            "value": 44806
        },
        {
            "hc-key": "us-in-131",
            "value": 38488
        },
        {
            "hc-key": "us-in-133",
            "value": 31565
        },
        {
            "hc-key": "us-in-135",
            "value": 38103
        },
        {
            "hc-key": "us-in-137",
            "value": 39137
        },
        {
            "hc-key": "us-in-139",
            "value": 38764
        },
        {
            "hc-key": "us-in-141",
            "value": 40433
        },
        {
            "hc-key": "us-in-143",
            "value": 31623
        },
        {
            "hc-key": "us-in-145",
            "value": 37528
        },
        {
            "hc-key": "us-in-147",
            "value": 39772
        },
        {
            "hc-key": "us-in-149",
            "value": 30354
        },
        {
            "hc-key": "us-in-151",
            "value": 36000
        },
        {
            "hc-key": "us-in-153",
            "value": 31501
        },
        {
            "hc-key": "us-in-155",
            "value": 26959
        },
        {
            "hc-key": "us-in-157",
            "value": 33266
        },
        {
            "hc-key": "us-in-159",
            "value": 40029
        },
        {
            "hc-key": "us-in-161",
            "value": 32933
        },
        {
            "hc-key": "us-in-163",
            "value": 40135
        },
        {
            "hc-key": "us-in-165",
            "value": 35496
        },
        {
            "hc-key": "us-in-167",
            "value": 33567
        },
        {
            "hc-key": "us-in-169",
            "value": 40011
        },
        {
            "hc-key": "us-in-171",
            "value": 41703
        },
        {
            "hc-key": "us-in-173",
            "value": 45596
        },
        {
            "hc-key": "us-in-175",
            "value": 33352
        },
        {
            "hc-key": "us-in-177",
            "value": 34801
        },
        {
            "hc-key": "us-in-179",
            "value": 39244
        },
        {
            "hc-key": "us-in-181",
            "value": 37473
        },
        {
            "hc-key": "us-in-183",
            "value": 37099
        }
    ];

	$('#map').highcharts('Map',{
		legend: {
			enabled: true
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
			text: 'Per capita income for 2014',
			style: {
				fontWeight: 900,
				fontSize: '22px'
			},
			align: 'left'
		},
		subtitle: {
			text: 'Source: U/S. Censor Bureau',
			style: {
				fontStyle: 'italic'
			},
			align: 'left'
		},
		
		colorAxis: {
			minColor: '#EABEBE',
			maxColor: '#603913',
			min: 30000,
			max: 60000
		},
		
			series: [{
			data: data,
			mapData: Highcharts.maps["countries/us/us-in-all"],
			joinBy: 'hc-key',
			name: 'Per capita income (2014):',
			dataLabels: {
				enabled: true,
				color: 'white',
				style: {
					fontSize: '10px',
					textShadow: 'none'
				},
				format: '{point.name}'	
			},
			states: {
				hover: {
					color: '#991D59'
				}
			}
			
		}]
	});
	
});
	