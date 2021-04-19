
var optionsCircle = {
    series: [15],
    chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: false,
      
    }
  },
  
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        // image: './img/seedling.png',
        // imageWidth: -10,
        // imageHeight: -10,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#e7e7e7',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: 5,
          show: true,
          color: '#29a157',
          fontSize: '20px',
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
          offsetY: -40,
        }
      }
    }
  },
  fill: {
    colors: ['#4aff00'],
   
    type: 'solid',  
    
  },
  stroke: {
    lineCap: 'round'
  },
  labels: [`Kg CO2eq`],
  };

  var chart = new ApexCharts(document.querySelector("#chart-circle"), optionsCircle);
  chart.render();