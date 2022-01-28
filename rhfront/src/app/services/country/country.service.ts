import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }
  listCo():Observable<any>{
    return this.http.get<any>('http://localhost:8081/country/listCo');
  }
  listRegion():Observable<any>{
    return this.http.get<any>('http://localhost:8081/country/listRegion');
  }
  createOrUpdate(form:any):Observable<any>{
    return this.http.post<any>('http://localhost:8081/country/createOrUpdate',form);
  }
  deleteCo(form:any):Observable<any>{
    return this.http.post<any>('http://localhost:8081/country/deleteCo',form);
  }
}
