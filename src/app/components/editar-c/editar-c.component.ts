import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-c',
  templateUrl: './editar-c.component.html',
  styleUrls: ['./editar-c.component.css']
})
export class EditarCComponent {

  constructor(private ruta: ActivatedRoute){}

  // Simular un entorno de datos


  // Variable para recibir el parametro enviado desde vistafull
  cate='';
  info = new Array();
  cadena = "";

  // Evento ngOnInit -> Cargar pagina
  // Al cargar la pagina se recibira el valor enviado desde vistafull
  ngOnInit(){
    this.cate = this.ruta.snapshot.params['id'];
    this.cadena =  this.ruta.snapshot.params['datos'];
    this.info = JSON.parse(this.cadena);
  }
}
