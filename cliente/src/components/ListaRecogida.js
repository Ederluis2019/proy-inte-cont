import React from 'react'

const ListaRecogida = () => {
  return (
      <div>
      <h2 className='tit-lis'>Lista Vehiculos Parqueados</h2>
      <table class="table">
  <thead class="thead-dark">
  <tr>
      <th scope="col">#id</th>
      <th scope="col">Fecha Ingreso</th>
      <th scope="col">Hora Ingreso</th>
      <th scope="col">PLaca</th>
      <th scope="col">Propietario</th>
      <th scope="col">Tipo Vehiculo</th>
      <th scope="col">Color Vehiculo</th>
      <th scope="col">Observaciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>04/12/2022</td>
      <td>19:30</td>
      <td>AC18B</td>
      <td>Grupo Integracion</td>
      <td>Motocicleta</td>
      <td>Rojo</td>
      <td>Ninguno</td>
            
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>04/12/2022</td>
      <td>20:30</td>
      <td>FA22C</td>
      <td>Politecnico</td>
      <td>Motocicleta</td>
      <td>Rojo</td>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>04/12/2022</td>
      <td>20:40</td>
      <td>QC17B</td>
      <td>Eder Luis Molina</td>
      <td>Motocicleta</td>
      <td>Rojo</td>
      <td>Ninguno</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
   
  </thead>
  <tbody>
    
   
   
  </tbody>
</table>
    </div>
  )
}

export default ListaRecogida