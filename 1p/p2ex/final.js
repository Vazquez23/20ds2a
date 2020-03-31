function Radius(a,b,c){
    let s = (1/2)*(a + b + c)
    let r = (Math.sqrt( (s * (s-a) * (s-b) * (s-c) ) ) ) / s
    return r
}

console.log(Radius(5,6,7))
console.log('done...')
