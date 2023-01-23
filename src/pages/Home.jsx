import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
   height: 90vh;
   margin: 2rem 5rem;
   border-radius: 1rem;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
   display: flex;
   overflow:hidden;
`;


const Home = () => {
  return (
    <Container>
        <Sidebar/>
        <Main/>
    </Container>
  )
}

export default Home