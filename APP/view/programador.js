function getView(){

    let str = `
    <div class="row">
        <div class="col-6">
            
                <select class="form-control" id="cmbHost">
                    <option value="ONNE">ONNE BUSINESS</option>
                    <option value="MERCADOS">MERCADOS EFECTIVOS</option>
                    <option value="LTJ">LTJ DISTRIBUIDORES</option>
                    <option value="FARMASALUD">FARMASALUD</option>
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
        <div class="col-3">
            <button class="btn btn-success" id="btnLog">
                <i class="fal fa-power"></i>
                Reducir Log
            </button>
        </div>

        <div class="col-3">
            <button class="btn btn-warning" id="btnIndex">
                <i class="fal fa-check"></i>
                Indexar Tablas
            </button>
        </div>       
        <div class="col-3">
            <button class="btn btn-danger" id="btnReduce">
                <i class="fal fa-sync"></i>
                Reducir Db
            </button>
        </div>
        <div class="col-3">
            <button class="btn btn-secondary" id="btnSize">
                <i class="fal fa-list"></i>
                Tamaño DB
            </button>
        </div>       

    </div>
    <br><br><br>
    <div class="row">
        <div class="card shadow">
            <textarea class="form-control" id="txtqry"  rows="4" cols="50">
            
            </textarea>
        </div>
        
        <br><br>
        
        <div class="card shadow" id="txtContainer">
        </div>    
    </div>
    
    `
    root.innerHTML = str;

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
        txtContainer.innerHTML = data;
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};