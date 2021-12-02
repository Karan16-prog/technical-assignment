import './App.css';
import {Typography, Card, Grid, TextField, Button} from '@material-ui/core';
import { CardContent } from '@mui/material';

 
function App() {
  return (
    <div className="App">
     <p>Hello</p>
     <Card style={{maxWidth:500, margin:"0 auto", padding:"25px 10px"}}>
      <CardContent>
        <Typography gutterBottom variant='h5'>Please Fill the Form</Typography>
        <form>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required/>
          </Grid>
          <Grid xs={12} item>
            <TextField type="email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth required/>
          </Grid>
          <Grid xs={12} item>
            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
          </Grid>
        </Grid>
        </form>
      </CardContent>
     </Card>
    </div>
  );
}

export default App;

