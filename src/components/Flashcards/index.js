import React from 'react'

import { FlashcardsWrapper } from './ui'

import Flashcard from './Flashcard'

import data from './data.json'

const Flashcards = () => (
  <FlashcardsWrapper>
    {data.items.map((card, index) => (
      <Flashcard
        key={card.id}
        card={card}
        color={data.color}
        labels={data.labels}
        showTip={index === 0}
      />
    ))}
  </FlashcardsWrapper>
)

export default Flashcards
