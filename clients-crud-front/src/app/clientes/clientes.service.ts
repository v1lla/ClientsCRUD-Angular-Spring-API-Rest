import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientesService {
  private urlEndpointClients: string = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndpointClients);
  }

  getCliente(id : number) :Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndpointClients}/${id}`);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndpointClients, cliente);
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndpointClients}/${id}`);
  }

  modifyCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${this.urlEndpointClients}/${cliente.id}`,
      cliente
    );
  }


}
