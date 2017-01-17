'use strict';

import request from 'request';

function getJSON(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            resolve(body);
        });
    });
}

async function main() {
    const data = await getJSON();
    console.log(data); // Vai mostrar os dados da requisição
}

main();