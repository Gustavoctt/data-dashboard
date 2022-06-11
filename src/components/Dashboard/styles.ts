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
      color: #5D405C;
    }

    span{
      font-size: 0.875rem;
      color: #828282;
      font-weight: 500;
      margin-top: 0.5rem;
    }

    &:last-child{
      display: flex;
      align-items: center;
      justify-content: center;
      
      width: 6.250rem;
      height: 2.5rem;
      background-color: #5D405C;
      border-radius: 0.625rem;
      cursor: pointer;

      a{
        color:#fff;
        margin-left: 0.5rem;
      }
    }
  }



`