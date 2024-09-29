import { css } from 'styled-components'
import { desktopSize } from '@/constants/theme'
import type { CSSProp } from 'styled-components'

export const mediaQueryBuilder =
  (size: number) =>
  (strings: TemplateStringsArray, ...interpolations: Array<CSSProp>) =>
    `
  @media screen and (min-width: ${size}px) {
    ${css(strings, ...interpolations)}
  }
`

export const mediaQueries = {
  desktop: mediaQueryBuilder(desktopSize),
}
