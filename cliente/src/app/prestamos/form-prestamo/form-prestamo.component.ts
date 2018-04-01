import { Component, OnInit } from '@angular/core';
import { DbLibroService } from '../../libros/shared/db-libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../../libros/shared/libro';
import * as moment from 'moment'

@Component({
  selector: 'app-form-prestamo',
  templateUrl: './form-prestamo.component.html',
  styleUrls: ['./form-prestamo.component.css']
})
export class FormPrestamoComponent implements OnInit {

  LibroID: number;
  libro: Libro = { id: -1, nombre: '', isbn: '', autores: '', fechaPrestamo: new Date(), finPrestamo: new Date(), prestado: false, prestadoA: '' };
  constructor(private ruta: ActivatedRoute,
    public db_libros: DbLibroService,
    public router: Router) {


  }

  ngOnInit() {

    this.ruta.params
      .subscribe(params => this.LibroID = +params['id']);
    this.db_libros.listarLibros().subscribe(libros => this.libro = libros.find(l => l.id === this.LibroID));


  }

  modificarLibro(prestamistaEditar, tiempo) {

    this.armarLibro(prestamistaEditar, tiempo);
    this.db_libros.upDatePrestamo(this.libro);
    this.db_libros.subscribePrestamo(this.libro);

    window.alert("Libro Agregado Correctamente")
    this.router.navigate(['/biblioTK/libros-prestamo']);

  }

  armarLibro(prestamistaEditar, tiempo: number) {

    let actual = new Date();
    this.libro.fechaPrestamo = actual;
    let suma = new Date()
    this.libro.finPrestamo = this.addMonthsUTC(suma, tiempo);
    this.libro.prestado = true;
    this.libro.prestadoA = prestamistaEditar;


  }

  addMonthsUTC(date, time) {

    var endDateMoment = moment(date); // moment(...) can also be used to parse dates in string format
    endDateMoment.add(time, 'months');
    return endDateMoment.toDate();
  }

}
