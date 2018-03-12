import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro';


@Injectable()
export class DbLibroService {

  // IDs reciclados
  ids: number[] = [];

  libros: Libro[] = [];

  constructor( private http: HttpClient) { }

  listarLibros(): Observable<Libro[]> {
    return ( this.http.get<Libro[]>('http://localhost:8080/libros') );
  }

  getIDs(): number[] {
    return ( this.ids );
  }

}
