import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    private baseUrl = environment.baseUrl;
    path: string = '_blank';

    constructor(
        private http: HttpClient
    ) { }

    get getBaseUrl(): string {
        return this.baseUrl + '/' + this.path;
    }

    getAll() {
        return this.http.get(this.getBaseUrl);
    }

    getOne(id: string) {
        return this.http.get(`${this.getBaseUrl}/${id}`);
    }

    create(data: any) {
        return this.http.post(this.getBaseUrl, data);
    }

    update(id: string, data: any) {
        return this.http.put(`${this.getBaseUrl}/${id}`, data);
    }

    delete(id: string) {
        return this.http.delete(`${this.getBaseUrl}/${id}`);
    }

    deleteAll() {
        return this.http.delete(this.getBaseUrl);
    }
}
