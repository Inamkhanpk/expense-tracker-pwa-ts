import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles  = makeStyles((theme) => ({
  
  title: {
    textAlign: 'center',
  },
  cardWidth:{
    width:'50%',
    marginTop:theme.spacing(2)
  },
  
  
}));

export const Balance = () => {
  const classes = useStyles();
  const { buyandsellitems} = useContext(GlobalContext);

 

  const Income = () => {
    let income = 0;
    for (var i = 0; i < buyandsellitems.length; i++) {
        if (buyandsellitems[i].amount > 0)
            income = income + buyandsellitems[i].amount
        }
    return income;
    
}


const Expense = () => {
  let expense = 0;
  for (var i = 0; i < buyandsellitems.length; i++) {
      if (buyandsellitems[i].amount < 0)
          expense = expense + buyandsellitems[i].amount
  }
  return expense;
}




  return (
    
<Grid container >
    <Grid item xs={12} md={12}>
      <Grid container justify="center">
      <Card className={classes.cardWidth}>
       <CardContent className={classes.title}>
         <Typography color="textSecondary" variant="h6" >
            Your Balance
         </Typography>
         <Typography variant="h5" component="h2">
           {Income() + Expense()} PKR 
         </Typography>
       </CardContent>
      </Card>
   </Grid>
   </Grid>
   </Grid>
  )
}