package com.dapps.webapp.Controllers;

import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Services.AdService;
import com.dapps.webapp.Utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdController {

    @Autowired
    AdService adService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/ad")
    public ResponseEntity<?> postAd(@RequestHeader String Authorization,@RequestBody Ad ad){
        String email = jwtUtil.getUsernameFromToken(Authorization.substring(4));
        adService.postAd(ad,email);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/ads")
    public ResponseEntity<?> getAllAds(){
        return ResponseEntity.ok(adService.getAllAds());
    }

    @GetMapping("/ads/user")
    public ResponseEntity<?> getUserAds(@RequestHeader String Authorization){

        String email = jwtUtil.getUsernameFromToken(Authorization.substring(4));
        return ResponseEntity.ok(adService.getAdsByUser(email));
    }


}
