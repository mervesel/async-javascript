
const getTodos = (resource) => {
  return new Promise((resolve,reject)=>{
    const req = new XMLHttpRequest();

    req.addEventListener("readystatechange", () => {
      console.log(req, req.readyState);
      if (req.readyState === 4 && req.status === 200) {
        const data = JSON.parse(req.responseText);
        resolve(data);
      } else if (req.readyState === 4) {
        reject('error getting resource');
      }
    });
    req.open("GET", resource);
    req.send();
  })
};

getTodos('todos/luigi.json').then(data=>{
  console.log('promise 1 resolved:', data);
  return getTodos('todos/mario.json');
}).then(data=>{
  console.log('promise 2 resolved:', data);
  return getTodos('todos/shaun.json');
}).then(data=>{
  console.log('promise 3 resolved:', data);
}).catch(err=>{
  console.log('promise rejected:', err);
});
