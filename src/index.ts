// 依存性の逆転
import { funcA } from "./A"
import { funcB } from "./B"

console.log(funcA(funcB))
