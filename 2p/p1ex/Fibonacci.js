//fibonacci

let n_1 = 1
let n_2 = 0
let  n = 0
let s = '0,1,'

for(let i=0; i < 10; i++){
    n = n_1 + n_2
    n_2 = n_1
    n_1 = n
    s += n+','
}
s+='...,Infinito'

console.log(s)
