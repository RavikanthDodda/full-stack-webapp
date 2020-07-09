package com.dapps.webapp.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @Size(max = 255)
    @Column(unique = true)
    @NotBlank
    @NotNull
    String email;

    @NotBlank
    @NotNull
    String firstname;

    @NotBlank
    @NotNull
    String lastname;

    @Size(min = 6)
    @NotNull
    String password;

    @NotBlank
    @NotNull
    String phone;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Ad> ads;


    public User() {
    }



    public User(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Ad> getAds() {
        return ads;
    }

    public void setAds(List<Ad> lands) {
        this.ads = lands;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

