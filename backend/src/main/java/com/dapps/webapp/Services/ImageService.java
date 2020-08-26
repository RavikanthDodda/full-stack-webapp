package com.dapps.webapp.Services;

import com.dapps.webapp.JpaRepositories.ImageRepository;
import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Models.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {

    @Autowired
    ImageRepository imageRepository;

    public List<Image> getImagesByAd(Ad ad){
        return imageRepository.findByAd(ad);
    }

    public void save(Image image){
        imageRepository.save(image);
    }

    public void deleteByAd(Ad ad){
        if(imageRepository.findByAd(ad).size()>0)
        imageRepository.deleteByAd(ad);
    }
}
