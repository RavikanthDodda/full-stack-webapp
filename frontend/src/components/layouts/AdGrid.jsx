import React from "react";
import Ad from "../Ad";
import { Grid, Box, CircularProgress } from "@material-ui/core";

function AdGrid(props) {
  const { ads, loading } = props;
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Grid container spacing={2} alignItems="center" justify="center">
        {ads.map((ad) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box mt={2}>
              <Ad
                key={ad.id}
                ad={ad}
                actions={props.actions}
                loadAds={props.loadAds}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default AdGrid;
