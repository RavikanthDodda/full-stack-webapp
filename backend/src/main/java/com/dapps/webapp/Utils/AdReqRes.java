package com.dapps.webapp.Utils;

import java.util.List;

public class AdReqRes {
    private String contact, title, details;

    private List<String> images;

    public AdReqRes(String contact, String title, String details, List<String> images) {
        this.contact = contact;
        this.title = title;
        this.details = details;
        this.images = images;
    }

    public AdReqRes(String contact, String title, String details) {
        this.contact = contact;
        this.title = title;
        this.details = details;
    }

    public AdReqRes() {
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}
