import { css } from 'styled-components'
import type { CSSProp } from 'styled-components'
import { desktopSize } from '@/constants/theme'

export const mediaQueryBuilder =
  (size: number) =>
  (strings: TemplateStringsArray, ...interpolations: CSSProp[]) =>
    `
  @media screen and (min-width: ${size}px) {
    ${css(strings, ...interpolations)}
  }
`

export const mediaQueries = {
  desktop: mediaQueryBuilder(desktopSize),
}
