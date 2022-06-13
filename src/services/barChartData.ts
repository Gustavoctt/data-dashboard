export const optionsBar = {
  chart: {
    height: 350,
    zoom: {
      enabled: false
    }
  },
  plotOptions:{
    bar:{
      horizontal: true,
      dataLabels:{
        position: 'top'
      }
    },
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Alemanha', 'Brasil', 'Italia', 'Argentina', 'França', 'Inglaterra', 'Espanha', 
     'Holanda', 'Uruguai', 'Suécia'
    ],
  }
};

export const seriesBar = [
  {
    name: "Jogos em copas do mundo",
    data: [109, 109, 83, 81, 66, 69, 63, 50, 56, 51]
  }
];