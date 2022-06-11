import ReactApexChart from "react-apexcharts";

import { IoIosInformationCircle } from 'react-icons/io';

import { Container, Content, TitleBar } from './styles';

export function Charts(){
  const options = {
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

  const series = [
    {
      name: "My Tasks",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];

  const series2 = [
    {
      name: "My Tasks",
      data: [26, 82, 10, 48, 34, 52, 41]
    }
  ];
  
  return (
    <Container>
      <Content>
        <TitleBar>
          <h3>Barras</h3>
          <IoIosInformationCircle size={20} color="#19D7AA" />
        </TitleBar>
        <ReactApexChart 
          options={options}
          series={series}
          type="bar"
          height={500}
        />
      </Content>
      <Content>
        <TitleBar>
          <h3>Scatter</h3>
          <IoIosInformationCircle size={20} color="#19D7AA" />
        </TitleBar>
        <ReactApexChart 
          options={options}
          series={series2}
          type="scatter"
          height={500}
        />
      </Content>
    </Container>
  );
}