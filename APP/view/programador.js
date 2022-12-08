function getView(){

    let view = {
        body:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">
                <ul class="nav nav-tabs" id="myTabHome" role="tablist">
                        
                    <li class="nav-item">
                        <a class="nav-link active negrita text-danger" id="tab-inicio" data-toggle="tab" href="#inicio" role="tab" aria-controls="home" aria-selected="true">
                            <i class="fal fa-comments"></i>inicio</a>
                    </li> 
                    <li class="nav-item">
                        <a class="nav-link negrita text-warning" id="tab-soporte" data-toggle="tab" href="#soporte" role="tab" aria-controls="profile" aria-selected="false">
                            <i class="fal fa-chart-pie"></i>soporte</a>
                    </li>    
                    <li class="nav-item">
                        <a class="nav-link negrita text-success" id="tab-mantenimiento" data-toggle="tab" href="#mantenimiento" role="tab" aria-controls="profile" aria-selected="false">
                            <i class="fal fa-chart-pie"></i>mantenimiento</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link negrita text-info" id="tab-vendedores" data-toggle="tab" href="#vendedores" role="tab" aria-controls="home" aria-selected="true">
                            <i class="fal fa-edit"></i>vendedores</a>
                    </li>            
                </ul>
               <div class="tab-content" id="myTabHomeContent">
                  
                   <div class="tab-pane fade  show active" id="inicio" role="tabpanel" aria-labelledby="">
                       ${view.lista_anydesk() + view.modal_nuevo_anydesk()}
                   </div>
                   <div class="tab-pane fade" id="soporte" role="tabpanel" aria-labelledby="">
                        ${view.lista_soporte() + view.modal_detalle_soporte()}
                   </div>
                   <div class="tab-pane fade p-2" id="mantenimiento" role="tabpanel" aria-labelledby="">  
                        ${view.inicio_mantenimientos()}
                   </div>
                   <div class="tab-pane fade" id="vendedores" role="tabpanel" aria-labelledby="">  
        hola mundo
                   </div>
               </div>
               
              
           </div>
       ` 
        },
        lista_anydesk:()=>{
            return `
            <div class="card card-rounded p-2">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="form-group">
                            <label>Escriba para Buscar</label>
                            <input type="text" id="txtBuscarAnydesk" class="form-control" placeholder="Escriba para filtrar...">
                        </div>    
                    </div>    
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <button class="btn btn-circle btn-success shadow btn-xl" id="btnNuevoAnydesk">
                            <i class="fal fa-plus"></i>
                        </button>
                    </div>    
                </div>
                
                <hr class="solid">
    
                <div class="row">
                    <h3 id="lbTotalEquipos">--</h3>
                    <div class="table-responsive">
                        <table class="table table-responsive" id="tblAnydesk">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>Token</td>
                                    <td>Tipo</td>
                                    <td>Anydesk/Clave</td>
                                    <td>Vendedor</td>
                                    <td>Actualizado</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataAnydesk"></tbody>
                        </table>
                    </div>    
                </div>
            </div>
    
        </div>
        
            `
        },
        modal_nuevo_anydesk:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevoAnydesk">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="dropdown-header bg-danger d-flex justify-content-center align-items-center w-100">
                        <h4 class="m-0 text-center color-white">
                            Agregar Nuevo Anydesk
                        </h4>
                        <button type="button" class="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                       
                            <div class="form-group">
                                <label>Token</label>
                                <input type="text" class="form-control" id="txtAnyToken">
                            </div>
                            <div class="form-group">
                                <label>Tipo</label>
                                <select class="form-control" id="cmbAnyTipo">
                                    <option value="SERVER">SERVER</option>
                                    <option value="OPER">OPERADOR</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Nombre de la Sucursal</label>
                                <input type="text" class="form-control" id="txtAnySucursal">
                            </div>
                            <div class="form-group">
                                <label>Acceso Anydesk</label>
                                <input type="text" class="form-control" id="txtAnyAnydesk">
                            </div>
                            <div class="form-group">
                                <label>Clave</label>
                                <input type="text" class="form-control" id="txtAnyPass">
                            </div>
    
                            <div class="form-group">
                                <label>Vendedor</label>
                                <select class="form-control" id="cmbAnyVendedor">
                                    <option value="HUGO">HUGO</option>
                                    <option value="RIGO">RIGO</option>
                                    <option value="ALEXIS">ALEXIS</option>
                                    <option value="OTRO">OTRO</option>
                                </select>
                            </div>
    
                            <br>
                            <div class="row">
                                <div class="col-6">
                                        <button class="btn btn-circle btn-warning hand btn-xl shadow" id="" data-dismiss="modal">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>
                                </div>
                                <div class="col-6">
                                        <button class="btn btn-circle btn-primary hand btn-xl shadow" id="btnAnyGuardar">
                                            <i class="fal fa-save"></i>
                                        </button>
                                </div>                        
                            </div>
                          
    
                    </div>
                </div>
            </div>
        </div> 
            `
        },
        lista_soporte:()=>{
            return `
            <h4 class="">Lista de Solicitudes de Soporte</h4>
            <div class="table-responsive">
                <table class="table table-responsive">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>Token/Fecha</td>
                            <td>Motivo</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody id="tblSoporte">
                    
                    </tbody>
                </table>

            </div>    
            `
        },
        modal_detalle_soporte:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalSoporteRespuesta">
            <div class="modal-dialog modal-dialog-right modal-lg">
                <div class="modal-content">
                    <div class="dropdown-header bg-info d-flex justify-content-center align-items-center w-100">
                        <h4 class="m-0 text-center color-white">
                            Respuesta de Soporte Técnico
                        </h4>
                        <button type="button" class="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body p-2 card card-rounded">
                        <div class="form-group">
                            <label>Escriba la Respuesta de Soporte</label>
                            <textarea class="form-control" rows="4" id="txtRespuestaSoporte" value=''>
                            
                            </textarea>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                    <button class="btn btn-warning btn-circle shadow btn-xl hand" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>
                            </div>
                            

                            <div class="col-6">
                                    <button class="btn btn-primary btn-circle shadow btn-xl hand" id="btnEnviarRespuesta" onclick="sendRespuestaSoporte();">
                                        <i class="fal fa-paper-plane"></i>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
            `
        },
        inicio_mantenimientos:()=>{
            return `
        <br>
        <div class="card card-rounded shadow">
            <div class="card-body">

                <div class="row">
                    <div class="col-6">       
                            <select class="form-control" id="cmbHost">
                                <option value="ONNE">ONNE BUSINESS</option>
                                <option value="MERCADOS">MERCADOS EFECTIVOS</option>
                                <option value="MERCADOSBI">BI MERCADOS EFECTIVOS</option>
                                <option value="LTJ">LTJ DISTRIBUIDORES</option>
                                <option value="FARMASALUD">FARMASALUD</option>
                                <option value="DISTRIBUIDORAS">DISTRIBUIDORAS GENERAL</option>
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

            </div>
        </div>
        
        <hr class="solid">

        <div class="card card-rounded shadow">
            <div class="card-body">
        
                <div class="row">
                    <div class="col-lg-2 col-xl-2 col-md-4 col-sm-4">
                        <button class="btn btn-success" id="btnLog">
                            Reducir Log
                        </button>
                    </div>
                    <div class="col-lg-2 col-xl-2 col-md-4 col-sm-4">
                        <button class="btn btn-warning" id="btnIndex">
                            Indexar Tabla
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

            </div>
        </div>
        
        <br>

        <div class="card card-rounded shadow">
            <div class="card-body">
                <div class="text-info negrita" id="txtContainer">


                </div>        
            </div>
        </div>

        <br>

        <div class="card card-rounded shadow">
            <div class="card-body">
                <h5 class="text-danger negrita">Escribe la Qry:</h5>
                <textarea class="form-control bg-amarillo border-info" id="txtqry"  rows="4" cols="50"></textarea>
                        
            </div>
        </div>      
            `
        }

    };

  


    root.innerHTML = view.body();

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


  


    


    //  anydesk
    let btnNuevoAnydesk = document.getElementById('btnNuevoAnydesk');
    btnNuevoAnydesk.addEventListener('click',()=>{

        document.getElementById('txtAnyAnydesk').value = '';
        document.getElementById('txtAnyPass').value='';

        $('#modalNuevoAnydesk').modal('show');          
            

    });

    let btnAnyGuardar = document.getElementById('btnAnyGuardar');
    btnAnyGuardar.addEventListener('click',()=>{

        let txtAnyToken = document.getElementById('txtAnyToken')
        let txtAnySucursal = document.getElementById('txtAnySucursal');
        let cmbAnyTipo = document.getElementById('cmbAnyTipo');


        let txtAnyAnydesk = document.getElementById('txtAnyAnydesk');
        let txtAnyPass = document.getElementById('txtAnyPass');

        let cmbAnyVendedor = document.getElementById('cmbAnyVendedor');

        funciones.Confirmacion('¿Está seguro que desea Guardar este Nuevo Accesso?')
        .then((value)=>{
            if(value==true){
                
                btnAnyGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
                btnAnyGuardar.disabled = true;

                insert_anydesk(txtAnyToken.value,txtAnySucursal.value,cmbAnyTipo.value,txtAnyAnydesk.value,txtAnyPass.value,cmbAnyVendedor.value)
                .then(()=>{
                    funciones.Aviso('Anydesk Guardar Exitosamente!!');
                    getListadoAnydesk();
                    $('#modalNuevoAnydesk').modal('hide');  
                  
                    btnAnyGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    btnAnyGuardar.disabled = false;
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo Guardar');
                    btnAnyGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    btnAnyGuardar.disabled = false;
                }) 

            }
        })

    });


    let txtBuscarAnydesk = document.getElementById('txtBuscarAnydesk');
    txtBuscarAnydesk.addEventListener('keyup',()=>{
        funciones.FiltrarTabla('tblAnydesk','txtBuscarAnydesk');
    });

    getListadoAnydesk();
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
            let idbtneliminar = `btnEliminar${r.ID.toString()}`;
            str += `<tr class="border-left-0 border-right-0 border-top-0 border-bottom-info">
                        <td>${r.TOKEN}
                            <br>
                            <small class="negrita">Usuario: ${r.USUARIO}</small>
                            <br>
                            <small class="negrita text-danger">${funciones.convertDateNormal(r.FECHA)}</small>
                            <br>
                            <small class="negrita">Hora: ${r.HORA}</small>
                        </td>
                        <td>${r.MOTIVO}
                            <br>
                            <small class="negrita bg-warning">R:// ${r.RESPUESTA}</small>
                        </td>
                        <td>
                            <button class="btn btn-info btn-circle btn-md" onclick="getRespuestaSoporte('${r.ID}','${r.TELEFONO}')">
                                <i class="fal fa-check"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-circle btn-md" id=${idbtneliminar} onclick="sendFinalizarSoporte('${r.ID}','${idbtneliminar}')">
                                <i class="fal fa-trash"></i>
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

function BACKUP_fcn_indexDb(){

   
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

function fcn_indexDb(){

   
    let cmbHost = document.getElementById('cmbHost');
    let timeout = document.getElementById('txtTimeout').value;

    let qry = `
    DECLARE @TableName varchar(200);
    SET @TableName = '${document.getElementById('txtqry').value}';
    DBCC DBREINDEX (@TableName);
    `;

    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    axios.post('/usuarios/qry', {
        host: cmbHost.value,
        timeout: Number(timeout),
        qry:qry
    })
    .then((response) => {
        const data = response.data;
        let msn = 'hola';
        
        console.log(data.rowsAffected[0]);

        msn = 'Filas Afectadas: ' + data.rowsAffected[0];
        //data.map((r)=>{
            //console.log(r);
            //msn += 'Filas Afectadas: ' + r.rowsAffected.toString()
        //})
        txtContainer.innerHTML = msn;
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
        const data = response.data;
        let msn = '';
        data.recordset.map((r)=>{
            msn += `Tamaño: ${r.database_size}, Db: ${r.database_name}; ` 
        })
        
        txtContainer.innerHTML = msn;  //JSON.stringify(response.data.recordset[0]);
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


function getRespuestaSoporte(id,telefono){

    $('#modalSoporteRespuesta').modal('show');
    GlobalSelectedId = id;
    GlobalSelectedTelefono = telefono;

};

function sendRespuestaSoporte(){

    let btnEnviarRespuesta = document.getElementById('btnEnviarRespuesta');
    btnEnviarRespuesta.innerHTML = '<i class="fal fa-paper-plane fa-spin"></i>';
    btnEnviarRespuesta.disabled = true;

    update_respuesta()
    .then(()=>{
        funciones.Aviso('Respuesta enviada exitosamente!!');
        $('#modalSoporteRespuesta').modal('hide');
        document.getElementById('txtRespuestaSoporte').value = 'SN';
        
        btnEnviarRespuesta.innerHTML = '<i class="fal fa-paper-plane"></i>';
        btnEnviarRespuesta.disabled = false;

        getListaSoporte();
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo enviar la respuesta');

        btnEnviarRespuesta.innerHTML = '<i class="fal fa-paper-plane"></i>';
        btnEnviarRespuesta.disabled = false;
    })

};

function update_respuesta(){
    let respuesta = document.getElementById('txtRespuestaSoporte').value || 'SN';
    return new Promise((resolve, reject) => {
        axios.post('/usuarios/soporte_respuesta', {
            id:GlobalSelectedId,
            respuesta:respuesta
        })
        .then((response) => {
            const data = response.data;
            if(Number(data.rowsAffected[0])==0){
                reject();
            }else{
                resolve();
            }
        }, (error) => {
            console.log(error);
            reject();
        });
    });
};


function sendFinalizarSoporte(id,idboton){
    
    GlobalSelectedId = id;

    funciones.Confirmacion('¿Está seguro que desea Finalizar esta solicitud?')
    .then((value)=>{
        if(value==true){
            let btnElim = document.getElementById(idboton);
            btnElim.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
            btnElim.disabled = true;

            update_finalizar()
            .then(()=>{
                funciones.Aviso('Solicitud eliminada con éxito');
                btnElim.innerHTML = '<i class="fal fa-trash"></i>';
                btnElim.disabled = false;
                getListaSoporte();
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo Eliminar la Solicitud');
                btnElim.innerHTML = '<i class="fal fa-trash"></i>';
                btnElim.disabled = false;
            })


        }
    })
}

function update_finalizar(){
   
    return new Promise((resolve, reject) => {
        axios.post('/usuarios/soporte_finalizar', {
            id:GlobalSelectedId
        })
        .then((response) => {
            const data = response.data;
            if(Number(data.rowsAffected[0])==0){
                reject();
            }else{
                resolve();
            }
        }, (error) => {
            console.log(error);
            reject();
        });
    });
};

// LISTADO A(NYDESK

function getListadoAnydesk(){

    let container = document.getElementById('tblDataAnydesk');
    container.innerHTML = GlobalLoader;

    let lbTotalEquipos = document.getElementById('lbTotalEquipos');
    lbTotalEquipos.innerText = '--';

    let str = '';
    let totalequipos = 0;

    axios.post('/usuarios/listado_anydesk')
    .then((response) => {
        const data = response.data;        
        data.recordset.map((r)=>{
            totalequipos += 1;
            let idbtnEliminar = `btnEliminarAnydesk${r.ID.toString()}`;
            let idbtnAct = `btnActAnydesk${r.ID.toString()}`;
            str += `<tr class="border-left-0 border-right-0 border-top-0 border-bottom-info">
                        <td>${r.TOKEN}
                            <br>
                            <small class="negrita">${r.SUCURSAL}</small>
                        </td>
                        <td>${r.TIPO}</td>
                        <td>${r.ANYDESK}
                            <br><small class="negrita">${r.PASS}</small>
                        </td>
                        <td>${r.VENDEDOR}</td>
                        <td>${r.LASTUPDATE.replace('T00:00:00.000Z','')}</td>
                        <td>
                            <button class="btn btn-circle btn-md btn-info shadow hand" id='${idbtnAct}' onclick="update_selected_anydesk('${r.ID}','${idbtnAct}')">
                                <i class="fal fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-circle btn-md btn-danger shadow hand" id='${idbtnEliminar}' onclick="delete_selected_anydesk('${r.ID}','${idbtnEliminar}')">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>`
        })
        container.innerHTML = str;
        lbTotalEquipos.innerText = `Total Equipos: ${totalequipos}` 
    }, (error) => {
        container.innerHTML = error;
        lbTotalEquipos.innerText = '--'
    });


};

function insert_anydesk(token,sucursal,tipo,anydesk,pass,vendedor){
   
    return new Promise((resolve, reject) => {
        axios.post('/usuarios/insert_anydesk', {
            token:token,
            sucursal:sucursal,
            tipo: tipo,
            anydesk: anydesk,
            pass:pass,
            vendedor:vendedor,
            fecha:funciones.getFecha()
        })
        .then((response) => {
            const data = response.data;
            if(Number(data.rowsAffected[0])==0){
                reject();
            }else{
                resolve();
            }
        }, (error) => {
            console.log(error);
            reject();
        });
    });
};


function delete_selected_anydesk(id,idbtn){
    let btnElim = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea Eliminar este Acceso?')
    .then((value)=>{
        if(value==true){

            funciones.Confirmacion('¿Está completamente seguro que desea Eliminar este Acceso?')
            .then((value)=>{
                if(value==true){

                    funciones.solicitarClave()
                    .then((name)=>{

                        if(name==GlobalConfigP){

                        }else{
                            funciones.AvisoError('Clave incorrecta');
                            return;
                        };

                        btnElim.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
                        btnElim.disabled = true;
    
                        delete_anydek(id)
                        .then(()=>{
                            funciones.Aviso('Acceso eliminado exitosamente!!');
                            btnElim.innerHTML = '<i class="fal fa-trash"></i>';
                            btnElim.disabled = false;
    
                            getListadoAnydesk();
    
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo Eliminar este Anydesk');
    
                            btnElim.innerHTML = '<i class="fal fa-trash"></i>';
                            btnElim.disabled = false;
                        })
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo verificar')
                    })
                    
            
                    
                }
            })

        }
    })

};

function delete_anydek(id){
   
    return new Promise((resolve, reject) => {
        axios.post('/usuarios/delete_anydesk', {
            id:id
        })
        .then((response) => {
            const data = response.data;
            if(Number(data.rowsAffected[0])==0){
                reject();
            }else{
                resolve();
            }
        }, (error) => {
            console.log(error);
            reject();
        });
    });
};

function update_selected_anydesk(id,idbtn){
    let btnElim = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea Actualizar la fecha de este Acceso?')
    .then((value)=>{
        if(value==true){

            btnElim.innerHTML = '<i class="fal fa-edit fa-spin"></i>';
            btnElim.disabled = true;

            update_anydesk(id)
            .then(()=>{
                    btnElim.innerHTML = '<i class="fal fa-edit"></i>';
                    btnElim.disabled = false;
                    getListadoAnydesk();
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo actualizar');
                btnElim.innerHTML = '<i class="fal fa-edit"></i>';
                btnElim.disabled = false;
            })
        }
    })

};


function update_anydesk(id){
   
    let lastupdate = funciones.getFecha();

    return new Promise((resolve, reject) => {
        axios.post('/usuarios/update_anydesk', {
           id:id,
           lastupdate:lastupdate
        })
        .then((response) => {
            const data = response.data;
            if(Number(data.rowsAffected[0])==0){
                reject();
            }else{
                resolve();
            }
        }, (error) => {
            console.log(error);
            reject();
        });
    });
};