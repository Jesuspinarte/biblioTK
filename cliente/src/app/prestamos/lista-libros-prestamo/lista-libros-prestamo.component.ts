import { Component, OnInit, Output, Input, ViewChild,EventEmitter } from '@angular/core';
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
  libro : Libro;
  time:number;
  person:String;

  constructor(private route: ActivatedRoute, public db_libros: DbLibroService, public router: Router ) {
    
    this.route.params.subscribe(params => {
      this.prestamista = params['name']; 
   });

   this.time = 1;

  }
  
  ngOnInit() {

    this.db_libros.listarLibros()
    .subscribe(libros => this.libros = libros);
  }

  prestar(libro1: Libro){
    this.libro = libro1;
    
 var answer=prompt('Digite el nombre de la persona');
    if(answer !=null)
    {
    this.person = answer;
    this.db_libros.upDatePrestamo(this.libro, this.time,this.person);
    }
    else if(!answer)
    {
    alert('Se necesita el nombre de la persona');
    return false;
    }
else
{
alert('Prestamo Cancelado');
    return false;
}
        
  }

}
