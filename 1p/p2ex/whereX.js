let anArray = [3,4,5,6,7,5,7]
let i = 0
let a = 5
console.log(a+' Encontrado en las posiciones:')
for(let x of anArray)
{
    if(x === a)
    {
	console.log(i)
    }
    i++
}
console.log('done...')
