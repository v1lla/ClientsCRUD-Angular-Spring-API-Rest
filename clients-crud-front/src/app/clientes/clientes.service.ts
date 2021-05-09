import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';

@Injectable()
export class ClientesService {

  constructor() { }

  clientList : Cliente[] =  [
    {id: 1234, name: "Adrian", surname: "Villaseco Soto", phone: "696332173", createAt: "10-05-2021"},
    {id: 3333, name: "Pedro", surname: "Rodriguez", phone: "12345123", createAt: "10-05-2021"},
    {id: 4444, name: "Romero", surname: "Fernandez", phone: "12312321", createAt: "10-05-2021"},
    {id: 6232, name: "Damian", surname: "Sanchez", phone: "33434343", createAt: "10-05-2021"},
    {id: 1231, name: "Sergio", surname: "Lopez Lopez", phone: "23232323", createAt: "10-05-2021"},
    {id: 6121, name: "David", surname: "Blanco Gutierrez", phone: "123213121", createAt: "10-05-2021"}
  ];


  getClientes(): Observable<Cliente[]> {
    return of(this.clientList);
  }
}
