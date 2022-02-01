import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }
  listCou():Observable<any>{
    return this.http.get<any>('http://localhost:8081/location/listCou');
  }
  listLoc():Observable<any>{
    return this.http.get<any>('http://localhost:8081/location/listLoc');
  }
  createOrUpdate(form:any):Observable<any>{
    return this.http.post<any>('http://localhost:8081/location/createOrUpdate',form);
  }
  deleteLoc(form:any):Observable<any>{
    return this.http.post<any>('http://localhost:8081/location/deleteLoc',form);
  }
}
