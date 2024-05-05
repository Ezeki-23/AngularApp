import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// COMPONENTES 
import { AgregarEditarEmpleadoComponent } from './components/agregar-editar-empleado/agregar-editar-empleado.component';
import { ListadoEmpleadoComponent } from './components/listado-empleado/listado-empleado.component';
import { VerEmpleadoComponent } from './components/ver-empleado/ver-empleado.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// MODULOS
import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './modules/global/components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarEmpleadoComponent,
    ListadoEmpleadoComponent,
    VerEmpleadoComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
