// 依存性の逆転
import { funcA } from "./A"
import { funcB } from "./B"

console.log(funcA(funcB))


// 関数Aに関数Bを毎回渡すのは面倒
// カリー化
import { buildFuncA } from "./ACurried"

const funcACurried = buildFuncA(funcB)

console.log(funcACurried())
console.log(funcACurried())
