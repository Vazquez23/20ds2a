let anArray = [3,4,5,6,7,8,4,0]
let a = 4
let bandera = false;
for(let x of anArray){
    if(x === a)
    {
	bandera = true;
	break;
    }
}
console.log((bandera) ? 'Encontrado' : 'No Encontrado')
console.log('done...')
	
