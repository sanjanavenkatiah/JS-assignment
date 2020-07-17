console.log("question1");

function oddeven(num=0) {
    let temp = num;
    if(num%2 == 0)
    {
        console.log(`The input number is ${temp} and the Number is even`)
    }
    else{
        console.log(`The input number is ${temp} and the Number is odd`);
    }
}

let number = Number(prompt("enter a number",0));
oddeven(number);