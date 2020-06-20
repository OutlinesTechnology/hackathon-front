export const deleteCookie = (name: string): void => {
  setCookie(name, '', {
    'max-age': -1,
  })
}

export const setCookie = (name: string, value: string, options: any = {}) => {
  options = {
    path: '/',
    ...options,
  }

  options.expires = new Date(Date.now() + 86400e3).toUTCString()

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey
    let optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  document.cookie = updatedCookie
}

export const getCookie = (name: string): string | undefined => {
  let matches = document.cookie.match(
    new RegExp(
      // eslint-disable-next-line
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}
