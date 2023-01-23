import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1rem;
`;

const Chat = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-bottom: 1px solid #e2eef7;
`;

const ProfileImg = styled.img`
  object-fit: cover;
  height:3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px solid #f04242;
`

const ChatDetail = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.1rem;
`

const ChatName = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const ChatMsg = styled.span`
  font-size: 0.8rem;
`

const Chats = () => {
  return (
    <Container>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
        <Chat>
            <ProfileImg src='https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <ChatDetail>
                <ChatName>
                    Sam
                </ChatName>
                <ChatMsg>
                    Hey ! PSG Won 
                </ChatMsg>
            </ChatDetail>
        </Chat>
    </Container>
  )
}

export default Chats