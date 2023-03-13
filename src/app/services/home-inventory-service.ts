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
    createHome(home: HomeInventory): Observable<Object> {
      return this.http.post(`${environment.baseUrl}/homeinventory/create`, home);
    }
    updateHome(inventoryId: number, home: HomeInventory): Observable<Object> {
      return this.http.put(`${environment.baseUrl}/homeinventory/`+inventoryId+`/update`, home);
    }
    delteHome(inventoryId: number): Observable<Object> {
      return this.http.delete(`${environment.baseUrl}/homeinventory/`+inventoryId+`/delete`);
    }
    getHomeInventoryById(id: number): Observable<HomeInventory> {
      return this.http.get<HomeInventory>(`${environment.baseUrl}/homeinventory/`+id);
  }
  }