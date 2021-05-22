package com.demo.clients.crud.back.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.clients.crud.back.dao.IClientsDao;
import com.demo.clients.crud.back.entity.Cliente;

@Service
public class ClientServiceImpl implements IClientService {

	@Autowired
	private IClientsDao clientsDao;

	@Override
	public List<Cliente> getClients() {
		return (List<Cliente>) clientsDao.findAll();
	}

	@Override
	public void editClient(Long id, Cliente client) {
		
		Cliente clienteAux = clientsDao.findById(id).get();
		if (clienteAux != null) {
			clienteAux.setName(client.getName());
			clienteAux.setPhone(client.getPhone());
			clienteAux.setSurname(client.getSurname());
			clienteAux.setCreateAt(client.getCreateAt());
			clientsDao.save(clienteAux);
		}
		
	}

	@Override
	public void deleteClient(Long id) {

		clientsDao.deleteById(id);

	}

	@Override
	public void createClient(Cliente cliente) {
		
		if(cliente != null)
			if(cliente.getCreateAt()== null) {
				cliente.setCreateAt(new Date());
			}
			clientsDao.save(cliente);

	}

	@Override
	public Cliente getClientById(Long id) {
		
		Optional<Cliente> cliente = clientsDao.findById(id);
		if(cliente.isPresent()) {
			return cliente.get();
		}
		else {
			return null;
		}
		
		

	}

}
