const req=new XMLHttpRequest();

req.addEventListener('readystatechange',()=>{
    console.log(req,req.readyState);
    if(req.readyState===4){
        console.log(req.responseText);
    }
})
req.open('GET','https://jsonplaceholder.typicode.com/todos/');
req.send();