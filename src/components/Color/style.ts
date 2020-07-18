import styled, { css } from 'styled-components'
import { mediaQueries as mq } from '/@/utils/mq'
import { beat } from './keyframes'

export const Container = styled.button`
  appearance: none;
  border: none;
  position: relative;
  height: 0;
  transition: all 0.15s ease-out 0s;
  cursor: pointer;
  width: calc(25% - 5px);
  padding-top: calc(25% - 8px);
  margin: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

  ${mq.desktop`
    width: 169px;
    padding-top: 169px;
    margin: 4px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .2);
  `}

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px ${props => props.color};
    box-shadow: none;

    ${mq.desktop`
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
    `}
  }

  &:hover {
    div {
      &:nth-child(1) {
        ${mq.desktop`
          transform: scale(.6);
          border-radius: 50%;
        `}
      }

      &:nth-child(2),
      &:nth-child(3) {
        ${mq.desktop`
          color: #aaa;
          text-shadow: 0 0 0 transparent;
        `}
      }
    }
  }
`

export const BgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.45s cubic-bezier(0, 0, 0, 1.01) 0s;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
  }
`

export const ProductName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  color: #fff;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.45s cubic-bezier(0, 0, 0, 1.01) 0s;
  font-size: 10px;
  padding: 3px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);

  ${mq.desktop`
    font-size: 12px;
    padding: 5px;
    text-shadow: 0 0 3px rgba(0, 0, 0, .5);
  `}
`

export const ColorCode = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100pp;
  box-sizing: border-box;
  text-align: right;
  color: #fff;
  padding: 10px 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;
  transition: all 0.45s cubic-bezier(0, 0, 0, 1.01) 0s;
  font-size: 10px;
  padding: 3px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);

  ${mq.desktop`
    font-size: 12px;
    padding: 5px;
    text-shadow: 0 0 3px rgba(0, 0, 0, .5);
  `}
`
