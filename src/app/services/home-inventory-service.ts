import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HomeInventory } from '../interfaces/HomeInventory';

@Injectable({
    providedIn: 'root'
  })
  export class HomeInventoryService  {
    constructor(private http: HttpClient) {
    }
    getHomeInventoryList(): Observable<HomeInventory[]> {
        return this.http.get<HomeInventory[]>(`${environment.baseUrl}/homeinventory/list`);
      }
  }