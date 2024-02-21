// 依存性の逆転に反しているコード
const funcB = () => {
  return 'こんにちはB'
}

const funcA = () => {
  const greetMessage = funcB()

  return greetMessage
}

console.log(funcA())
