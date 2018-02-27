import React from 'react'
import PropTypes from 'prop-types'
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

const renderBackWithDescription = (description, flipped, type) => {
  if (type === 'description') {
    return (
      <CardBack flipped={flipped}>{description}</CardBack>
    )
  }

  return null
}

const renderBackWithFullImage = (flipped, fullImage, type) => {
  if (type === 'fullimage') {
    return (
      <CardBack flipped={flipped} fullImage={fullImage} />
    )
  }

  return null
}

const renderBackWithLongDescription = (description, flipped, type) => {
  if (!type) {
    return (
      <CardBack flipped={flipped}>
        <LongDescription>{description}</LongDescription>
      </CardBack>
    )
  }

  return null
}

const Flashcard = ({
  card,
  color,
  flipped,
  labels,
  longDescEl,
  setLongDescEl,
  showTip,
  toggle
}) => (
  <FlashcardContainer flipped={flipped} onClick={toggle} small>
    <FlashcardWrapper>
      <Card>
        <CardFront flipped={flipped} borderColor={color}>
          {card.front.description}
          {showTip && <CardTip>{labels.blocksClickToFlip}</CardTip>}
        </CardFront>
        {renderBackWithDescription(card.back.description, flipped, card.back.type)}
        {renderBackWithFullImage(flipped, card.back.media.image.src, card.back.type)}
        {renderBackWithLongDescription(card.back.description, flipped, card.back.type)}
      </Card>
    </FlashcardWrapper>
  </FlashcardContainer>
)

Flashcard.propTypes = {
  card: PropTypes.shape({
    back: PropTypes.shape({}),
    front: PropTypes.shape({}),
    id: PropTypes.number
  }).isRequired,
  flipped: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  color: PropTypes.string,
  labels: PropTypes.shape({}),
  showTip: PropTypes.bool
}

Flashcard.defaultProps = {
  labels: {},
  showTip: false
}

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
