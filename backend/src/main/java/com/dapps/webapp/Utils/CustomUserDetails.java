package com.dapps.webapp.Utils;

import com.dapps.webapp.Models.User;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;

public class CustomUserDetails implements org.springframework.security.core.userdetails.UserDetails {

    private String email;
    private String password;

    public CustomUserDetails(User user) {
        email = user.getEmail();
        password = user.getPassword();

    }

    public CustomUserDetails(String email, String password) {
        this.email = email;
        this.password = password;

    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
