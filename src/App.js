import React, { Component } from 'react'

import { Container } from 'ui/Grid'
import Title from 'ui/Title'
import Flashcards from 'components/Flashcards'

class App extends Component {
  render () {
    return (
      <Container wrap justify='center' align='center'>
        <Title>Flashcards Block</Title>

        <Flashcards />
      </Container>
    )
  }
}

export default App
