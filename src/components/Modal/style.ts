import styled from 'styled-components'
import { fadeIn, slideRight } from '@/utils/keyframes'
import {
  bound,
  rotate,
  border,
  prevButtonShow,
  nextButtonShow,
} from './keyframes'
import { mediaQueries as mq } from '@/utils/mq'

const color1 = '#fbf4f1'
const color2 = '#5d3523'
const color3 = '#ccc'
const color4 = '#c2617e'

export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: none;
  opacity: 0;

  &[data-show='true'] {
    display: block;
    animation: ${fadeIn} 2s ease 0s forwards;
  }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 600px;
  transform: translateY(-100%);

  &[data-show='true'] {
    animation: ${bound} 0.9s ease-out 0s forwards;
  }
`

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &[data-show='true'] {
    animation: ${rotate} 3s ease-out 0s forwards;
  }
`

export const Close = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Panel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  ${mq.desktop`
    width: 600px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
    border-radius: 12px;
  `}
`

export const Header = styled.div`
  width: 100%;
  background-color: ${color1};
  border-bottom: 1px solid ${color2};
  box-sizing: border-box;
  height: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  ${mq.desktop`
    height: 50px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  `}
`

export const Title = styled.div`
  color: ${color2};
  text-align: center;
  letter-spacing: 0.1em;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  line-height: 40px;
  width: 80%;

  ${mq.desktop`
    font-size: 20px;
    line-height: 50px;
    width: 85%;
  `}
`

export const Body = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  height: 180px;

  ${mq.desktop`
    height: 260px;
  `}
`

export const ColorContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: solid 1px transparent;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 280px;
  height: 100px;

  ${mq.desktop`
    width: 500px;
    height: 160px;
  `}

  &[data-show='true'] {
    animation: ${border} 1.4s ease-out 2.6s forwards;
  }
`

export const ProductName = styled.div`
  position: absolute;
  color: ${color2};
  background-color: #fff;
  top: -9px;
  left: -4px;
  padding: 2.5px;
  font-size: 10px;

  ${mq.desktop`
    top: -18px;
    left: -8px;
    padding: 5px;
    font-size: 14px;
  `}

  span {
    opacity: 0;
  }

  span:nth-child(1) {
    color: #ccc;
  }

  &[data-show='true'] {
    span:nth-child(1) {
      animation: ${fadeIn} 0.6s ease-in 1s forwards;
    }

    span:nth-child(2) {
      animation: ${fadeIn} 0.6s ease-in 1.4s forwards;
    }
  }
`

export const ColorCode = styled.div`
  position: absolute;
  color: ${color2};
  background-color: #fff;
  bottom: -9px;
  right: -4px;
  padding: 2.5px;
  font-size: 10px;

  ${mq.desktop`
    bottom: -18px;
    right: -8px;
    padding: 5px;
    font-size: 14px;
  `}

  span {
    opacity: 0;
  }

  span:nth-child(1) {
    color: #ccc;
  }

  span:nth-child(2) {
    text-transform: uppercase;
  }

  &[data-show='true'] {
    span:nth-child(1) {
      animation: ${fadeIn} 0.6s ease-in 1.8s forwards;
    }

    span:nth-child(2) {
      animation: ${fadeIn} 0.6s ease-in 2.2s forwards;
    }
  }
`

export const ColorLine = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    background-color: ${props => props.color};
    transform: translateX(-100%);
  }

  &:after {
    content: '${props => props.color}';
    text-align: center;
    color: rgba(255, 255, 255, 0.2);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 74px;

    ${mq.desktop`
      font-size: 60px;
      line-height: 134px;
    `}
  }
  /* animation */
  &[data-show='true']:before {
    animation: ${slideRight} 0.8s cubic-bezier(0.86, -0.02, 0.08, 1.02) 0.8s
      forwards;
  }
`

export const PrevButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  top: 50%;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${color1};
  border: solid 1px ${color2};
  transform: translate(-50%, -50%) scale(0);
  cursor: pointer;

  ${mq.desktop`
    width: 65px;
    height: 65px;
  `}

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
  }
  &:before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #c2617e;
    transform: scale(0);
    transition: all 0.5s cubic-bezier(0.86, -0.02, 0.08, 1.02) 0s;
  }
  &:after {
    top: 50%;
    left: 50%;
    width: 22%;
    height: 22%;
    border-top: solid 3px ${color2};
    border-left: solid 3px ${color2};
    transform: translate(-25%, -50%) rotate(-45deg);
    transition: all 0.5s cubic-bezier(0.86, -0.02, 0.08, 1.02) 0s;
  }

  &:hover:before {
    ${mq.desktop`
      transform: scale(1);
    `}
  }

  &:hover:after {
    ${mq.desktop`
      border-color: #fff;
    `}
  }

  &:focus {
    outline: none;
  }

  /* animation */
  &[data-show='true'] {
    animation: ${prevButtonShow} 0.3s ease-out 2.6s forwards;
  }
`

export const NextButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  top: 50%;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${color1};
  border: solid 1px ${color2};
  transform: translate(50%, -50%) scale(0);
  cursor: pointer;

  ${mq.desktop`
    width: 65px;
    height: 65px;
  `}

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
  }
  &:before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #c2617e;
    transform: scale(0);
    transition: all 0.5s cubic-bezier(0.86, -0.02, 0.08, 1.02) 0s;
  }
  &:after {
    top: 50%;
    left: 50%;
    width: 22%;
    height: 22%;
    border-top: solid 3px ${color2};
    border-right: solid 3px ${color2};
    transform: translate(-75%, -50%) rotate(45deg);
    transition: all 0.5s cubic-bezier(0.86, -0.02, 0.08, 1.02) 0s;
  }

  &:hover:before {
    ${mq.desktop`
      transform: scale(1);
    `}
  }

  &:hover:after {
    ${mq.desktop`
      border-color: #fff;
    `}
  }

  &:focus {
    outline: none;
  }
  &[data-show='true'] {
    animation: ${nextButtonShow} 0.3s ease-out 2.8s forwards;
  }
`

export const Footer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${color1};
  border-top: solid 1px ${color2};
  box-sizing: border-box;
  height: 40px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  ${mq.desktop`
    height: 50px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  `}
`

export const CopyButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: #c2617e;
  transform: translate(-50%, 50%);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.86, -0.02, 0.08, 1.02) 0s;
  width: 140px;
  height: 40px;
  box-shadow: 0 0 5px #c2617e;
  border-radius: 20px;

  ${mq.desktop`
    width: 200px;
    height: 50px;
    box-shadow: 0 0 10px #c2617e;
    border-radius: 30px;
  `}

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
  &:before {
    background-color: #4aa9a4;
    transform: translateX(-100%);
    transition: all 0.5s cubic-bezier(0.86, -0.02, 0.08, 1.02) 0s;
  }
  &:after {
    content: 'COPY';
    color: #fff;
    letter-spacing: 0.2em;
    font-size: 16px;
    line-height: 40px;

    ${mq.desktop`
      font-size: 20px;
      line-height: 50px;
    `}
  }

  &:hover:before {
    ${mq.desktop`
      transform: translateX(0);
    `}
  }

  &:hover {
    ${mq.desktop`
      box-shadow: 0 0 10px #4aa9a4;
    `}
  }

  &:focus {
    outline: none;
  }
`

export const LineBack = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: calc(50% - 130px);

  ${mq.desktop`
    width: 600px;
    height: calc(50% - 180px);
  `}

  div {
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 150%;
    background-color: ${color2};
  }

  div:nth-child(1) {
    left: 55px;
  }

  div:nth-child(2) {
    right: 55px;
  }
`

export const LineFront = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 600px;
  height: calc(50% - 130px);
  transform: translateX(-50%);
  width: 320px;
  height: calc(50% - 130px);

  ${mq.desktop`
    width: 600px;
    height: calc(50% - 180px);
  `}

  div {
    position: absolute;
    width: 2px;
    height: 150%;
    background-color: ${color2};
    bottom: -20px;

    ${mq.desktop`
      bottom: -25px;
    `}

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -4.5px;
      left: -4.5px;
      width: 10px;
      height: 10px;
      background-color: ${color2};
      border-radius: 50%;
    }
  }

  div:nth-child(1) {
    left: 25px;
  }

  div:nth-child(2) {
    right: 25px;
  }
`
