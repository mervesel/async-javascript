const req=new XMLHttpRequest();

req.addEventListener('readystatechange',()=>{
    console.log(req,req.readyState);
    if(req.readyState===4 && req.status===200){
        console.log(req.responseText);
    }else if(req.readyState===4){
        console.log('could not fetch the data');

    }
})
req.open('GET','https://jsonplaceholder.typicode.com/todoss/');
req.send();