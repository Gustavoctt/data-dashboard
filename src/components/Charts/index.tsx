import ReactApexChart from "react-apexcharts";
import { IoIosInformationCircle } from 'react-icons/io';
import ReactTooltip from 'react-tooltip';

import { Container, Content, TitleBar } from './styles';

import { optionsBar, seriesBar } from '../../services/barChartData';
import { scatterData } from '../../services/scatterChartData';

export function Charts(){

  return (
    <Container>
      <Content>
        <TitleBar>
          <h3>Barras</h3>
          <div  data-tip data-for="bar">
            <IoIosInformationCircle  size={20} color="#19D7AA" />
            <ReactTooltip id="bar" effect="solid" type="dark">
              <span>Total de jogos em copa do mundo</span>
            </ReactTooltip>
          </div>
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
          <div data-tip data-for="scatter">
            <IoIosInformationCircle size={20} color="#19D7AA" />
            <ReactTooltip id="scatter" effect="solid" type="dark">
              <span>Total de jogos por edição de copa do mundo</span>
            </ReactTooltip>
          </div>
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