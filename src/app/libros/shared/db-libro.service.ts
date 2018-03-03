import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable()
export class DbLibroService {

  libros: Libro[] = [
    { id: 1, nombre: 'El Quijote', isbn: '100-080', autores: 'Miguel de Cervantes' },
    { id: 2, nombre: 'IT', isbn: '100-110', autores: 'Stephen King' },
    { id: 3, nombre: 'Asesinato en el Orient Express', isbn: '100-230', autores: 'Agatha Christie' },
    { id: 4, nombre: 'Lord of the Rings', isbn: '100-470', autores: 'JRR. Tolkien' },
  ];

  constructor() { }

  listarLibros(): Libro[] {
    return this.libros;
  }

}
