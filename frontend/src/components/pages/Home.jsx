import React, { useState, useEffect } from "react";
import AdGrid from "../layouts/AdGrid";
import UserService from "../../services/UserService";
import Pagination from "react-js-pagination";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  list: {
    textAlign: "center",
  },
  link: {
    listStyleType: "none",
    textDecoration: "none",
    color: theme.palette.text.primary,
    padding: "0.5rem",
  },
  item: {
    textDecoration: "none",
    padding: "0.1rem",
    margin: "0.2rem",
    height: "0.3rem",
    width: "0.3rem",
    display: "inline",
    boxShadow: "  0px 2px 6px 0px rgba(0,0,0,0.75)",
    borderRadius: " 0.4rem",
  },
}));

function Home() {
  const [ads, setAds] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 15;
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    const getAds = async () => {
      setLoading(true);
      const response = await UserService.getAllAds();
      setAds(response.data);
      setLoading(false);
    };
    getAds();
  }, []);

  const start = (activePage - 1) * itemsPerPage;
  const end =
    activePage * itemsPerPage > ads.length
      ? ads.length
      : activePage * itemsPerPage;
  const items = ads.slice(start, end);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    console.log(start + " " + end);
  };

  return (
    <React.Fragment>
      <AdGrid ads={ads.slice(start, end)} loading={loading} />
      <div className={classes.list}>
        {" "}
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={ads.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass={classes.item}
          linkClass={classes.link}
        />
      </div>
    </React.Fragment>
  );
}

export default Home;
