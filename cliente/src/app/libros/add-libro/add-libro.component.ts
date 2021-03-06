import { Component, OnInit } from '@angular/core';
import { Libro } from '../shared/libro';
import { DbLibroService } from '../shared/db-libro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  aLibro: Libro;
  libros: Libro[];
  constructor(public db_libros: DbLibroService, public router: Router) { }

  ngOnInit() {

    this.db_libros.listarLibros()
      .subscribe(libros => this.libros = libros);
  }

  submitFunct(nombre, isbn, autores): void {

    if (nombre === "" || isbn === "" || autores === "")
      window.alert("Llene todos los campos")

    else {

      this.db_libros.add(nombre, isbn, autores).subscribe();
      window.alert(nombre + " Añadido correctamente");
      this.router.navigate(['/biblioTK/lista-libro']);
    }
  }

}
