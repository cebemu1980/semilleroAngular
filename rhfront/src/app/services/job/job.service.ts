import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  listJobs():Observable<any>{
    return this.http.get<any>('http://localhost:8081/job/listJobs');
  }
  findById(id: string):Observable<any>{
    return this.http.get<any>('http://localhost:8081/job/findById/${id}');
  }
  createJobs(form:any):Observable<any>{
    console.log("entro al servicio"+form)
    return this.http.post<any>('http://localhost:8081/job/createJobs',form);
  }
  updateJobs(form:any):Observable<any>{
    return this.http.put<any>('http://localhost:8081/job/updateJobs/${jobs.id}', form);
  }
  deleteById(id: string):Observable<any>{
    return this.http.delete('http://localhost:8081/job/deleteById/${id}');
  }
}
