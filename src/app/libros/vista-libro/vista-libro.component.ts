import { Libro } from '../shared/libro';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-libro',
  templateUrl: './vista-libro.component.html',
  styleUrls: ['./vista-libro.component.css']
})
export class VistaLibroComponent implements OnInit {

  LibroID: number;

  @Input() libro: Libro;

  constructor(
    private ruta: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ruta.params
      .subscribe( params => this.LibroID = +params['id'] );
  }

}
