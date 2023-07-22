import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  Background,
  ColorsContainer,
  Color,
  UnOrder,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    backgroundColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onchangeDirection = value => {
    this.setState({direction: value})
  }

  onchangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onchangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onsubmitClicked = () => {
    const {direction, color1, color2} = this.state
    this.setState({backgroundColor: ` to ${direction}, ${color1}, ${color2}`})
  }

  render() {
    const {direction, color1, color2, backgroundColor} = this.state
    return (
      <Background image={backgroundColor} data-testid="gradientGenerator">
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>

        <UnOrder>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              eachListItem={eachItem}
              key={eachItem.directionId}
              activeDirection={direction}
              onchangeDirection={this.onchangeDirection}
            />
          ))}
        </UnOrder>
        <p>Pick the Colors</p>
        <ColorsContainer>
          <Color>
            <p>{color1}</p>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onchangeColor1}
            />
          </Color>
          <Color>
            <p>{color2}</p>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onchangeColor2}
            />
          </Color>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onsubmitClicked}>
          Generate
        </GenerateButton>
      </Background>
    )
  }
}
export default GradientGenerator
