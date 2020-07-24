package com.dapps.webapp.Models;

import com.dapps.webapp.Utils.AdReqRes;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Ad {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @NotNull
    String title;
    @NotBlank
    String contact;
    @NotBlank
    String details;
    @ManyToOne @JoinColumn(name = "USER_ID")
    User user;

    @OneToMany(mappedBy = "ad",cascade = CascadeType.ALL)
    List<Image> images;

    public   Ad() {
    }

    public Ad(String title, String contact, String details, List<Image> images) {
        this.title = title;
        this.contact = contact;
        this.details = details;
        this.images = images;
    }

    public Ad(AdReqRes adReqRes) {
        this.title = adReqRes.getTitle();
        this.contact = adReqRes.getContact();
        this.details = adReqRes.getDetails();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
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
