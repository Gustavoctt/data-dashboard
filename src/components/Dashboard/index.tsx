/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Content } from './styles';
import { FaFilter } from 'react-icons/fa';
import { Charts } from '../Charts';

export function Dashboard(){
  return(
    <Container>
      <Content>
        <div>
          <h1>Dashboard</h1>
          <span>Desafio Técnico Frontend</span>
        </div>
        <div>
          <FaFilter size={12} color={'#FFF'}/>
          <a>Filtrar</a>
        </div>
      </Content>
      <Charts/>
    </Container>
  )
}