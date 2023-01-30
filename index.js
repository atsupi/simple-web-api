var express = require('express');
var app = express();
var port = 3001;
app.use(express.json());

var fruit_prices = [
    {name: "banana", id: 1, price: 100},
    {name: "strawberry", id: 2, price: 300},
    {name: "apple", id: 3, price: 200},
];

app.listen(port, () => {
    console.log("express: port 3001 opened");
});
app.get("/fruit/prices", (req, res) => {
    console.log("GET: access to /fruit/prices");
    res.send(fruit_prices);
});
app.get("/fruit/prices/:id", (req, res) => {
    console.log("GET: access to /fruit/prices/:id");
    var item = fruit_prices.find(price => {
        return price.id === parseInt(req.params.id);
    });
    console.log(item);
    res.send(item);
});
app.post("/fruit/prices", (req, res) => {
    console.log("POST: access to /fruit/prices");
    const item = {
        name: req.body.name,
        id: fruit_prices.length + 1,
        price: req.body.price
    }
    fruit_prices = [...fruit_prices, item];
    res.send(fruit_prices);
});
