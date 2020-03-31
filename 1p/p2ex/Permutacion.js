function factorial(n){
    let result = 1
    for(let i = 1; i <= n; i++){
	result *= i
    }
    return result
}

function permutacion(n,r){
    if((n-r) >= 0){
	return (factorial(n))/(factorial(n-r))
    }else{
	return 'Error "n - r" es igual a un numero Negativo'
    }
}

console.log(permutacion(7,3))
console.log(permutacion(8,5))

console.log('done...')
