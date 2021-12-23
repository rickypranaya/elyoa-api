const express = require("express");
const exphbs = require("express-handlebars");
const db = require("../db")
const router = express.Router();
var moment = require('moment');

router.get("/",(req,res, next)=>{

    try{
        // res.json({
        //     data : 'hi'
        // });
        res.send('elyo api is up');

    }catch(e){
        console.log(e)
        res.sendStatus(500);
    }
});

router.post("/login", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.login(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'user is not found',
            });
        } else {
            res.json({
                status : 200,
                data : results[0],
                message : 'login success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/transaction_add", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.transaction_add(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/transaction_edit", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.transaction_edit(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/transaction_remove", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.transaction_remove(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/transaction_get", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.transaction_get(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no transaction',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'transaction retireve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/count_packet", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.count_packet(params);   
        res.json({
            status : 200,
            data : results
        });
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/transaction_one", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.transaction_one(params);   
        res.json({
            status : 200,
            data : results[0]
        });
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/expense_add", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.expense_add(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/expense_get", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.expense_get();   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no expense',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'expense retireve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/expense_remove", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.expense_remove(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/expense_edit", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.expense_edit(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});


router.post("/product_add", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.product_add(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/product_get", async (req,res, next)=>{
    let results;

    try
    {
        results = await db.product_get();   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no product',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'product retireve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/product_remove", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.product_remove(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/product_edit", async (req,res, next)=>{
    const params = req.body;

    try{
        let results = await db.product_edit(params);
        res.json({
            status : 200,
            data : results
        });

    }catch(e){
        res.status(500).send(e);
    }
});

router.post("/count_packet", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.count_packet(params);   
        res.json({
            status : 200,
            data : results
        });
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/user_get", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.user_get();   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no user',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'user retireve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/packet_get", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.packet_get(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no packet',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'packet retrieve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});


router.post("/report_get", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.report_get(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no transaction',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'transaction retrieve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/expense_get_monthly", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.expense_get_monthly(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no expense',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'expense retrieve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/search_get", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.search_get(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no transaction',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'transaction retrieve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});


router.post("/expense_search", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.expense_search(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no expense',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'expense retrieve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});

router.post("/product_search", async (req,res, next)=>{
    const params = req.body;
    let results;

    try
    {
        results = await db.product_search(params);   
        if (!results.length){
            res.json({
                status : 400,
                message : 'no product',
            });
        } else {
            res.json({
                status : 200,
                data : results,
                message : 'product retrieve success'
            });
        }
        
    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
});


module.exports = router;