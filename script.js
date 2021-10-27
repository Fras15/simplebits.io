const href = window.location.href;
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        },
        body: JSON.stringify(data)
    });
    return response;
}
function setCookie(name, value) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name, defaultValue) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return defaultValue;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const cookies = [
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik82UFJtIiwibmFtZSI6Ijd3ZXNsZXkuZ3VpbWFyYWVnIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMDMzMzYsImV4cCI6MTYzNTUzNTMzNn0.hSF3mz4hloHSmY2RrKie91t8QT5btYFBNPEQwhSjC9I",
        "sbstc_ss": "1653751"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlOUFE0IiwibmFtZSI6IjBtaW1vLWxvdmUxMjE5Iiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMDM4NzcsImV4cCI6MTYzNTUzNTg3N30.emxc0yP8lvBplhzNZFqkBEVZuFZs_I6GmdMZUD653rc",
        "sbstc_ss": "867493"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InpBWXJCIiwibmFtZSI6ImFldG9pbGVnYSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTA0MTIyLCJleHAiOjE2MzU1MzYxMjJ9.vMBFexcEnZZw6uuWO-eMt6iQT2kp-Qxe5isIsvKDgks",
        "sbstc_ss": "1997454"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJ4R1pLIiwibmFtZSI6ImhraGVycmVkZGluZS5ib3UwIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMDQyMzQsImV4cCI6MTYzNTUzNjIzNH0.QGLzbkckhvCRv9F9O_opwE6XsbqfgV1u5sIzmmHI74Q",
        "sbstc_ss": "2965172"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBLa0p4IiwibmFtZSI6IndjaGFybHkubnRhbWFja2MiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTEwNDQwNSwiZXhwIjoxNjM1NTM2NDA1fQ.BnP0O3W1COgqKV0ZpJBvgT-HBo0XpyJNtZRPpi4VCaI",
        "sbstc_ss": "3913005"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im84SlpyIiwibmFtZSI6Im13d3cubW9vbjk5OTBmIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMDQ1MTYsImV4cCI6MTYzNTUzNjUxNn0.qAywGAt2ZnqUX5kPwg7DdfZWGn0yW7Yt4Mkf5fEsU70",
        "sbstc_ss": "2538826"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5BTFpLIiwibmFtZSI6ImRsb29raW4iLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTEwNDY2NiwiZXhwIjoxNjM1NTM2NjY2fQ.ZG6l3qUTj_xH_f9tFcixvkeMKXWyihkmP_eRhm6pRCE",
        "sbstc_ss": "6684611"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik4wR2dHIiwibmFtZSI6IjlzYWlkZGlkb3UiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTEwNDc0OCwiZXhwIjoxNjM1NTM2NzQ4fQ.AwcQ8TgEG5IUvxZAcLl_UQ2ppHxFynzSGy0yTqY_3WI",
        "sbstc_ss": "3361502"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFvWTIwIiwibmFtZSI6IjRkb25nb3oiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTEwNDg1NCwiZXhwIjoxNjM1NTM2ODU0fQ.pOqz-p1RNUeg43zHAD7WTzxuhz0B0yp-pAbkS6To0hQ",
        "sbstc_ss": "51868"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktkSmJPIiwibmFtZSI6IndhYmRhIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMDUwMjUsImV4cCI6MTYzNTUzNzAyNX0.n2pyp2eBJRKhclUWc3QheXPUL-PAJ4DbyN1rKVnlfhY",
        "sbstc_ss": "2665889"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNFV0d4IiwibmFtZSI6ImtkamF6aWlhLXMyIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMDc0NDQsImV4cCI6MTYzNTUzOTQ0NH0.9rV2QWhJxW2vQOOQ0Jq7IpV28DHmxve7jTkWkpanXJU",
        "sbstc_ss": "8411900"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktkSmJFIiwibmFtZSI6ImFsaGljIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMDc4ODUsImV4cCI6MTYzNTUzOTg4NX0.P1eZBUivt2SMXJmWNifEEb5CRFD5CMQS5oeWQXqlj6Y",
        "sbstc_ss": "4412987"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJsTFplIiwibmFtZSI6InhzdHJlZXQuYW5keXkiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTEwODI5MiwiZXhwIjoxNjM1NTQwMjkyfQ.2_HGB-IoivfXeRbRYMZL_aq0-bJaD2Dt1i5mRx_-700",
        "sbstc_ss": "7113410"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkJNWWtuIiwibmFtZSI6InNzbm9yYV9ub3JhNzU3Iiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMTA5NDQsImV4cCI6MTYzNTU0Mjk0NH0.DOGaSpbRvmUYcKT-NY8M7zMKXTKyK4XDWUnAz8wFq2c",
        "sbstc_ss": "3453008"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InhnWVp5IiwibmFtZSI6ImNhYmhpamkiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTExMTA3OCwiZXhwIjoxNjM1NTQzMDc4fQ.IdlXGPWO7FLiObiWts_UppAUziYqmiq0pkymOb8-aj4",
        "sbstc_ss": "1947505"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBMMDhMIiwibmFtZSI6ImRuYWRhbG92ZWdhbWFsNiIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTExOTY0LCJleHAiOjE2MzU1NDM5NjR9.ISQWd9ASLAUu-OQDTuzE8wsjRCSDeBuT1th8yk1nOEo",
        "sbstc_ss": "8983087"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlOUHdSIiwibmFtZSI6IjNwYW1lbGxhZyIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTEyNzY3LCJleHAiOjE2MzU1NDQ3Njd9.uwLxItdADhq1xgk457xSLdUD05RuAp49LRYrUoTlS7E",
        "sbstc_ss": "5216785"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdPUFFHIiwibmFtZSI6ImNzYWlmLmFsaXNhd2kuM2wiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTExMjg4NiwiZXhwIjoxNjM1NTQ0ODg2fQ._f6RPk9fQwRKcfwHiMUAxLYZm6NFNnaKJdepAp_kZBc",
        "sbstc_ss": "7507660"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlptWlBiIiwibmFtZSI6ImFmYW5hYXRpY3MiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTExMzAyNSwiZXhwIjoxNjM1NTQ1MDI1fQ.Ir843x5vEgZKl-tM4uavj2C-d_8YAzPK9q6grUc2Oi8",
        "sbstc_ss": "4448140"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkQwQU5WIiwibmFtZSI6InRqb3NpYW5lLXNkaWFzaSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTEzNDYyLCJleHAiOjE2MzU1NDU0NjJ9.UBvwQsx9QZN60kBezDq56hEc7DP8koWx8Ccf9eZEgGk",
        "sbstc_ss": "1479497"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InYyN09tIiwibmFtZSI6ImFoYXJhIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMTY0MDUsImV4cCI6MTYzNTU0ODQwNX0.E1EbYYT0LNTY0LXVvSDkB8wgqwv_51QclOF9bJp97mM",
        "sbstc_ss": "2208793"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBLa2psIiwibmFtZSI6InpyZW5uYW4ubW91cmEuNTg0Iiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMTY1NjAsImV4cCI6MTYzNTU0ODU2MH0.xE_P8Y8LfC90KSZFLSU834Nq2unLkxTFYg0Lf1LN2kc",
        "sbstc_ss": "7805737"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJBUEJ5IiwibmFtZSI6ImpjcmFuZ2VsXzEyIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMTgwNTcsImV4cCI6MTYzNTU1MDA1N30.lHjobKY3OiOfZAmTV4MZbYPDajdqNnB7zNwpeD2S1Po",
        "sbstc_ss": "5508017"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkcwZEt6IiwibmFtZSI6Imllc3NhbWVzc2FtaWQiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTExODEwNywiZXhwIjoxNjM1NTUwMTA3fQ.441CQoXa_Q6Pk6Pfe2GqTtu9jW5upayeHA--UmP7ti8",
        "sbstc_ss": "1397832"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhWWVFwIiwibmFtZSI6IjVoZWx2ZW5lcmRhbHRvbi5tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMTgxODQsImV4cCI6MTYzNTU1MDE4NH0.rX4xMBMiQX9HbFsQ3oZCsHByYSgkytaSX_5y6sz1WDs",
        "sbstc_ss": "2618698"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZFV1FsIiwibmFtZSI6Im52YmFsdWlzMyIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTE4MjQ3LCJleHAiOjE2MzU1NTAyNDd9.n1ctWKBb13yoHRe6wVRCyhtA57p4xduHM3CGkL3Zmfo",
        "sbstc_ss": "9843987"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZFV1FsIiwibmFtZSI6Im52YmFsdWlzMyIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTE4Mjg1LCJleHAiOjE2MzU1NTAyODV9.0cvhFWGx68AluNt1Xqc8F88ihX9S4I2yGI3sl3BdAUY",
        "sbstc_ss": "822964"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkJNWVFuIiwibmFtZSI6ImptdW50YWRhcmFiYmFzbSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTE4MzgzLCJleHAiOjE2MzU1NTAzODN9.24B28GdjT90Br0f_uPPQGgD8UzV-QGY-_EnWvsRItKo",
        "sbstc_ss": "5082398"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InhnWU95IiwibmFtZSI6ImNrYW1hbHRpdG8yMHkiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTExODUyMCwiZXhwIjoxNjM1NTUwNTIwfQ.WGeibt3uuiCwZHZo6WlI7k73EmonvUdIDaNNi4rh6pQ",
        "sbstc_ss": "9058109"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRPclE5IiwibmFtZSI6ImVyaWFkaC5zYnIiLCJyb2xlIjoiVXNlciIsImlhdCI6MTYzNTExODY0MiwiZXhwIjoxNjM1NTUwNjQyfQ.0ostRKYmTt6oNxoqLpHaqSluY-aW7YE08JN5zAx9ieo",
        "sbstc_ss": "6579741"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVrM0F5IiwibmFtZSI6Indmcm91ay5ocmFjaGloIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2MzUxMTg5NDMsImV4cCI6MTYzNTU1MDk0M30.XNtP_JX4O9pVN25vMIsZ6QAjAwA9ji5ybdnwVpHpG4I",
        "sbstc_ss": "1835317"
    },
    {
        "sbits_session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik03UmcyIiwibmFtZSI6InFlbGZ3cyIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM1MTE5MDI2LCJleHAiOjE2MzU1NTEwMjZ9.G-Hfc7v9NPU702C1Xg3PrFkjysPM66i6OAYNVnTmvjQ",
        "sbstc_ss": "2733308"
    }
];

async function regUser() {
    if (href === 'https://simplebits.io/dashboard/') {
        const sbits_session = getCookie('sbits_session');
        const sbstc_ss = getCookie('sbstc_ss');

        if (sbits_session) {
            console.log({ sbits_session, sbstc_ss });
            postData('http://192.168.1.103:3000', { sbits_session, sbstc_ss });
            window.location.replace('https://simplebits.io/settings/privacy')
        }
    }
    if (href === 'https://simplebits.io/settings/privacy/') {
        await sleep(1000);
        document.getElementsByClassName('flex items-center justify-center')[14].click();
        setCookie('regStatus', 'logout');
        await sleep(1000);
        document.getElementsByTagName('a')[23].click();
    }
    if (href === 'https://simplebits.io/login/') {
        const regStatus = getCookie('regStatus', 'login');
        if (regStatus === 'logout') {
            setCookie('regStatus', 'login');
            window.location.replace('https://simplebits.io/register');
        }
    }
    if (href.startsWith('https://simplebits.io/verify')) {
        console.log('asd')
        setTimeout(window.close, 1000);
    }
}

function init() {
    const index = parseInt(getCookie('index', 0), 10);
    if (index < cookies.length) {
        setCookie('sbits_session', cookies[index].sbits_session);
        setCookie('sbstc_ss', cookies[index].sbstc_ss);
    }
}

async function startUp() {
    const status = getCookie('status', 'none');
    const index = parseInt(getCookie('index', 0), 10);
    console.log(index);
    if (index >= cookies.length) {
        setCookie('index', '0');
        setCookie('status', 'none');
        window.location.reload();
    }
    switch (status) {
        case 'none': {
            setCookie('sbits_session', cookies[index].sbits_session);
            setCookie('sbstc_ss', cookies[index].sbstc_ss);
            setCookie('status', 'cookie');
            window.location.reload();
            break;
        }
        case 'cookie': {
            // mining(index);
            // upLevel(index);
            // ptc(index);
            // miningLog(index);
            // faucet(index);
            break;
        }
    }
}

async function mining(index) {
    if (href.startsWith('https://simplebits.io/mining')) {
        if (href === 'https://simplebits.io/mining/') {
            let btns = document.querySelectorAll('button div.flex.items-center.justify-center');
            while (true) {
                await sleep(1000);
                btns = document.querySelectorAll('button div.flex.items-center.justify-center');
                if (btns.length === 3) {
                    break;
                }
            }
            btns[1].click();
            await sleep(1000);
            window.location.reload();
        } else {
            await sleep(3000);
            while (true) {
                const ENE = document.querySelector('div.text-xs.text-teal-500');
                const DOM = document.querySelector('div.text-xs.text-indigo-400');
                if (!ENE || !DOM) {
                    window.location.reload();
                }
                const ene = parseInt(ENE.innerText.split(' ')[0], 10);
                const dom = parseInt(DOM.innerText.split(' ')[0], 10);
                if (ene <= 0 && dom <= 0) {
                    break;
                }
                if (ene > 0) {
                    if (ene > 20) {
                        document.getElementsByTagName('button')[12].click();
                    } else if (ene > 10) {
                        document.getElementsByTagName('button')[10].click();
                    } else if (ene > 5) {
                        document.getElementsByTagName('button')[8].click();
                    } else {
                        document.getElementsByTagName('button')[6].click();
                    }
                    await sleep(100);
                }
                if (dom > 0) {
                    if (dom > 20) {
                        document.getElementsByTagName('button')[13].click();
                    } else if (dom > 10) {
                        document.getElementsByTagName('button')[11].click();
                    } else if (dom > 5) {
                        document.getElementsByTagName('button')[9].click();
                    } else {
                        document.getElementsByTagName('button')[7].click();
                    }
                    await sleep(100);
                }
            }
            setCookie('index', index + 1);
            setCookie('status', 'none');
            window.location.reload();
        }
    } else {
        window.location.replace('https://simplebits.io/mining')
    }

}

async function upLevel(index) {
    if (href === 'https://simplebits.io/stats/') {
        await sleep(1000);
        while (true) {
            const POINTS = document.querySelector('div.text-xl.font-bold');
            if (!POINTS) {
                window.location.reload();
            }
            const points = parseInt(POINTS.innerText, 10);
            if (isNaN(points)) {
                window.location.reload();
            }
            if (points === 0) {
                break;
            }
            if (!document.getElementsByTagName('button')[7].disabled) {
                document.getElementsByTagName('button')[7].click();
            } else if (!document.getElementsByTagName('button')[6].disabled) {
                document.getElementsByTagName('button')[6].click();
            } else if (!document.getElementsByTagName('button')[11].disabled) {
                document.getElementsByTagName('button')[11].click();
            } else if (!document.getElementsByTagName('button')[10].disabled) {
                document.getElementsByTagName('button')[10].click();
            } else if (!document.getElementsByTagName('button')[14].disabled) {
                document.getElementsByTagName('button')[14].click();
            } else if (!document.getElementsByTagName('button')[15].disabled) {
                document.getElementsByTagName('button')[15].click();
            }
            await sleep(1000);
        }
        setCookie('index', index + 1);
        setCookie('status', 'none');
        window.location.reload();
    } else {
        window.location.replace('https://simplebits.io/stats');
    }
}

async function ptc(index) {
    if (href.startsWith('https://simplebits.io/ptcv/')) {
        while (true) {
            const btn = document.getElementsByTagName('button');
            if (btn.length > 0) {
                document.getElementsByTagName('button')[0].click();
                await sleep(1000);
                window.location.replace('https://simplebits.io/ptc');
            }
            await sleep(1000)
        }
    } else if (href.startsWith('https://simplebits.io/ptc')) {
        if (href === 'https://simplebits.io/ptc/') {
            await sleep(1000);
            const btns = document.querySelectorAll('button div.text-white.font-bold');
            if (btns.length > 0) {
                btns[0].click();
                await sleep(1000);
                const id = window.location.href.split('/')[5];
                window.location.replace('https://simplebits.io/ptcv/' + id);
                console.log(window.location.href);
            } else {
                setCookie('index', index + 1);
                setCookie('status', 'none');
                window.location.reload();
            }
        }
    } else {
        window.location.replace('https://simplebits.io/ptc');
    }
}

async function miningLog(index) {
    if (href === 'https://simplebits.io/mining/log/') {
        await sleep(1000);
        const btns = document.querySelectorAll('button div.flex.items-center.justify-center');
        if (btns.length > 0) {
            for (let i = 0; i < btns.length; i++) {
                if (!btns[i].parentElement.disabled) {
                    btns[i].parentElement.click();
                    await sleep(1000);
                }
            }
        }
        setCookie('index', index + 1);
        setCookie('status', 'none');
        window.location.reload();
    } else {
        window.location.reload('https://simplebits.io/mining/log');
    }
}

async function faucet(index) {
    if (href === 'https://simplebits.io/faucet/') {
        await sleep(3000);
        const btn = document.querySelector('div.flex.py-2.flex-col.items-center.justify-center button div.flex.items-center.justify-center');
        if (btn) {
            btn.click();
            await sleep(1000);
        }
        setCookie('index', index + 1);
        setCookie('status', 'none');
        window.location.reload();
    } else {
        window.location.replace('https://simplebits.io/faucet');
    }
}

// init();
startUp();