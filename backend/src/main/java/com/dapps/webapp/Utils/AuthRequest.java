package com.dapps.webapp.Utils;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class AuthRequest {

    @NotNull
    private String email;

    @Size(min = 6)
    @NotNull
    private String password;

    public AuthRequest() {
    }

    public AuthRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
