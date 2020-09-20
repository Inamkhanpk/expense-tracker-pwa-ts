import React, {useState, useContext} from 'react'
import { GlobalContext } from '../contextAPI/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles  = makeStyles((theme) =>({
  
  root:{
    width:'50%',
    marginTop:theme.spacing(2)
  }
  
  
}));


type InputType = {
    amount: string;
    product: string;
  };

type ErrorType = {
    amountError: string;
    productError: string;
  };

  


export const AddBuyandSellItems = () => {
  const classes = useStyles();
  const [userRequest, setUserRequest] = useState<InputType>(
      {
        amount:'',
        product: "",});

  
  const [errors,setErrors] = useState<ErrorType>(
      {
    amountError:"" ,
    productError: '',
  })


  const { addBuyandSellItem } = useContext(GlobalContext);




  const handleValidation =()=>{
    let valid =true 
    //let errors = {}
    if (Number(amount) === 0) {
      
      errors.amountError ="Please enter + or - value"
      valid= false;
  }

  if(product === ""){
    
    errors.productError="Please Enter Relevant Description"
    valid= false;
  }
  setErrors({...errors})
  return valid
  };
   
    
    // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      
       
    //    setUserRequest({ ...userRequest, [event.target.name] : event.target.value });;
    // }


  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
  
    if(handleValidation()){
      
      const newitems = {
        id: uuidv4(),
        product:userRequest.product,
        amount:+userRequest.amount
      }
  
      addBuyandSellItem(newitems);
      
   
    setUserRequest({
      amount:'',
      product:'',
      
   })
   }

    
  }

  
  const { product, amount} = userRequest;
  
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Grid container justify="center">
        <Card  className={classes.root}>
          <CardContent>
              <Typography variant="h6" align="center">
                Add Transactions
             </Typography>
      <form>

        <div >
          
        <TextField
          label="Enter Detail"
          name="product" 
          type="text" 
          error={errors.productError ? true: false}
          helperText={errors.productError}
          required={true}
          value={product }
          onChange={e => setUserRequest({...userRequest, product: e.target.value})} 
          fullWidth={true}
          
        />
        </div>
        

        <div >
        <TextField
        label="Enter Number"
           name="amount" 
           type="number"
          error={errors.amountError ? true: false}
          helperText={errors.productError}
          required={true}
          value={amount }
          onChange={e => setUserRequest({...userRequest, amount: e.target.value})} 
          fullWidth={true}
          
        />
          
        </div>
      
        <br/>
      
        <div>
        <Grid item xs={12} md={12}>
        <Grid container justify="center">
        <Button style={{color: "red" }}  onClick={onSubmit}>
          < AddCircleIcon />
          </Button>
          </Grid>
          </Grid>
        </div>
      
      </form>




      
    
    </CardContent>
    </Card>
    </Grid>
    </Grid>
    </Grid>
  )
}