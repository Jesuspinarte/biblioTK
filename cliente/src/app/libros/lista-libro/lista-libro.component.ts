import { Component, OnInit } from '@angular/core';
import { Libro } from '../shared/libro';
import { DbLibroService } from '../shared/db-libro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libros: Libro[];
  libro_seleccionado: Libro;
  libro_visible: number = -1;

  constructor(public db_libros: DbLibroService) {
    
   }

  ngOnInit() {
    this.db_libros.listarLibros()
      .subscribe(libros => this.libros = libros);

 
   
  }

  selectLibro(libro: Libro) {
    this.libro_seleccionado = libro;
    this.libro_visible = libro.id;
  }


  eliminarLibro(libro: Libro) {
    this.db_libros.getIDs().push(libro.id);
    this.db_libros.delete(libro);
    
    window.alert(libro.nombre + " eliminado correctamente");
    window.location.reload();
    

  }



}
