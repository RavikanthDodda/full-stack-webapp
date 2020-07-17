import React, { useState } from "react";

import PostAd  from "../PostAd";
import AdGrid from "../layouts/AdGrid";
import UserService  from "../../services/UserService";


const getAds = UserService.getUserAds();

function UserAds() {

    const [ads, setAds] = useState([]);

    getAds.then( (response) => {
        console.log("call");
        setAds(response.data);
      }
      ).catch( (err) => {
        console.log(err);
        return [];
      }
      );

    return (
        <div>
           <PostAd /> 
           <AdGrid ads = {ads} />
        </div>
    )
}

export default UserAds;
