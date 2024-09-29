import React from 'react'
import { copy2Clipboard } from '@/utils'
import {
  Bg,
  Body,
  Close,
  ColorCode,
  ColorContent,
  ColorLine,
  Container,
  CopyButton,
  Footer,
  Header,
  Inner,
  LineBack,
  LineFront,
  NextButton,
  Panel,
  PrevButton,
  ProductName,
  Title,
} from './style'

interface Props {
  modal: boolean
  activeProduct: IProduct
  hideModal(): void
  prevProduct(): void
  nextProduct(): void
}

const Modal: React.FC<Props> = ({ modal, activeProduct, hideModal, prevProduct, nextProduct }) => {
  return (
    <div>
      <Bg data-show={modal} />
      <Container data-show={modal}>
        <Inner data-show={modal}>
          <Close onClick={() => hideModal()} />
          <LineBack>
            <div />
            <div />
          </LineBack>
          <Panel>
            <Header>
              <Title
                onDoubleClick={() => {
                  window.location.href = activeProduct.link
                }}
              >
                {activeProduct.name}
              </Title>
            </Header>
            <Body>
              <ColorContent data-show={modal}>
                <ProductName data-show={modal}>
                  <span>Product:</span>
                  <span>{activeProduct.name}</span>
                </ProductName>
                <ColorCode data-show={modal}>
                  <span>ColorCode:</span>
                  <span>{activeProduct.color}</span>
                </ColorCode>
                <ColorLine
                  color={activeProduct.color}
                  data-show={modal}
                />
              </ColorContent>
              <PrevButton
                onClick={() => prevProduct()}
                data-show={modal}
              />
              <NextButton
                onClick={() => nextProduct()}
                data-show={modal}
              />
            </Body>
            <Footer>
              <CopyButton onClick={() => copy2Clipboard(activeProduct.color)} />
            </Footer>
          </Panel>
          <LineFront>
            <div />
            <div />
          </LineFront>
        </Inner>
      </Container>
    </div>
  )
}

export default Modal
