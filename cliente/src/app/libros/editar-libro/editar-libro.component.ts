import { Component, OnInit } from '@angular/core';
import { Libro } from '../shared/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { DbLibroService } from '../shared/db-libro.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  LibroID: number;
  libro: Libro = { id: -1, nombre: '', isbn: '', autores: '', fechaPrestamo: new Date(), finPrestamo: new Date(), prestado: false, prestadoA: '' };
  //  libro : Libro;
  constructor(
    private ruta: ActivatedRoute,
    public db_libros: DbLibroService,
    public router: Router
  ) { }

  ngOnInit() {
    this.ruta.params
      .subscribe(params => this.LibroID = +params['id']);
    this.db_libros.listarLibros().subscribe(libros => this.libro = libros.find(l => l.id === this.LibroID));
  }

  modificarLibro(nombre: string, isbn: string, autores: string): void {
    if (nombre === "" || isbn === "" || autores === "") {
      window.alert("Llene todos los campos")
      return ;
    } else {
      this.libro.nombre = nombre;
      this.libro.isbn = isbn;
      this.libro.autores = autores;

      this.db_libros.update(this.libro);

      window.alert(nombre + " actualizado correctamente")
      this.router.navigate(['/biblioTK/lista-libro'])
    }
  }

}
