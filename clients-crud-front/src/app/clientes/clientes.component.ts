import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientList: Cliente[];
  modal: boolean = false;
  clientToModifyCreate: Cliente = new Cliente('', '', '', '');

  constructor(private clienteService: ClientesService) {}

  ngOnInit() {
    this.clienteService
      .getClientes()
      .subscribe((clientes) => (this.clientList = clientes));
  }

  createCliente(){
    
    this.clientToModifyCreate.name = (<HTMLInputElement>document.getElementById('inputClientName')).value;
    this.clientToModifyCreate.surname = (<HTMLInputElement>document.getElementById('inputClientSurname')).value;
    this.clientToModifyCreate.phone = (<HTMLInputElement>document.getElementById('inputClientPhone')).value;

    this.clienteService.createCliente(this.clientToModifyCreate).subscribe({
      next: (data) => {
        this.clienteService
        .getClientes()
        .subscribe((clientes) => (this.clientList = clientes));

        this.openModal();
      }
    })
  }

  modificarCrearCliente(){
    if(this.clientToModifyCreate.id != null){
      this.modificarCliente();
    }
    else{
      this.createCliente();
    }
  }

  eliminarCliente(id: number) {
    this.clienteService.deleteCliente(id).subscribe({
      next: (data) => {
        this.clienteService
          .getClientes()
          .subscribe((clientes) => (this.clientList = clientes));
      },
    });
  }

  modificarCliente() {
    
    this.clientToModifyCreate.name = (<HTMLInputElement>document.getElementById('inputClientName')).value;
    this.clientToModifyCreate.surname = (<HTMLInputElement>document.getElementById('inputClientSurname')).value;
    this.clientToModifyCreate.phone = (<HTMLInputElement>document.getElementById('inputClientPhone')).value;

    this.clienteService
      .modifyCliente(this.clientToModifyCreate.id, this.clientToModifyCreate)
      .subscribe({
        next: (data) => {
          this.clienteService
            .getClientes()
            .subscribe((clientes) => (this.clientList = clientes));

            this.openModal();
        },
      });
  }

  openModal(cliente?: Cliente) {
    if (this.modal) {
      document.getElementById('myModal').style.display = 'none';
      this.modal = false;

      this.clientToModifyCreate.id = null;
      this.clientToModifyCreate.name = "";
      this.clientToModifyCreate.surname = "";
      this.clientToModifyCreate.phone = "";
      this.clientToModifyCreate.createAt = "";


    } else {
      document.getElementById('myModal').style.display = 'block';
      this.modal = true;
      if (cliente != null) {
        this.clientToModifyCreate.id = cliente.id;
        this.clientToModifyCreate.name = cliente.name;
        this.clientToModifyCreate.surname = cliente.surname;
        this.clientToModifyCreate.phone = cliente.phone;
        this.clientToModifyCreate.createAt = cliente.createAt;
      }else{
        this.clientToModifyCreate.id = null;
        this.clientToModifyCreate.name = "";
        this.clientToModifyCreate.surname = "";
        this.clientToModifyCreate.phone = "";
        this.clientToModifyCreate.createAt = "";
      }
    }
  }
}
