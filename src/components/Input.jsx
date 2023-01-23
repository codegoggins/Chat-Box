import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Container = styled.div`
 width: 100%;
 position: sticky;
 bottom: 0;
 z-index: 10;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color:#ffffff;
 padding: 0 2rem;
 border-top: 1px solid #f3f8fd;
 `;

const MsgInput = styled.input`
width: 100%;
padding:1.3rem;
border: none;
font-size:1rem;
&:focus{
    outline: none;
}
`

const InputButtons = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 gap: 0.7rem;
 padding:0 0.4rem
`;

const AttachBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color:#ebf4fb;
  cursor:pointer;
`

const SendBtn = styled(AttachBtn)`
  background-color: #fd5050;
  color: #ffffff;
`

const Input = () => {
  return (
    <Container>
        <MsgInput placeholder='Type message . .'/>
        <InputButtons>
            <AttachBtn>
            <AttachFileIcon fontSize='small'/>
            </AttachBtn>
            <SendBtn>
                <SendIcon fontSize='small'/>
            </SendBtn>
        </InputButtons>
    </Container>
  )
}

export default Input