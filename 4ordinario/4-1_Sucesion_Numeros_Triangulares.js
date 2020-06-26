function Sucesion(a){
  console.time('Tiempo')
  let NT = new Array(a)
  for(let n=0;n<a;n++){
    NT[n] = (n*(n+1))/2
  }
  console.timeEnd('Tiempo')
}


console.log('\n1000')
Sucesion(1000)

console.log('\n10000')
Sucesion(10000)

console.log('\n100000')
Sucesion(100000)