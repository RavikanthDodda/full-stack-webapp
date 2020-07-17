import React, { useState } from "react";
import AdGrid from "../layouts/AdGrid";
import UserService  from "../../services/UserService";


const getAds = UserService.getAllAds();

function Home() {

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
    <React.Fragment>
      <AdGrid ads={ads} />
    </React.Fragment>
  );
}

export default Home;
