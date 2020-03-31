//power

function pow(b,p){
    let r = 1
    for(let i = 0; i < p; i++){
	r *= b 
    }
    return r 
}

console.log(pow(2,3))
