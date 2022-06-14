import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent implements OnInit {

  personaje: Personaje = {
    id: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
  };
  submitted = false;


  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
  }

  savePersonaje(): void {
    const data = {
      name: this.personaje.name,
      status: this.personaje.status,
      species: this.personaje.species,
      gender: this.personaje.gender,
      origin: this.personaje.origin,
      location: this.personaje.location,
      image: this.personaje.image,
    };

    this.personajeService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newPersonaje(): void {
    this.submitted = false;
    this.personaje = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',

    };
  }

}
