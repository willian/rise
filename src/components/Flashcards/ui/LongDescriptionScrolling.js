import glamorous from 'glamorous'

const LongDescriptionScrolling = glamorous.div(
  {
    display: 'flex',
    fontSize: '2rem',
    height: '100%',
    lineHeight: '1.5625',
    padding: '1.8rem 2rem 4rem',
    '@media (min-width: 30em)': {
      padding: '2.3rem 2.5rem 2.5rem'
    },
    '& div': {
      overflow: 'hidden',
      overflowY: 'auto',
      textAlign: 'left'
    }
  },
  ({ bottomEffect }) => ({
    '&:after': {
      background: 'linear-gradient(hsla(0, 0%, 98%, 0), #fafafa 75%, #fafafa) 0 0 repeat',
      bottom: '0',
      content: '""',
      height: '10rem',
      left: '0',
      opacity: bottomEffect ? '1' : '0',
      pointerEvents: 'none',
      position: 'absolute',
      right: '0',
      transform: 'translateZ(0)',
      transition: 'opacity .3s'
    }
  })
)

export default LongDescriptionScrolling
