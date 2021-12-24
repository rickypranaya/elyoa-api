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


elyodb.product_add = (params)=>{
    return new Promise((resolve,reject)=>{
        let sql = "INSERT INTO `product` (`name`, `price`) VALUES (?)"
        pool.query(sql,[[params.name, params.price]], (err,results)=>{
            if (err){
                return reject (err);
            } 
            console.log(results)
            return resolve (results);
        })
    })
};

elyodb.product_remove = (params)=>{
    return new Promise((resolve,reject)=>{
        pool.query('DELETE FROM product WHERE id = ?', [params.id],(err,results)=>{
            if (err){
                return reject (err);
            } 
            return resolve (results);
        })
    })
};

elyodb.product_edit = (params)=>{
    return new Promise((resolve,reject)=>{
        let sql = "UPDATE product set name = ?, price = ?  WHERE id = ?"
        pool.query(sql,[params.name, params.price, params.id], (err,results)=>{
            if (err){
                return reject (err);
            } 
            console.log(results)
            return resolve (results);
        })
    })
};

elyodb.count_packet = (params)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM transaction where created_at >= ? ORDER BY no DESC', [params.created_at],(err,results)=>{
            if (err){
                return reject (err);
            } 
            return resolve (results);
        })
    })
};

elyodb.product_search = (params)=>{
    var keyword = '%' + params.keyword+ '%';

    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM product WHERE name LIKE N? ORDER BY name ASC' ,[keyword],(err,results)=>{
            if (err){
                return reject (err);
            } 
            return resolve (results);
        })
    })
};

elyodb.transaction_add = (params)=>{
    return new Promise((resolve,reject)=>{
        let sql = "INSERT INTO `transaction` (`no`, `nama`, `no_telpon`, `email`, `kota`, `desa`, `postcode`, `alamat`, `pembayaran`, `item`, `total_penjualan`, `ongkos_kirim`, `subsidi`, `total`, `created_at`, `edited_at`) VALUES (?)"
        pool.query(sql,[[params.no, params.nama, params.no_telpon, params.email, params.kota, params.desa, params.postcode, params.alamat, params.pembayaran, params.item, params.total_penjualan, params.ongkir, params.subsidi, params.total, params.created_at, params.edited_at]], (err,results)=>{
            if (err){
                return reject (err);
            } 
            console.log(results)
            return resolve (results);
        })
    })
};

elyodb.search_get = (params)=>{
    var keyword = '%' + params.keyword+ '%';

    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM transaction WHERE (nama LIKE N? OR no LIKE N? OR no_telpon LIKE N?) ORDER BY created_at DESC' ,[keyword, keyword, keyword ],(err,results)=>{
            if (err){
                return reject (err);
            } 
            return resolve (results);
        })
    })
};


elyodb.transaction_get = (params)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT id, no, nama, item, total, created_at FROM transaction where created_at = ? ORDER BY id DESC', [ params.created_at],(err,results)=>{
            if (err){
                return reject (err);
            } 
            return resolve (results);
        })
    })
};



module.exports = elyodb;