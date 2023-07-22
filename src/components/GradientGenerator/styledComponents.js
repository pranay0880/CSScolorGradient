// Style your elements here
import styled from 'styled-components'

export const Background = styled.div`
  background-image: linear-gradient(${props => props.image});
  background-size: cover;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ColorsContainer = styled.div`
  display: flex;
`
export const Color = styled.div`
  margin: 20px;
  padding: 20px;
`

export const ColorInput = styled.input`
  border: 0px solid;
  background-color: transparent;
  width: 80px;
  height: 40px;
`
export const GenerateButton = styled.button`
  width: 150px;
  padding: 10px;
  color: black;
  background-color: #00c9b7;
  border: 0px solid;
  border-radius: 5px;
  font-weight: bold;
`
export const UnOrder = styled.ul`
  display: flex;
  list-style-type: none;
`
