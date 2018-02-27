import React from 'react'

import { FlashcardsWrapper } from './ui'

import Flashcard from './Flashcard'

const Flashcards = () => (
  <FlashcardsWrapper>
    <Flashcard showTip />
    <Flashcard />
    <Flashcard />
  </FlashcardsWrapper>
)

export default Flashcards
