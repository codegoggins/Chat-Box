import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #181f2e;
    padding: 0.5rem;
`;

const Logo = styled.span`
  font-family: 'Righteous', cursive;
  font-size: 1.5rem;
  color: #f04242;
`
const Profile = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    align-items: center;
`;

const ProfileImg = styled.img`
  object-fit: cover;
  height:3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px solid #f04242;
`;

const LogoutBtn = styled.button`
  background-color: #f04242;
  border: none;
  padding: 0.3rem 0.6rem;
  color: white;
  border-radius: 0.2rem;
  cursor: pointer;
`;

const ProfileName = styled.span`
color: #ffffff;
`;

const Topbar = () => {
  return (
    <Container>
        <Logo>chatize</Logo>
        <Profile>
            <ProfileImg src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ProfileName>Nilay</ProfileName>
            <LogoutBtn>Logout</LogoutBtn>
        </Profile>
    </Container>
  )
}

export default Topbar