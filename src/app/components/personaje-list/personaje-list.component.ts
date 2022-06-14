import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajeService } from 'src/app/services/personaje.service';


@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css']
})
export class PersonajeListComponent implements OnInit {

  personajes?: Personaje[];
  currentPersonaje: Personaje = {};
  currentIndex = -1;
  name = '';

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
    this.retrievePersonajes();
  }

  retrievePersonajes(): void {
    this.personajeService.getAll()
    .subscribe(
      data => {
        this.personajes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }

    )
  }

  refreshList(): void {
    this.retrievePersonajes();
    this.currentPersonaje = {};
    this.currentIndex = -1;
  }

  setActivePersonaje(personaje: Personaje, index: number): void {
    this.currentPersonaje = personaje;
    this.currentIndex = index;
  }

  removeAllPersonajes(): void {
    this.personajeService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      });
  }

  searchName(): void {
    this.currentPersonaje = {};
    this.currentIndex = -1;

    this.personajeService.findByname(this.name)
    .subscribe(
      data => {
        this.personajes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  

}
