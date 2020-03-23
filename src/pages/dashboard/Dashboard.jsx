import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import UserInfo from '../../components/UserInfo/UserInfo';
import GamesInfo from '../../components/GamesInfo/GamesInfo';
import './Dashboard.scss';

const Dashboard = () => (
  <div className="Dashboard">
    <Grid container>
        <Grid
            container
            item 
            direction="column"
            xs={4}
            spacing={1}
            alignContent="center"
            justify="center"
        >
            <UserInfo />
        </Grid>
        <Grid
            container
            item
            direction="column"
            xs={6}
            spacing={1}
            alignContent="center"
            justify="center"
        >
            <GamesInfo />
        </Grid>
        <Grid
            container
            item
            direction="column"
            xs={2}
            spacing={1}
            alignContent="center"
            justify="center"
        >
            Here goes everything
        </Grid>

    </Grid>
  </div>
);

export default Dashboard;
