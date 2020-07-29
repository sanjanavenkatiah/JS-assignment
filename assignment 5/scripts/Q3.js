if(!('fetch' in window)){
    console.log('Fetch API not found, try including polyfill');
    }
    async function fetchTodos(){
    var response=await fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(data=>{console.log("The completed todos are:");for(var i=0;i<data.length;i++)if(data[i].completed===true)console.log(data[i])}).catch(e=>console.log("error"));
    }
 
    fetchTodos();