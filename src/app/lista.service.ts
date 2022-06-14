import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  personaje: any = null;
  personajes: any = null;


  constructor(private http: HttpClient) {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
    .subscribe(
      result => {
        this.personajes = result;
      }
    )

  }

    getPersonajes() {
      return this.personajes;
    }

    getPersonajeId(id: number) {
      for (const personaje of this.personajes) {
        if (personaje.id === id) {
          return personaje;
        }
      }
    }

    getPersonaje() {
      return this.personaje;
    }

    setPersonaje(id: number) {
      this.personaje = this.getPersonajeId(id);
    }
  }



