package com.dapps.webapp.Services;

import com.dapps.webapp.JpaRepositories.AdRepository;
import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepository;

    public List<Ad> getAllAds(){
        List<Ad> ads = new ArrayList<>();
        adRepository.findAll().forEach(ads::add);
        return ads;
    }

    public List<Ad> getAdsByUser(String email){
        return new ArrayList<>(adRepository.findByUser(new User(email)));
    }

    public void postAd(Ad ad){
        adRepository.save(ad);
    }
}
