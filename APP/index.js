var socket = io();

//let btnReportes = document.getElementById('btnReportes');
//let btnConfig = document.getElementById('btnConfig');

let btnMenuInventarios = document.getElementById('btnMenuInventarios');
let btnMenuVentas = document.getElementById('btnMenuVentas');
let btnMenuProductos = document.getElementById('btnMenuProductos');
let btnMenuCortes = document.getElementById('btnMenuCortes');
let btnMapa = document.getElementById('btnMenuMapa');

btnMenuInventarios.style = "visibility:hidden";
btnMenuVentas.style = "visibility:hidden";
btnMenuProductos.style = "visibility:hidden";
btnMenuCortes.style = "visibility:hidden";
btnMenuMapa.style = "visibility:hidden";

function InicializarBotonesMenu(){

        //SOLICITA PERMISO PARA NOTIFICACIONES  
        InicializarServiceWorkerNotif();
       
          // CARGA EL LOGIN
          classNavegar.login();

          // LISTENER DE INVENTARIOS  
          btnMenuInventarios.addEventListener('click',()=>{
            classNavegar.inventarios();
          });
          // LISTENER DE VENTAS
          btnMenuVentas.addEventListener('click',()=>{
            classNavegar.dashventas();
          });
          // LISTENER DE ANALISIS DE PRODUCTOS
          btnMenuProductos.addEventListener('click',()=>{
            classNavegar.productos();
          });
          // LISTENER DE CORTES
          btnMenuCortes.addEventListener('click',()=>{
            classNavegar.cortes();
          })
          // LISTENER DE MAPAS
          btnMenuMapa.addEventListener('click',()=>{
            classNavegar.maparuta();
          })
                            
}

function InicializarServiceWorkerNotif(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
   navigator.serviceWorker.register('sw.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(err => 'SW registration failed'));
  };
  
  requestPermission();
}

if ('Notification' in window) {};

function requestPermission() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }
  
  Notification.requestPermission(function (result) {
    //$status.innerText = result;
  });
}

/*
socket.on('orden nueva', function(msg){
    //persistentNotification(msg);
    try {
    
    } catch (error) {
    
    }
    //funciones.NotificacionPersistent(msg,"Nueva Orden generada");
});
*/

InicializarBotonesMenu();


