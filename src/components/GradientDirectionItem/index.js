// Write your code here

import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachListItem, activeDirection, onchangeDirection} = props
  const onclickButton = () => {
    onchangeDirection(eachListItem.value)
  }
  const activeSide = activeDirection === eachListItem.value
  console.log(activeSide)

  return (
    <li>
      <DirectionButton
        type="button"
        onClick={onclickButton}
        outline={activeSide}
      >
        {eachListItem.displayText}
      </DirectionButton>
    </li>
  )
}
export default GradientDirectionItem
