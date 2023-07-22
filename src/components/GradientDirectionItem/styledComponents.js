// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: 0px solid;
  border-radius: 5px;
  width: 100px;
  font-weight: bold;
  background-color: #ededed;
  color: black;
  text-align: center;
  opacity: ${props => (props.outline ? 1 : 0.5)};
`
