import React from "react";
import Ad from "../Ad";
import { Grid, Box, CircularProgress } from "@material-ui/core";

function AdGrid(props) {
  const { ads, loading } = props;
  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div>
      <Grid container spacing={2} alignItems="center" justify="center">
        {ads.map((ad) => (
          <Grid key={ad.id} item xs={12} sm={4}>
            <Box mt={2}>
              <Ad key={ad.id} ad={ad} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default AdGrid;
