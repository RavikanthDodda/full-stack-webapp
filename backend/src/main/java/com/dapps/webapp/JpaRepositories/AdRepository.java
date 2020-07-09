package com.dapps.webapp.JpaRepositories;

import com.dapps.webapp.Models.Ad;
import com.dapps.webapp.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdRepository extends CrudRepository<Ad,String> {

    public List<Ad> findByUser(User user);
}
