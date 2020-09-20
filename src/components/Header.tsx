import React from 'react'
//import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  
  title: {
    margin:'auto'
  },
}));


export const Header = () => {
  const classes = useStyles();
  return (

    
      <AppBar position="static" >
        <Toolbar>
         
          <Typography variant="h6" className={classes.title} >
            Expense Tracker App
          </Typography>
          
        </Toolbar>
      </AppBar>
  
  )
}