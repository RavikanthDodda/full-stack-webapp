import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import placeHolderImg from "../../images/img_placeholder.jpeg";

const base_url = "https://res.cloudinary.com/ravikanth/image/upload/";
const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subheading: {
    marginTop: "1.5rem",
    fontWeight: "500",
  },
  info: {
    marginTop: "0.15rem",
    fontWeight: "300",
  },
});
function AdPage(props) {
  const { ad } = props.location.state;
  const classes = useStyles();

  const getImages = () => {
    if (ad.images.length > 0)
      return ad.images.map((image, i) => (
        <img
          src={base_url + image}
          key={i}
          style={{ objectFit: "contain" }}
          height="300px"
          width="400px"
        />
      ));
    else return <img src={placeHolderImg} alt="No images" />;
  };
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Box className={classes.box}>
        <Carousel>{}</Carousel>
        <Box className={classes.info}>
          <Typography variant="h4">Ad Details</Typography>
          <Typography variant="h5" className={classes.subheading}>
            {ad.title}
          </Typography>
          <Typography variant="h6" className={classes.subheading}>
            Description
          </Typography>
          <Typography className={classes.info}>{ad.details}</Typography>
          <Typography variant="h6" className={classes.subheading}>
            Contact
          </Typography>
          <Typography className={classes.info}>{ad.contact}</Typography>
        </Box>
      </Box>
    </div>
  );
}
export default AdPage;
