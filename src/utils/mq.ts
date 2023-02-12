import { css, Interpolation } from 'styled-components'
import { desktopSize } from '@/constants/theme'

export const mediaQueryBuilder =
  (size: number) =>
  (strings: TemplateStringsArray, ...interpolations: Array<Interpolation<any>>) =>
    `
  @media screen and (min-width: ${size}px) {
    ${css(strings, ...interpolations)}
  }
`

export const mediaQueries = {
  desktop: mediaQueryBuilder(desktopSize),
}
