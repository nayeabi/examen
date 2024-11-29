import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificar-edad',
  templateUrl: './verificar-edad.page.html',
  styleUrls: ['./verificar-edad.page.scss'],
})
export class VerificarEdadPage implements OnInit {

  nombre: string = '';
  edad: number = 0;
  mensaje: string = '';

  verificarEdad(){
    if (this.edad < 18){
      this.mensaje = `${this.nombre} eres menor de edad.`;
    } else{
      this.mensaje = `${this.nombre} eres mayor de edad.`;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
