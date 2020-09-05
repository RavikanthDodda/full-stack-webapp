package com.dapps.webapp.Controllers;

import com.dapps.webapp.Services.AdService;
import com.dapps.webapp.Models.Response.AdReqRes;
import com.dapps.webapp.Utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(allowCredentials = "true")
@RestController
public class AdController {

    @Autowired
    AdService adService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/ad")
    public ResponseEntity<?> postAd(@RequestHeader String Cookie,@RequestBody AdReqRes ad){
        String email = jwtUtil.getUsernameFromToken(Cookie.substring(4));
        adService.postAd(ad,email);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/ads")
    public ResponseEntity<?> getAllAds(){
        return ResponseEntity.ok(adService.getAllAds());
    }

    @DeleteMapping("/ad")
    public ResponseEntity<?> deleteAd(@RequestHeader String Cookie,@RequestParam String id){

        String email = jwtUtil.getUsernameFromToken(Cookie.substring(4));
        adService.deleteAd(Long.parseLong(id));
        return ResponseEntity.ok(null);
    }


    @PutMapping("/ad")
    public ResponseEntity<?> updateAd(@RequestHeader String Cookie,@RequestParam String id){

        String email = jwtUtil.getUsernameFromToken(Cookie.substring(4));
        adService.updateAd(Long.parseLong(id));
        return ResponseEntity.ok(null);
    }

    @GetMapping("/user/ads")
    public ResponseEntity<?> getUserAds(@RequestHeader String Cookie){

        String email = jwtUtil.getUsernameFromToken(Cookie.substring(4));
        return ResponseEntity.ok(adService.getAdsByUser(email));
    }


}
