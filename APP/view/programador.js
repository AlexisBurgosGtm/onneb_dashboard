function getView(){

    let str = `
    <div class="row">
        <div class="form-group">
            <label>Host:</label>
            <select class="form-control" id="cmbHost">
                <option value="ONNE">ONNE BUSINESS</option>
                <option value="MERCADOS">MERCADOS EFECTIVOS</option>
                <option value="LTJ">LTJ DISTRIBUIDORES</option>
                <option value="FARMASALUD">FARMASALUD</option>
            </select>
        </div>
    </div>

    <div class="row">
        <button class="btn btn-success" id="btnLog">
            <i class="fal fa-power"></i>
            Reducir Log
        </button>
        <br>
        <button class="btn btn-warning" id="btnIndex">
            <i class="fal fa-check"></i>
            Indexar Tablas
        </button>
    </div>

    <div class="row">
        <div class="align-right">
            <button class="btn btn-md btn-danger" id="btnqry">
                <i class="fal fa-bullet"></i>
                Run
            </button>
        </div>
        <div class="card">
            <textarea class="form-control" id="txtqry">
            
            </textarea>
        </div>
    </div>
    `
    root.innerHTML = str;

};

function addListeners(){

    
    let btnqry = document.getElementById('btnqry');
    let qry = document.getElementById('txtqry')

    let btnLog = document.getElementById('btnLog');
    let btnIndex = document.getElementById('btnIndex');

    btnLog.addEventListener('click',()=>{
        qry.value = `DBCC SHRINKFILE (2, 1);`
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

    axios.post('/usuarios/qry', {
        host: cmbHost.value,
        qry: qry.value
    })
    .then((response) => {
        const data = response.data;
        qry.value = data;
    }, (error) => {
        qry.value = error;
    });

};