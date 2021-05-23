import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo : string;

  constructor(private clienteService : ClientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargaCliente();
  }

  createCliente(){

    this.clienteService.createCliente(this.cliente).subscribe( cliente => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo cliente', `Cliente ${cliente.name} creado con exito`, 'success');
      }
    )
  }

  modificarCliente() {
    this.clienteService
      .modifyCliente(this.cliente)
      .subscribe( cliente => {
          this.router.navigate(['/clientes']);
          swal.fire('Cliente modificado', `El cliente ${cliente.name} ha sido modificado con exito`, 'success');
        },
      );
  }

  cargaCliente(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.clienteService.getCliente(id).subscribe(
            (cliente) =>{
              this.cliente = cliente;
              this.titulo = "Modificación del cliente: " + cliente.name + " " + cliente.surname;
            }
            
          )
        }else{
          this.titulo = "Creación de cliente";
        }
      }
    )
  }

}
