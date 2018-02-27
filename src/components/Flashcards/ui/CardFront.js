import glamorous from 'glamorous'

import frontAndBackStyles from './frontAndBackStyles'

const CardFront = glamorous.div(
  {
    ...frontAndBackStyles,
    backgroundColor: '#fff',
    borderTop: '3px solid #eee',
    fontFamily: 'Lato',
    fontSize: '2.9rem',
    fontWeight: '300',
    lineHeight: '1.25',
    transform: 'rotateY(0deg)',
    wordBreak: 'break-word',
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
