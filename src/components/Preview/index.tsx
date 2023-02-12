import React from 'react'
import { ColorCode, Container } from './style'

interface Props {
  color: string
  open: boolean
}

const Preview: React.FC<Props> = ({ color, open }) => (
  <Container
    color={color}
    data-open={open}
  >
    <ColorCode>{color}</ColorCode>
  </Container>
)

export default Preview
