package com.dapps.webapp.Services;

import com.dapps.webapp.JpaRepositories.AdRepository;
import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Models.Image;
import com.dapps.webapp.Models.User;
import com.dapps.webapp.Utils.AdResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepository;

    @Autowired
    UserService userService;

    @Autowired
    ImageService imageService;

    public List<AdResponse> getAllAds(){
        return getAdResponse(adRepository.findAll());
    }

    public List<AdResponse> getAdsByUser(String email){
        return getAdResponse(adRepository.findByUser(userService.getUser(email)));
    }

    public void postAd(Ad ad, String email){
        ad.setUser(userService.getUser(email));
        List<Image> images= ad.getImages();
        ad.setImages(new ArrayList<>());
        adRepository.save(ad);

        images.stream().forEach(image -> {
            image.setAd(ad);
            imageService.save(image);
        });


    }

    private List<AdResponse> getAdResponse(Iterable<Ad> ads){
        List<AdResponse> adResponses = new ArrayList<>();
        ads.forEach(ad -> {
            AdResponse adResponse = new AdResponse(ad.getPlace(),ad.getSize(),ad.getDetails());
            List<String> images = ad.getImages().stream().map(Image::getUrl).collect(Collectors.toList());
            adResponse.setImages(images);
            adResponses.add(adResponse);
        });
        return adResponses;
    }
}
