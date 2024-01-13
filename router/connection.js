﻿const configx = {
	user: 'DB_A54053_Respaldobd_admin',
	password: 'Alexis2020',
	server: 'SQL5049.site4now.net',
	database: 'DB_A54053_Respaldobd',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};

const config = {
	user: 'db_a6478c_onnebsync_admin',
	password: 'razors1805',
	server: 'sql5052.site4now.net',
	database: 'db_a6478c_onnebsync',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};


const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		console.log('ejecutando consulta... ');		
		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					res.send(err.message)
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
		  })
		} catch (error) {
		  res.send('Error al ejecutar la consulta: ' + error)   
		  sql.close();
		}
	},
	QueryNoSend : (res,sqlqry)=>{
		//const sql = require('mssql')
		console.log('ejecutando consulta... ');	
		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {				
				if(err){
					res.send(err.message)
				}else{
					res.send('Ejecución exitosa');
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
		  })
		} catch (error) {
		  res.send('Error al ejecutar la consulta: ' + error)   
		  sql.close();
		}
	},
	start:()=>{
		console.log('intentando iniciar la conexión...')
		//const sql = require('mssql')
		try {
			sql.connect(config).then(()=>{sql.close();})
			console.log('primera conexion exitosa...');
		} catch (error) {
			console.log('primera conexion fallo: ' & error);
		}
	}
}

module.exports = execute;

