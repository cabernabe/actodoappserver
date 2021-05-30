const {Pool} = require('pg');

const pool = new Pool({
    user: 'muxnnanbuksykk',
    password: 'd78a807259ffdb1c6fd09e238fdfe77f38746843faab4bfecafae9c2a779d462',
    host: 'ec2-54-167-152-185.compute-1.amazonaws.com',
    port: 5432,
    database: 'd37d5rhpngeo7u',
    ssl:{
        rejectUnauthorized: false
    }
});
module.exports = pool;