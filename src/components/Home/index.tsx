import React, { useState } from 'react'
import { Sns, SnsItem, Logo, Footer, Container, ColorWrapper } from './style'
import { Color, Preview, Modal } from '/@/components'
import { colorList } from '/@/constants/colors'
import { snsList } from '/@/constants/sns'
import logo from '/@/assets/logo.svg'

const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState('')

  const onMouseOver = (idx: number) => {
    setColor(colorList[idx].color)
    setOpen(true)
  }

  const onMouseOut = () => {
    setOpen(false)
  }

  const showModal = (idx: number) => {}

  const goSnsLink = (link: string) => {
    if (!link) return
    if (link === 'javascript:;') return

    window.open(link)
  }

  return (
    <Container>
      <Logo src={logo} alt='ロゴ' />
      <ColorWrapper>
        {colorList.map((item, idx) => (
          <Color
            key={idx}
            color={item.color}
            productName={item.product.name}
            onMouseOver={() => onMouseOver(idx)}
            onMouseOut={() => onMouseOut()}
            showModal={() => showModal(idx)}
          />
        ))}
      </ColorWrapper>
      <Footer>
        <div />
        <div />
        <div />
        <div />
      </Footer>
      <Preview open={open} color={color} />
      <Sns>
        {snsList.map(sns => (
          <SnsItem
            title={sns.name}
            key={sns.name}
            dangerouslySetInnerHTML={{ __html: sns.icon }}
            onClick={() => goSnsLink(sns.link)}
          />
        ))}
      </Sns>
    </Container>
  )
}

export default Home
