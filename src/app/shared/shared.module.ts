import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Angular 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';

// Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    HttpClientModule,
    MatInputModule,
    MatCommonModule,
    MatNativeDateModule,
    MatToolbarModule,
    FormsModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    SpinnerComponent,
    MatProgressSpinnerModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    HttpClientModule,
    MatInputModule,
    MatCommonModule,
    MatNativeDateModule,
    MatToolbarModule,
    FormsModule,
  ],
})
export class SharedModule { }
