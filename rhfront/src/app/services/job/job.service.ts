import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  listJobs():Observable<any>{
    return this.http.get<any>("");
  }
}
