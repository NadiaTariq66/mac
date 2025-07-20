import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private baseUrl = 'https://api.exmachinacap.com';
//  private baseUrl = 'http://localhost:8080/exmachina/api';

  constructor(private http: HttpClient) {}

  postData(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/intellisearch/counts`, payload);
  }
}
