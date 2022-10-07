import React, { Component, useEffect, useState } from 'react'
import { Button, Grid, TextField, Box } from '@mui/material';

const Header = () => {
    return(
    <Grid container spacing="2"  >
        <Grid item xs={5} ms={3}>
            <img src="./logo.svg"></img>
        </Grid>
        <Grid item xs={4} ms={4} >
                <Box display="flex">
                    <TextField hiddenLabel fullWidth id="filled-hidden-label-normal" defaultValue="Normal"
                        variant="filled" />
                </Box>
        </Grid>

        <Grid item xs={2} ms={1}     ><Button variant="contained">Contained</Button></Grid>
        <Grid item xs={1} ms={1}></Grid>
    </Grid>
    )
}

export default Header