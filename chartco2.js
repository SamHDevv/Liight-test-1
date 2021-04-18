var colors = [
    '#FF4560',
    '#008FFB',
 ]

var optionsBar = {
   series: [{
   data: [37, 50]
 }],
   chart: {
   height: 250,
   type: 'bar',
   toolbar: {
           show: false,
         },
   events: {
     click: function(chart, w, e) {
       // console.log(chart, w, e)
     }
   }
 },
 colors: colors,
 plotOptions: {
   bar: {
     columnWidth: '55%',
     distributed: true,
   }
 },
 dataLabels: {
   enabled: true
 },
 legend: {
   show: false
 },
 xaxis: {
   categories: [
     ['POZUELO'],
     ['SERRANO'],
   ],
   labels: {
     style: {
       colors: colors,
       fontWeight:  'bold',
       fontSize: '12px'
     }
   }
 },
 yaxis: {
   show: false
 },
 grid: {
     show: false
 }
 };
 
var chart = new ApexCharts(document.querySelector("#chart-bars"), optionsBar);
 
chart.render();