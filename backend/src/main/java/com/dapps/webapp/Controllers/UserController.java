package com.dapps.webapp.Controllers;

import com.dapps.webapp.Services.UserService;
import com.dapps.webapp.Utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(allowCredentials = "true")
@RestController
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    JwtUtil jwtUtil;


    @GetMapping("/user")
    public ResponseEntity<?> getUserDetails(@RequestHeader String Cookie){
        String email = jwtUtil.getUsernameFromToken(Cookie.substring(4));
        return ResponseEntity.ok(userService.getUserDetails(email));
    }
}
