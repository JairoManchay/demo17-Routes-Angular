import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  datos:any[]=
  [
    {
      id:'1',
      codigo:1,
      descripcion: 'Galletas chokis',
      precioC:10,
      precioV: 15,
      ganancia: 5,
      existencia: 100
    },
    {
      id:'2',
      codigo:2,
      descripcion: 'Mermelada de fresa',
      precioC:65,
      precioV: 80,
      ganancia: 15,
      existencia: 100
    },
    {
      id:'3',
      codigo:3,
      descripcion: 'Aceite',
      precioC:18,
      precioV: 20,
      ganancia: 2,
      existencia: 100
    },
    {
      id:'4',
      codigo:4,
      descripcion: 'Palomitas de maiz',
      precioC:12,
      precioV: 15,
      ganancia: 3,
      existencia: 100
    },
    {
      id:'5',
      codigo:5,
      descripcion: 'Doritos',
      precioC:5,
      precioV: 8,
      ganancia: 3,
      existencia: 100
    }
  ]
}
