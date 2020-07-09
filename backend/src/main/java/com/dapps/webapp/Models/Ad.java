package com.dapps.webapp.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Ad {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @NotNull
    Float size;
    @NotBlank
    String place;
    @NotBlank
    String details;
    @ManyToOne @JoinColumn(name = "USER_EMAIL", referencedColumnName = "email")
    User user;

    @OneToMany(mappedBy = "ad",cascade = CascadeType.ALL)
    List<Image> images;

    protected  Ad() {
    }

    public Ad(Float size, String place, String details) {
        this.size = size;
        this.place = place;
        this.details = details;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Float getSize() {
        return size;
    }

    public void setSize(Float size) {
        this.size = size;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
