package com.dapps.webapp.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Ad {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @NotNull
    String size;
    @NotBlank
    String place;
    @NotBlank
    String details;
    @ManyToOne @JoinColumn(name = "USER_ID")
    User user;

    @OneToMany(mappedBy = "ad",cascade = CascadeType.ALL)
    List<Image> images;

    protected  Ad() {
    }

    public Ad(String size, String place, String details, List<Image> images) {
        this.size = size;
        this.place = place;
        this.details = details;
        this.images = images;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
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

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
}
