import React from 'react'
import styled from 'styled-components'
import Chats from './Chats';
import Search from './Search';
import Topbar from './Topbar';

const Container = styled.div`
   background-color: #ebf4fb;
   height: 100%;
   flex: 3;
   overflow-y: scroll;

   ::-webkit-scrollbar{
    display: none;
    visibility: hidden;
   }
`;

const Sidebar = () => {
  return (
    <Container>
        <Topbar/>
        <Search/>
        <Chats/>
    </Container>
  )
}

export default Sidebar