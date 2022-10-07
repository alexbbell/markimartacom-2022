import React, { Component, useEffect, useState } from 'react'
import {AppBar, Button, Grid, TextField, Toolbar, IconButton, Tabs, Tab} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navigation = ({links}) => {

    console.log(links)
    const [value, setValue] = useState();
    return (

    <AppBar position="static">
        <Toolbar>
            <Grid container spacing="2" >

            <Grid item xs={0} ms={0}><ShoppingCartIcon /></Grid>
            <Grid item xs={10} ms={10}>
                <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                    {links.map((link, index) => (
                        <Tab key={index} label={link} />
                    ))}
                    
                </Tabs>

            </Grid>
        </Grid>


        </Toolbar>
    </AppBar>


    )


}

export default Navigation
