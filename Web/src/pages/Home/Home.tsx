import Wrapper from 'library/Wrapper/Wrapper'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <Wrapper text='THIS IS WRAPPER'>
        <p>THIS IS A CHILDREN</p>
      </Wrapper>
    </div>
  )
}

export default Home