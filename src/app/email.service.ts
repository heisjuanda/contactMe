import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailApiService = "https://formspree.io/f/xeqwekbq";

  constructor(private http: HttpClient) { }

  sendEmail(to: string, subjet: string, message: string): Observable<any>{
    return this.http.post<any>(this.emailApiService,{to,subjet,message});
  }
}
