import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlunosProvider {
  private API_URL = 'http://192.168.0.3:3000'

  constructor(public http: Http) {
    
   }


  getAll() {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + '/alunos';
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'alunos/' + id;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}