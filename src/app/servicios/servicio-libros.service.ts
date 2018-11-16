import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro'

@Injectable({
  providedIn: 'root'
})
export class ServicioLibrosService {

  libros: Libro[];
  constructor() { 
    this.libros = [];
  }

  agregar(unLibro: Libro){
    this.libros.push(unLibro);
    console.log('Soy el servicio agregando el libro',unLibro);
    console.log(this.libros);
  }

  getLibros(): Libro[]{
    return this.libros;
  }
}
