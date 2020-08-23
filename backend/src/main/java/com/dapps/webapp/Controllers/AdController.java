package com.dapps.webapp.Controllers;

import com.dapps.webapp.Services.AdService;
import com.dapps.webapp.Utils.AdReqRes;
import com.dapps.webapp.Utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
public class AdController {

    @Autowired
    AdService adService;

    @Autowired
    JwtUtil jwtUtil;

    @CrossOrigin(allowCredentials = "true")
    @PostMapping("/ad")
    public ResponseEntity<?> postAd(@RequestHeader String Cookie,@RequestBody AdReqRes ad){
        String email = jwtUtil.getUsernameFromToken(Cookie.substring(4));
        adService.postAd(ad,email);
        return ResponseEntity.ok(null);
    }

    @CrossOrigin
    @GetMapping("/ads")
    public ResponseEntity<?> getAllAds(){
        return ResponseEntity.ok(adService.getAllAds());
    }

    @CrossOrigin(allowCredentials = "true")
    @GetMapping("/user/ads")
    public ResponseEntity<?> getUserAds(@RequestHeader String Cookie){

        String email = jwtUtil.getUsernameFromToken(Cookie.substring(4));
        return ResponseEntity.ok(adService.getAdsByUser(email));
    }


}
