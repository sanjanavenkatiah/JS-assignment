console.log('question 1')

let num = Number(prompt('Enter a positive number.',0))
let arr = []
for(let i = 0;i<=num;i++)
{
    
    arr.push(i)
}
let arr1 = arr.filter(num=>(num%2!=0)).map(num=>num**3)
    console.log(arr1)




 
