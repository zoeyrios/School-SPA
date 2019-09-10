import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Course } from '../app/course';
@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = 'http://localhost:53482/';
  constructor(private _http: HttpClient) { }


  getCourse() {
    const url = `${this.apiUrl}api/course/`;
   return this._http.get(url);
  }
  public createCourse(Usuario: any) {
    const url = `${this.apiUrl}api/course`;
    return this._http.post(url, Usuario);
  }
  public DeleteCourse(id: any) {
    const url = `${this.apiUrl}api/course/${id}`;
    return this._http.delete(url);
  }

  }
