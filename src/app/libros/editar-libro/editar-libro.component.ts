import { Component, OnInit } from '@angular/core';
import { Libro } from '../shared/libro';
import { ActivatedRoute } from '@angular/router';
import { DbLibroService } from '../shared/db-libro.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  LibroID: number;
  libro: Libro;

  constructor( 
    private ruta: ActivatedRoute,
    public db_libros: DbLibroService
  ) { }

  ngOnInit() {
    this.ruta.params
      .subscribe( params => this.LibroID = +params['id'] );
      this.libro = this.db_libros.listarLibros().find( l => l.id === this.LibroID );
  }

  modificarLibro( nombre: string, isbn: string, autores: string ) {
    if( nombre === "" || isbn === "" || autores === "" ) {
      return ( false );
    } else {
      this.libro.nombre = nombre;
      this.libro.isbn = isbn;
      this.libro.autores = autores;
      nombre = "";
      isbn = "";
      autores = "";
    }
  }

}
