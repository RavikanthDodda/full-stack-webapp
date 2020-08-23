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
import placeHolderImg from "../images/img_placeholder.jpeg";

function Ad(props) {
  const { title, details } = props.ad;
  const { key } = props;
  const [image, setImage] = useState(undefined);
  const base_url = "https://res.cloudinary.com/ravikanth/image/upload/";

  useEffect(() => {
    if (props.ad.images.length === 0) setImage(placeHolderImg);
    else setImage(base_url + props.ad.images[0]);
  }, []);

  return (
    <div>
      <Card elevation="6">
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
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Ad;
