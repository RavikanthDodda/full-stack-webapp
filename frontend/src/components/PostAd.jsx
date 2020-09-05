import React, { useState } from "react";
import { TextField, Button, Card, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoadingButton from "./LoadingButton";
import UserService from "../services/UserService";
import ImageService from "../services/ImageService";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    padding: "1rem 4rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  text: {
    margin: "0 0 1rem 0 ",
  },
  button: {},
});

function PostAd(props) {
  const classes = useStyles();

  const [ad, setAd] = useState({
    title: "",
    details: "",
    contact: "",
  });
  const [uploading, setUploading] = useState(false);
  const [notify, setNotify] = useState(false);

  let images = [];

  const post = async (e) => {
    e.preventDefault();
    setUploading(true);
    ad.images = await ImageService.uploadImage(images);
    UserService.postNewAd(ad).then((res) => {
      setAd({});
      images = [];
      setNotify(true);
      setUploading(false);
      props.loadAds();
    });
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={notify}
        autoHideDuration={6000}
        onClose={() => {
          setNotify(false);
        }}
        message="Ad has been posted"
      ></Snackbar>
      <Card className={classes.card} elevation={6}>
        <form onSubmit={post}>
          <TextField
            label="Title"
            className={classes.text}
            onChange={onChange}
            name="title"
            required
          />
          <br />
          <TextField
            label="Details"
            className={classes.text}
            onChange={onChange}
            multiline
            name="details"
            required
          />
          <br />
          <TextField
            label="Contact info"
            className={classes.text}
            onChange={onChange}
            name="contact"
            required
          />
          <br />
          <input
            className={classes.text}
            type="file"
            name="file"
            multiple
            onChange={onChange}
          />
          <br />

          <LoadingButton loading={uploading} text={"Post Ad"} />
        </form>
      </Card>
    </div>
  );
}

export default PostAd;
