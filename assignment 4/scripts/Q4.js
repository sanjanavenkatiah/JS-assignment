function add(num1,num2)
{
    let res = num1+num2;
    console.log(res);
}

function sub(num1,num2)
{
    let res = num1-num2;
    console.log(res);
}

function mul(num1,num2)
{
    let res = num1*num2;
    console.log(res);
}

function div(num1,num2)
{
    let res = num1/num2;
    console.log(res);
}

function sqrt(num1)
{
    let res = Math.sqrt(num1)
    console.log(res);
}

function percent(num1,num2)
{
    let res = (num1/num2)*100;
    console.log(res)
}

alert("enter number 2 as '0' for square root")
alert("enter total for number 2 for percent")
var number1 = Number(prompt("enter number 1",0));
var number2 = Number(prompt("enter number 2",0));
var result = Number(prompt("enter '1' for addition, '2' for subtraction, '3' for multiplication, '4' for division, '5' for squareroot, '6' for percent"))

switch(result){
    case 1: 
            add(number1,number2);
            break;
    case 2:
            sub(number1,number2)
            break;
    case 3:
            mul(number1,number2);
            break;
    case 4:
            div(number1,number2);
            break;
    case 5:
            sqrt(number1);
            break;
    case 6:
            percent(number1,number2);
            break;
    default:
            console.log("error");
            break;


}