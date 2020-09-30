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
    inventarios: async()=>{
        funciones.loadView('../DASHBOARD/views/isc/inventarios/index.html','root')
        .then(()=>{
            // carga los estilos de la vista
            funciones.loadScript('./DASHBOARD/views/isc/inventarios/controller.js','root')
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