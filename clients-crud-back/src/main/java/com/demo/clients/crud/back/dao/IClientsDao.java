package com.demo.clients.crud.back.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.clients.crud.back.entity.Cliente;

@Repository
public interface IClientsDao extends CrudRepository<Cliente, Long>{

}
