package com.dapps.webapp.Services;

import com.dapps.webapp.JpaRepositories.AdRepository;
import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Models.Image;
import com.dapps.webapp.Utils.AdReqRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
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

    public List<AdReqRes> getAllAds(){
        return getAdResponse(adRepository.findAll());
    }

    public List<AdReqRes> getAdsByUser(String email){
        return getAdResponse(adRepository.findByUser(userService.getUser(email)));
    }

    public void postAd(AdReqRes adReq, String email){
        Ad ad = new Ad(adReq);
        ad.setUser(userService.getUser(email));
        adRepository.save(ad);
        List<Image> images = new ArrayList<>();
        adReq.getImages().forEach(image_url -> {
            Image image = new Image(image_url, ad);
            imageService.save(image);
            images.add(image);
        });
        ad.setImages(images);

    }

    private List<AdReqRes> getAdResponse(Iterable<Ad> ads){
        List<AdReqRes> adResponse = new ArrayList<>();
        ads.forEach(ad -> {
            List<String> images = ad.getImages().stream().map(Image::getUrl).collect(Collectors.toList());
            AdReqRes adReqRes = new AdReqRes(ad.getContact(),ad.getTitle(), ad.getDetails(),images);
            adResponse.add(adReqRes);
        });
        return adResponse;
    }
}
