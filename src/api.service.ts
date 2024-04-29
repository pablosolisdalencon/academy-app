import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'localhost:80/academy-api/academy-api/public/api/v1/empresas/1'; // URL de la API

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
