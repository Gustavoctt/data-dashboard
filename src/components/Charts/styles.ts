import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

`

export const Content = styled.div`
  background: var(--white);
  width: 100%;
  border-radius: 10px;
  position: relative;

  box-shadow: 0 0 1em var(--gray-700);

  &:first-child{
    margin-right: 1rem;
  }

  
`

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 1rem;
  left: 2rem; 

  max-width: 300px;

  h3{
    color: var(--purple-700);
    font-size: 1rem;
    font-weight: 700;

    margin-right: 1rem;
  }
`