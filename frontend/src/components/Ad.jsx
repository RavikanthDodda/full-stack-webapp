import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import UserService from "../services/UserService";
import placeHolderImg from "../images/img_placeholder.jpeg";
import { Redirect } from "react-router-dom";

function Ad(props) {
  const { title, details } = props.ad;
  const [image, setImage] = useState(undefined);
  const [adPressed, setAdPressed] = useState(false);
  const base_url = "https://res.cloudinary.com/ravikanth/image/upload/";

  useEffect(() => {
    if (props.ad.images.length === 0) setImage(placeHolderImg);
    else setImage(base_url + props.ad.images[0]);
  });

  const deleteAd = () => {
    UserService.deleteAd(props.ad.id).then((res) => {
      setImage(undefined);
      props.loadAds();
    });
  };
  const isUserAd = () => {
    if (props.actions) {
      return (
        <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary" onClick={() => deleteAd()}>
            delete
          </Button>
        </CardActions>
      );
    }
    return;
  };

  const redirect = () => {
    if (adPressed)
      return (
        <Redirect
          to={{
            pathname: "/ad",
            state: { ad: props.ad },
          }}
        />
      );
  };
  return (
    <div>
      <Card elevation={6}>
        <CardActionArea onClick={() => setAdPressed(true)}>
          <CardMedia
            component="img"
            image={image}
            height="140"
            style={{ objectFit: "contain" }}
            onClick={() => setAdPressed(true)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {details}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {contact}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        {isUserAd()}
      </Card>
      {redirect()}
    </div>
  );
}

export default Ad;
