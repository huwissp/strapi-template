import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  server = "http://localhost:1337/"
  constructor() { }

  grabContent(type){
    return new Promise((resolve, reject) => {
      fetch(this.server + type).then((data : any) => {
        data.json().then(body => {
          resolve(body)
        })
        
      })
    })
  }

}
