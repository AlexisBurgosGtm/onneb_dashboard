
if (window.location.protocol.indexOf('https') == 0){
  var el = document.createElement('meta')
  el.setAttribute('http-equiv', 'Content-Security-Policy')
  el.setAttribute('content', 'upgrade-insecure-requests')
  document.head.append(el)
}

var socket = io();

let btnMenuInventarios = document.getElementById('btnMenuInventarios');
let btnMenuVentas = document.getElementById('btnMenuVentas');
let btnMenuCortes = document.getElementById('btnMenuCortes');


btnMenuInventarios.style = "visibility:hidden";
btnMenuVentas.style = "visibility:hidden";
btnMenuCortes.style = "visibility:hidden";

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

          // LISTENER DE CORTES
          btnMenuCortes.addEventListener('click',()=>{
            classNavegar.cortes();
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
    //alert('Notification API not supported!');
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


