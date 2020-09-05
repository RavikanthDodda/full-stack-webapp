import React from "react";
import { Button, CircularProgress } from "@material-ui/core";

function LoadingButton(props) {
  const isLoading = (props) => {
    return props.loading ? (
      <CircularProgress />
    ) : (
      <Button variant="outlined" type="submit">
        {props.text}
      </Button>
    );
  };
  return (
    <div style={{ textAlign: "center", margin: "0.5rem 0" }}>
      {isLoading(props)}
    </div>
  );
}

export default LoadingButton;
