const getTodos = (callback) => {
  const req = new XMLHttpRequest();

  req.addEventListener("readystatechange", () => {
    console.log(req, req.readyState);
    if (req.readyState === 4 && req.status === 200) {
      const data=JSON.parse(req.responseText)
      callback(undefined,data);
    } else if (req.readyState === 4) {
      callback('could not fetch data',undefined);
    }
  });
  req.open("GET", "todos.json");
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