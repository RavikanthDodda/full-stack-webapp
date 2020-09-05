package com.dapps.webapp.Services;

import com.dapps.webapp.JpaRepositories.UserRepository;
import com.dapps.webapp.Models.User;
import com.dapps.webapp.Models.Response.UserDetailsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public void addUser(User user) throws Exception {
        user.setPassword(getEncodedPassword(user.getPassword()));
        if(!userRepository.findByEmail(user.getEmail()).isPresent())
            userRepository.save(user);
        else{
            throw new Exception("User with email "+user.getEmail()+" already exists");
        }
    }

    public UserDetailsResponse getUserDetails(String email){
        Optional<User> user = userRepository.findByEmail(email);
        user.orElseThrow(() -> new UsernameNotFoundException("Email not found: "+email));
        User user1 = user.get();
        return new UserDetailsResponse(user1.getId(),user1.getEmail(),user1.getFirstname(), user1.getLastname(),user1.getPhone());
    }

    public User getUser(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        user.orElseThrow(() -> new UsernameNotFoundException("Email not found: " + email));
        return user.get();
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
