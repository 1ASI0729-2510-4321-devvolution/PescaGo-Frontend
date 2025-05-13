import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    getCarriers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/carriers`);
    }

    getEntrepreneurs(): Observable<any> {
        return this.http.get(`${this.apiUrl}/entrepreneurs`);
    }

    getRequests(): Observable<any> {
        return this.http.get(`${this.apiUrl}/requests`);
    }

    authenticateUser(email: string, password: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/users`, {
            params: { email, password }
        });
    }
}
