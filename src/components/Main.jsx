import React from 'react'
import styled from 'styled-components'
import ChatSection from './ChatSection';
import MainTop from './MainTop';


const Container = styled.div`
   background-color: #ffffff;
   height: 100%;
   flex: 7;
   overflow-y: scroll;
   ::-webkit-scrollbar{
    display: none;
    visibility: hidden;
   }
`;

const Main = () => {
  return (
    <Container>
      <MainTop/>
      <ChatSection/>
    </Container>
  )
}

export default Main