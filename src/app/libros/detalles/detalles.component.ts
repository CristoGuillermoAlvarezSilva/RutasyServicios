import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  rutaActiva: ActivatedRoute;
  constructor(laRutaActiva: ActivatedRoute) { 
    this.rutaActiva = laRutaActiva;
  }

  ngOnInit() {
    console.log(this.rutaActiva.snapshot.params);
  }

}
