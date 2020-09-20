
import React, { useContext } from 'react';

import { GlobalContext } from '../contextAPI/GlobalState';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
const useStyles  = makeStyles((theme) =>({
  root:{
    backgroundColor:theme.palette.info.main,
    width:'50%',
    margin:'auto',
    borderRadius:'10px'
  },
  dis:{
    width:'50%',
    display:'flex',
    justifyContent:'space-between',
    margin:'auto',
    // flexWrap:'wrap',
    backgroundColor:theme.palette.primary.main,
    
  },
  main:{
    marginTop:theme.spacing(2),
    
  },
  // imp:{
  //   display:'flex',
    
  // }

  
  
}))

export const BuyAndSellItemList = () => {
  const classes = useStyles();
  
  const { deleteBuyandSellItem, buyandsellitems} = useContext(GlobalContext);



  return (
    <Grid container  className={classes.main} >

      <Grid item xs={12} md={12}>
      <Typography variant="h5" align="center" className={classes.root}>History</Typography> 
      </Grid>

      <Grid item xs={12} md={12}>
        {/* <Grid container justify="center" > */}
       <div >
      {buyandsellitems.map(items => (
            <List className={items.amount< 0 ? ' rounded    minus ' :'  rounded   plus'} >
              <div key={items.id}>
              
                
                <div className={classes.dis} >
                
                <div>
                <ListItem  >

                  <ListItemText primary={items.product} />
                  
                  </ListItem>
                  </div>

                  <div>
                  <ListItem  >
                  
                  <ListItemText primary={items.amount}  />
                  
                  </ListItem>
                  </div>
                  

                    <div>
                  <ListItem button onClick={() => deleteBuyandSellItem(items.id)}>
            <ListItemIcon>
             
            < DeleteIcon />
            </ListItemIcon>
            
          </ListItem>
          </div>
                 {/* <div>
                 <ListItemSecondaryAction>
                   <IconButton edge="end" aria-label="comments" onClick={() => deleteBuyandSellItem(items.id)}>
                    < DeleteIcon />
                   </IconButton>
                 </ListItemSecondaryAction>
                 </div> */}
                
                  
                  </div>
                  
            
            
            </div>
            </List>
           ))}
           </div>
           {/* </Grid> */}
           </Grid>

      
    {/* <div className="rounded text-center balance  mt-5 p-2 ">
      <h3 className="text-dark"> History</h3>

       
      <ul className="list-group">
          {buyandsellitems.map(items => (
            <div key={items.id} className="mt-1">
            <li  className={items.amount< 0 ? 'list-group-item rounded   text-center minus ' :' list-group-item rounded  text-center plus'}>
                <div className="d-flex flex-wrap justify-content-between ">

                  <div>
                  {items.product} 
                  </div>

                  <span >
                  {items.amount} PKR
                  </span>

                

                 <span style={{color: "red"}}  
                 onClick={() => deleteBuyandSellItem(items.id)} >
                 < DeleteIcon />
                 </span>

                  </div>
            </li>
            </div>
           ))}
      </ul>
    </div> */}
    
    </Grid>
  )
}