let num = prompt('enter a humber',1)

function table()
{
    for(let i = 1; i<=10;i++)
    {
        let number = num*i;
        console.log(`${num} x ${i} = ${number}`)
        document.write(`${num} x ${i} = ${number}</br>`)
    }
}
table()