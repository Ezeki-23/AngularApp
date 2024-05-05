import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../../interfaces/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-empleado',
  templateUrl: './agregar-editar-empleado.component.html',
  styleUrl: './agregar-editar-empleado.component.css',
})
export class AgregarEditarEmpleadoComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = "Registrar";

  constructor(private bf: FormBuilder,
    private _empleadoService: EmpleadoService, 
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.bf.group({
      nombreComp: ['', Validators.required],
      correo: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      puesto: ['', Validators.required],
      sueldo: ['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if(this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerEmpleado(this.id)
    }
  }

  obtenerEmpleado(id: number) {
    this.loading = true;
    this._empleadoService.getEmpleado(id).subscribe(data => {
      this.form.patchValue({
        nombreComp: data.nombreComp,
        correo: data.correo,
        edad: data.edad,
        genero: data.sexo,
        puesto: data.puesto,
        sueldo: data.sueldo,
      })
      this.loading = false;
    })
  }

  crearEditarEmpleado() {
    const empleado: Empleado = {
      nombreComp: this.form.value.nombreComp,
      correo: this.form.value.correo, 
      edad: this.form.value.edad,
      sexo: this.form.value.genero,
      fecha: this.form.value.fecha, 
      puesto: this.form.value.puesto,
      sueldo: this.form.value.sueldo, 
    }

    console.log(empleado)

    if(this.id != 0) {
      empleado.id = this.id;
      this.editarEmpleado(this.id, empleado);
    } else {
      this.agregarEmpleado(empleado);
    }
  }

  editarEmpleado(id: number, empleado: Empleado) {
    this.loading = true; 
    this._empleadoService.updateEmpelado(id, empleado).subscribe(() => {
      this.loading = false; 
      this.mensajeExito('actualizado');
      this.router.navigate(['/listEmpleados']);
    })
  }

  agregarEmpleado(empleado: Empleado) {
    this._empleadoService.addEmpleado(empleado).subscribe(data => {
      this.mensajeExito('registrado');
      this.router.navigate(['/listEmpleados']);
    });
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El empleado fue ${texto} con éxito`, '', {
      duration: 4000,
      horizontalPosition: 'right',
  });
  }

}
