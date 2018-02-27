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

const BackCardWithDescription = ({ description, flipped }) => (
  <CardBack flipped={flipped}>{description}</CardBack>
)

const BackCardWithFullImage = ({ flipped, fullImage }) => (
  <CardBack flipped={flipped} fullImage={fullImage} />
)

const BackCardWithLongDescription = ({ description, flipped }) => (
  <CardBack flipped={flipped}>
    <LongDescription>{description}</LongDescription>
  </CardBack>
)

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
        {card.back.type === 'description' && (
          <BackCardWithDescription
            flipped={flipped}
            description={card.back.description}
          />
        )}
        {card.back.type === 'fullimage' && (
          <BackCardWithFullImage
            flipped={flipped}
            fullImage={card.back.media.image.src}
          />
        )}
        {!card.back.type && (
          <BackCardWithLongDescription
            flipped={flipped}
            description={card.back.description}
          />
        )}
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
