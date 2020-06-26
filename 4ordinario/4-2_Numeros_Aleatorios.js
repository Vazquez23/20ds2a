function aleatorios(a){
  console.time('Tiempo')
  let NA = new Array(a)
  for(let n=0;n<a;n++){
    NA[n] = Math.round(Math.random() * (10 - 1) + 1)
  }
  for(let i=0 ; i<NA.length-1 ; i++){
    let menor = i;
    for(let j=i+1 ; j<NA.length ; j++)
    {
       if (NA[menor] > NA[j]) menor = j
    }
    let temp = NA[menor]
    NA[menor] = NA[i]
    NA[i] = temp
  }
  console.timeEnd('Tiempo')
}

console.log('\n1000')
aleatorios(1000)

console.log('\n10000')
aleatorios(10000)

console.log('\n100000')
aleatorios(100000)