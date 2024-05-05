import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES
import { ListadoEmpleadoComponent } from './components/listado-empleado/listado-empleado.component';
import { AgregarEditarEmpleadoComponent } from './components/agregar-editar-empleado/agregar-editar-empleado.component';
import { VerEmpleadoComponent } from './components/ver-empleado/ver-empleado.component';
import { IndexComponent } from './modules/global/components/index/index.component';

const routes: Routes = [
  { path:'', redirectTo: 'Home', pathMatch: 'full' },
  { path:'Home', component: IndexComponent },
  { path:'listEmpleados', component: ListadoEmpleadoComponent },
  { path:'crearEmpleado', component: AgregarEditarEmpleadoComponent },
  { path:'verEmpleado/:id', component: VerEmpleadoComponent },
  { path:'editarEmpleado/:id', component: AgregarEditarEmpleadoComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
