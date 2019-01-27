import * as React from 'react'
import { SvgIcon } from './styles'

interface Props {
  icon: string
}

interface State {}

export default class Icon extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
  }

  public render () {
    let { icon } = this.props
    icon = icon ? `#icon-${icon}` : ''

    return (
      <SvgIcon aria-hidden='true'>
        <use xlinkHref={icon} />
      </SvgIcon>
    )
  }
}
