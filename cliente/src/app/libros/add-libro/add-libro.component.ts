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
    //var id= this.pickid();

   /*if(!this.db_libros.add(id,nombre, isbn, autores))
    window.alert("Llene todos los campos")
   
    else{
   
      
      window.alert(nombre + " Añadido correctamente")
      this.router.navigate(['/biblioTK/lista-libro']);
    }
 }

 pickid(){
  if (this.db_libros.getIDs().length > 0) {
    return this.db_libros.getIDs().pop();
  } else {
   return this.libros.length + 1;
   }
   */
 }

}
