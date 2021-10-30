function getUniqueEmails() {
    const fs = require('fs');
    const emails = require('./emails.json');
    let set = new Set();
    console.log(emails.length);
    for (let i = 0; i < emails.length; i++) {
        set.add(emails[i]);
    }
    fs.writeFileSync(`${__dirname}/e.json`, JSON.stringify(Array.from(set)))
    console.log(set.size);
}

function getBlockEmailsTxt() {
    const fs = require('fs');
    const emails = require('./emails.json');
    console.log(emails.length)
    let set = new Set();
    let n = 0;
    for (let i = 0; i < emails.length; i++) {
        set.add(emails[i]);
        if (set.size === 1000) {
            fs.writeFileSync(`${__dirname}/e_${n}.txt`, Array.from(set).join('\n'));
            set.clear();
            n++;
            console.log(i)
        }
    }
    if (set.size > 0) {
        fs.writeFileSync(`${__dirname}/e_${n}.txt`, Array.from(set).join('\n'));
    }
}

function getBlockEmailsJson() {
    const fs = require('fs');
    const emails = require('./emails.json');
    console.log(emails.length)
    let set = new Set();
    let n = 0;
    for (let i = 0; i < emails.length; i++) {
        set.add(emails[i]);
        if (set.size === 1000) {
            fs.writeFileSync(`${__dirname}/e_${n}.json`, JSON.stringify(Array.from(set)));
            set.clear();
            n++;
            console.log(i)
        }
    }
    if (set.size > 0) {
        fs.writeFileSync(`${__dirname}/e_${n}.json`, JSON.stringify(Array.from(set)));
    }
}

// getBlockEmailsTxt();
getBlockEmailsJson();