import glamorous from 'glamorous'

const CardTip = glamorous.div({
  bottom: '0',
  color: '#707070',
  fontSize: '1.2rem',
  fontStyle: 'italic',
  fontWeight: '400',
  letterSpacing: '.005em',
  lineHeight: '1',
  padding: '1.5rem 1rem',
  position: 'absolute',
  right: '5px',
  transition: 'opacity .3s',
  '&:hover': {
    color: '#313537'
  }
})

export default CardTip
