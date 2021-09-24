import styled from 'styled-components'
import { mediaQueries as mq } from '@/utils/mq'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: calc((100% - 740px) / 2);
  height: 100%;
  background-color: ${props => props.color};
  transition: all 0.3s cubic-bezier(0, 0, 0, 1.01) 0s;
  transform: translate3d(100%, 0, 0);
  border-radius: 70% 0 0 70%;
  overflow: hidden;
  display: none;

  ${mq.desktop`
    display: block;
  `}

  &[data-open='true'] {
    transform: translate3d(0, 0, 0);
    border-radius: 0% 0 0 0%;
  }
`

export const ColorCode = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: rgba(255, 255, 255 0.6);
  transform: translate(-50%, -50%);
`
