import React, { useState, useEffect } from "react";
import AdGrid from "../layouts/AdGrid";
import UserService from "../../services/UserService";
import Pagination from "react-js-pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  pagination: {
    listStyleType: "none",
  },
  li: {
    display: "inline",
  },
});

function Home() {
  const [ads, setAds] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 15;
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const getAds = async () => {
      setLoading(true);
      const response = await UserService.getAllAds();
      setAds(response.data);
      setLoading(false);
    };
    getAds();
  }, []);

  console.log(ads);

  const start = (activePage - 1) * itemsPerPage;
  const end =
    activePage * itemsPerPage > ads.length
      ? ads.length
      : activePage * itemsPerPage;
  const items = ads.slice(start, end);
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <React.Fragment>
      <AdGrid ads={items} loading={loading} />
      <Pagination
        className={classes.pagination}
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={ads.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass={classes.li}
        linkClass={classes.pagination}
      />
    </React.Fragment>
  );
}

export default Home;
