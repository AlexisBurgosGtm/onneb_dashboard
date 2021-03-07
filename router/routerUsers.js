const express = require('express');
const router = express.Router();
const execute = require('./connection');

// LOGIN
router.post("/login", async(req,res)=>{
	console.log('login solicitado...' + req.body)
	const {app,usuario,pass} = req.body;

	let qr = `SELECT TOKEN,USUARIO,SISTEMA FROM COMMUNITY_USUARIOS WHERE USUARIO='${usuario}' AND CLAVE='${pass}' AND APP='${app}'`
	execute.Query(res,qr);

});


router.post("/qry", async(req,res)=>{
	
	const {host, qry} = req.body;
	
	let con;

	switch (host) {
		case 'ONNE':
			con = {
				user: 'DB_A54053_Respaldobd_admin',
				password: 'Alexis2020',
				server: 'SQL5049.site4now.net',
				database: 'DB_A54053_Respaldobd',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
			};	
			break;
		case 'MERCADOS':
			con = {
				user: 'DB_A6478C_mercadosv2_admin',
				password: 'razors1805',
				server: 'sql5060.site4now.net',
				database: 'DB_A6478C_mercadosv2',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
			};
			break;
		case 'LTJ':
			con = {
				user: 'DB_A6478C_ltjdistribuidores_admin',
				password: 'razors1805',
				server: 'sql5066.site4now.net',
				database: 'DB_A6478C_ltjdistribuidores',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
			};			
			break;
		case 'FARMASALUD':
			con = {
				user: 'DB_A671FA_farmasalud_admin',
				password: 'Celta2005',
				server: 'sql5095.site4now.net',
				database: 'DB_A671FA_farmasalud',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
			};			
			break;
	};
	
	console.dir(con);

	const sql2 = require('mssql');
	try {
		const pool1 = new sql2.ConnectionPool(con, err => {
		  new sql2.Request(pool1)
		  .query(qry, (err, result) => {
			  if(err){
				  res.send(err.message)
			  }else{
				  res.send(result);
			  }					
		  })
		  sql2.close();  
		})
		pool1.on('error', err => {
			console.log('error sql = ' + err);
			sql2.close();
		})
	  } catch (error) {
		res.send('Error al ejecutar la consulta: ' + error)   
	  };

});

module.exports = router;