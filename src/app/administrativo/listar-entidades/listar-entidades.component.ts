import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html',
  styleUrls: ['./listar-entidades.component.css']
})
export class ListarEntidadesComponent implements OnInit {

  entidades = []
  constructor(private service: EntidadesService) {
    this.entidades = service.getEntidades();
  }

  ngOnInit() {
  }

}
