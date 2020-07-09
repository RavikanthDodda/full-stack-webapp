package com.dapps.webapp.Services;

import com.dapps.webapp.JpaRepositories.ImageRepository;
import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Models.Image;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ImageService {

    @Autowired
    ImageRepository imageRepository;

    public List<Image> getImagesByAd(Ad ad){
        return imageRepository.findByAd(ad);
    }


}
