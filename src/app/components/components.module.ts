import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditarCComponent } from './editar-c/editar-c.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    EditarCComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    UsuariosComponent,
    EditarCComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
