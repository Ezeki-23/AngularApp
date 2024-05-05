import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../../interfaces/empleado';

@Component({
  selector: 'app-ver-empleado',
  templateUrl: './ver-empleado.component.html',
  styleUrl: './ver-empleado.component.css'
})
export class VerEmpleadoComponent implements OnInit {
  id: number;
  empleado!: Empleado;

  constructor(private _empleadoService: EmpleadoService,
    private aRoute: ActivatedRoute) {
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void {
    this.obtenerEmpleado();
  }

  obtenerEmpleado() {
    this._empleadoService.getEmpleado(this.id).subscribe(data => {
      this.empleado = data;
    });
  }

}
