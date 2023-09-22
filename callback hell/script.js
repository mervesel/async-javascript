const getTodos = (resource, callback) => {
  const req = new XMLHttpRequest();

  req.addEventListener("readystatechange", () => {
    console.log(req, req.readyState);
    if (req.readyState === 4 && req.status === 200) {
      const data = JSON.parse(req.responseText);
      callback(undefined, data);
    } else if (req.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });
  req.open("GET", resource);
  req.send();
};

getTodos("todos/luigi.json", (err, data) => {
  console.log(data);
  getTodos("todos/mario.json", (err, data) => {
    console.log(data);
    getTodos("todos/shaun.json", (err, data) => {
      console.log(data);
    });
  });
});
