export const verificar = (response, word) => {
  var flag = false
  response.map((item) => {
    const result = item.message.includes(word)
    if (!flag && result) flag = result
  })
  return flag
}
