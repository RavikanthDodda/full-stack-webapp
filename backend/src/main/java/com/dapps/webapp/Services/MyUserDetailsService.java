package com.dapps.webapp.Services;

import com.dapps.webapp.Models.User;
import com.dapps.webapp.Utils.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserService userService;

    @Override
    public CustomUserDetails loadUserByUsername(String email) {
        User user = userService.getUser(email);

        return new CustomUserDetails(user);

    }
}

