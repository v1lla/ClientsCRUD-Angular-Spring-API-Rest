package com.demo.clients.crud.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.clients.crud.back.entity.Cliente;
import com.demo.clients.crud.back.services.IClientService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:4200"})
public class ClientRestController {

	@Autowired
	IClientService clientService;
	
	@GetMapping("/clients")
	public List<Cliente> getClients(){
		return clientService.getClients();
	}
}
