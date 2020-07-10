package com.dapps.webapp.Utils;

import java.util.List;

public class AdResponse {
    private String place,size,details;

    private List<String> images;

    public AdResponse(String place, String size, String details) {
        this.place = place;
        this.size = size;
        this.details = details;
    }

    public AdResponse() {
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
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
