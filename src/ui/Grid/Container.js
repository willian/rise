import glamorous from 'glamorous'

import mediaQueries from 'utils/mediaQueries'

const getFlexDirection = (direction) => {
  switch (direction) {
    case 'column':
      return 'column'
    case 'columnReverse':
      return 'column-reverse'
    case 'row':
      return 'row'
    case 'rowReverse':
      return 'row-reverse'
    default:
      return 'row'
  }
}

const getJustifyContent = (justify) => {
  switch (justify) {
    case 'flexStart':
      return 'flex-start'
    case 'flexEnd':
      return 'flex-end'
    case 'center':
      return 'center'
    case 'spaceBetween':
      return 'space-between'
    case 'spaceAround':
      return 'space-around'
    case 'spaceEvenly':
      return 'space-evenly'
    default:
      return 'flex-start'
  }
}

const getAlignItems = (align) => {
  switch (align) {
    case 'baseline':
      return 'baseline'
    case 'center':
      return 'center'
    case 'flexEnd':
      return 'flex-end'
    case 'flexStart':
      return 'flex-start'
    case 'stretch':
      return 'stretch'
    default:
      return 'stretch'
  }
}

const Container = glamorous.div(
  {
    display: 'flex',
    margin: '0 auto',
    [mediaQueries.extraSmall]: {
      width: '100%'
    },
    [mediaQueries.small]: {
      width: '540px'
    },
    [mediaQueries.medium]: {
      width: '720px'
    },
    [mediaQueries.large]: {
      width: '960px'
    },
    [mediaQueries.extraLarge]: {
      width: '1140px'
    }
  },
  ({ direction, justify, align }) => ({
    alignItems: getAlignItems(align),
    flexDirection: getFlexDirection(direction),
    justifyContent: getJustifyContent(justify)
  })
)

export default Container
