export type IB = () => string;

export const funcA = (func: IB) => {
  const greetMessage = func();

  console.log(greetMessage)
}
