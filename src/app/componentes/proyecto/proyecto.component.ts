import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService) { }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio-data;
    });
 

  }

}
