import { Injectable } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:3000/personajes";

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(baseUrl);
  }

  get(id: any): Observable<Personaje> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByname(name: any): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${baseUrl}?name=${name}`);
  }
}
