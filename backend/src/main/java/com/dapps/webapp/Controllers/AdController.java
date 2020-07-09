package com.dapps.webapp.Controllers;

import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Services.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class AdController {

    @Autowired
    AdService adService;

    @PostMapping("/ad")
    public void postAd(@RequestHeader String jwt,@RequestBody Ad ad){
        adService.postAd(ad);
    }

    @GetMapping("/ads")
    public ResponseEntity<?> getAllAds(){
        return ResponseEntity.ok(adService.getAllAds());
    }

    @GetMapping("/ads/{id}")
    public List<Ad> getUserAds(@PathVariable String email){
        return adService.getAdsByUser(email);
    }

    @GetMapping("/hello")
    public ResponseEntity<?> hello(){
        return ResponseEntity.ok("");
    }

}
