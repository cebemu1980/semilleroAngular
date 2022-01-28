import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http:HttpClient) { }
  listRegion():Observable<any>{
    return this.http.get<any>('http://localhost:8081/region/listRegion');
  }
  createOrUpdate(form:any):Observable<any>{
    console.log("entro al servicio");
    return this.http.post<any>('http://localhost:8081/region/createOrUpdate',form);
  }
  deleteById(form:any):Observable<any>{
    console.log("entro al servicio");
    return this.http.post<any>('http://localhost:8081/region/deleteRegion',form);
  }
}
