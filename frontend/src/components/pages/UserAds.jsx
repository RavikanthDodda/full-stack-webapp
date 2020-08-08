import React, { useState } from "react";

import PostAd from "../PostAd";
import AdGrid from "../layouts/AdGrid";
import UserService from "../../services/UserService";
import { useEffect } from "react";

function UserAds() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    UserService.getUserAds()
      .then((response) => {
        setAds(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(ads);
  return (
    <div>
      <PostAd />
      <AdGrid ads={ads} />
    </div>
  );
}

export default UserAds;
