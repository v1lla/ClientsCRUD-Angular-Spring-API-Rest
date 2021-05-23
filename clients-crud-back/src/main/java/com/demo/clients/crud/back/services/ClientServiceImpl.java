package com.demo.clients.crud.back.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.clients.crud.back.dao.IClientsDao;
import com.demo.clients.crud.back.entity.Cliente;

@Service
public class ClientServiceImpl implements IClientService {

	@Autowired
	private IClientsDao clientsDao;

	@Override
	@Transactional(readOnly = true)
	public List<Cliente> getClients() {
		return (List<Cliente>) clientsDao.findAll();
	}

	@Override
	@Transactional
	public void deleteClient(Long id) {

		clientsDao.deleteById(id);

	}

	@Override
	@Transactional
	public Cliente saveClient(Cliente cliente) {

		return clientsDao.save(cliente);

	}

	@Override
	@Transactional(readOnly = true)
	public Cliente getClientById(Long id) {

		return clientsDao.findById(id).orElseGet(null);

	}

}
