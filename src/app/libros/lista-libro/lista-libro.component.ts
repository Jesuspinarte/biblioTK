import { Component, OnInit } from '@angular/core';
import { Libro } from '../shared/libro';
import { DbLibroService } from '../shared/db-libro.service';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libros: Libro[];
  libro_seleccionado: Libro;

  constructor( public db_libros: DbLibroService ) { }

  ngOnInit() {
    this.libros = this.db_libros.listarLibros();
  }

  selectLibro( libro: Libro ){
    this.libro_seleccionado = libro;
  }

  eliminarLibro( libro: Libro ){
    let index = this.db_libros.listarLibros().indexOf(libro, 0);
    if (index > -1) {
      this.db_libros.listarLibros().splice(index, 1);
    }
  }


}
