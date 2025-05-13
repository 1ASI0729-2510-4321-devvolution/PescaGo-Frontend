import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    authenticateUser(email: string, password: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/users`, {
            params: { email, password }
        });
    }

    registerCarrier(user: any, carrier: any): Observable<any> {
        // Primero crea el usuario, luego el carrier
        return this.http.post(`${this.apiUrl}/users`, user).pipe(
            switchMap((createdUser: any) => {
                carrier.userId = createdUser.id; // Relaciona el carrier con el usuario creado
                return this.http.post(`${this.apiUrl}/carriers`, carrier);
            })
        );
    }

    registerEntrepreneur(user: any, entrepreneur: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/users`, user).pipe(
            switchMap((createdUser: any) => {
                entrepreneur.userId = createdUser.id; // Relaciona el entrepreneur con el usuario creado
                return this.http.post(`${this.apiUrl}/entrepreneurs`, entrepreneur);
            })
        );
    }
}
