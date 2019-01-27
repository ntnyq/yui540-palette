import { keyframes } from 'styled-components'

/**
 * 渐现动画
 */
export const fadeIn = keyframes`
  form { opacity: 0; }
  to { opacity: 1; }
`

/**
 * 渐隐动画
 */
export const fadeOut = keyframes`
  form { opacity: 1; }
  to { opacity: 0; }
`

/**
 * 左侧滑入
 */
export const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`

/**
 * 右侧滑入
 */
export const slideLeft = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`

/**
 * 下方滑入
 */
export const slideTop = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`
/**
 * 上方滑入
 */
export const slideBottom = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`
