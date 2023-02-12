import React from 'react'
import { Container, BgColor, ProductName, ColorCode } from './style'

interface Props {
  color: string
  productName: string
  onMouseOver(): void
  onMouseOut(): void
  showModal(): void
}

const Color: React.FC<Props> = ({ color, productName, onMouseOver, onMouseOut, showModal }) => (
  <Container
    color={color}
    onMouseOver={() => onMouseOver()}
    onMouseOut={() => onMouseOut()}
    onClick={() => showModal()}
    type='button'
    role='button'
  >
    <BgColor color={color} />
    <ProductName>{productName}</ProductName>
    <ColorCode>{color}</ColorCode>
  </Container>
)

export default Color
