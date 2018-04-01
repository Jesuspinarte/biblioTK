import { DbLibroService } from './libros/shared/db-libro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaLibroComponent } from './libros/lista-libro/lista-libro.component';
import { VistaLibroComponent } from './libros/vista-libro/vista-libro.component';
import { EditarLibroComponent } from './libros/editar-libro/editar-libro.component';
import { AddLibroComponent } from './libros/add-libro/add-libro.component';
import { LoginComponent } from './login/login.component';
import { ListaLibrosPrestamoComponent } from './prestamos/lista-libros-prestamo/lista-libros-prestamo.component';
import { FormPrestamoComponent } from './prestamos/form-prestamo/form-prestamo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaLibroComponent,
    VistaLibroComponent,
    EditarLibroComponent,
    AddLibroComponent,
    LoginComponent,
    ListaLibrosPrestamoComponent,
    FormPrestamoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DbLibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }