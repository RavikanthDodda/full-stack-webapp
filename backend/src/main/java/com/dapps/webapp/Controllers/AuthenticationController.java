package com.dapps.webapp.Controllers;

import com.dapps.webapp.Models.Response.AuthResponse;
import com.dapps.webapp.Models.Requests.AuthRequest;
import com.dapps.webapp.Services.MyUserDetailsService;
import com.dapps.webapp.Utils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    MyUserDetailsService userDetailsService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthRequest authRequest){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        }
        catch (BadCredentialsException e){
           throw new BadCredentialsException("Incorrect username or password",e);
        }
        String jwt = jwtUtil.generateToken(userDetailsService.loadUserByUsername(authRequest.getEmail()));
        return ResponseEntity.ok(new AuthResponse(jwt));
    }


}
