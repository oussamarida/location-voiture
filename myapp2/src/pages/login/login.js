import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';




const theme = createTheme();

export default function Login() {


  const [compte , setcompte]= React.useState([])
  
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  let { id } = useParams();
  let { datedebut } = useParams();
  let { datefin } = useParams();


  const history = useNavigate();


  const handleSubmit = async (event) => {
    if(email==='admin' && password==="admin"){
      history("/cars")
    }
    const filtereduser = compte.filter(
      (car) =>
        car.email === email && car.password===password     
    );
    
    alert(filtereduser[0].id)
    if(filtereduser.length>0){
   const data={
    date_debut: datedebut,
    date_fin: datefin,
    voiture: id,
    client: filtereduser[0].id
   }
    fetch('http://127.0.0.1:8000/reservation/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error)); 
   }
   alert("We gona sent you email , thank u")
   history("/")
  };


  React.useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/client`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setcompte(responseData);
      })
      .catch((error) => console.error(error));
  }, []);



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
            }}>  
            
             <Link  href="/" >     
            <Avatar sx={{ m: 20, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>   
            
            </Link>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={handleEmailChange}
              />
          <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href= {"/SignupSide/"+id+"/"+datedebut+"/"+datefin} variant="body2">
                  
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