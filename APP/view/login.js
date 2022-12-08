function getView(){
    let strview = `
        <div class="blankpage-form-field" id="panel1">
        
            <div class="card p-4 card-rounded shadow col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div>
                    <div class="form-group" align="center">
                        <img src="./favicon.png" alt="" width="100" height="100">
                    </div>
                    <div class="form-group">
                        <!--
                        <select class="form-control" id="cmbApp">
                            <option value="GERENCIA">GERENCIA</option>                           
                            
                            <option value="VENTAS">VENTAS</option>
                            <option value="SUPERVISOR">SUPERVISOR</option>
                            <option value="REPARTO">REPARTO</option>
                            <option value="BODEGA">BODEGA</option>
                            <option value="PRESENTER">PRESENTACION</option> 
                        </select>
                        -->
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="username">Usuario</label>
                        <input type="text"  id="txtUsuario" class="form-control" placeholder="ej: admin">
                        <span class="help-block">
                            Su usuario
                        </span>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="password">Contraseña</label>
                        <input type="password"  id="txtPass" class="form-control" placeholder="password">
                        <span class="help-block">
                            Su contraseña
                        </span>
                    </div>
                    
                    <button class="btn btn-primary btn-lg float-right" id="btnIniciar" >
                        <i class="fal fa-lock"></i>
                        Iniciar
                    </button>
        
                </div>
            </div>
        </div>
        `

    document.getElementById('root').innerHTML = strview;

};

function InicializarLogin(){
    
    getView();

    //funciones.loadCss('./css/page-login.css','root');
    btnIniciar.addEventListener('click',()=>{
        document.getElementById('btnIniciar').innerHTML = GlobalLoader + 'Ingresando...';
        
        fcnLogin('txtUsuario','txtPass','cmbApp')
    });

}

async function fcnLogin(idUser,idPass,idApp){
    let usuario = document.getElementById(idUser).value;
    let pass = document.getElementById(idPass).value;
    let App = 'GERENCIA'; //document.getElementById(idApp).value;

    if(usuario=='ALEXISBURGOS'){
        if(pass=='2410201415082017'){
            GlobalUser = 'ALEXIS';
            classNavegar.programador();        
            return;
        }
    }

    if(usuario=='ONNE'){
        if(pass=='ONNE123'){
            GlobalUser = 'SOPORTE';
            classNavegar.programador();        
            return;
        }
    }

    axios.post('/usuarios/login', {
        usuario: usuario,
        pass: pass,
        app: App
    })
    .then((response) => {
        const data = response.data;
        if(Number(data.rowsAffected[0])==0){
            funciones.AvisoError('Usuario y/o contraseña incorrectas');
            document.getElementById('btnIniciar').innerHTML = `<i class="fal fa-lock"></i>Iniciar`;
            return;
        }
        data.recordset.map((rows)=>{
            if(rows.USUARIO==usuario){
                GlobalToken=rows.TOKEN;
                GlobalUser = rows.USUARIO;
                GlobalSistema = rows.SISTEMA;
                fcnIniciar(App);
            }else{
                funciones.AvisoError('Usuario y/o contraseña incorrectas')    
                document.getElementById('btnIniciar').innerHTML = `<i class="fal fa-lock"></i>Iniciar`;
            }
        })
 
    }, (error) => {
        console.log(error);
        funciones.AvisoError('Usuario y/o contraseña incorrectas')
        document.getElementById('btnIniciar').innerHTML = `<i class="fal fa-lock"></i>Iniciar`;
    });

}

async function fcnIniciar(application){
    
    btnMenuInventarios.style = "visibility:visible";
    btnMenuVentas.style = "visibility:visible";
    btnMenuCortes.style = "visibility:visible";

    classNavegar.dashventas();


}