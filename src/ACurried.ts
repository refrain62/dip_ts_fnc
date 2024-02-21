export type IB = () => string

export const buildFuncA = (func: IB) => () => {
  const greetMessage = func()

  console.log(greetMessage)
}
