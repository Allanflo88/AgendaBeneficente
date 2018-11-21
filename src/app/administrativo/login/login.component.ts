import { Component, OnInit, EventEmitter } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email = "";
  pass = "";

  constructor(private service: EntidadesService, private dataStorage: DataStorageService, private router: Router) { }

  onSubmit(f: NgForm){
    let user = this.service.login({
      Email: this.email,
      Password: this.pass
    });
    if(user){
      this.dataStorage.setItem("user", user.Id);
      this.router.navigate(["/feed"]);
    }
    else{
      alert("Login inválido")
    }
  }

}
