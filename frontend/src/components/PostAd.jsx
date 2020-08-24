import React, { useState } from "react";
import {
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserService from "../services/UserService";
import ImageService from "../services/ImageService";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    padding: "1rem 4rem",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    margin: "0.3rem 0rem",
  },
  button: {},
});

function PostAd() {
  const classes = useStyles();

  const [ad, setAd] = useState({
    title: "",
    details: "",
    contact: "",
  });
  const [uploading, setUploading] = useState(false);

  let images = undefined;

  const post = async () => {
    setUploading(true);
    ad.images = await ImageService.uploadImage(images);
    console.log(ad);
    let response = await UserService.postNewAd(ad);
    setAd({});
    images = [];
    setUploading(false);
  };

  const postAd = () => {
    UserService.postNewAd(ad);
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "title":
        setAd({
          ...ad,
          title: e.target.value,
        });
        break;
      case "details":
        setAd({
          title: ad.title,
          details: e.target.value,
          contact: ad.contact,
        });
        break;
      case "contact":
        setAd({
          title: ad.title,
          details: ad.details,
          contact: e.target.value,
        });
        break;
      default:
        images = e.target.files;
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card} elevation="6">
        <FormControl>
          <TextField
            label="Title"
            className={classes.text}
            onChange={onChange}
            name="title"
          />
          <TextareaAutosize
            rowsMax={4}
            rowsMin={2}
            placholder="Details"
            onChange={onChange}
            name="details"
          />
          <TextField
            label="Contact info"
            className={classes.text}
            onChange={onChange}
            name="contact"
          />
          <input type="file" name="file" multiple onChange={onChange} />
          <Button onClick={post}>Post ad</Button>
        </FormControl>
      </Card>
    </div>
  );
}

export default PostAd;
