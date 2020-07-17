console.log("question 3");
let marks = Number(prompt('Enter the marks',0));
//if else
if(marks>90 && marks<=100)
{
    console.log(`Marks is ${marks} and grade is A`);
}
else if(marks>75 && marks<=90)
{
    console.log(`Marks is ${marks} and grade is B`);
}
else if(marks>60 && marks<=75)
{
    console.log(`Marks is ${marks} and grade is C`);
}
else if(marks>45 && marks<=60)
{
    console.log(`Marks is ${marks} and grade is D`);
}
else
{
    console.log(`Marks is ${marks} and grade is F`);
}

//switch
switch(true){
    case (marks>90 && marks<=100):
        console.log(`Marks is ${marks} and grade is A`);
        break;
    case (marks>75 && marks<=90):
        console.log(`Marks is ${marks} and grade is B`);
        break;
    case (marks>60 && marks<=75):
        console.log(`Marks is ${marks} and grade is C`);
        break;
    case (marks>45 && marks<=60):
        console.log(`Marks is ${marks} and grade is D`);
        break;
    case (marks<=45):
        console.log(`Marks is ${marks} and grade is F`);
        break;
    default:
        console.log(`marks entered is incorrect`);
        break;
}




