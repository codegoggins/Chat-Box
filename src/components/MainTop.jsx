import React from 'react'
import styled from 'styled-components'
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';

const Container  = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #181f2e;
  border-left: 1px solid #ffffff;
`

const CallItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 50%;
  background-color:#ebf4fb;
`

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-left: 2rem;
`;

const UserImg = styled.img`
  object-fit: cover;
  height:3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px solid #f04242;
`;

const Username = styled.span`
   color: #ffffff;
   font-size: 1.2rem;
`;

const MainTop = () => {
  return (
    <Container>
        <UserDetails>
        <UserImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Username>Sam</Username>
        </UserDetails>
        <CallItems>
            <Item>
            <VideocamIcon fontSize='small'/>
            </Item>
            <Item>
            <CallIcon fontSize='small'/>
            </Item>
        </CallItems>
    </Container>
  )
}

export default MainTop