package com.demo.clients.crud.back.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.clients.crud.back.entity.Cliente;

public interface IClientService {
	
	public List<Cliente> getClients(); 
}
