import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListaService} from '../lista.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  listaService: ListaService;
  personajes: any = null;

  constructor(private listaservicio: ListaService) {

    this.listaService = listaservicio;
   }

  ngOnInit(): void {
    this.personajes = this.listaservicio.getPersonajes();


}
}
