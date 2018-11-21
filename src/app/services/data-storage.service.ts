import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  
  localStorage
  constructor() {
    this.localStorage = window.sessionStorage;
  }
  
  setItem(title, item){
    this.localStorage.setItem(title, item);
  }

  getItem(title){
    return this.localStorage.getItem(title);
  }
}
