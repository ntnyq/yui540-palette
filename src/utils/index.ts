/**
 * Copy text to clipboard
 * @param colorCode text to copy
 */

export function copy2Clipboard(colorCode: string): void {
  if (!colorCode) return

  if (!navigator.clipboard) {
    const ele = document.createElement('textarea')

    ele.value = colorCode
    ele.style.top = '0'
    ele.style.left = '0'
    ele.style.position = 'fixed'

    document.body.appendChild(ele)
    ele.focus()
    ele.select()

    try {
      const isSuccessful = document.execCommand('copy')
      const msg = isSuccessful ? 'successful' : 'unsuccessful'

      console.log(`Fallback: Copying text command was ${msg}`)
    } catch (err) {
      console.error(`Fallback: Oops, unable to copy`, err)
    } finally {
      document.body.removeChild(ele)
    }

    return
  }

  navigator.clipboard.writeText(colorCode).then(
    () => {
      console.log(`Async: copy to clipboard was successful!`)
    },
    err => {
      console.error(`Async: Could not copy text:`, err)
    }
  )
}
