import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Input } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';



const theme = createTheme();

export default function SignUp() {
  let { id } = useParams();
  let { datedebut } = useParams();
  let { datefin } = useParams();
  
  const [em, setEmail] = React.useState('');
  const [passwor, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [name, setusername] = React.useState('');
  const [ag, setage] = React.useState('');

  const handleusername = (event) => {
    setusername(event.target.value);
  };

  const handleage = (event) => {
    setage(event.target.value);
  };


  const [Dateperm, setDatepermi] = React.useState('');
  const [refperm, setrefpermi] = React.useState('');

  const handleDatepermi = (event) => {
    setDatepermi(event.target.value);
  };

  const handlerefpermi = (event) => {
    setrefpermi(event.target.value);
  };

  const history = useNavigate();
  function handleCardClick() {

    const data = {
    username: name,
    email: em,
    password: passwor,
    age: ag,
    date_permis: Dateperm,
    ref_permis: refperm
   };
    fetch('http://127.0.0.1:8000/client/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error)); 
  
          history("/login/"+id+"/"+datedebut+"/"+datefin);
    
   }
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item sx={{ bgcolor:"white"}} xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 5, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign UP
            </Typography>
            <Box component="form" noValidate onSubmit={handleCardClick} sx={{ mt: 1 }}>
                  <TextField
                label="username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={handleusername}
              />
                   <TextField
                label="age"
                variant="outlined"
                fullWidth
                margin="normal"
                type='number'
                value={ag}
                onChange={handleage}
              />
                   <Input
                label="Date permi"
                variant="outlined"
                fullWidth
                value={Dateperm}
                type='date'
                onChange={handleDatepermi}
              />
                   <TextField
                label="ref  permi"
                variant="outlined"
                fullWidth
                margin="normal"
                value={refperm}
                onChange={handlerefpermi}
              />
                      <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={em}
                onChange={handleEmailChange}
              />
          <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={passwor}
          onChange={handlePasswordChange}
        />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign UP
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}