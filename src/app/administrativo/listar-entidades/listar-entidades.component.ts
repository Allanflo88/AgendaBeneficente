import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';
import { Entidade } from 'src/app/models/entidade';

@Component({
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html',
  styleUrls: ['./listar-entidades.component.css']
})
export class ListarEntidadesComponent implements OnInit {

  entidades: Entidade[]
  constructor(private service: EntidadesService) {
    service.getEntidades().subscribe((res)=>{
       this.entidades = res.filter((item)=>{
         if(item.Ativo){
          return item.Id != "-1";
         }
         else{
           return false;
         }
      })
    });
  }

  ngOnInit() {
  }

}
