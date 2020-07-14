import * as React from 'react'
import { SvgIcon } from './styles'

interface Props {
  name: string
}

const Icon: React.FC<Props> = ({ name }) => (
  <SvgIcon aria-hidden='true'>
    <use xlinkHref={`#icon-${name}`} />
  </SvgIcon>
)

export default Icon
