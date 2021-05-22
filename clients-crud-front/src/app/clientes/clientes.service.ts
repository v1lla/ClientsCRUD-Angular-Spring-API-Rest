import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientesService {

  private urlEndpointGetClients : string = 'http://localhost:8080/api/clients';
  private urlEndpointEditDeleteClient : string = 'http://localhost:8080/api/client/';
  private urlEndpointCreateClient : string = 'http://localhost:8080/api/client';

  constructor( private http : HttpClient) { }


  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndpointGetClients);
  }

  createCliente(cliente : Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpointCreateClient, cliente);
  }
  
  deleteCliente(id : number): Observable<Cliente> {
      return this.http.delete<Cliente>(this.urlEndpointEditDeleteClient + id);
  }

  modifyCliente(id: number, cliente : Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(this.urlEndpointEditDeleteClient + id, cliente);
  }
}
