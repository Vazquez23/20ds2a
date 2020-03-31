let a = [];
for(let i = 0; i < 1000; i++)
{
	a[i] = Math.ceil(Math.random() * 6)
	if(a[i] === 0)
	{
		console.log(a[i])
	}
}
console.log('done...')
