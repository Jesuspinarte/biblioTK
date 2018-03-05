import { Component, OnInit } from '@angular/core';
import { Libro } from '../libros/shared/libro';
import { DbLibroService } from '../libros/shared/db-libro.service';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  aLibro: Libro;
  libros: Libro[];
  constructor( public db_libros: DbLibroService) { }

  ngOnInit() {
    this.libros = this.db_libros.listarLibros();
  }

  submitFunct(nombre,isbn,autores): void {
      if(nombre === "" || isbn === ""|| autores === ""){
      return
  }else{
    this.aLibro= new Libro() ;  
      this.aLibro.id= this.libros.length+1;
      this.aLibro.nombre=nombre;
      this.aLibro.isbn=isbn;
      this.aLibro.autores=autores;
      this.libros.push(this.aLibro);

  }
  console.log(this.aLibro.id);
 }

}


