/**
 * Copy text to clipboard
 * @param colorCode text to copy
 */

export async function copy2Clipboard(colorCode: string) {
  if (!colorCode) return

  if (!navigator.clipboard) {
    const ele = document.createElement('textarea')

    ele.value = colorCode
    ele.style.top = '0'
    ele.style.left = '0'
    ele.style.position = 'fixed'

    document.body.append(ele)
    ele.focus()
    ele.select()

    try {
      const hasSuccess = document.execCommand('copy')
      console.log(
        `Fallback: Copying text command was ${hasSuccess ? 'successful' : 'unsuccessful'}`,
      )
    } catch (err) {
      console.error(`Fallback: Oops, unable to copy`, err)
    } finally {
      ele.remove()
    }

    return
  }

  try {
    await navigator.clipboard.writeText(colorCode)
    console.log(`Async: copy to clipboard was successful!`)
  } catch (err) {
    console.error(`Async: Could not copy text:`, err)
  }
}
