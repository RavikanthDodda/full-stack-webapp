import React from "react";
import  Ad  from "../Ad";
import { Grid, Box } from "@material-ui/core";

function AdGrid(props) {
  
    const {ads} = props;
    
  return (
    <div>
      <Grid container spacing={2} alignItems="center" justify="center">
        {
        ads.map((ad) => (
          <Grid item xs={12} sm={4}>
            <Box mt={2}>
              <Ad
               key = {ad.id}
               ad = {ad}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default AdGrid;