fetch('http://localhost:3004/products')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error =>console.log (error) )