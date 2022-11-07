const fibonnaci = (num) => {
  const result = []
  let before = 0
  let after = 1
  let next = 0

  switch (num) {
    case 1:
      result.push(1)
      break

    default:
      result.push(1)
      let counter = 1
      while (counter < num) {
        next = before + after
        before = after
        after = next
        result.push(next)
        counter++
      }
      break
  }
  return result
}

console.log(fibonnaci(6));