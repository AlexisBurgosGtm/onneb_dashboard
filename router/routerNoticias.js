const express = require('express');
const router = express.Router();
const execute = require('./connection');

// LOGIN
router.get("/", async(req,res)=>{
	
	const {token} = req.query;

	let qr = ``
	execute.Query(res,qr);

});

module.exports = router;