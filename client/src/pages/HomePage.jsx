import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { shades } from "../theme";
import { useState } from 'react'; 

// import classes from './AuthForm.module.css';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


function HomePage({ token }) {
  const [isLogin, setIsLogin] = useState(true);

  


  const onClickLogin = (event) => {
    setIsLogin(!isLogin)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box>
          <Typography
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          component="h1"
          variant="h4"
          >
          Login to Get Daily Astronomy Image
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: shades.secondary[700] }}>
            <AutoAwesomeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLogin ? 'Log in' : 'Create a New User'}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {false && <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />}
            {<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
               {isLogin ? 'Sign in' : 'Create Account'}
            </Button>}
            <Grid container>
            <Grid item xs>
                
              </Grid>
              <Grid item>
               <Link variant="body2" onClick={onClickLogin}>
                  {isLogin ? "Don't have an account? Sign Up" :  "Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    
      </Container>
    </ThemeProvider>
  );
}

export default HomePage;
