import React, { useState } from 'react'
import logo from '@/assets/logo.svg'
import { Color, Modal, Preview } from '@/components'
import { products } from '@/constants/colors'
import { snsList } from '@/constants/sns'
import { ColorWrapper, Container, Footer, Logo, Sns, SnsItem } from './style'

const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState('')

  const [modal, setModal] = useState(false)
  const [activeProductIdx, setActiveProductIdx] = useState(0)

  const onMouseOver = (idx: number) => {
    setColor(products[idx].color)
    setOpen(true)
  }

  const onMouseOut = () => {
    setOpen(false)
  }

  const showModal = (idx: number) => {
    setActiveProductIdx(idx)
    setModal(true)
  }

  const hideModal = () => {
    setModal(false)
  }

  const prevProduct = () => {
    const newIdx = activeProductIdx - 1 <= 0 ? products.length - 1 : activeProductIdx - 1

    setActiveProductIdx(newIdx)
  }

  const nextProduct = () => {
    const newIdx = activeProductIdx + 1 === products.length ? 0 : activeProductIdx + 1

    setActiveProductIdx(newIdx)
  }

  const goSnsLink = (link: string) => {
    if (!link) return
    if (link === 'javascript:;') return

    window.open(link, '_blank')
  }

  return (
    <Container>
      <Logo
        src={logo}
        alt='ロゴ'
      />
      <ColorWrapper>
        {products.map((item, idx) => (
          <Color
            key={idx}
            color={item.color}
            productName={item.name}
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
      <Preview
        open={open}
        color={color}
      />
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
      <Modal
        modal={modal}
        activeProduct={products[activeProductIdx]}
        hideModal={hideModal}
        prevProduct={prevProduct}
        nextProduct={nextProduct}
      />
    </Container>
  )
}

export default Home
