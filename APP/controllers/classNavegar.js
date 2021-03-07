let classNavegar = {
    login : async()=>{
        //funciones.loadView('./DASHBOARD/views/login/viewLogin.html','root')
        //.then(()=>{
          funciones.loadScript('./view/login.js','root')
            .then(()=>{
              InicializarLogin();
            });
        //})
    },
    programador: async()=>{
        funciones.loadScript('./view/programador.js','root')
        .then(()=>{
            iniciar();
        })        
    },
    inventarios: async()=>{
        funciones.loadView('../DASHBOARD/views/community/inventarios/index.html','root')
        .then(()=>{
            // carga los estilos de la vista
            funciones.loadScript('./DASHBOARD/views/community/inventarios/controller.js','root')
            .then(()=>{
                fcnIniciarVista();
            })
    
        })

    }, 
    dashventas: async()=>{
            funciones.loadScript('./view/dashboard.js','root')
            .then(()=>{
                fcnIniciarVista();
            })        
    },
    cortes: async()=>{
        funciones.loadView('../DASHBOARD/views/community/cortes/index.html','root')
        .then(()=>{
            // carga los estilos de la vista
            funciones.loadScript('./DASHBOARD/views/community/cortes/controller.js','root')
            .then(()=>{
                fcnIniciarVista();
            })        
        })
        
    },
    appVentas: async()=>{
        window.location = '/api/index';
    },
    maparuta: async()=>{
 
    }

}