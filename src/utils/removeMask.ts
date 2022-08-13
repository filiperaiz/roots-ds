/* eslint-disable no-useless-escape */
const removeMask = (value: string) => {
  const regex = /[,\/\.\-\(\)_ ]/g
  const newValue = value === undefined ? '' : value

  return newValue.replace(regex, '')
}

export default removeMask
