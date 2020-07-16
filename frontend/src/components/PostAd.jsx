import React from "react";
import { FormControl, TextField, TextareaAutosize, Button } from "@material-ui/core";
function PostAd() {
  return (
    <div>
      <FormControl>
        <TextField label="Title" />
        <TextareaAutosize rowsMax={4} rowsMin={2} placholder="Details" />
        <TextField label="Contact info" />

        <Button >Post ad</Button>
      </FormControl>
    </div>
  );
}

export default PostAd;
