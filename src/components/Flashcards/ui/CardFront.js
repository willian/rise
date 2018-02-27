import glamorous from 'glamorous'

import frontAndBackStyles from './frontAndBackStyles'

const CardFront = glamorous.div(
  {
    ...frontAndBackStyles,
    backgroundColor: '#fff',
    borderTop: '3px solid #eee',
    transform: 'rotateY(0deg)',
    zIndex: '50'
  },
  ({ borderColor, flipped }) => {
    const styles = {}

    if (borderColor) {
      styles.borderTopColor = `${borderColor} !important`
    }

    if (flipped) {
      styles.transform = 'rotateY(-180deg)'
      styles.zIndex = '10'
    }

    return styles
  }
)

export default CardFront
