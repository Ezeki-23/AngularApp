import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../interfaces/empleado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrl: './listado-empleado.component.css',
})

export class ListadoEmpleadoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'correo', 'edad', 'sexo', 'puesto', 'sueldo', 'acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _snackBar: MatSnackBar, 
    private _empleadoService:EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'
  }

  obtenerEmpleados() {

    this.loading = true;
    this._empleadoService.getEmpleados().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    });
  }

  eliminarEmpleado(id: number) {
    this.loading = true;

    this._empleadoService.deleteEmpleado(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerEmpleados();
    });
  }

  mensajeExito() {
    this._snackBar.open('El empleado fue eliminado con éxito', '', {
      duration: 4000,
      horizontalPosition: 'right',
  });
  }

  search:string="";
  apliFiltrado(value: any) {
    this.dataSource.filter=this.search;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
