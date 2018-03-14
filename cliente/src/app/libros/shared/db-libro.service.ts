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
    return ( this.http.get<Libro[]>( this.url_libros ) );
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

  update( up_libro: Libro ) : boolean
  {
    if (up_libro.nombre === "" || up_libro.isbn === "" || up_libro.autores === "") {
      return false;
    } else {
      
      this.updateLibro(up_libro)
      .subscribe(libro => this.libros.push(libro));
   
      return true;
    }
  }

  delete( del_libro: Libro ): boolean
  {
    console.log(this.ids.length);
    this.deleteLibro(del_libro)
    .subscribe(libro => this.libros.push(libro));
    return;
  }

  addLibro (lib: Libro): Observable<Libro> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json','Authorization': 'my-auth-token'})};
    return this.http.post<Libro>(this.url_libros, lib, httpOptions);
  }

  updateLibro( libro: Libro ): Observable<Libro> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json','Authorization': 'my-auth-token'})};
    return this.http.put<Libro>(this.url_libros, libro, httpOptions);
  }

  deleteLibro( libro: Libro ): Observable<Libro> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json','Authorization': 'my-auth-token'})};
    return this.http.delete<Libro>( this.url_libros + '/' + libro.id, httpOptions );
    
  }
  
}


