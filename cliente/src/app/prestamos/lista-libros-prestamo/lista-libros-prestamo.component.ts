import { Component, OnInit, Output, Input, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbLibroService } from '../../libros/shared/db-libro.service';
import { Libro } from '../../libros/shared/libro';



@Component({
  selector: 'app-lista-libros-prestamo',
  template: '<app-form-prestar [parentCount]="libroseleccionado"></app-form-prestar>',
  templateUrl: './lista-libros-prestamo.component.html',
  styleUrls: ['./lista-libros-prestamo.component.css']
})
export class ListaLibrosPrestamoComponent implements OnInit {

  prestamista: String;
  libros: Libro[];
  libro: Libro;
  time: number;
  person: String;

  constructor(private route: ActivatedRoute, public db_libros: DbLibroService, public router: Router) {

    this.route.params.subscribe(params => {
      this.prestamista = params['name'];
    });

    this.time = 1;

  }

  ngOnInit() {


    this.db_libros.listarLibros()
      .subscribe(libros => this.libros = libros);
  }



  devolver(libro1: Libro) {


    this.libro = libro1;
    this.armarLibro2();
    this.db_libros.upDatePrestamo(this.libro);
    this.db_libros.subscribePrestamo(this.libro);
    
  }

  armarLibro2() {


    this.libro.prestado = false;
    this.libro.prestadoA = '';
    this.libro.fechaPrestamo = new Date();
    this.libro.finPrestamo =
      new Date();
  }



}
