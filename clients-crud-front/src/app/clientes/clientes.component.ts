import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientList: Cliente[];

  constructor(private clienteService: ClientesService) {}

  ngOnInit() {
    this.clienteService
      .getClientes()
      .subscribe((clientes) => (this.clientList = clientes));
  }

  eliminarCliente(id: number) {
    swal
      .fire({
        title: '¿Estás seguro?',
        text: 'No podrás deshacer esta acción',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero eliminarlo',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.clienteService.deleteCliente(id).subscribe({
            next: (data) => {
              this.clienteService
                .getClientes()
                .subscribe((clientes) => (this.clientList = clientes));

              swal.fire(
                'Eliminado',
                'El cliente ha sido eliminado con exito',
                'success'
              );
            },
          });
        }
      });
  }
}
