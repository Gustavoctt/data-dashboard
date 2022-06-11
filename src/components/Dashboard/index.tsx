import { Container, Content } from './styles';
import { FaFilter } from 'react-icons/fa'

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
    </Container>
  )
}