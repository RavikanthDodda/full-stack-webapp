package com.dapps.webapp.JpaRepositories;

import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Models.Image;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ImageRepository extends CrudRepository<Image, Long> {

    List<Image> findByAd(Ad ad);
}
