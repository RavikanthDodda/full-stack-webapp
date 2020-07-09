package com.dapps.webapp.JpaRepositories;

import com.dapps.webapp.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface UserRepository extends CrudRepository<User,Long> {

    Optional<User> findByEmail(String email);



}