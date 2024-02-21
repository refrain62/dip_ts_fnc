export type IB = () => string

export const buildFuncA = (func: IB) => {
  const funcA = () => {
    const greetMessage = func()

    console.log(greetMessage)
  }

  return funcA
}
