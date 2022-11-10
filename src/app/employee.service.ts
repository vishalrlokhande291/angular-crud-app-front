import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:9090/api/v1';
  private postURL="http://localhost:9090/api/v1"

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`+'/all');
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.postURL}`+'/add',employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }
}
