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
        <div class="col-6">
                <button class="btn btn-md btn-danger" id="btnqry">
                    <i class="fal fa-bullet"></i>
                    Run
                </button>
        </div>
    </div>
    <br><br><br>
    <div class="row">
        <div class="col-6">
            <button class="btn btn-success" id="btnLog">
                <i class="fal fa-power"></i>
                Reducir Log
            </button>
        </div>

        <div class="col-6">
            <button class="btn btn-warning" id="btnIndex">
                <i class="fal fa-check"></i>
                Indexar Tablas
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

    btnLog.addEventListener('click',()=>{
        qry.value = `DBCC SHRINKFILE (2, 1);`
        txtContainer.innerHTML = '';
    });
    
    btnIndex.addEventListener('click',()=>{
        
        qry.value = `DECLARE @TableName varchar(200)
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

        txtContainer.innerHTML = '';
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
    let txtContainer = document.getElementById('txtContainer');
    txtContainer.innerHTML = GlobalLoader;

    axios.post('/usuarios/qry', {
        host: cmbHost.value,
        qry: qry.value
    })
    .then((response) => {
        const data = JSON.stringify(response);
        txtContainer.innerHTML = data;
    }, (error) => {
        txtContainer.innerHTML = error;
    });

};