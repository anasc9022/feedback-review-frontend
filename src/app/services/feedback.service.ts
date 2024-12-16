import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  private apiUrl = 'http://localhost:8080/api/feedback';

  constructor(private http: HttpClient) { }

  submitFeedback(rating: number, comment: string): Observable<any> {
    return this.http.post( this.apiUrl, {rating, comment} );
  }

  getApprovedFeedback(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getAllFeedback(userName: string, password: string): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${userName}:${password}`),
    });
    return this.http.get<any[]>(`${this.apiUrl}/admin`, { headers });
  }

  approveFeedback(id: number, username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });
    return this.http.put(`${this.apiUrl}/${id}/approve`, {}, { headers });
  }

  deleteFeedback(id: number, username: string, password: string): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
