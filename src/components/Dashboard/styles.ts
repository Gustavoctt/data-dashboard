import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  padding: 2.06rem 1.75rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  div{
    margin-bottom: 2rem;
    h1{
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--purple-700);
    }

    span{
      font-size: 0.875rem;
      color: var(--gray-700);
      font-weight: 500;
      margin-top: 0.5rem;
    }

    &:last-child{
      display: flex;
      align-items: center;
      justify-content: center;
      
      width: 6.250rem;
      height: 2.5rem;
      background-color: var(--purple-700);
      border-radius: 0.625rem;
      cursor: pointer;

      a{
        color: var(--white);
        margin-left: 0.5rem;
      }
    }
  }



`