import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class DbLibroService {

  // IDs reciclados
  ids: number[] = [];

  libros: Libro[] = [];
  url_libros = 'http://localhost:8080/libros';
  constructor( private http: HttpClient) { }

  listarLibros(): Observable<Libro[]> {
    return ( this.http.get<Libro[]>( this.url_libros) );
  }

  getIDs(): number[] {
    return ( this.ids );
  }

  add(id,nombre, isbn, autores) : boolean
  {
    if (nombre === "" || isbn === "" || autores === "") {
      return false;
    } else {
      var add_lib = new Libro();

     
      add_lib.id = id;
      add_lib.nombre = nombre;
      add_lib.isbn = isbn;
      add_lib.autores = autores;
      
      this.addLibro(add_lib)
      .subscribe(libro => this.libros.push(libro));
   
      return true;
    }
  }

  addLibro (lib: Libro): Observable<Libro> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json','Authorization': 'my-auth-token'})};
    return this.http.post<Libro>(this.url_libros, lib, httpOptions)
  }
  
}


