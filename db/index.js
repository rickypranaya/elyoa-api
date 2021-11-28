const mysql = require('mysql');

// const pool = mysql.createPool({
//     connectionLimit : 10,
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database:'elyo',
//     port: '3306'
// })

const pool = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b12343d04bcd30',
    password: '08470ecb',
    database:'heroku_a1dc6c59e325f8f',
    port: '3306'
})

let elyodb ={};

elyodb.users = ()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM users', (err,results)=>{
            if (err){
                return reject (err);
            } 
            return resolve (results);
        })
    })
};

elyodb.product_get = ()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM product ORDER BY name ASC' ,(err,results)=>{
            if (err){
                return reject (err);
            } 
            return resolve (results);
        })
    })
};

module.exports = elyodb;