import React, { useState } from "react";
import Axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
function Enroll() {
  const paperStyle = { padding: "30px 20px", width: 600, margin: "10px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const [devilfruit, setDevilfruit] = useState("");
  const [type, setType] = useState("");
  const [power, setPower] = useState("");
  const [ability, setAbility] = useState("");
  const [user, setUser] = useState("");
  const [info, setInfo] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      devilfruit: devilfruit,
      type: type,
      power: power,
      ability: ability,
      user: user,
      info: info,
    })
      .then(() => {
        alert("Successful insert");
        // Clear form fields after a successful submission
        setDevilfruit("");
        setType("");
        setPower("");
        setAbility("");
        setUser("");
        setInfo("");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>DEVIL FRUIT DATA</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to add Devil Fruit data!
          </Typography>
        </Grid>
        <TextField
          style={{ margin: "5px" }}
          fullWidth
          label="DEVIL FRUIT"
          onChange={(e) => setDevilfruit(e.target.value)}
          value={devilfruit}
          placeholder="Enter the Devil Fruit Name"
        />
        <TextField
          style={{ margin: "5px" }}
          fullWidth
          label="DEVIL FRUIT TYPE"
          value={type}
          type="text"
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
        />
        <TextField
          style={{ margin: "5px" }}
          fullWidth
          label="DEVIL FRUIT POWER"
          value={power}
          type="text"
          onChange={(e) => setPower(e.target.value)}
          placeholder="Power"
        />
        <TextField
          style={{ margin: "5px" }}
          fullWidth
          label="DEVIL FRUIT ABILITY"
          value={ability}
          type="text"
          onChange={(e) => setAbility(e.target.value)}
          placeholder="Ability"
        />
        <TextField
          style={{ margin: "5px" }}
          fullWidth
          label="DEVIL FRUIT USER"
          value={user}
          type="text"
          onChange={(e) => setUser(e.target.value)}
          placeholder="User"
        />
        <TextField
          style={{ margin: "5px" }}
          fullWidth
          label="DEVIL FRUIT INFO"
          value={info}
          type="text"
          onChange={(e) => setInfo(e.target.value)}
          placeholder="Info"
        />
        <Button
          style={{ marginTop: "4px" }}
          onClick={submitReview}
          variant="contained"
          color="primary"
        >
          submit
        </Button>
      </Paper>
    </Grid>
  );
}

export default Enroll;
