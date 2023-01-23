import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: row-reverse;
gap: 1rem;
align-items:flex-start;

`;
const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.3rem;
`;

const MessageContent = styled.div`
 display: flex;
 align-items: flex-start;
 flex-direction: column;
 gap: 1rem;
`;

const UserImg = styled.img`
  object-fit: cover;
  height:2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 2px solid #f04242;
`;

const MsgTime = styled.span`
font-size:0.7rem;
`;

const UserMsg = styled.span`
  font-size:1rem;
  background-color: #ebf4fb;
  padding: 1rem;
  border-radius: 0 0.7rem 0.7rem 0.7rem;
`

const MsgImage = styled.img`
  border-radius:1rem;
  height: 10rem;
  width: 11rem;
  object-fit: cover;
`


const Message = () => {
  return (
    <Container>
         <MessageInfo>
              <UserImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
              <MsgTime>Just Now</MsgTime>
         </MessageInfo>
         <MessageContent>
              <UserMsg>Hey! Nilay wassup</UserMsg>
              <MsgImage src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
         </MessageContent>
    </Container>
  )
}

export default Message