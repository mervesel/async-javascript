
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
  console.log('promise resolved:',data);

}).catch(err=>{
  console.log('promise rejected.',err);
});

//promise example
// const getSomething=()=>{
//   return new Promise((resolve,reject)=>{
//     //fetch something
//     resolve('some data');
//     // reject('some error');
//   })
// };

// getSomething().then((data)=>{
//   console.log(data);
// },(err)=>{
//   console.log(err);
// })

// getSomething().then(data=>{
//   console.log(data);
// }).catch(err=>{
//   console.log(err);
// })