package com.demo.clients.crud.back.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.clients.crud.back.entity.Cliente;

public interface IClientService {
	
	public List<Cliente> getClients(); 
	public Cliente saveClient(Cliente cliente);
	public void deleteClient(Long id);
	public Cliente getClientById(Long id);
}
