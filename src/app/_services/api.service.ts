import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../config/BASE_URL';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  getAllData(url: string): Observable<any>{
    return this.http.get(BASE_URL.api_url + url)
  }

  saveData(url: string ,data: Object) :Observable<any> {
    return this.http.post(BASE_URL.api_url + url, data)
  }

  updateData(url: string, data: any) : Observable<any>{
    return this.http.put(BASE_URL.api_url + url, data)
  }

  deleteData(url: string ) : Observable<any> {
    return this.http.delete(BASE_URL.api_url + url)
  }
}
