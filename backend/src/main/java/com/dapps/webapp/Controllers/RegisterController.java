package com.dapps.webapp.Controllers;

import com.dapps.webapp.Models.User;
import com.dapps.webapp.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

        @Autowired
        UserService userService;

        @PostMapping("/register")
        public void register(@RequestBody User user){
            userService.addUser(user);
        }


}
