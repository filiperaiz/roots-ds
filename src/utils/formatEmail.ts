const formatEmail = (value = '') => {
  const currentEmail = value.split('@')

  const email = currentEmail[0]

  const middleText = email.slice(1, -1)

  const hiddenText = email.replace(middleText, '*****')

  return `${hiddenText}@${currentEmail[1]}`
}

export default formatEmail
