import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EditarCComponent } from './components/editar-c/editar-c.component';

const routes: Routes = [
  {
    path:'',
    component: UsuariosComponent
  },
  {
    path:'editar/:datos/:id',
    component: EditarCComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
