import React, { useState } from "react";

import PostAd from "../PostAd";
import AdGrid from "../layouts/AdGrid";
import UserService from "../../services/UserService";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";

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

  const hasAds = (ads) => {
    if (ads.length === 0) {
      return (
        <Typography>
          {" "}
          You did not post any ads. Post one now from the above form.
        </Typography>
      );
    } else {
      return <AdGrid ads={ads} />;
    }
  };
  return (
    <div>
      <PostAd />
      {hasAds(ads)}
    </div>
  );
}

export default UserAds;
