package com.dapps.webapp.Models;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @NotNull
    String url;

    @ManyToOne @JoinColumn(name = "ad_id",referencedColumnName = "id")
    Ad ad;

    public Image(@NotNull String url, Ad ad) {
        this.url = url;
        this.ad = ad;
    }

    public Image() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Ad getAd() {
        return ad;
    }

    public void setAd(Ad ad) {
        this.ad = ad;
    }
}
