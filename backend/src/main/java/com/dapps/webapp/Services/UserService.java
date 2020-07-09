package com.dapps.webapp.Services;

import com.dapps.webapp.JpaRepositories.UserRepository;
import com.dapps.webapp.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public void addUser(User user){
        user.setPassword(getEncodedPassword(user.getPassword()));
        userRepository.save(user);
    }

    public Optional<User> getUser(String email){
        return userRepository.findByEmail(email);
    }

    public void updateUser(User user,String email){

        Optional<User> u = userRepository.findByEmail(email);
        if (u.isPresent()) {
            User us = u.get();
            us.setEmail(user.getEmail());
            us.setFirstname(user.getFirstname());
            us.setLastname(user.getLastname());
            userRepository.save(us);
        }

    }

    private String getEncodedPassword(String password){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(password);
    }
}
