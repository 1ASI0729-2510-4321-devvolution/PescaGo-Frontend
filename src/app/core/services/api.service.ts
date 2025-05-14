import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, switchMap } from 'rxjs';

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

    getEntrepreneurByUserId(userId: number): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/entrepreneurs`, {
            params: { userId }
        }).pipe(
            map((entrepreneurs) => {
                if (entrepreneurs.length > 0) {
                    return entrepreneurs[0]; // Devuelve el primer entrepreneur
                } else {
                    throw new Error('No se encontró un entrepreneur para este usuario.');
                }
            })
        );
    }

    getCarriers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/carriers`);
    }

    getProcessedCarriers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/carriers`).pipe(
            map((carriers) =>
                carriers.map((carrier) => ({
                    ...carrier,
                    districts: [], // Agregar distritos vacíos
                    selected: false, // Agregar propiedad selected
                }))
            )
        );
    }

    createRequest(request: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/requests`, request);
    }

    getRequestsByEntrepreneurId(entrepreneurId: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/requests`, {
            params: { entrepreneurId }
        });
    }

    createReceipt(receipt: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/receipts`, receipt);
    }

    getHiredServicesByEntrepreneurId(entrepreneurId: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/hiredServices`, {
            params: { entrepreneurId }
        });
    }

    getCarrierByUserId(userId: number): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/carriers`, {
            params: { userId }
        }).pipe(
            map((carriers) => {
                if (carriers.length > 0) {
                    return carriers[0]; // Devuelve el primer entrepreneur
                } else {
                    throw new Error('No se encontró un carrier para este usuario.');
                }
            })
        );
    }

    getCarrierById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/carriers/${id}`).pipe(
            map((carrier) => {
                if (carrier) {
                    return carrier; // Devuelve el carrier encontrado
                } else {
                    throw new Error('No se encontró un carrier con este ID.');
                }
            })
        );
    }

    getEntrepreneurById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/entrepreneurs/${id}`).pipe(
            map((entrepreneur) => {
                if (entrepreneur) {
                    return entrepreneur; // Devuelve el entrepreneur encontrado
                } else {
                    throw new Error('No se encontró un entrepreneur con este ID.');
                }
            })
        );
    }
}
