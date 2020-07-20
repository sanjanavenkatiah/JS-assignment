console.log('Employee rewards')
 let sales = Number(prompt('enter the total sales achieved.'))
 let reward = 0

 if(sales>=0 && sales<=5000)
 {
     reward = sales*0.02;
     console.log(`Rewards earned by the employee is ${reward}.`)
 }
 else if(sales>5000 && sales<=10000)
 {
     reward = (5000*0.02)+((sales - 5000)*0.05)
     console.log(`Rewards earned by the employee is ${reward}.`)
 }
 else if(sales>10000 && sales<=20000)
 {
     reward = (5000*0.02)+(5000*0.05)+((sales-10000)*0.07)
     console.log(`Rewards earned by the employee is ${reward}.`)
 }
 else
 {
    reward = (5000*0.02)+(5000*0.05)+((10000)*0.07)+((sales-20000)*0.1)
    console.log(`Rewards earned by the employee is ${reward}.`)
 }
 