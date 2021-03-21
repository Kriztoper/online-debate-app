import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statement } from './statement';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class StatementService {
    private apiServiceUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getStatements(): Observable<Statement[]> {
        return this.http.get<Statement[]>(`${this.apiServiceUrl}/statement/all`);
    }
}