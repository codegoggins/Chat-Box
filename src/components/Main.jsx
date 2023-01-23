import React from 'react'
import styled from 'styled-components'
import ChatSection from './ChatSection';
import Input from './Input';
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
      <Input/>
    </Container>
  )
}

export default Main