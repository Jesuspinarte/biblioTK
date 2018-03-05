import { DbLibroService } from './libros/shared/db-libro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaLibroComponent } from './libros/lista-libro/lista-libro.component';
import { VistaLibroComponent } from './libros/vista-libro/vista-libro.component';
import { EditarLibroComponent } from './libros/editar-libro/editar-libro.component';
import { AddLibroComponent } from './libros/add-libro/add-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibroComponent,
    VistaLibroComponent,
    EditarLibroComponent,
    AddLibroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DbLibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
