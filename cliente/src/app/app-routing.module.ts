import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLibroComponent } from './libros/lista-libro/lista-libro.component';
import { EditarLibroComponent } from './libros/editar-libro/editar-libro.component';
import { AddLibroComponent } from './libros/add-libro/add-libro.component';


const routes: Routes = [
  { path: 'biblioTK/lista-libro', component: ListaLibroComponent },
  { path: 'biblioTK/editar-libro/:id', component: EditarLibroComponent },
  { path: 'biblioTK/anadir-libro', component: AddLibroComponent }, //temp
  { path: '', pathMatch: 'full', redirectTo: 'biblioTK/lista-libro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
