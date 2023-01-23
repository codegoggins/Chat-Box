import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #e2eef7;
padding: 1rem;;
`;

const Input = styled.input`
  background-color: #ffffff;
  border: none;
  padding: 0.4rem 0.5rem;
  width: 21rem;
  border-radius: 0.3rem;
   &:focus{
    outline: none;
   }
`;

const Search = () => {
  return (
      <Container>
          <Input placeholder='Search'/>
      </Container>
  )
}

export default Search