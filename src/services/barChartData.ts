export const optionsBar = {
  chart: {
    height: 350,
    zoom: {
      enabled: false
    }
  },
  // title: {
  //   text: undefined,
  //   margin: 10,      
  //   offsetX: 10,
  //   offsetY: 15,
  //   style:{
  //     fontSize:'16px',
  //     fontFamily: 'Montserrat',
  //     color: '#5D405C',
  //   },
  // },
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
};

export const seriesBar = [
  {
    name: "My Tasks",
    data: [11, 32, 45, 32, 34, 52, 41]
  }
];