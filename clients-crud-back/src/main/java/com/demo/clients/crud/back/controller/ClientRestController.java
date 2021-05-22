package com.demo.clients.crud.back.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.demo.clients.crud.back.entity.Cliente;
import com.demo.clients.crud.back.services.IClientService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "http://localhost:4200" })
public class ClientRestController {

	@Autowired
	IClientService clientService;

	@GetMapping("/clients")
	public ResponseEntity<List<Cliente>> getClients() {
		try {
			return new ResponseEntity<>(clientService.getClients(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("client/{id}")
	public ResponseEntity<Cliente> getClientById(@PathVariable("id") Long id) {

		try {

			Cliente client = clientService.getClientById(id);

			if (client != null) {
				return new ResponseEntity<>(client, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("client/{id}")
	public ResponseEntity<?> deleteClient(@PathVariable("id") Long id) {

		try {
			Cliente client = clientService.getClientById(id);

			if (client != null) {
				clientService.deleteClient(id);
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("client")
	public ResponseEntity<?> createClient(@RequestBody Cliente client) {

		try {
			clientService.createClient(client);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PutMapping("client/{id}")
	public ResponseEntity<?> editClient(@PathVariable("id") Long id, @RequestBody Cliente client) {
		try {
			Cliente clientFound = clientService.getClientById(id);

			if (clientFound != null) {
				clientService.editClient(id, client);
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
