package com.dapps.webapp.Models.Response;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class AdReqRes {
    private final String  contact, title, details;
    private final Long id;
    private final List<String> images;

    public AdReqRes(String contact, String title, String details,Long id, List<String> images) {
        this.contact = contact;
        this.title = title;
        this.details = details;
        this.images = images;
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getContact() {
        return contact;
    }


    public String getTitle() {
        return title;
    }


    public String getDetails() {
        return details;
    }


    public List<String> getImages() {
        return images;
    }

}
