package com.demo.clients.crud.back.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.clients.crud.back.dao.IClientsDao;
import com.demo.clients.crud.back.entity.Cliente;

@Service
public class ClientServiceImpl implements IClientService{

	@Autowired
	private IClientsDao clientsDao;
	
	@Override
	public List<Cliente> getClients() {
		return (List<Cliente>) clientsDao.findAll();
	}

	
}
