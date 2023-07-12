import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function BasicGrid() {
  return (
    <Grid container 
        sx={{widht:1300}}
        columns={1}
        justifyContent="right"
        alignItems="right"
        padding= {5} >
        <Grid>
          <item>Copyright © Andreia Souza Carvalho MVP 02 2023</item>
        </Grid>
    </Grid>
  );
}