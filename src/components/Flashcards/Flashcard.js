import React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'

import {
  Card,
  CardBack,
  CardFront,
  CardTip,
  FlashcardContainer,
  FlashcardWrapper
} from './ui'

import LongDescription from './LongDescription'

const Flashcard = ({
  flipped,
  longDescEl,
  setLongDescEl,
  showTip,
  toggle
}) => (
  <FlashcardContainer flipped={flipped} onClick={toggle} small>
    <FlashcardWrapper>
      <Card>
        <CardFront flipped={flipped} borderColor='#747a7e'>
          Front of card 1
          {showTip && <CardTip>Click to flip</CardTip>}
        </CardFront>
        <CardBack flipped={flipped}>
          <LongDescription>
            Café au lait crema so cup est single shot acerbic. Saucer as, black crema organic single origin mocha. Half and half as iced caffeine robusta wings instant. Caramelization brewed con panna, aftertaste, seasonal, froth and, a medium ristretto caramelization caffeine. Mocha crema, lungo, bar, roast in coffee that latte as grinder latte. Cortado, acerbic, grounds coffee doppio brewed sweet. Id, plunger pot single shot, filter, galão spoon blue mountain aged beans. As whipped et chicory aftertaste java robusta est half and half.
          </LongDescription>
        </CardBack>
      </Card>
    </FlashcardWrapper>
  </FlashcardContainer>
)

const enhance = compose(
  pure,
  withStateHandlers(
    { flipped: false },
    {
      toggle: ({ flipped }) => () => ({
        flipped: !flipped
      })
    }
  )
)

export default enhance(Flashcard)
