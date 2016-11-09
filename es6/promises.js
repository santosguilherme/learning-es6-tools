'use strict';

import $ from 'jquery';

const urls = [
    '/api/commits',
    '/api/issues/opened',
    '/api/issues/assigned',
    '/api/issues/completed',
    '/api/issues/comments',
    '/api/pullrequests'
];

const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url
        })
            .done((data) => {
                resolve(data);
            });
    });
});

Promise.all(promises)
    .then((results) => {
        console.log(results);
    });