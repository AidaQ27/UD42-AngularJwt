import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  personaje: any = null;

  constructor(private listaservicio: ListaService) { }

  ngOnInit(): void {
    this.personaje = this.listaservicio.getPersonaje();
  }


}
