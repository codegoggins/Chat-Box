import React from 'react'
import styled from 'styled-components'
import Message from './Message';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   gap: 1.5rem;
`;

const ChatSection = () => {
  return (
    <Container>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </Container>
  )
}

export default ChatSection