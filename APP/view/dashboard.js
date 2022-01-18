function getView(){
    let view = {
        parametros : ()=>{
            return `
            <div class="row">
                <div id="panel-2" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>
                        Parámetros
                        </h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                        </div>
                    </div>
                    <div class="panel-container show">
                        <div class="panel-content">
                            
                            <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                
                                    <div class="form-group" id="empresasContainer">
                                    <label>Empresa:</label>
                                    <select id="cmbEmpresas" class="form-control border-primary shadow">

                                    </select>
                                    </div>
                                
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
                                <div class="form-group">
                                <label>Mes y Año</label>
                                <div class="input-group">
                                    <select class="form-control" id="cmbMeses">
                                    
                                    </select>
                                    <select class="form-control" id="cmbAnio">
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    </select>
                                    
                                </div>
                                </div>                            
                            </div>
                            </div>    

                        </div>
                    </div>
                </div>
                </div>
            `
        },
        resumenes:()=>{
            return `
            <div class="row">
                <div id="panel-2" class="panel col-12">
                    <div class="panel-hdr">
                    <h2>
                        Resúmenes
                    </h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                        </div>
                    </div>
                    <div class="panel-container show">
                        <div class="panel-content">

                        <div class="row">
                            <div class="col-sm-4 col-xl-3">
                                <div class="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500" id="txtPromedioDia">
                                            Q0.00
                                        </h3>
                                        <small class="m-0 l-h-n">Promedio Diario Ventas</small>
                                    </div>
                                    <i class="fal fa-gem position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4" style="font-size: 6rem;"></i>
                                </div>
                            </div>

                            <div class="col-sm-4 col-xl-3">
                                <div class="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500" id="txtTotalMes">
                                            Q0.00
                                        </h3>
                                        <small class="m-0 l-h-n">Total Ventas del Mes</small>
                                    </div>
                                    <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                                </div>
                            </div>

                            <div class="col-sm-4 col-xl-3">
                                <div class="p-3 bg-success-400 rounded overflow-hidden position-relative text-white mb-g">
                                    <div class="">
                                        <h3 class="display-4 d-block l-h-n m-0 fw-500" id="txtTotalUtilidades">
                                            Q0.00
                                        </h3>
                                        <small class="m-0 l-h-n">Total Ganancias del Mes</small>
                                    </div>
                                    <i class="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4" style="font-size: 6rem;"></i>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            `
        },
        tabladias:()=>{
            return `
            <div class="row">
                <div id="panel-3" class="panel col-12">
                    <div class="panel-hdr">
                    <h2>
                    Ventas por Día y Sucursal
                    </h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                        </div>
                    </div>
                    <div class="panel-container show">
                        <div class="panel-content">
                
                                    <div class="table table-responsive">
                                        <table class="table table-striped table-hovered" id="tblListado">
                                        <thead class="bg-info text-white">
                                            <tr>
                                            <td>Dia</td>
                                            <td>TotalCosto</td>
                                            <td>TotalVentas</td>
                                            <td>Utilidad</td>
                                            <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblVentas">
                                    
                
                                        </tbody>
                                        </table>
                                    </div>
                            
                        </div>
                </div>
                </div>
            </div>
            `
        },
        graficadias:()=>{
            return `
            <div class="row">
                <div id="panel-4" class="panel col-12">
                    <div class="panel-hdr">
                    <h2>Ventas por Día</h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                        </div>
                    </div>
                    <div class="panel-container show">
                        <div class="panel-content">
                            <canvas id="barChart"></canvas>
                        </div>
                    </div>
                </div>  
            </div>
            `
        },
        modaldia:()=>{
            return `
            <div class="modal fade" id="modalDatosVenta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                        <div class="modal-header">
                            
                            <button type="button" class="btn bg-info btn-round btn-lg text-white col-12" data-dismiss="modal">
                                Aceptar
                            </button>
                          
                        </div>
                      <div class="modal-body">
                            <div class="form-group">
                                <label>Escriba para Buscar</label>
                                <input type="text" class="bg-amarillo" id="txtBuscarFactura">
                            </div>
                          <div class="col-12">
                              <h3 id="txtDiaSeleccionado">Ventas del Día</h3>
                              <div class="table-responsive">
                                <table class="table table-striped table-bordered" id="tblFacturas">
                                  <thead>
                                    <tr>
                                      <td>Serie</td>
                                      <td>Correlativo</td>
                                      <td>Cliente</td>
                                      <td>Costo</td>
                                      <td>Precio</td>
                                      <td>RecargoTarjeta</td>
                                      <td>Importe</td>
                                      <td>Utilidad</td>
                                    </tr>
                                  </thead>
                                  <tbody id="tblVentasDia">

                                  </tbody>
                                </table>
                              </div>      
                              <hr class="sidebar-divider">
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn bg-info btn-round btn-lg text-white col-12" data-dismiss="modal">
                                Aceptar
                          </button>
                      </div>
                  </div>
              </div>
            </div>
            `
        }
    };

    document.getElementById('root').innerHTML = view.parametros() + 
                                                view.resumenes() + 
                                                view.tabladias() + 
                                                view.graficadias() + 
                                                view.modaldia();

};

async function fcnIniciarVista(){

    getView();


    let cmbEmpresas = document.getElementById('cmbEmpresas');
    let cmbMeses = document.getElementById('cmbMeses');
    let cmbAnio = document.getElementById('cmbAnio');
    
    cmbMeses.innerHTML = funciones.ComboMeses();
    cmbAnio.innerHTML = funciones.ComboAnio();
    
    let f = new Date();
    cmbAnio.value = f.getFullYear().toString();
    cmbMeses.value = f.getMonth()+1;


    cmbEmpresas.addEventListener('change',async()=>{
        GlobalEmpnit = cmbEmpresas.value;
        await getVentasDia('tblVentas','cmbMeses','cmbAnio');    
    });

    cmbMeses.addEventListener('change',async()=>{
        await getVentasDia('tblVentas','cmbMeses','cmbAnio');    
    })

    cmbAnio.addEventListener('change',async()=>{
        await getVentasDia('tblVentas','cmbMeses','cmbAnio');    
    })

        
    await getEmpresas();
    
    let txtBuscarFactura = document.getElementById('txtBuscarFactura');
    txtBuscarFactura.addEventListener('keyup',()=>{
        funciones.FiltrarTabla('tblFacturas','txtBuscarFactura');
    })
};  


async function getEmpresas(){
    let str = ``;
    axios.get('/reportscommunity/empresas?token=' + GlobalToken)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<option value=${rows.EMPNIT}>${rows.EMPRESA}</option>`;
        })
        let empresas = document.getElementById('cmbEmpresas');
        empresas.innerHTML= str;
        GlobalEmpnit = empresas.value;
        getVentasDia('tblVentas','cmbMeses','cmbAnio');

    }, (error) => {
        console.log(error);
    });
};

async function getVentasDia(idcontenedor,idMes,idAnio){
    
    let container = document.getElementById(idcontenedor);

    let mes = document.getElementById(idMes).value;
    let anio = document.getElementById(idAnio).value;
    
    let totalventa =0;
    let totalUtilidad = 0;
    let diasprom = 0;
    
    container.innerHTML = GlobalLoader;
    let str = ``;

    //para la grafica
    let labels = [];
    let dataset = [];

    axios.get(`/reportscommunity/ventasmesdia?token=${GlobalToken}&mes=${mes}&anio=${anio}&empnit=${GlobalEmpnit}`)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            labels.push(rows.DIA.toString());
            dataset.push(rows.TOTALVENTAS);
            //suma el total venta
            totalventa += Number(rows.TOTALVENTAS);
            diasprom += 1;
            totalUtilidad += Number(rows.UTILIDAD);
            str += `<tr>
                        <td>${rows.DIA}</td>
                        <td>${funciones.setMoneda(rows.TOTALCOSTO,'Q')}</td>
                        <td>${funciones.setMoneda(rows.TOTALVENTAS,'Q')}</td>
                        <td>${funciones.setMoneda(rows.UTILIDAD,'Q')}</td>
                        <td>
                            <button class="btn btn-icon btn-success btn-circle" onclick="getDataVentas('${rows.EMPNIT}','${rows.DIA}');">
                                <li class="fal fa-tag"></li>
                            </button>
                        </td>
                    </tr>`;
        })
        container.innerHTML = str;
        document.getElementById('txtTotalMes').innerText=funciones.setMoneda(totalventa,'Q');
        document.getElementById('txtTotalUtilidades').innerText=funciones.setMoneda(totalUtilidad,'Q');
        document.getElementById('txtPromedioDia').innerText=funciones.setMoneda((totalventa/diasprom),'Q');

    // CARGANDO DATOS DE LA GRAFICA
    var datagraf = {
            labels: labels,
            datasets: [{
              label: 'Q',
              data: dataset,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              fill: false
            }]
          };

    var options = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
    };

    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {type: 'bar', data: datagraf, options: options});

    }, (error) => {
        //console.log(error);
        container.innerHTML = `<h1 class="text-danger">Error al cargar datos.. ${error}</h1>`
    });
};

async function getDataVentas(empnit,dia){
    
    $('#modalDatosVenta').modal('show');

    document.getElementById('txtDiaSeleccionado').innerText = `Ventas del día ${dia}`;
    
    let container = document.getElementById('tblVentasDia');

    //container.innerHTML = '<h3 class="text-danger">Cargando ventas del día...</h3>';
    container.innerHTML ='<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    let str ='';
    axios.get(`/reportscommunity/ventasdia?token=${GlobalToken}&empnit=${empnit}&dia=${dia}`)
    .then((response) => {
        const data = response.data;        
        data.recordset.map((rows)=>{
            str += `<tr ondblclick="openFEL('${rows.FELID}')">
                        <td>${rows.CODDOC}</td>
                        <td>${rows.CORRELATIVO}</td>                     
                        <td>${rows.CLIENTE}</td>
                        <td>${funciones.setMoneda(rows.COSTO,'Q')}</td>
                        <td>${funciones.setMoneda(rows.PRECIO,'Q')}</td>
                        <td>${funciones.setMoneda(rows.RECARGO,'Q')}</td>
                        <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                        <td>${funciones.setMoneda(rows.UTILIDAD,'Q')}</td>                        
                    </tr>`;
        })
        container.innerHTML = str;
    }, (error) => {
        container.innerHTML = `<h5 class="text-danger">Error al cargar datos.. ${error}</h5>`
    });

};

function openFEL(uddi){
    window.open('https://report.feel.com.gt/ingfacereport/ingfacereport_documento?uuid='+ uddi.toString())
}