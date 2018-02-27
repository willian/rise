import glamorous from 'glamorous'

import frontAndBackStyles from './frontAndBackStyles'

const CardBack = glamorous.div(
  {
    ...frontAndBackStyles,
    backgroundColor: '#fafafa',
    transform: 'rotateY(-180deg)',
    zIndex: '10'
  },
  ({ flipped, fullImage }) => {
    const styles = {}

    if (flipped) {
      styles.transform = 'rotateY(0deg)'
      styles.zIndex = '50'
    }

    if (fullImage) {
      styles.backgroundImage = `url(${fullImage})`
      styles.backgroundPosition = '50% 50%'
      styles.backgroundSize = 'cover'
      styles.border = '1px solid #ddd!important'
    }

    return styles
  }
)

export default CardBack
