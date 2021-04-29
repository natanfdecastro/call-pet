import React from 'react';
import Grid from '@material-ui/core/Grid';

const Dashboard = ({ children }) => (
  <Grid
    container
    spacing={3}
    style={{
      padding: 24,
    }}
    justify="space-around"
  >
    {children}
  </Grid>
);

export default Dashboard;
