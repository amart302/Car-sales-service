const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/registration", (req, res) => {
    const data = req.data;
    console.log(data);

    res.status(201).json({ message: "Данные получены" });
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})