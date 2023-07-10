const express = require('express');
const router = express.Router();

const execute = require('./connection');





router.get("/empresas/all", async(req,res)=>{

	let token = req.query.token;
	let qry = `SELECT EMPNIT,EMPNOMBRE FROM EMPRESAS WHERE TOKEN='${token}' ORDER BY EMPNOMBRE`;
	
	execute.Query(res,qry);

});






module.exports = router;