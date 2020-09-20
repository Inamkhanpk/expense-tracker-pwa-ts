import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import classes from '*.module.css';
import { makeStyles } from '@material-ui/core/styles';



const useStyles  = makeStyles((theme) =>({
  root:{
    width:'50%',
    margin:'auto',
    display:'flex',
    flexWrap:'wrap',
    [theme.breakpoints.down('sm')]: {
      
      //flexDirection:'column',
      
    },
  },

  area:{
    flexGrow:1,
    marginTop:theme.spacing(2)
  },
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize:'1rem'
      
      
    },
  },
  
}));


export const IncomeAndExpense = () => {
  const classes = useStyles();
  const { buyandsellitems } = useContext(GlobalContext);

  

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
       <Grid container className={classes.root} >

         <Grid item xs={6} md={6}>
            {/* <Grid container justify="center"> */}
              <Card className={classes.area}>
               <CardContent className={classes.title} >
                <Typography color="textSecondary"  >
                  Income
                </Typography>
                <Typography >
                  {Income()} PKR 
                </Typography>
               </CardContent>
              </Card>
           {/* </Grid> */}
         </Grid>

        <Grid item xs={6} md={6} >
          {/* <Grid container justify="center"> */}
             <Card className={classes.area}> 
              <CardContent className={classes.title}>
               <Typography color="textSecondary"  >
                 Expense
               </Typography>
               <Typography >
                {Expense()} PKR 
               </Typography>
              </CardContent>
         </Card>
      {/* </Grid> */}
        
        </Grid>

      
      </Grid>
  )
}