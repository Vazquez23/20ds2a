let anArray = [3,9,2,6,8]
let min = anArray[0]
for(x of anArray){
  if(x < min)
    min = x
}
console.log(min)