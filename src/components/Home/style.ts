import styled from 'styled-components'
import { mediaQueries as mq } from '@/utils/mq'
import { fadeIn } from '@/utils/keyframes'

export const Container = styled.div`
  padding-bottom: 130px;
`

export const Logo = styled.img`
  display: block;
  width: 65%;
  margin: 0 auto;
  transform: translateY(-30%);
  opacity: 0;
  animation: ${fadeIn} 1.5s ease 0s forwards;

  ${mq.desktop`
    width: 400px;
  `}
`

export const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  opacity: 0;
  margin-top: 5px;
  animation: ${fadeIn} 1.5s ease 0.3s forwards;

  ${mq.desktop`
    max-width: 740px;
    margin-top: 10px;
  `}
`

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  margin-top: 40px;
  pointer-events: none;
  overflow: hidden;

  ${mq.desktop`
    height: 120px;
    margin-top: 50px;
  `}

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 500%;
    height: 500%;
    transform-origin: left top;

    &:nth-child(1) {
      transform: rotate(6deg);
      background-color: #2089a5;
    }

    &:nth-child(2) {
      transform: rotate(8deg);
      background-color: #c7aa71;
    }

    &:nth-child(3) {
      transform: rotate(12deg);
      background-color: #ad1341;
    }

    &:nth-child(4) {
      transform: rotate(16deg);
      background-color: #5d3523;
    }
  }
`

export const Sns = styled.aside`
  position: fixed;
  padding: 10px 0;
  background-color: #5d3523;
  opacity: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 5px;
  height: 45px;
  display: flex;
  border-radius: 6px 6px 0 0;
  animation: ${fadeIn} 1.5s ease 0.6s forwards;
  cursor: pointer;

  ${mq.desktop`
    bottom: auto;
    top: 50%;
    left: 0;
    display: block;
    transform: translateY(-50%);
    padding: 10px 0;
    width: 44px;
    height: auto;
    border-radius: 0 6px 6px 0;
  `}
`

export const SnsItem = styled.a`
  display: block;
  width: 45px;
  height: 45px;
  line-height: 44px;
  font-size: 22px;
  text-align: center;
  color: #fbf4f1;
  transition: 0.4s ease;

  ${mq.desktop`
    width: 44px;
    height: 44px;
  `}

  svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  &:nth-child(1):hover {
    color: #1da1f2;
  }

  &:nth-child(2):hover {
    color: #24292e;
  }

  &:nth-child(3):hover {
    color: #ad1341;
  }

  &:nth-child(4):hover {
    color: #34a123;
  }
`
