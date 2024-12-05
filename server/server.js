const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/registration", (req, res) => {
    const data = req.body;
    console.log(data);

    res.status(201).json({ message: "Данные получены" });
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})