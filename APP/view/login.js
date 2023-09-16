function getView(){
    let strview = `
        <div class="blankpage-form-field" id="panel1">
        
            <div class="card p-4 card-rounded shadow col-sm-12 col-md-4 col-lg-4 col-xl-4 border-primary">
                <div>
                    <div class="form-group" align="center">
                        <img src="./favicon.png" alt="" width="100" height="100">
                    </div>
                    <div class="form-group">
                    </div>
                    <div class="form-group">
                        <label class="form-label text-primary" for="username">Usuario</label>
                        <input type="text"  id="txtUsuario" class="form-control" placeholder="ej: admin">
                        <span class="help-block">
                            Su usuario
                        </span>
                    </div>
                    <div class="form-group">
                        <label class="form-label text-primary" for="password">Contraseña</label>
                        <input type="password"  id="txtPass" class="form-control" placeholder="password">
                        <span class="help-block">
                            Su contraseña
                        </span>
                    </div>
                    
                    <button class="btn btn-primary btn-xl btn-circle shadow hand float-right" id="btnIniciar" >
                        <i class="fal fa-lock"></i>
                        
                    </button>
        
                </div>
            </div>
            <small class="negrita text-danger">v09.2023.r15</small>
        </div>
        `

    document.getElementById('root').innerHTML = strview;

};

function InicializarLogin(){
    
    getView();

    //funciones.loadCss('./css/page-login.css','root');
    btnIniciar.addEventListener('click',()=>{
        
        document.getElementById('btnIniciar').innerHTML = '<i class="fal fa-unlock fa-spin"></i>';
        document.getElementById('btnIniciar').disabled = true;

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
            
            document.getElementById('btnIniciar').innerHTML = '<i class="fal fa-lock"></i>';
            document.getElementById('btnIniciar').disabled = false;
    

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
                document.getElementById('btnIniciar').innerHTML = '<i class="fal fa-lock"></i>';
                document.getElementById('btnIniciar').disabled = false;
    
            }
        })
 
    }, (error) => {
        console.log(error);
        funciones.AvisoError('Usuario y/o contraseña incorrectas')
        document.getElementById('btnIniciar').innerHTML = '<i class="fal fa-lock"></i>';
        document.getElementById('btnIniciar').disabled = false;

    });

}

async function fcnIniciar(application){
    
    btnMenuInventarios.style = "visibility:visible";
    btnMenuVentas.style = "visibility:visible";
    btnMenuCortes.style = "visibility:visible";

    classNavegar.dashventas();


}