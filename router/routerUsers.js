const express = require('express');
const router = express.Router();
const execute = require('./connection');

let con;

// LOGIN
router.post("/soporte", async(req,res)=>{

	const {} = req.body;

	let qr = `SELECT TOKEN, USUARIO, HORA, FECHA, MOTIVO, TELEFONO FROM SOPORTE_CLIENTES WHERE ST='PENDIENTE';`
	execute.Query(res,qr);

});


// LOGIN
router.post("/login", async(req,res)=>{
	console.log('login solicitado...' + req.body)
	const {app,usuario,pass} = req.body;

	let qr = `SELECT TOKEN,USUARIO,SISTEMA FROM COMMUNITY_USUARIOS WHERE USUARIO='${usuario}' AND CLAVE='${pass}' AND APP='${app}'`
	execute.Query(res,qr);

});


router.post("/qry", async(req,res)=>{
	
	const {host, qry, timeout} = req.body;
	
	getConnection(host,timeout);
	
	
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

router.post("/qryreducedb", async(req,res)=>{
	
	const {host, timeout} = req.body;
	
	let db = '';

	getConnection(host,timeout);

	let qry = `
	DBCC SHRINKDATABASE (${db},25);
	`;

	//console.log(qry);

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

router.post("/qry_usuarios", async(req,res)=>{
	
	const {host, timeout} = req.body;
	
	let qry = `
		SELECT ID,CODSUCURSAL,CODUSUARIO,NOMBRE,PASS,LAT,LONG,CODDOC,CORRELATIVO,TIPO FROM ME_USUARIOS ORDER BY CODSUCURSAL,TIPO
	`

	getConnection(host,timeout);
	
	
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


function getConnection(host,timeout){

	
	switch (host) {
		case 'ONNE':
			con = {
				user: 'DB_A54053_Respaldobd_admin',
				password: 'Alexis2020',
				server: 'SQL5049.site4now.net',
				database: 'DB_A54053_Respaldobd',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
			};	
			break;
		case 'MERCADOS':
			con = {
				user: 'DB_A6478C_mercadosv2_admin',
				password: 'razors1805',
				server: 'sql5060.site4now.net',
				database: 'DB_A6478C_mercadosv2',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
			};
			break;
		case 'LTJ':
			con = {
				user: 'DB_A6478C_ltjdistribuidores_admin',
				password: 'razors1805',
				server: 'sql5066.site4now.net',
				database: 'DB_A6478C_ltjdistribuidores',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
			};			
			break;
		case 'FARMASALUD':
			con = {
				user: 'DB_A671FA_farmasalud_admin',
				password: 'Celta2005',
				server: 'sql5095.site4now.net',
				database: 'DB_A671FA_farmasalud',
				pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
			};			
			break;
		case 'DISTRIBUIDORAS':
				con = {
					user: 'db_a6478c_prueba_admin',
					password: 'razors1805',
					server: 'sql5079.site4now.net',
					database: 'db_a6478c_prueba',
					pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
				};			
				break;
		case 'DAFER':
					con = {
						user: 'db_a6478c_dafer_admin',
						password: 'razors1805',
						server: 'sql5064.site4now.net',
						database: 'db_a6478c_dafer',
						pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
					};	
		case 'POPULAR':
					con = {
							user: 'DB_A6478C_digitadoresremotos_admin',
							password: 'razors1805',
							server: 'sql5068.site4now.net',
							database: 'DB_A6478C_digitadoresremotos',
							pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
					};
		case 'PENIEL':
						con = {
							user: 'db_a6478c_distpeniel_admin',
							password: 'razors1805',
							server: 'sql5064.site4now.net',
							database: 'db_a6478c_distpeniel',
							pool: {	max: 100,	min: 0,	idleTimeoutMillis: timeout}
						};	
	};

};


module.exports = router;