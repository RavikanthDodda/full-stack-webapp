import React, { useState } from "react";

import PostAd from "../PostAd";
import AdGrid from "../layouts/AdGrid";
import UserService from "../../services/UserService";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";

function UserAds() {
  const [ads, setAds] = useState([]);
  const loadAds = () => {
    UserService.getUserAds()
      .then((response) => {
        setAds(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadAds();
  }, []);

  const hasAds = (ads) => {
    if (ads.length === 0) {
      return (
        <Typography style={{ textAlign: "center" }}>
          {" "}
          You did not post any ads. Post one now from the above form.
        </Typography>
      );
    } else {
      return <AdGrid ads={ads} actions={true} loadAds={loadAds} />;
    }
  };
  return (
    <div>
      <PostAd loadAds={loadAds} />
      {hasAds(ads)}
    </div>
  );
}

export default UserAds;
