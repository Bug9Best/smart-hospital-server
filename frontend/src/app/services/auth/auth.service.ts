import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export enum StaffRole {
  STAFF,
  DOCTOR
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  path: string = "auth";

  constructor(
    private http: HttpClient
  ) { }

  loginStaff(staff: any) {
    let path = this.baseUrl + "/" + this.path + "/login/staff";
    return this.http.post(path, staff);
  }

}
