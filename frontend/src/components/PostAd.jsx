import React, { useState } from "react";
import {
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
  Card
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserService from "../services/UserService";
import uploadImage from "../services/ImageService";



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

  const [ad, setAd] = useState({ title: "", details: "", contact: "" });
  const [uploading, setUploading] = useState(false);

  let images = [];

  const post =  () => {
    setUploading(true);
    // const image_urls = uploadImage(images);
    ad.images = []
    
    UserService.postNewAd(ad).then( response => {
      console.log(response.status);
      
    });
    setUploading(false);
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "title":
        setAd({
          title: e.target.value,
          details: ad.details,
          contact: ad.contact,
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
    <div className= {classes.root} >
      <Card className={classes.card}>
      <FormControl>
        <TextField label="Title" className={classes.text} onChange={onChange} name="title" />
        <TextareaAutosize
          rowsMax={4}
          rowsMin={2}
          placholder="Details"
          onChange={onChange}
          name="details"
        />
        <TextField label="Contact info" className={classes.text} onChange={onChange} name="contact" />
        <input type="file" name="file" multiple onChange={onChange} />
        <Button onClick={post}>Post ad</Button>
      </FormControl>
      </Card>
    </div>
  );
}

export default PostAd;
