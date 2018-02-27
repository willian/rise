import glamorous from 'glamorous'

const FlashcardContainer = glamorous.div(
  {
    cursor: 'pointer',
    display: 'inline-block',
    maxHeight: '460px',
    maxWidth: '460px',
    minHeight: '280px',
    minWidth: '280px',
    perspective: '1000',
    position: 'relative',
    transform: 'scale(.9) translateZ(0)',
    transition: 'transform .5s cubic-bezier(.6, 0, .4, 1), -webkit-transform .5s cubic-bezier(.6, 0, .4, 1)',
    width: '100%',
    willChange: 'transform'
  },
  ({ flipped, small }) => {
    const styles = {}

    if (flipped) {
      styles.transform = 'scale(1) translateZ(0)'
    }

    if (small) {
      styles.maxHeight = '280px'
      styles.maxWidth = '280px'
    }

    return styles
  }
)

export default FlashcardContainer
