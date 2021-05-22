import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientesService {

  private urlEndpointGetClients : string = 'http://localhost:8080/api/clients';

  constructor( private http : HttpClient) { }


  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndpointGetClients);
  }
  
}
