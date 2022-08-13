const formatCurrency = (number: number, removeMask = false) => {
  let value

  if (removeMask) {
    value = number.toString().replace(/[\D+]/g, '')
  } else {
    if (!Number(number)) return ''

    const numberFormatted = number.toString().replace(/\D/g, '')

    const numberResult = Number(numberFormatted) / 100

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    value = formatter.format(numberResult)
  }

  return value
}

export default formatCurrency
