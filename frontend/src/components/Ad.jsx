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

function Ad(props) {
  const { title, details } = props.ad;
  const [image, setImage] = useState(undefined);
  const base_url = "https://res.cloudinary.com/ravikanth/image/upload/";

  useEffect(() => {
    if (props.ad.images.length === 0) setImage(placeHolderImg);
    else setImage(base_url + props.ad.images[0]);
    console.log(props.ad.images[0]);
  });

  const deleteAd = () => {
    UserService.deleteAd(props.ad.id).then((res) => {
      setImage(undefined);
    });
  };
  const isUserAd = (props) => {
    if (props.delete) {
      return (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => deleteAd(props.ad.id)}
          >
            delete
          </Button>
        </CardActions>
      );
    }
    return;
  };

  return (
    <div>
      <Card elevation={6}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            height="140"
            style={{ imageRendering: "fit" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {"Details : " + details}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {contact}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        {isUserAd(props)}
      </Card>
    </div>
  );
}

export default Ad;
