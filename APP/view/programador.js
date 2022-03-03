function getView(){

    let str = `
    <div class="row">
        <div class="col-6">
            
                <select class="form-control" id="cmbHost">
                    <option value="ONNE">ONNE BUSINESS</option>
                    <option value="MERCADOS">MERCADOS EFECTIVOS</option>
                    <option value="LTJ">LTJ DISTRIBUIDORES</option>
                    <option value="DAFER">DAFER</option>
                    <option value="POPULAR">DIST POPULAR</option>
                    <option value="PENIEL">DIST PENIEL</option>
                    <option value="FARMASALUD">FARMASALUD</option>
                    <option value="DISTRIBUIDORAS">DISTRIBUIDORAS</option>
                </select>
            
        </div>
        <div class="col-3">
            <input type="number" id="txtTimeout" value="3000">
        </div>
        <div class="col-3">
                <button class="btn btn-md btn-danger" id="btnqry">
                    <i class="fal fa-bullet"></i>
                    Run
                </button>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-lg-2 col-xl-2 col-md-4 col-sm-4">
            <button class="btn btn-success" id="btnLog">
               
                Log
            </button>
        </div>

        <div class="col-lg-2 col-xl-2 col-md-4 col-sm-4">
            <button class="btn btn-warning" id="btnIndex">
              
                Indexar
            </button>
        </div>       
        <div class="col-lg-2 col-xl-2 col-md-4 col-sm-4">
            <button class="btn btn-danger" id="btnReduce">
               
                Reducir
            </button>
        </div>
        <div class="col-lg-2 col-xl-2 col-md-4 col-sm-4">
            <button class="btn btn-secondary" id="btnSize">
              
                Tamaño
            </button>
        </div>   
        <div class="col-lg-2 col-xl-2 col-md-4 col-sm-4">
            <button class="btn btn-outline-info" id="btnGetUsuarios">
                <i class="fal fa-user"></i>
                Usuarios
            </button>
        </div>       

    </div>
    
    <br><br><br>

    <div class="row">
        <div class="card shadow">
            <textarea class="form-control" id="txtqry"  rows="4" cols="50">
            

            </textarea>
        </div>
    </div>

    <div class="row">        
        <div class="card shadow" id="txtContainer">


        </div>    
    </div>
    
    <button class="btn btn-info btn-circle btn-xl shadow btn-right hand" id="btnSoporte">
        <i class="fal fa-comments"></i>
    </button>

    `

    let modalSoporte = `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalSoporte">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white">
                                Lista de Soporte
                            </h4>
                            <button type="button" class="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                            </button>
                        </div>
                        <div class="modal-body p-0">
                            
                            <div class="table-responsive">
                                <table class="table table-striped table-responsive">
                                    <thead>
                                        <tr>
                                            <td>Token</td>
                                            <td>Motivo</td>
                                            <td>Fecha</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblSoporte">
                                    
                                    </tbody>
                                </table>

                            </div>    

                        </div>
                    </div>
                </div>
            </div> 
    `
    root.innerHTML = str + modalSoporte;

};

function addListeners(){

    
    let btnqry = document.getElementById('btnqry');
    let qry = document.getElementById('txtqry');
    let txtContainer = document.getElementById('txtContainer');


    let btnLog = document.getElementById('btnLog');
    let btnIndex = document.getElementById('btnIndex');
    let btnReduce = document.getElementById('btnReduce');
    let btnSize = document.getElementById('btnSize');

        
    btnSize.addEventListener('click',()=>{
        fcn_SizeDb();
    });

    btnReduce.addEventListener('click',()=>{
        fcn_reduceDb();
    });
    

    btnLog.addEventListener('click',()=>{
        fcn_reduceLog();
    });
    
    btnIndex.addEventListener('click',()=>{
        fcn_indexDb();
    });

    btnqry.addEventListener('click',()=>{
        funciones.Confirmacion('Ejecutar ?')
        .then((value)=>{
            if(value==true){

                runQuery();

            }
        })
    })  


    let btnGetUsuarios = document.getElementById('btnGetUsuarios');
    btnGetUsuarios.addEventListener('click',()=>{
        fcn_getUsuarios();
    })


    let btnSoporte = document.getElementById('btnSoporte');
    btnSoporte.addEventListener('click',()=>{
        $('#modalSoporte').modal('show');
        getListaSoporte();
    });
};


function iniciar(){
    getView();
    addListeners();
};


function runQuery(){

    let qry = document.getElementById('txtqry');
    let cmbHost = document.getElementById('cmbHost');
    let timeout = document.getElementById('txtTimeout').value;

    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    axios.post('/usuarios/qry', {
        host: cmbHost.value,
        qry: qry.value,
        timeout: Number(timeout)
    })
    .then((response) => {
        const data = JSON.stringify(response);
        txtContainer.innerHTML = data;
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};


function getListaSoporte(){

    let container = document.getElementById('tblSoporte');
    container.innerHTML = GlobalLoader;

    let str = '';
    
    axios.post('/usuarios/soporte')
    .then((response) => {
        const data = response.data;        
        data.recordset.map((r)=>{
            str += `<tr>
                        <td>${r.TOKEN}
                            <br>
                            <small class="negrita">Usuario: ${r.USUARIO}</small>
                        </td>
                        <td>${r.MOTIVO}</td>
                        <td>${r.FECHA}
                            <br>
                            <small class="negrita">Hora: ${r.HORA}</small>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-circle btn-md">
                                x
                            </button>
                        </td>
                    </tr>`
        })
        container.innerHTML = str;
    }, (error) => {
        container.innerHTML = error;
    });


}

function fcn_reduceDb(){

   
    let cmbHost = document.getElementById('cmbHost');
    let timeout = document.getElementById('txtTimeout').value;

    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    axios.post('/usuarios/qryreducedb', {
        host: cmbHost.value,
        timeout: Number(timeout)
    })
    .then((response) => {
        const data = JSON.stringify(response);
        txtContainer.innerHTML = data;
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};


function fcn_reduceLog(){

   
    let cmbHost = document.getElementById('cmbHost');
    let timeout = document.getElementById('txtTimeout').value;

    let qry = `DBCC SHRINKFILE (2, 1);`;

    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    axios.post('/usuarios/qry', {
        host: cmbHost.value,
        timeout: Number(timeout),
        qry:qry
    })
    .then((response) => {
        const data = JSON.stringify(response);
        txtContainer.innerHTML = data;
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};

function fcn_indexDb(){

   
    let cmbHost = document.getElementById('cmbHost');
    let timeout = document.getElementById('txtTimeout').value;

    let qry = `DECLARE @TableName varchar(200)
    DECLARE TableCursor CURSOR FOR
    SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_TYPE = 'BASE TABLE'
    OPEN TableCursor
    FETCH NEXT FROM TableCursor INTO @TableName
    WHILE @@FETCH_STATUS = 0
    BEGIN
    PRINT 'Reindexando ' + @TableName
    DBCC DBREINDEX (@TableName)
    FETCH NEXT FROM TableCursor INTO @TableName
    END
    CLOSE TableCursor
    DEALLOCATE TableCursor`;

    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    axios.post('/usuarios/qry', {
        host: cmbHost.value,
        timeout: Number(timeout),
        qry:qry
    })
    .then((response) => {
        const data = JSON.stringify(response);
        txtContainer.innerHTML = data;
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};

function fcn_SizeDb(){

   
    let cmbHost = document.getElementById('cmbHost');
    let timeout = document.getElementById('txtTimeout').value;

    let qry = `exec sp_spaceused`;

    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    axios.post('/usuarios/qry', {
        host: cmbHost.value,
        timeout: Number(timeout),
        qry:qry
    })
    .then((response) => {
        const data = JSON.stringify(response);
        //response.map(()=>{})
        console.log(response);
        txtContainer.innerHTML = JSON.stringify(response.data.recordset[0]);
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};


function fcn_getUsuarios(){

    let cmbHost = document.getElementById('cmbHost');
    let timeout = document.getElementById('txtTimeout').value;

    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    
    axios.post('/usuarios/qry_usuarios', {
        host: cmbHost.value,
        timeout: Number(timeout)
    })
    .then((response) => {
        const data = response.data;

        let st = '';
        
        data.recordset.map((r)=>{
            st += `
                <tr>
                    <td>
                        ${r.NOMBRE} (c:${r.CODUSUARIO})
                        <br>
                        <small class="negrita text-danger">P:${r.PASS}</small>
                        <br>
                        <button class="btn btn-sm btn-warning hand" onclick="funciones.gotoGoogleMaps('${r.LAT}','${r.LONG}')">
                            <i class="fal fa-map"></i>Ubicar
                        </button>
                    </td>
                    <td>
                        ${r.CODDOC}-${r.CORRELATIVO}
                        <br>
                        <small class="negrita text-success">${r.TIPO}</small> 
                        <br>
                        <small class="negrita text-danger">${r.CODSUCURSAL}</small>                    
                    </td>
                    <td>
                        <button class="btn btn-md btn-circle btn-info hand shadow" onclick="getDataUsuario('${r.CODDOC}')">
                            <i class="fal fa-edit"></i>
                        </button>
                    </td>
                </tr>
            `
        })

        let table = `<table class="table table-responsive">
                        <thead class="bg-info text-white">
                            <tr>
                                <td>Usuario</td>
                                <td>Coddoc</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>${st}</tbody>
                    </table>`
        txtContainer.innerHTML = table;
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};

function getDataUsuario(coddoc){

};