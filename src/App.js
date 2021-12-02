import './App.css';
import {Typography, Card, Grid, TextField, Button} from '@material-ui/core';
import { CardContent } from '@mui/material';
import {useState} from 'react';
//import BasicTable from './Table.js';
import DataGridDemo from './dataGrid.js';
const initialFormData = ({
  FirstName: "",
  LastName: "",
  Email:""
});

function App() {
 
  const [formData, updateFormData] = useState(initialFormData);
  const [showData, setShowData] = useState(false);
  
  
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    const values = (formData);
    setShowData(true);
    // ... submit to API or something
  }

  return (
    <div className="App">
     {/* form using material ui*/}
     <Card style={{maxWidth:500, margin:"0 auto", padding:"25px 10px"}}>
      <CardContent>
        <Typography gutterBottom variant='h5'>Please Fill the Form</Typography>
        <form>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField label="FirstName" name="FirstName" placeholder="Enter First Name" variant="outlined" onChange={handleChange} fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField label="LastName" name="LastName" placeholder="Enter Last Name" variant="outlined" onChange={handleChange} fullWidth required/>
          </Grid>
          <Grid xs={12} item>
            <TextField type="email" label="Email" name="Email" placeholder="Enter Email" variant="outlined" onChange={handleChange} fullWidth required/>
          </Grid>
          <Grid xs={12} item>
            <Button type="submit" variant="contained" onClick={handleSubmit} color="primary" fullWidth>Submit</Button>
          </Grid>
        </Grid>
        </form>
      </CardContent>
     </Card>

    {/*print table */}

    {showData && <DataGridDemo data={formData}/>}

    </div>
  );
}

export default App;




