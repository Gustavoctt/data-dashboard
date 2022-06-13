import ReactApexChart from "react-apexcharts";
import { IoIosInformationCircle } from 'react-icons/io';
import { Container, Content, TitleBar } from './styles';

import { optionsBar, seriesBar } from '../../services/barChartData';
import { scatterData } from '../../services/scatterChartData';

export function Charts(){

  return (
    <Container>
      <Content>
        <TitleBar>
          <h3>Barras</h3>
          <IoIosInformationCircle size={20} color="#19D7AA" />
        </TitleBar>
        <ReactApexChart 
          options={optionsBar}
          series={seriesBar}
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
          options={scatterData.options}
          
          series={scatterData.series}
          type="scatter"
          height={500}
        />
      </Content>
    </Container>
  );
}