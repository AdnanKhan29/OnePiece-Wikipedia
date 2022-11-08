import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button , Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Enroll = () => {
    const paperStyle = { padding: '30px 20px', width: 600, margin: "10px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const [state , setState] = useState(
      {
        devilfruit: "",
        type: "",
        power: "",
        user: "",
        ability: "",
        info: "",
      }
    );

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setState((prevProps) => ({
        ...prevProps,
        [name]: value
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(state);
    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>DEVIL FRUIT DATA</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to add Devil Fruit data!</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField style={{margin:'5px'}} fullWidth name="devilfruit" value={state.devilfruit} onChange={handleInputChange} label='Devil Fruit' placeholder="Enter the Devil Fruit" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Devil Fruit Type</FormLabel>
                        <RadioGroup aria-label="type" name="type" value={state.type} onChange={handleInputChange} style={{ display: 'initial' }}>
                            <FormControlLabel value="Paramecia" control={<Radio />} label="Paramecia" />
                            <FormControlLabel value="Logia" control={<Radio />} label="Logia" />
                            <FormControlLabel value="Zoan" control={<Radio />} label="Zoan" />
                            <FormControlLabel value="Mythical Zoan" control={<Radio />} label="Mythical Zoan" />
                            <FormControlLabel value="Smile" control={<Radio />} label="Smile" />
                        </RadioGroup>
                    </FormControl>
                    <TextField style={{margin:'5px'}} fullWidth  name="power" value={state.power} onChange={handleInputChange} label='Power type' placeholder="Enter the Devil Fruit Power" />
                    <TextField style={{margin:'5px'}} fullWidth  name="user" value={state.user} onChange={handleInputChange} label='User' placeholder="Enter the Devil Fruit user" />
                    <TextField style={{margin:'5px'}} fullWidth  name="ability" value={state.ability} onChange={handleInputChange} label='Devil Fruit Ability' placeholder="Enter the Devil Fruit ability" />
                    <TextField style={{margin:'5px'}} fullWidth  name="info" value={state.info} onChange={handleInputChange} label="Devil Fruit Info" multiline rows={4} placeholder="Description of Devil Fruit"/>
                    <Button style={{marginTop:'4px'}} type='submit' variant='contained' color='primary'>submit</Button>
                    
                </form>
            </Paper>
        </Grid>
    )
}

export default Enroll;