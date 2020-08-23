package com.dapps.webapp.Utils;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class AdReqRes {
    private final String  contact, title, details;

    private final List<String> images;

    public AdReqRes(String contact, String title, String details,List<String> images) {
        this.contact = contact;
        this.title = title;
        this.details = details;
        this.images = images;
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
