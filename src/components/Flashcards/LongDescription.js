import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  compose,
  lifecycle,
  pure,
  withStateHandlers
} from 'recompose'

import { LongDescriptionScrolling } from './ui'

const LongDescription = ({ children, setElement, hasBottomEffect }) => (
  <LongDescriptionScrolling bottomEffect={hasBottomEffect}>
    <div ref={(el) => setElement(el)}>{children}</div>
  </LongDescriptionScrolling>
)

LongDescription.propTypes = {
  hasBottomEffect: PropTypes.bool.isRequired,
  setElement: PropTypes.func.isRequired
}

const enhance = compose(
  pure,
  withStateHandlers(
    {
      element: null,
      hasBottomEffect: true
    },
    {
      setElement: ({ element }) => (el) => ({
        element: element || ReactDOM.findDOMNode(el)
      }),
      addBottomEffect: () => () => ({
        hasBottomEffect: true
      }),
      removeBottomEffect: () => () => ({
        hasBottomEffect: false
      })
    }
  ),
  lifecycle({
    componentDidUpdate () {
      const {
        element,
        addBottomEffect,
        removeBottomEffect
      } = this.props

      if (!element) {
        return null
      }

      element.addEventListener('scroll', () => {
        if (element.scrollTop + element.offsetHeight === element.scrollHeight) {
          removeBottomEffect()
        } else {
          addBottomEffect()
        }
      })
    }
  })
)

export default enhance(LongDescription)
