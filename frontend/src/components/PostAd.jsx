import React, {useState} from 'react';
import { FormControl, TextField, TextareaAutosize, Button } from "@material-ui/core";
import UserService from "../services/UserService";
import  uploadImage  from "../services/ImageService";

function PostAd() {

const [ad, setAd] = useState({ title: '',
                              details: '',
                              contact: ''
                            });
const [uploading, setUploading] = useState(false);

let images = [];

  const post = async (e) => {

    setUploading(true);    
    const image_urls = await uploadImage(images);
    // UserService.postAd(ad);
    console.log(image_urls);
    
    setUploading(false);
  }

  const onChange = (e) => {

    switch (e.target.name) {
      case "title":
        setAd({title:e.target.value,
              details: ad.details,
              contact: ad.contact});
        break;
      case "details":
        setAd({title: ad.title,
          details: e.target.value,
          contact: ad.contact});
        break;
      case "contact":
        setAd({title: ad.title,
          details: ad.details,
          contact: e.target.value});
        break;
      default: images = e.target.files;
       ;
    }

  }
  

  return (
    <div>
      <FormControl>
        <TextField label="Title" onChange= {onChange} name="title"/>
        <TextareaAutosize rowsMax={4} rowsMin={2} placholder="Details" onChange= {onChange} name="details" />
        <TextField label="Contact info" onChange= {onChange} name="contact" />
        <input type="file" name="file" multiple onChange= {onChange} />
        <Button onClick={post}>Post ad</Button>
      </FormControl>
    </div>
  );
}

export default PostAd;
