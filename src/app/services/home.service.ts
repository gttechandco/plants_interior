import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:3000/api'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/statistics`);
  }

  getRecentActivities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recent-activities`);
  }
}
