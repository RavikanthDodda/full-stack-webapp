import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";

function Ad(props) {
  const { title, details } = props.ad;
  const { key } = props;

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="image here"
            height="140"
            image=""
            title={title}
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
