import { Component, OnInit } from '@angular/core';
import { DbLibroService } from '../libros/shared/db-libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = '';
  password = '';

  result: any;
  message: any;
  rol : String;

  constructor( private db_libros: DbLibroService, public router: Router ) { }

  ngOnInit() { }

  /*----------- INICIO LOGIN/LOGOUT ---------*/

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.db_libros.login(this.user, this.password).subscribe(data => {
        this.message = 'Login Ok';
<<<<<<< HEAD
        this.router.navigate(['/biblioTK/lista-libro'])

=======
        //this.router.navigate(['/biblioTK/lista-libro']);
        this.db_libros.getUser().then(result=> this.printRolScreen(result) ).catch(error => console.log(error));
>>>>>>> master
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error); 
      });

  }

  logout() {
    this.db_libros.logout().subscribe(data => {
        this.message = 'Logout Ok';
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error);
      });
  }

  /*----------- FIN LOGIN/LOGOUT ---------*/

  printRolScreen(rol) {
    
    if(rol=='BIBLIOTECARIO')
    this.router.navigate(['/biblioTK/lista-libro']);
    else if(rol=='ENCARGADO_PRESTAMOS')
    this.router.navigate(['/biblioTK/libros-prestamo',{name: this.user}]);

  }
}

   