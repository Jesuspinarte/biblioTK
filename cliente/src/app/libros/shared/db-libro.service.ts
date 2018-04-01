import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Libro } from './libro';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DbLibroService {

  
  // IDs reciclados
  ids: number[] = [];

  libros: Libro[] = [];
  url_libros = 'http://localhost:8080/libros';

  user = "";
  pass = "";

  constructor(private http: HttpClient) 
  {  
  }

  /*----------- INICIO LOGIN/LOGOUT ---------*/

  login(username: string, password: string) {
    this.user = username;
    this.pass = password;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: headers,
      params: params,
      withCredentials: true
    });
  }

  logout() {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }

  /*----------- FIN LOGIN/LOGOUT ---------*/

  /*----------- Recuperar Usuario ---------*/
    getUser(): Promise<any> {
      const headers = new HttpHeaders();
      const params = new HttpParams()
        .set('username', this.user)
        .set('password', this.pass);
      return (this.http.get('http://localhost:8080/api/current-user', {
        headers: headers,
        params: params,
        withCredentials: true})
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError));
  }

    private extractData(res: Response) {
      var obj = JSON.parse(JSON.stringify(res));
     return (obj.rol);
  }

  getUsername(): Promise<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .set('username', this.user)
      .set('password', this.pass);
    return (this.http.get('http://localhost:8080/api/current-user', {
      headers: headers,
      params: params,
      withCredentials: true})
        .toPromise()
        .then(this.extractDataUsername)
        .catch(this.handleError));
}

  private extractDataUsername(res: Response) {
    var obj = JSON.parse(JSON.stringify(res));
   return (obj.username);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}
  /*----------- FIN Recuperar Usuario ---------*/


  listarLibros(): Observable<Libro[]> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .set('username', this.user)
      .set('password', this.pass);
    return (this.http.get<Libro[]>(this.url_libros, {
      headers: headers,
      params: params,
      withCredentials: true
    }));
  }

  getIDs(): number[] {
    return (this.ids);
  }

  add( nombre, isbn, autores ): Observable<Libro[]> {
    if (nombre === "" || isbn === "" || autores === "") {
      return ;
    } else {

      var add_lib = new Libro();

      add_lib.nombre = nombre;
      add_lib.isbn = isbn;
      add_lib.autores = autores;

      return this.http.post<Libro[]>(this.url_libros, add_lib, {
        withCredentials: true
      });

    }
  }

  update(up_libro: Libro): boolean {
    if (up_libro.nombre === "" || up_libro.isbn === "" || up_libro.autores === "") {
      return false;
    } else {

      this.updateLibro(up_libro)
        .subscribe(libro => this.libros.push(libro));

      return true;
    }
  }

  subscribePrestamo(up_libro: Libro) {
      this.upDatePrestamo(up_libro)
        .subscribe(libro => this.libros.push(libro));
  }

  delete(del_libro: Libro): boolean {
    console.log(this.ids.length);
    this.deleteLibro(del_libro)
      .subscribe(libro => this.libros.push(libro));
    return;
  }

  updateLibro(libro: Libro): Observable<Libro> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }) };
    return this.http.put<Libro>(this.url_libros, libro, {
      withCredentials: true
    });
  }

  upDatePrestamo(libro: Libro): Observable<Libro>{
   
    const headers = new HttpHeaders();
    const params = new HttpParams()
      .set('username', this.user)
      .set('password', this.pass);
    return (this.http.put<Libro>('http://localhost:8080/libros/prestamos',libro, {
      headers: headers,
      params: params,
      withCredentials: true
    }));
      
      
  }

  deleteLibro(libro: Libro): Observable<Libro> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }) };
    return this.http.delete<Libro>(this.url_libros + '/' + libro.id, {
      withCredentials: true
    });

  }

}


