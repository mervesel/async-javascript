const getTodos = (callback) => {
  const req = new XMLHttpRequest();

  req.addEventListener("readystatechange", () => {
    console.log(req, req.readyState);
    if (req.readyState === 4 && req.status === 200) {
      callback(undefined,req.responseText);
    } else if (req.readyState === 4) {
      callback('could not fetch data',undefined);
    }
  });
  req.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  req.send();
};

getTodos((err,data)=>{
    console.log('callback fired');
    // console.log(err,data);
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});